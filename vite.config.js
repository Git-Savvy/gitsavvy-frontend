import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // Whenever your React app asks for "/documentation",
      // Vite secretly forwards it to your Docker backend
      "/documentation": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },
      // README endpoint
      "/repositories": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
