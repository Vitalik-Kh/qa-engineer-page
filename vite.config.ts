import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/qa-engineer-cv-page/',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})

