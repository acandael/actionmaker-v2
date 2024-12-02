import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang] & string) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

// Helper for route translations
export function getRouteFromUrl(url: URL): string {
  const [, , ...rest] = url.pathname.split('/');
  return rest.join('/') || '';
}

// Get URL for a different locale
export function getLocalizedURL(url: URL, locale: keyof typeof ui) {
  const route = getRouteFromUrl(url);
  return locale === defaultLang ? `/${route}` : `/${locale}/${route}`;
}
