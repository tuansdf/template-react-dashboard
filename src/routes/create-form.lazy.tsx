import { createLazyFileRoute } from "@tanstack/react-router";
import { RichTextEditor } from "~/components/inputs/rich-text-editor.tsx";
import { DashContentHeader } from "~/components/layouts/dash-content-header.tsx";
import { useReactQuill } from "~/hooks/use-react-quill.tsx";

export const Route = createLazyFileRoute("/create-form")({
  component: CreateFormPage,
});

function CreateFormPage() {
  const { quillRef } = useReactQuill();

  return (
    <>
      <DashContentHeader title="Create form" />

      <RichTextEditor quillRef={quillRef} />
    </>
  );
}
