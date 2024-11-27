/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: 'nl',
  locales: ['nl', 'fr', 'de'],
  routes: {
    fr: {
      'over-actionmaker': 'a-propos-actionmaker',
      'uber-actionmaker': 'a-propos-actionmaker',
      teambuildings: 'teambuildings',
      concepten: 'concepts',
      contact: 'contact',
      kontakt: 'contact',
    },
    de: {
      'over-actionmaker': 'uber-actionmaker',
      'a-propos-actionmaker': 'uber-actionmaker',
      teambuildings: 'teambuildings',
      concepten: 'konzepte',
      contact: 'kontakt',
      kontakt: 'kontakt',
    },
  },
  namespaces: [
    'translation',
    'navbar',
    'activity',
    'booking',
    'teambuildings',
    'home',
    'about',
    'contact',
    'footer',
  ],
  defaultNamespace: 'home',
  load: ['client', 'server'],
  resourcesBasePath: 'locales',
};
