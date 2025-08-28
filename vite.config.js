import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/NethPortfolio',  // 👈 very important for GitHub Pages
  plugins: [tailwindcss(), react()],
})
