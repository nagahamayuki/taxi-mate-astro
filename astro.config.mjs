// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    imageService: true,
  }),
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
    envPrefix: ['WEBHOOK_'],
  },
});
