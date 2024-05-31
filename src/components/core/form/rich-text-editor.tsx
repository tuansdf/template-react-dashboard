import { message, Spin } from "antd";
import { MutableRefObject, useEffect, useMemo, useState } from "react";
import "quill/dist/quill.snow.css";
import ReactQuill, { ReactQuillProps } from "react-quill";
import classes from "~/components/core/form/rich-text-editor.module.scss";

export type RichTextEditorProps = {
  quillRef: MutableRefObject<ReactQuill | null>;
  uploadImageFn?: (file: File) => Promise<
    | {
        status: "success";
        fileUrl: string;
      }
    | {
        status: "failed";
      }
  >;
  width?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
} & ReactQuillProps;

export const RichTextEditor = ({
  quillRef,
  uploadImageFn,
  width = "100%",
  minHeight = "20rem",
  maxHeight = "40rem",
  ...restProps
}: RichTextEditorProps) => {
  const [isUploading, setIsUploading] = useState(false);

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script: "sub" }, { script: "super" }],
          ["blockquote", "link", "image", "video"],
          ["clean"],
        ],
      },
    };
  }, []);

  useEffect(() => {
    if (!quillRef?.current) return;
    (quillRef.current.getEditor()?.getModule("toolbar") as IGNORE)?.addHandler("image", () => {
      if (!uploadImageFn) return;

      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/png,image/jpg,image/jpeg");
      input.click();
      input.onchange = async () => {
        const file = input.files?.[0];
        if (!file) return;

        setIsUploading(true);
        try {
          const response = await uploadImageFn(file);

          if (response.status === "success") {
            message.success("Upload file thành công");

            const imageUrl = response.fileUrl;
            const range = quillRef.current?.getEditor().getSelection();
            // @ts-expect-error ignore
            quillRef.current?.getEditor().insertEmbed(range?.index, "image", imageUrl);
          } else {
            message.error("Upload file thất bại");
          }
        } catch (e) {
          message.error("Upload file thất bại");
        } finally {
          setIsUploading(false);
        }
      };
    });
  }, [quillRef, uploadImageFn]);

  return (
    <Spin spinning={isUploading} tip="Uploading...">
      <ReactQuill
        className={classes["quill"]}
        theme="snow"
        // @ts-expect-error custom vars
        style={{ width: "100%", maxWidth: width, "--min-height": minHeight, "--max-height": maxHeight }}
        {...restProps}
        ref={quillRef}
        modules={modules}
      />
    </Spin>
  );
};
