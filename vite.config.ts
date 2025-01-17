import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'APP_',
  plugins: [vue()],

  // vitest
  test: {

    // ...
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
