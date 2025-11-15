import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    react(),
    WindiCSS({
      scan: {
        dirs: ['./src'],
        fileExtensions: ['html', 'jsx', 'js', 'ts', 'tsx', 'vue'],
      },
    }),
  ],
})
