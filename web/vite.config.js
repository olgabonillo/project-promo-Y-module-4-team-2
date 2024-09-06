import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "./docs",
    emptyOutDir: true,
  },
  base: "/project-promo-Y-module-3-team-2/"
})
