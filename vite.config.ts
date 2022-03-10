import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import { HeadlessUiResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import AutoImport from "unplugin-auto-import/vite";

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
    Components({
      dts: "src/components.d.ts",
      deep: true,
      directoryAsNamespace: true,
      resolvers: [IconsResolver(), HeadlessUiResolver({ prefix: "H" })],
      dirs: ["src/components", "src/pages/*/components"],
    }),
    Icons(),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/head", "@vueuse/core"],
      dts: "src/auto-imports.d.ts",
    }),
  ],
  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core", "@vueuse/head"],
  },
});
