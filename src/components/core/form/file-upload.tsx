import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, message, Modal, Spin, Upload } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload";
import { ReactNode, useRef, useState } from "react";
import { MIME_TYPE, MimeType } from "~/constants/file.constant.ts";

const DEFAULT_MIN_FILE_SIZE = 1_000;
const DEFAULT_MAX_FILE_SIZE = 100_000_000;

const bytesToHumanReadable = (bytes: number): string => {
  if (bytes > 1_000_000_000) {
    return `${bytes / 1_000_000_000}GB`;
  }
  if (bytes > 1_000_000) {
    return `${bytes / 1_000_000}MB`;
  }
  return `${bytes / 1_000}KB`;
};

export const getUploadFileItem = ({ uid, name, url }: { uid: string; name: string; url: string }): UploadFile => {
  return {
    uid,
    name,
    url,
    status: "done",
  };
};

const findAndSetFileList = (fileList: UploadFile[], uid: string, options: Partial<UploadFile>): UploadFile[] => {
  return fileList.map((f) => {
    if (uid === f.uid) {
      return { ...f, ...options };
    }
    return f;
  });
};

export type FileUploadProps = {
  uploadFn: (file: File) => Promise<
    | {
        fileId?: string;
        fileUrl: string;
        status: "success";
      }
    | {
        status: "failed";
      }
  >;
  value?: UploadFile[];
  onChange?: (value: UploadFile[]) => void;
  removeFn?: (f: UploadFile, a: Record<string, string>) => Promise<any>;
  minFileSize?: number;
  maxFileSize?: number;
  allowedFileTypes?: MimeType[];
  uploadButton?: ReactNode;
} & Omit<UploadProps, "multiple" | "fileList" | "beforeUpload" | "onPreview" | "onChange" | "customRequest" | "accept">;

export const FileUpload = ({
  uploadFn,
  value,
  onChange,
  type,
  maxCount,
  minFileSize = DEFAULT_MIN_FILE_SIZE,
  maxFileSize = DEFAULT_MAX_FILE_SIZE,
  allowedFileTypes = [
    MIME_TYPE.PNG,
    MIME_TYPE.JPG,
    MIME_TYPE.JPEG,
    MIME_TYPE.PDF,
    MIME_TYPE.XLS,
    MIME_TYPE.XLSX,
    MIME_TYPE.DOC,
    MIME_TYPE.DOCX,
  ],
  uploadButton,
  listType = "text",
  removeFn,
  ...restProps
}: FileUploadProps) => {
  const [files, setFiles] = useState<UploadFile[]>([]);

  const fileList = value || files;
  const setFileList = onChange || setFiles;

  const fileIdsMap = useRef<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handleModalCancel = () => {
    setPreviewImage("");
    setPreviewOpen(false);
  };

  const handleBeforeUpload: UploadProps["beforeUpload"] = (file) => {
    let isError = false;

    if (minFileSize && file.size < minFileSize) {
      message.error(`Dung lượng file tối thiểu: ${bytesToHumanReadable(minFileSize)}`);
      isError = true;
    }
    if (maxFileSize && file.size > maxFileSize) {
      message.error(`Dung lượng file tối đa: ${bytesToHumanReadable(maxFileSize)}`);
      isError = true;
    }
    if (allowedFileTypes && allowedFileTypes.length > 0) {
      const isValidFileType = allowedFileTypes.includes(file.type as IGNORE);
      if (!isValidFileType) {
        message.error(`Loại file hợp lệ: ${allowedFileTypes.join(", ")}`);
        isError = true;
      }
    }

    return !isError || Upload.LIST_IGNORE;
  };

  const handleCustomUploadAction: UploadProps["customRequest"] = async (data) => {
    const file = data.file as RcFile;

    const currentFile = fileList.find((f) => f.uid === file.uid);
    if (currentFile?.status !== "uploading") return;

    try {
      const uploadResponse = await uploadFn(file);
      if (uploadResponse.status === "success") {
        const fileId = uploadResponse.fileId;
        fileIdsMap.current[currentFile.uid] = fileId || "";

        const fileUrl = uploadResponse.fileUrl;
        setFileList(
          findAndSetFileList(fileList, currentFile.uid, {
            url: fileUrl,
            status: "done",
          }),
        );
        message.success(`Upload file ${currentFile.name} thành công.`);
      } else {
        message.error(`Upload file ${currentFile.name} thất bại`);
        data.onError?.({ status: 400, name: "", message: "" });
      }
    } catch (e) {
      message.error(`Upload file ${currentFile.name} thất bại`);
      data.onError?.({ status: 400, name: "", message: `Upload file ${currentFile.name} thất bại` });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePreview: UploadProps["onPreview"] = (file) => {
    setPreviewImage(file.url ? file.url + "#" : (file.preview as string));
    setPreviewOpen(true);
    let previewTitle = file.name || "";
    if (!file.name && file.url) {
      previewTitle = file.url!.substring(file.url!.lastIndexOf("/") + 1);
    }
    setPreviewTitle(previewTitle);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList, file: currentFile }) => {
    const { status } = currentFile;

    if (maxCount && maxCount > 1) {
      if (status === "uploading" && fileList.length >= maxCount) {
        return message.error(`Số lượng file tối đa: ${maxCount}`);
      }
      if (status === "removed" && fileList.length > maxCount + 1) {
        setFileList(fileList.filter((f) => f.uid !== currentFile.uid).filter((f) => f.status !== "error"));
        return message.warning(`Số lượng file tối đa: ${maxCount}`);
      }
    }

    if (status === "uploading") {
      setIsLoading(true);
    } else if (status === "done") {
      message.success(`Upload file ${currentFile.name} thành công.`);
      setIsLoading(false);
    } else if (status === "error") {
      message.error(`Upload file ${currentFile.name} thất bại.`);
      setIsLoading(false);
    }

    setFileList(newFileList.filter((f) => f.status !== "error"));
  };

  const isTypeDrag = type === "drag";

  return (
    <Spin spinning={isLoading}>
      <Upload
        style={
          isTypeDrag
            ? {
                background: "#F0F9FF",
                border: "1px dashed var(--color-primary)",
              }
            : undefined
        }
        listType={listType}
        fileList={fileList}
        beforeUpload={handleBeforeUpload}
        onPreview={handlePreview}
        onChange={handleChange}
        customRequest={handleCustomUploadAction}
        maxCount={maxCount}
        accept={allowedFileTypes?.join(",")}
        type={type}
        {...restProps}
        onRemove={(v) => {
          return removeFn?.(v, fileIdsMap.current);
        }}
      >
        {uploadButton || isTypeDrag ? (
          <div style={{ padding: "4rem 2rem" }}>
            <UploadOutlined style={{ fontSize: "2.5rem", color: "var(--color-primary)", marginBottom: "1rem" }} />
            <p style={{ color: "var(--color-primary)" }}>Kéo thả file excel vào ô này hoặc bấm vào đây</p>
          </div>
        ) : listType === "picture-card" ? (
          <div>
            <PlusOutlined style={{ fontSize: "1rem" }} />
            <div>Upload</div>
          </div>
        ) : (
          <Button icon={<UploadOutlined style={{ fontSize: "1rem" }} />}>Upload</Button>
        )}
      </Upload>

      {listType === "picture-card" || listType === "picture" ? (
        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleModalCancel}>
          <img loading="lazy" decoding="async" alt={previewTitle} src={previewImage} style={{ width: "100%" }} />
        </Modal>
      ) : null}
    </Spin>
  );
};
