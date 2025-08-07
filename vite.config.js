import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['delete-account-1adm.onrender.com'],
    host: true,
    port: process.env.PORT || 4173,
    strictPort: true,
  }
})
