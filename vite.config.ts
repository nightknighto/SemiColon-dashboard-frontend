// vite.config.ts
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  // load all env vars prefixed with VITE_ (from .env, .env.[mode], or shell)
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return defineConfig({
    base: env.VITE_BASE_NAME || '/',  // fall back to "/" if unset
    plugins: [react()],
  })
}
