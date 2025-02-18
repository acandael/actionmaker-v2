import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';

import robots from 'astro-robots';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      domains: [],
      sizes: [320, 640, 1280],
      formats: ['image/avif', 'image/webp'],
    },
    nodeVersion: '18.x',
  }),
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [react(), robots()],
  prefetch: false,
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
    },
    plugins: [tailwindcss()],
  },
});
