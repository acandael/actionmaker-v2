import { b as createAstro, c as createComponent, a as renderTemplate, d as renderHead, e as addAttribute } from '../chunks/astro/server_JEKMtsuq.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.actionmaker.be");
const $$RedirectTest = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RedirectTest;
  return renderTemplate(_a || (_a = __template(['<html> <head><title>Redirect Test</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><!-- Test structured data directly in the head --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "WebPage",\n        "name": "Redirect Test Page",\n        "url": "http://localhost:4322/redirect-test"\n      }\n    <\/script><!-- Add meta tag to track page URL --><meta name="current-url"', '><meta name="complete-url"', ">", '</head> <body> <h1>Redirect Test Page</h1> <p>This page tests how structured data is handled during redirects.</p> <div style="background: #f0f0f0; padding: 20px; margin: 20px; border-radius: 8px;"> <h2>Page Information:</h2> <ul> <li>Pathname: ', "</li> <li>Full URL: ", '</li> </ul> </div> <div> <p>Test other pages:</p> <ul> <li><a href="/en/teambuildings/indoor-scherminitiatie">Activity Page with EN prefix</a></li> <li><a href="/teambuildings/indoor-scherminitiatie">Activity Page without prefix</a></li> <li><a href="/jsonld-direct-test">Direct Test Page</a></li> <li><a href="/extreme-test">Extreme Test Page</a></li> </ul> </div> </body></html>'])), addAttribute(Astro2.url.pathname, "content"), addAttribute(Astro2.url.href, "content"), renderHead(), Astro2.url.pathname, Astro2.url.href);
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/redirect-test.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/redirect-test.astro";
const $$url = "/redirect-test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RedirectTest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
