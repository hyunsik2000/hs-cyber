import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@assets": "/src/assets",
      "@constants": "/src/constants",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
      "@data": "/src/data",
    },
  },
});
