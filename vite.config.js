import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  publicDir: 'public',
  build: {
    outDir: 'build',
    emptyOutDir: true
  },
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        { src: 'README.md', dest: '' },
        { src: 'LICENSE', dest: '' },
        { src: 'src/main.js', dest: 'src' }
      ]
    })
  ],
  server: {
    port: 5173,
    open: true
  }
});
