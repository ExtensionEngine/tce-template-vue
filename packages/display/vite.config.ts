import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  plugins: [vue(), vuetify({ autoImport: true })],
  build: {
    lib: {
      entry: "./index.ts",
      name: "TCE-Display",
      fileName: "content-element-display",
    },
    rollupOptions: {
      external: ["vue", "vuetify"],
      output: {
        dir: "./dist",
      },
    },
  },
});
