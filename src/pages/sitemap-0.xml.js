import { getCollection } from 'astro:content';

export async function GET() {
  // Define your base URLs for each language
  const baseUrls = {
    nl: 'https://www.actionmaker.be',
    en: 'https://www.actionmaker.be/en',
    fr: 'https://www.actionmaker.be/fr',
  };

  // Define your static pages
  const staticPages = [
    '', // home
    '/contact',
    '/disclaimer',
    '/over-actionmaker',
    '/teambuildings',
    '/terms-of-service',
  ];

  // Generate URLs for all static pages in all languages
  const urls = [];

  // Add static pages
  for (const page of staticPages) {
    const nlUrl = `${baseUrls.nl}${page}`;
    const enUrl = `${baseUrls.en}${page}`;
    const frUrl = `${baseUrls.fr}${page}`;

    urls.push({
      url: nlUrl,
      links: [
        { lang: 'nl', url: nlUrl },
        { lang: 'en', url: enUrl },
        { lang: 'fr', url: frUrl },
      ],
    });

    urls.push({
      url: enUrl,
      links: [
        { lang: 'nl', url: nlUrl },
        { lang: 'en', url: enUrl },
        { lang: 'fr', url: frUrl },
      ],
    });

    urls.push({
      url: frUrl,
      links: [
        { lang: 'nl', url: nlUrl },
        { lang: 'en', url: enUrl },
        { lang: 'fr', url: frUrl },
      ],
    });
  }

  // Get activities from content collections
  try {
    const nlActivities = await getCollection('activities', ({ id }) => id.startsWith('nl/'));
    const enActivities = await getCollection('activities', ({ id }) => id.startsWith('en/'));
    const frActivities = await getCollection('activities', ({ id }) => id.startsWith('fr/'));

    // Process Dutch activities
    for (const activity of nlActivities) {
      const slug = activity.id.replace('nl/', '').replace(/\.md$/, '');
      const nlUrl = `${baseUrls.nl}/teambuildings/${slug}`;
      const enUrl = `${baseUrls.en}/teambuildings/${slug}`;
      const frUrl = `${baseUrls.fr}/teambuildings/${slug}`;

      urls.push({
        url: nlUrl,
        links: [
          { lang: 'nl', url: nlUrl },
          { lang: 'en', url: enUrl },
          { lang: 'fr', url: frUrl },
        ],
      });
    }

    // Process English activities
    for (const activity of enActivities) {
      const slug = activity.id.replace('en/', '').replace(/\.md$/, '');
      const nlUrl = `${baseUrls.nl}/teambuildings/${slug}`;
      const enUrl = `${baseUrls.en}/teambuildings/${slug}`;
      const frUrl = `${baseUrls.fr}/teambuildings/${slug}`;

      urls.push({
        url: enUrl,
        links: [
          { lang: 'nl', url: nlUrl },
          { lang: 'en', url: enUrl },
          { lang: 'fr', url: frUrl },
        ],
      });
    }

    // Process French activities
    for (const activity of frActivities) {
      const slug = activity.id.replace('fr/', '').replace(/\.md$/, '');
      const nlUrl = `${baseUrls.nl}/teambuildings/${slug}`;
      const enUrl = `${baseUrls.en}/teambuildings/${slug}`;
      const frUrl = `${baseUrls.fr}/teambuildings/${slug}`;

      urls.push({
        url: frUrl,
        links: [
          { lang: 'nl', url: nlUrl },
          { lang: 'en', url: enUrl },
          { lang: 'fr', url: frUrl },
        ],
      });
    }
  } catch (error) {
    console.error('Error fetching activities:', error);
  }

  // Generate sitemap XML
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`;

  // Add each URL to the sitemap
  for (const item of urls) {
    sitemap += `
  <url>
    <loc>${item.url}</loc>`;

    // Add alternate language links
    for (const link of item.links) {
      sitemap += `
    <xhtml:link rel="alternate" hreflang="${link.lang}" href="${link.url}"/>`;
    }

    sitemap += `
  </url>`;
  }

  sitemap += `
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
