import { ConfigProvider } from "antd";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const AntdProvider = ({ children }: Props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#12ad79",
          borderRadius: 4,
          motionUnit: 0.05,
        },
        components: {
          Button: {
            colorText: "#64748b",
            defaultColor: "#12ad79",
            defaultBorderColor: "#12ad79",
            paddingInline: 20,
            defaultGhostColor: "#12ad79",
            defaultGhostBorderColor: "#12ad79",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
