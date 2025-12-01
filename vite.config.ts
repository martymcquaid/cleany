import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/64fb7684-3ec5-41d5-b0fc-c7e3302ee5f4/preview',
  plugins: [react()],
  server: {
    port: 5185,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5185,
    },
  },
})
