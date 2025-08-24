import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@svg": "/src/components/icons",
      "@img": "/src/assets/images",
      "@styles": "/src/assets/styles",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/mixins" as *;`,
      },
    },
  },
});
