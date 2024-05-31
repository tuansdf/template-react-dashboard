import { PropsWithChildren } from "react";
import { DashShell } from "~/components/layouts/dash-shell.tsx";
import { RootDashHeader } from "~/features/root/root-dash-header.tsx";
import { RootDashSider } from "~/features/root/root-dash-sider.tsx";

type Props = PropsWithChildren;

export const RootDashShell = ({ children }: Props) => {
  return (
    <DashShell header={<RootDashHeader />} sider={<RootDashSider />}>
      {children}
    </DashShell>
  );
};
