import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import astroI18next from 'astro-i18next';
import { fileURLToPath } from 'url';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
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
