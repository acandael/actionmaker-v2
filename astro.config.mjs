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
    build: {
      rollupOptions: {
        external: [
          'resend',
          '@react-email/components',
          'react-hook-form',
          '@hookform/resolvers/zod',
          'lucide-react',
          'sonner',
          '@radix-ui/react-slot',
          'class-variance-authority',
          '@radix-ui/react-label',
          'next-themes',
        ],
      },
    },
    ssr: {
      noExternal: [
        '@react-email/components',
        'react-hook-form',
        '@hookform/resolvers/zod',
        'lucide-react',
        'sonner',
        '@radix-ui/react-slot',
        'class-variance-authority',
        '@radix-ui/react-label',
        'next-themes',
      ],
    },
  },
});
