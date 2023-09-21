import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [vue()],
  build : {
    lib : {
      entry : path.resolve(__dirname, 'src/vue-preline.ts'),
      name : 'vue-preline',
      fileName : (format) => `vue-preline.${format}.js`
    },
    rollupOptions : {
      external : ['vue'],
      output : {
        globals : {
          vue: 'Vue'
        }
      }
    }
  }
})