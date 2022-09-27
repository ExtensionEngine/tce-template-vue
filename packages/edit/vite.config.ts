import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  plugins: [vue()],
  build: {
    lib: {
      entry: "./index.ts",
      name: "TCE-Edit",
      fileName: "content-element-edit",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        dir: "./dist",
      },
    },
  },
});
