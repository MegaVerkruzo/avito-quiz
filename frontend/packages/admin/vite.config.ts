import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import tsconfigPath from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPath(), mkcert()],
  server: {
    port: 4201,
  },
})
