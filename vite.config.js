import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: mode === 'production' ? '/react-test2508/' : '/',
  plugins: [react()],
})
