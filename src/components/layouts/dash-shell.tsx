import { Layout } from "antd";
import { PropsWithChildren, ReactNode } from "react";
import classes from "./dash-shell.module.scss";

type Props = PropsWithChildren<{
  header: ReactNode;
  sider: ReactNode;
}>;

export const DashShell = ({ header, sider, children }: Props) => {
  return (
    <Layout className={classes["container"]} hasSider>
      {sider}
      <Layout>
        {header}
        <Layout.Content className={classes["content"]}>{children}</Layout.Content>
      </Layout>
    </Layout>
  );
};
