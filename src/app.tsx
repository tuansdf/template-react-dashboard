import { AntdProvider } from "~/lib/antd-provider.tsx";
import { HeadProvider } from "~/lib/head-provider.tsx";
import { QueryProvider } from "~/lib/query-provider.tsx";
import { RouterProvider } from "~/lib/router-provider.tsx";

import "~/styles";

export default function App() {
  return (
    <HeadProvider>
      <AntdProvider>
        <QueryProvider>
          <RouterProvider />
        </QueryProvider>
      </AntdProvider>
    </HeadProvider>
  );
}
