import { createLazyFileRoute } from "@tanstack/react-router";
import { Head } from "~/components/helpers/head.tsx";

export const Route = createLazyFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Head title="About" />

      <div>About</div>
    </>
  );
}
