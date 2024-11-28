import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import astroI18next from 'astro-i18next';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), react(), astroI18next()],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    ssr: {
      noExternal: [
        '@react-email/components',
        'react-hook-form',
        '@hookform/resolvers/zod',
        'lucide-react',
        'sonner',
        '@radix-ui/*',
        'cmdk',
        'vaul',
        'recharts',
        'react-day-picker',
        'input-otp',
        'react-resizable-panels',
        'embla-carousel-react',
      ],
    },
  },
});
