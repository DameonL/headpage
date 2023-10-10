import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  root: "src/",
  appType: "spa",
  envDir: "./",
  esbuild: {
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
  },
  build: {
    lib: {
      entry: "index.html",
      name: "Headpage",
    },
    outDir: "../build",
    emptyOutDir: true,
    minify: "false",
    rollupOptions: {
      output: {
        entryFileNames: "index.js",
      },
    },
  },
  vite: {
    define: {
      global: {},
    },
  },
});
