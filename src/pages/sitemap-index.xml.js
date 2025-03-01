import { getCollection } from 'astro:content';

export async function GET() {
  // Get all pages
  const pages = await Promise.all([
    // Add your dynamic content collections here
    // For example:
    // getCollection('blog'),
    // getCollection('products'),
  ]);

  // Flatten the array of collections
  const allPages = pages.flat();

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.actionmaker.be/sitemap-0.xml</loc>
  </sitemap>
</sitemapindex>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
