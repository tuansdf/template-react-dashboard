import { AntdProvider } from "~/lib/antd-provider.tsx";
import { HelmetProvider } from "~/lib/helmet-provider.tsx";
import { QueryProvider } from "~/lib/query-provider.tsx";
import { RouterProvider } from "~/lib/router-provider.tsx";

import "~/styles";

export default function App() {
  return (
    <HelmetProvider>
      <AntdProvider>
        <QueryProvider>
          <RouterProvider />
        </QueryProvider>
      </AntdProvider>
    </HelmetProvider>
  );
}
