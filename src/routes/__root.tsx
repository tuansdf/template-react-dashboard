import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { MainDashboard } from "~/components/shell/main-dashboard.tsx";

export const Route = createRootRoute({
  component: () => (
    <>
      <MainDashboard>
        <Outlet />
      </MainDashboard>
      <TanStackRouterDevtools />
    </>
  ),
});
