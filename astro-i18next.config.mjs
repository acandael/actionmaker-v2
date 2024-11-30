/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: 'nl',
  locales: ['nl', 'fr', 'de'],
  namespaces: [
    'translation',
    'navbar',
    'activity',
    'booking',
    'about',
    'footer',
    'faq',
    'home',
    'teambuildings',
  ],
  defaultNamespace: 'translation',
  load: ['server', 'client'],
  resourcesBasePath: 'src/locales',
};
