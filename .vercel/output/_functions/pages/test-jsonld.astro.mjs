import { c as createComponent, a as renderTemplate, d as renderHead, u as unescapeHTML } from '../chunks/astro/server_BRSFUN6r.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$TestJsonld = createComponent(($$result, $$props, $$slots) => {
  const jsonld = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Test Video",
    description: "This is a test video",
    uploadDate: "2023-05-01",
    embedUrl: "https://example.com/video",
    thumbnailUrl: "https://example.com/thumbnail.jpg"
  });
  return renderTemplate(_a || (_a = __template(['<html> <head><title>JSON-LD Test</title><script type="application/ld+json">', "<\/script>", '</head> <body> <h1>JSON-LD Test Page</h1> <p>This page tests a simple JSON-LD implementation.</p> <div style="background: #eee; padding: 20px; margin: 20px; border-radius: 8px;"> <h2>JSON-LD Content:</h2> <pre>', '</pre> </div> <p>View the page source to see if the JSON-LD is in the head section.</p> <a href="/en/teambuildings/indoor-scherminitiatie">Go back to activity page</a> </body></html>'])), unescapeHTML(jsonld), renderHead(), jsonld);
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/test-jsonld.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/test-jsonld.astro";
const $$url = "/test-jsonld";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TestJsonld,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
