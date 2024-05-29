import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      includeAssets: ["logo.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Yamaltdinov Rustem's app",
        short_name: "Rustem's app",
        description: "App for 4th Web semester",
        theme_color: "#000000",
        start_url: "/",
        icons: [
          {
            src: "logo128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "logo512-mask.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "tests/setup.tsx",
    css: true,
  },
});
