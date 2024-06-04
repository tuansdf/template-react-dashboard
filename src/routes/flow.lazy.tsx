import { createLazyFileRoute } from "@tanstack/react-router";
import { Flow } from "~/features/reactflow/flow.tsx";

export const Route = createLazyFileRoute("/flow")({
  component: Page,
});

function Page() {
  return <Flow />;
}
