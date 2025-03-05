import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.actionmaker.be',
  output: 'server',
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      domains: [],
      sizes: [320, 640, 1280],
      formats: ['image/avif', 'image/webp'],
    },
    webAnalytics: {
      enabled: true,
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
  integrations: [react()],
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
