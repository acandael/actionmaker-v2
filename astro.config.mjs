import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroI18next(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  output: 'server',
  adapter: vercel(),
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  image: {
    domains: [],
    remotePatterns: [],
    dirs: ['src/content/images/activities'],
  },
});
