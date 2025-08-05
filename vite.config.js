import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      vue: process.env.NODE_ENV === 'production' ? 'vue/dist/vue.runtime.esm-bundler.prod.js' : 'vue/dist/vue.esm-bundler.js'
    }
  }
}) 