import { createRouter, RouterProvider as RProvider } from "@tanstack/react-router";
import { routeTree } from "~/routeTree.gen";

const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const RouterProvider = () => {
  return <RProvider router={router} />;
};
