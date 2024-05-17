import { AntdProvider } from "~/lib/antd-provider.tsx";
import { QueryProvider } from "~/lib/query-provider.tsx";
import { RouterProvider } from "~/lib/router-provider.tsx";

import "~/styles";
import "~/globals.scss";

export default function App() {
  return (
    <AntdProvider>
      <QueryProvider>
        <RouterProvider />
      </QueryProvider>
    </AntdProvider>
  );
}
