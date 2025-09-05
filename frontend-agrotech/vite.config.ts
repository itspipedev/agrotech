import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' // Importa el plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(), // Añade el plugin aquí
  ],
})