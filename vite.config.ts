import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      {
        find: "@app",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
});
