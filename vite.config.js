import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ghPages } from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [vue(),ghPages()],
  server: {
    port: 3000
  },
  head: {
    title: 'Portfólio João Moreira',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  base:'/portifolio/',
  resolve: {
    alias: {
      '@': '/src'
    }
  }
}) 