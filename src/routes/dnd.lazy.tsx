import { DndContext } from "@dnd-kit/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Head } from "~/components/helpers/head.tsx";
import KanbanBoard from "~/features/tasks/temp-task.tsx";

export const Route = createLazyFileRoute("/dnd")({
  component: Page,
});

function Page() {
  return (
    <>
      <Head title="Dnd" />

      <DndContext>
        <KanbanBoard />
      </DndContext>
    </>
  );
}
