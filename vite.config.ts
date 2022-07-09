import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [ unocss(),react() ],
  esbuild: {
    pure: [ 'console' ],
    drop: [ 'debugger' ]
  },
  server: {
    port: 3005,
    watch: {
      usePolling: true,
    },
  }
})
