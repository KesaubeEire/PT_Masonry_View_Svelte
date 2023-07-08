import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import monkey from 'vite-plugin-monkey';
// --------------------
import { config } from './userscript.config.js'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true,
  },
  plugins: [
    svelte(),
    monkey({
      entry: 'src/main.js',

      // NOTE: 详细油猴文件头配置见 ./userscript.config.js
      userscript: config
    }),
  ],
});
