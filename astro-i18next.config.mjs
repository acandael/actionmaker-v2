/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
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
};
