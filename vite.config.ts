import { defineConfig as testConfig } from 'vitest/config'
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import tanstackRouter from '@tanstack/router-plugin/vite'
import { resolve } from 'node:path'

const tstConfig = testConfig(
  {
    test:{
      globals:true,
      environment:"jsdom"
    }
  }
)

const config = defineConfig({
  plugins: [
    tanstackRouter({
      target:"react",
      autoCodeSplitting:true
    }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})

// https://vitejs.dev/config/
export default {
  ...config,
  ...tstConfig
}