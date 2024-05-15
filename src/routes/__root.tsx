import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { MainDashShell } from "~/components/layouts/main-dash-shell.tsx";

export const Route = createRootRoute({
  component: () => (
    <>
      <MainDashShell>
        <Outlet />
      </MainDashShell>
      <TanStackRouterDevtools />
    </>
  ),
});
