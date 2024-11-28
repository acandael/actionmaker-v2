import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import astroI18next from 'astro-i18next';
import path from 'path';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [tailwind(), react(), astroI18next()],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(path.dirname(''), './src'),
        '@components': path.resolve(path.dirname(''), './src/components'),
        '@assets': path.resolve(path.dirname(''), './src/assets'),
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
    build: {
      sourcemap: true,
    },
  },
});
