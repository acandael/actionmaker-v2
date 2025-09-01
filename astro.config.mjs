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
    nodeVersion: '22.x'
  }),
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects: {
    '/scherminitiatie': {
      status: 302,
      destination: '/teambuildings/indoor-scherminitiatie',
    },
    '/roofvogelworkshop': {
      status: 302,
      destination: '/teambuildings/roofvogelworkshop',
    },
    '/djembe': {
      status: 302,
      destination: '/teambuildings/djembe',
    },
    '/sumoworstelen': {
      status: 302,
      destination: '/teambuildings/indoor-sumoworstelen',
    },
    '/laserkleiduifschieten': {
      status: 302,
      destination: '/teambuildings/laserkleiduifschieten',
    },
    '/bijlwerpen': {
      status: 302,
      destination: '/teambuildings/bijlwerpen',
    },
    '/biathlonschieten': {
      status: 302,
      destination: '/teambuildings/indoor-laser-karabijn',
    },
    '/boogschieten': {
      status: 302,
      destination: '/teambuildings/boogschieten',
    },
    '/smaaktest': {
      status: 302,
      destination: '/teambuildings/smaaktest',
    },
    '/kunstsmeden': {
      status: 302,
      destination: '/teambuildings/kunstsmeden',
    },
    '/pistoolschieten': {
      status: 302,
      destination: '/teambuildings/luchtdruk-pistoolschieten',
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
