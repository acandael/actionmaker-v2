import type { AstroI18nextConfig } from 'astro-i18next';

const config: AstroI18nextConfig = {
  defaultLocale: 'nl',
  locales: ['nl', 'fr', 'de'],
  namespaces: ['home'],
  i18nextServer: {
    debug: true,
  },
};

export default config;
