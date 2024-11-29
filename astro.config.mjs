import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import astroI18next from 'astro-i18next';
import { fileURLToPath } from 'url';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    analytics: true,
    imageService: true,
    imagesConfig: {
      domains: [],
      sizes: [320, 640, 1280],
      formats: ['image/avif', 'image/webp'],
    },
    nodeVersion: '18.x',
    includeFiles: [
      'public/locales/nl/translation.json',
      'public/locales/nl/navbar.json',
      'public/locales/nl/activity.json',
      'public/locales/nl/booking.json',
      'public/locales/nl/about.json',
      'public/locales/nl/footer.json',
      'public/locales/nl/faq.json',
      'public/locales/nl/home.json',
      'public/locales/nl/teambuildings.json',
      'public/locales/fr/translation.json',
      'public/locales/fr/navbar.json',
      'public/locales/fr/activity.json',
      'public/locales/fr/booking.json',
      'public/locales/fr/about.json',
      'public/locales/fr/footer.json',
      'public/locales/fr/faq.json',
      'public/locales/fr/home.json',
      'public/locales/fr/teambuildings.json',
      'public/locales/de/translation.json',
      'public/locales/de/navbar.json',
      'public/locales/de/activity.json',
      'public/locales/de/booking.json',
      'public/locales/de/about.json',
      'public/locales/de/footer.json',
      'public/locales/de/faq.json',
      'public/locales/de/home.json',
      'public/locales/de/teambuildings.json',
    ],
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
