import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  publicDir: 'public',
  build: {
    outDir: resolve(__dirname, 'build'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'src/index.html')
    }
  },
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        { src: '../README.md', dest: '' },
        { src: '../LICENSE', dest: '' }
      ]
    })
  ],
  server: {
    port: 5173,
    open: true
  }
});
