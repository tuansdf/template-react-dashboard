import { useRef, useState } from "react";
import ReactQuill from "react-quill";

export const useReactQuill = () => {
  const quillRef = useRef<ReactQuill | null>(null);
  const [quillImageUrls, setQuillImagesUrl] = useState<string[]>([]);

  const getQuillHtml = () => {
    return quillRef.current?.getEditor().root.innerHTML as string | undefined;
  };
  const getQuillText = () => {
    return quillRef.current?.getEditor().getText() as string | undefined;
  };
  const setQuillHtml = (html: string) => {
    if (quillRef.current) {
      quillRef.current.getEditor().root.innerHTML = html;
    }
  };

  return {
    quillRef,
    getQuillHtml,
    getQuillText,
    setQuillHtml,
    quillImageUrls,
    setQuillImagesUrl,
  };
};
