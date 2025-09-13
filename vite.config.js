// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';
import tailwindPostcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: './',      // <--- relativo, para que dist/index.html use "assets/..."  

  css: {
    postcss: {
      plugins: [
        tailwindPostcss(),
        autoprefixer()
      ]
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

  build: {
    outDir:    'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
