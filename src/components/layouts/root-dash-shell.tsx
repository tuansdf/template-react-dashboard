import { PropsWithChildren } from "react";
import { DashShell } from "~/components/layouts/dash-shell.tsx";
import { RootDashHeader } from "~/components/layouts/root-dash-header.tsx";
import { RootDashSider } from "~/components/layouts/root-dash-sider.tsx";

type Props = PropsWithChildren;

export const RootDashShell = ({ children }: Props) => {
  return (
    <DashShell header={<RootDashHeader />} sider={<RootDashSider />}>
      {children}
    </DashShell>
  );
};
