import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        exportType: "named",
        ref: true,
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        replaceAttrValues: {
          "#000": "currentColor",
        },
        svgoConfig: {
          plugins: ["convertStyleToAttrs"],
        },
      },
      include: "**/*.svg",
    }),
  ],
});
