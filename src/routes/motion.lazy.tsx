import { createLazyFileRoute } from "@tanstack/react-router";
import { MotionContainer } from "~/features/motion/motion-container.tsx";

export const Route = createLazyFileRoute("/motion")({
  component: MotionPage,
});

function MotionPage() {
  return <MotionContainer />;
}
