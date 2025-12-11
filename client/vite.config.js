import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// 👇 configuración mínima para que Vite procese PostCSS/Tailwind
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

