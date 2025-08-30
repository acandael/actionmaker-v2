import '../chunks/_astro_content_BF8d7Dot.mjs';
export { renderers } from '../renderers.mjs';

async function GET() {
  // Get all pages
  const pages = await Promise.all([
    // Add your dynamic content collections here
    // For example:
    // getCollection('blog'),
    // getCollection('products'),
  ]);

  // Flatten the array of collections
  pages.flat();

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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
