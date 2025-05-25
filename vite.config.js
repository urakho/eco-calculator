import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'build'),
    emptyOutDir: true
  },
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        { src: '../README.md', dest: '' },
        { src: '../LICENSE', dest: '' },
        { src: 'main.js', dest: '' }
      ]
    })
  ],
  server: {
    port: 5173,
    open: true
  }
});
