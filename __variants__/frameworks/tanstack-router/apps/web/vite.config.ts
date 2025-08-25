import { resolve } from "node:path";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tanstackRouter({ autoCodeSplitting: true }), viteReact()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  envDir: resolve(__dirname, "../../"),
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
