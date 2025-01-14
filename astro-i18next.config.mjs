/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  routes: {
    fr: {
      'over-actionmaker': 'a-propos-actionmaker',
      'about-actionmaker': 'about-actionmaker',
      teambuildings: 'teambuildings',
      concepten: 'concepts',
      contact: 'contact',
    },
    en: {
      'over-actionmaker': 'about-actionmaker',
      'a-propos-actionmaker': 'about-actionmaker',
      teambuildings: 'teambuildings',
      concepten: 'concepts',
      contact: 'contact',
    },
  },
  defaultLocale: 'nl',
  locales: ['nl', 'fr', 'en'],
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
