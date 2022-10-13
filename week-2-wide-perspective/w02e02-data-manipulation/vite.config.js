// vite.config.js
import { defineConfig } from 'vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/tiles': path.resolve(__dirname, './src/orders/tiles'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@': path.resolve(__dirname, './src'),
    },
  },
});
