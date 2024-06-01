import { Layout, SiderProps } from "antd";
import { useViewportSize } from "~/hooks/use-viewport-size.tsx";

type Props = SiderProps;

export const DashSider = (props: Props) => {
  const { breakpoint } = useViewportSize();

  return (
    <Layout.Sider
      width="18rem"
      theme="light"
      collapsedWidth="3rem"
      collapsed={breakpoint === "sm"}
      collapsible
      trigger={null}
      {...props}
    />
  );
};
