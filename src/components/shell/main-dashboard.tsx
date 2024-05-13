import { NavLink } from "@mantine/core";
import { IconHome2 } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { PropsWithChildren } from "react";
import { DashboardShell } from "~/components/shell/dashboard-shell.tsx";

type Props = PropsWithChildren;

export const MainDashboard = ({ children }: Props) => {
  return (
    <DashboardShell
      navbar={
        <>
          <NavLink
            component={Link}
            to="/"
            label="Home"
            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
          />
          <NavLink
            component={Link}
            to="/about"
            label="About"
            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
          />
        </>
      }
    >
      {children}
    </DashboardShell>
  );
};
