import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        external: ['contentful', '@contentful/rich-text-html-renderer'],
      },
    },
    define: {
      'process.env': process.env,
    },
  },
});