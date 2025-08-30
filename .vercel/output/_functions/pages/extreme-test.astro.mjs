import { c as createAstro, a as createComponent, f as renderTemplate, d as renderHead } from '../chunks/astro/server_DHpP_QjO.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.actionmaker.be");
const $$ExtremeTest = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ExtremeTest;
  const videoData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Extreme Test Video",
    description: "Testing direct HTML injection",
    uploadDate: "2023-01-01",
    embedUrl: "https://example.com/extreme-test",
    thumbnailUrl: "https://example.com/extreme-thumbnail.jpg"
  };
  const jsonldString = JSON.stringify(videoData);
  console.log("\u26A1 EXTREME TEST:", {
    jsonldLength: jsonldString.length,
    hasData: !!jsonldString,
    videoData
  });
  if (Astro2.locals) {
    Astro2.locals.jsonld = jsonldString;
    console.log("\u{1F4CC} EXTREME TEST STORED IN LOCALS");
  }
  return renderTemplate(_a || (_a = __template(['<html> <head><title>Extreme JSON-LD Test</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><!-- Direct injection in the HTML without any components --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "VideoObject",\n        "name": "Extreme Test Video",\n        "description": "Testing direct HTML injection",\n        "uploadDate": "2023-01-01",\n        "embedUrl": "https://example.com/extreme-test",\n        "thumbnailUrl": "https://example.com/extreme-thumbnail.jpg"\n      }\n    <\/script>', '</head> <body> <h1>Extreme JSON-LD Test</h1> <p>This page tests the most direct way to add JSON-LD to the page.</p> <div style="background: #f0f0f0; padding: 20px; margin: 20px; border-radius: 8px;"> <h2>JSON-LD Test Info:</h2> <pre>', '</pre> </div> <p> <a href="/en/teambuildings/indoor-scherminitiatie" style="color: blue; text-decoration: underline; margin-right: 10px;">Go to Activity Page</a> <a href="/test-jsonld" style="color: blue; text-decoration: underline;">View Component Test</a> </p> </body></html>'])), renderHead(), jsonldString);
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/extreme-test.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/extreme-test.astro";
const $$url = "/extreme-test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ExtremeTest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
