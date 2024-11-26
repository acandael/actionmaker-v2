/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: 'nl',
  locales: ['nl', 'fr', 'de'],
  namespaces: ['translation', 'navbar', 'activity', 'booking', 'teambuildings', 'home'],
  defaultNamespace: 'home',
  load: ['client', 'server'],
};
