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
      // repo endpoint
      "/repositories": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },
      "/issues": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },
      "/auth": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },
 
      "/profile": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },
       "/my-work": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },"/contributions": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },
      
    },
  },
  plugins: [react(), tailwindcss()],
});
