import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  plugins: [vue()],
  build: {
    lib: {
      entry: "./index.ts",
      name: "TCE-Display",
      fileName: "content-element-display",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        dir: "./dist",
      },
    },
  },
});
