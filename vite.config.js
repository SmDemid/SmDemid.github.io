import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://SmDemid.github.io/SmDemid.github.io/',
  build:{
    outDir: 'build',
  }
})
