import { createLazyFileRoute } from "@tanstack/react-router";
import { Head } from "~/components/helpers/head.tsx";

export const Route = createLazyFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <>
      <Head title="Home" />

      <div>Home</div>
    </>
  );
}
