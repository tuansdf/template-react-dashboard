import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { RootDashShell } from "~/components/layouts/root-dash-shell.tsx";

export const Route = createRootRoute({
  component: () => (
    <>
      <RootDashShell>
        <Outlet />
      </RootDashShell>
      <TanStackRouterDevtools />
    </>
  ),
});
