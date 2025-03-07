import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  server: {
    host: '0.0.0.0', // Accept connections from any device
    port: 5173, // Default port, can be changed if needed
  },
})
