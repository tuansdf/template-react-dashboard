import { NavLink } from "@mantine/core";
import { IconHome2, IconTable } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { PropsWithChildren } from "react";
import { DashShell } from "~/components/layouts/dash-shell.tsx";

type Props = PropsWithChildren;

export const MainDashShell = ({ children }: Props) => {
  return (
    <DashShell
      navbar={
        <>
          <NavLink
            component={Link}
            to="/table-filter-pagination"
            label="Table + filter + pagination"
            leftSection={<IconTable size="1rem" stroke={1.5} />}
          />
          <NavLink component={Link} to="/about" label="About" leftSection={<IconHome2 size="1rem" stroke={1.5} />} />
        </>
      }
    >
      {children}
    </DashShell>
  );
};
