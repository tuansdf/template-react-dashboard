import { createLazyFileRoute } from "@tanstack/react-router";
import { Head } from "~/components/helpers/head.tsx";
import { DashContentHeader } from "~/components/layouts/dash-content-header.tsx";
import { TaskCreateForm } from "~/features/tasks/task-create-form.tsx";

export const Route = createLazyFileRoute("/form")({
  component: CreateFormPage,
});

function CreateFormPage() {
  return (
    <>
      <Head title="Form" />

      <DashContentHeader title="Create form" />

      <TaskCreateForm />
    </>
  );
}
