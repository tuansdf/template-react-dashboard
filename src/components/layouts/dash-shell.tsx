import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PropsWithChildren, ReactNode } from "react";
import classes from "./dash-shell.module.scss";

type Props = PropsWithChildren<{
  navbar: ReactNode;
}>;

export const DashShell = ({ navbar, children }: Props) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: "var(--navbar-height)" }}
      navbar={{
        width: 300,
        breakpoint: "md",
        collapsed: { mobile: !opened },
      }}
      padding="xs"
    >
      <AppShell.Header className={classes["header"]}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="xs" className={classes["navbar"]}>
        {navbar}
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
