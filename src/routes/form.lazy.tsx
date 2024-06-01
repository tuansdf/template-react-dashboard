import { createLazyFileRoute } from "@tanstack/react-router";
import { DashContentHeader } from "~/components/layouts/dash-content-header.tsx";
import { PostCreateForm } from "~/features/posts/post-create-form.tsx";

export const Route = createLazyFileRoute("/form")({
  component: CreateFormPage,
});

function CreateFormPage() {
  return (
    <>
      <DashContentHeader title="Create form" />

      <PostCreateForm />
    </>
  );
}
