import type { AstroI18nextConfig } from 'astro-i18next';

const config: AstroI18nextConfig = {
  defaultLocale: 'nl',
  locales: ['nl', 'fr', 'de'],
  namespaces: ['home', 'navbar', 'teambuildings'],
  i18nextServer: {
    debug: true,
  },
};

export default config;
