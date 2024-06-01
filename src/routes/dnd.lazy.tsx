import { DndContext } from "@dnd-kit/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Head } from "~/components/helpers/head.tsx";

export const Route = createLazyFileRoute("/dnd")({
  component: Page,
});

function Page() {
  return (
    <>
      <Head title="Dnd" />

      <DndContext></DndContext>
    </>
  );
}
