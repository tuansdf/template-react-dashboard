import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: Page,
});

function Page() {
  return <div>Hello /about!</div>;
}
