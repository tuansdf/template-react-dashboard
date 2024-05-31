import { ConfigProvider } from "antd";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const AntdProvider = ({ children }: Props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#22c55e",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
