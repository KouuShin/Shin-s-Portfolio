import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 884,
    host: '0.0.0.0',
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': resolve(process.cwd(), './'),
    },
  },
});
