import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import reactRefresh from "@vitejs/plugin-react-refresh"
import reactSWC from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [react(), reactRefresh(), reactSWC()],

  server: {
    port: 3000,
  },
})
