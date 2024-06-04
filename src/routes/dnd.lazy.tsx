import { DndContext } from "@dnd-kit/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Head } from "~/components/helpers/head.tsx";
import { useAuthorizeRoute } from "~/features/auth/auth.context.tsx";
import { TaskLane } from "~/features/tasks/task-lane.tsx";

export const Route = createLazyFileRoute("/dnd")({
  component: Page,
});

function Page() {
  useAuthorizeRoute("DND", "/");

  return (
    <>
      <Head title="Dnd" />

      <DndContext>
        <TaskLane />
      </DndContext>
    </>
  );
}
