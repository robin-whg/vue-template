import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    vue(),
    Pages({
      exclude: ["**/components/*.vue"],
    }),
    Layouts(),
  ],
});
