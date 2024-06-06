import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { RootDashShell } from "~/features/root/root-dash-shell.tsx";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <RootDashShell>
        <Outlet />
      </RootDashShell>
      <TanStackRouterDevtools />
    </>
  );
}
