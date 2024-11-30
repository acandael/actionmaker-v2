import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import { fileURLToPath } from 'url';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      domains: [],
      sizes: [320, 640, 1280],
      formats: ['image/avif', 'webp'],
    },
    nodeVersion: '18.x',
  }),
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'fr', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind(), react()],
  prefetch: false,
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
    },
  },
});
