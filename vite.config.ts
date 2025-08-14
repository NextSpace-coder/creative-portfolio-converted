import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import viteTagger from "vite-tagger"

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      viteTagger({ prefixName: "wb" }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    server: {
      host: "::",
      port: 8080,
      allowedHosts: true,
    },
  }
})
