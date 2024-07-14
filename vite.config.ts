import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
import crypto from "crypto";
import path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// to generate unique classnames
const HASH_LENGTH = 16;
const hash = (input: string) => {
  return crypto.createHash("sha1").update(input).digest("hex").substring(0, HASH_LENGTH);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), TanStackRouterVite()],
  css: {
    modules: {
      generateScopedName: (name, filename) => {
        const n = path.basename(filename) + name;
        return `css-${hash(n)}`;
      },
    },
  },
});
