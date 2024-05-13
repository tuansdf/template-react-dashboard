import { MantineProvider } from "~/lib/mantine-provider.tsx";
import { RouterProvider } from "~/lib/router-provider.tsx";

import "~/styles";
import "~/globals.scss";

export default function App() {
  return (
    <MantineProvider>
      <RouterProvider />
    </MantineProvider>
  );
}
