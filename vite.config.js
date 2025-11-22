import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",             // 🔥 IMPORTANT: Ensures correct asset paths on Vercel
  publicDir: "public",   // 🔥 Ensures Vite copies public/data/assets
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
});
