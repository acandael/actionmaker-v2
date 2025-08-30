import { a as createComponent, f as renderTemplate, d as renderHead } from '../chunks/astro/server_DHpP_QjO.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$JsonldTest = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html> <head><title>JSON-LD Test Page</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><!-- JSON-LD script --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "VideoObject",\n        "name": "Fencing Initiation (Indoor)",\n        "description": "Under the guidance of our experienced instructors, participants learn the basic techniques of fencing",\n        "uploadDate": "2023-01-01",\n        "embedUrl": "https://iframe.mediadelivery.net/embed/369439/bec895e0-71a8-46ba-b83a-4ebbbbfe4518",\n        "thumbnailUrl": "https://actionmaker.be/logo.png"\n      }\n    <\/script>', '</head> <body> <h1>JSON-LD Test Page</h1> <p>This page contains a JSON-LD script for testing in the Google Rich Results Testing Tool.</p> <h2>JSON-LD Content:</h2> <pre style="background-color: #f5f5f5; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;">', '\n  </pre> <p> <a href="/test-jsonld.html" style="color: blue; text-decoration: underline; margin-right: 1rem;">View Static Test Page</a> <a href="/teambuildings/indoor-scherminitiatie" style="color: blue; text-decoration: underline;">View Activity Page</a> </p> </body></html>'])), renderHead(), `
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Fencing Initiation (Indoor)",
    "description": "Under the guidance of our experienced instructors, participants learn the basic techniques of fencing",
    "uploadDate": "2023-01-01",
    "embedUrl": "https://iframe.mediadelivery.net/embed/369439/bec895e0-71a8-46ba-b83a-4ebbbbfe4518",
    "thumbnailUrl": "https://actionmaker.be/logo.png"
  }
`);
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/jsonld-test.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/jsonld-test.astro";
const $$url = "/jsonld-test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$JsonldTest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
