// vite.config.js
import vitePluginString from 'vite-plugin-string'

export default {
  base: "/threeJSGlobe/",
  plugins: [
    vitePluginString()
  ],
  build: {
    chunkSizeWarningLimit: 1600,
  }
}