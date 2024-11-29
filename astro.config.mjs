import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import astroI18next from 'astro-i18next';
import { fileURLToPath } from 'url';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    isr: false,
    edgeMiddleware: false,
    imageService: true,
    devImageService: 'sharp',
    imagesConfig: {
      sizes: [640, 750, 828, 1080, 1200, 1920],
      formats: ['image/avif', 'image/webp'],
    },
  }),
  integrations: [tailwind(), react(), astroI18next()],
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
