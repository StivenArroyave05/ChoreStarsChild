import { defineConfig } from 'vite';
import path from 'path';
import tailwindPostcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/',
  css: {
    postcss: {
      plugins: [tailwindPostcss(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});