import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/qa-engineer-page/',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})

