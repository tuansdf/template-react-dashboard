import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { MainDashboardShell } from "~/components/shell/main-dashboard-shell.tsx";

export const Route = createRootRoute({
  component: () => (
    <>
      <MainDashboardShell>
        <Outlet />
      </MainDashboardShell>
      <TanStackRouterDevtools />
    </>
  ),
});
