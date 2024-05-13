import { createTheme, MantineProvider as MProvider } from "@mantine/core";
import { PropsWithChildren } from "react";

const theme = createTheme({});

export const MantineProvider = ({ children }: PropsWithChildren) => {
  return <MProvider theme={theme}>{children}</MProvider>;
};
