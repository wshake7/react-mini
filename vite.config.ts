import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    TanStackRouterVite(),
    viteMockServe({
      // default
      mockPath: './mock',
      enable: true,
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      // '/mock': {
      //   target: 'http://localhost:3001',
      //   changeOrigin: true,
      // },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or 'modern'
      },
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'), // 根路径
      '@': path.resolve(__dirname, 'src'), // src 路径
    },
  },
})
