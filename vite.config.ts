import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// https://thedkpatel.medium.com/dockerizing-react-application-built-with-vite-a-simple-guide-4c41eb09defa
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    host: true,
    watch: {
       usePolling: true,
    },
  },
});