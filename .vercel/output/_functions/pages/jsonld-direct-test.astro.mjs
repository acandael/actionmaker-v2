import { c as createAstro, a as createComponent, f as renderTemplate, e as renderComponent, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../chunks/astro/server_DHpP_QjO.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CayRevs7.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.actionmaker.be");
const $$JsonLD = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$JsonLD;
  const { data } = Astro2.props;
  const jsonString = JSON.stringify(data);
  if (Astro2.locals) {
    Astro2.locals.jsonld = jsonString;
    console.log("\u{1F4DD} JSON-LD COMPONENT STORED IN LOCALS:", {
      length: jsonString.length,
      url: Astro2.url.pathname
    });
  }
  return renderTemplate(_a || (_a = __template(['<!-- Use set:html which is guaranteed to be unescaped --><script type="application/ld+json">', "<\/script> <!-- Fallback with Fragment approach for safety -->", ""])), unescapeHTML(jsonString), renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(`<script type="application/ld+json">${jsonString}<\/script>`)}` }));
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/JsonLD.astro", void 0);

const $$Astro = createAstro("https://www.actionmaker.be");
const $$JsonldDirectTest = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$JsonldDirectTest;
  const title = "JSON-LD Direct Test";
  const description = "Testing JSON-LD prop passing";
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Direct Test Video",
    description: "Testing direct jsonld prop",
    uploadDate: "2023-01-01",
    embedUrl: "https://example.com/test-video",
    thumbnailUrl: "https://example.com/thumbnail.jpg"
  };
  const jsonldString = JSON.stringify(jsonld);
  console.log("\u{1F4DD} DIRECT TEST PAGE:", {
    jsonldLength: jsonldString.length,
    jsonld: jsonldString
  });
  if (Astro2.locals) {
    Astro2.locals.jsonld = jsonldString;
    console.log("\u{1F4CC} DIRECT TEST STORED IN LOCALS");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="padding: 2rem; max-width: 800px; margin: 0 auto;"> <h1>${title}</h1> <p>${description}</p> <div style="background: #f0f0f0; padding: 20px; margin: 20px 0; border-radius: 8px;"> <h2>JSON-LD Test:</h2> <pre>${jsonldString}</pre> <!-- Direct use of the JsonLD component --> <div style="margin-top: 20px;"> <p><strong>Status:</strong> Using JsonLD component directly in page body</p> </div> </div> <p> <a href="/en/teambuildings/indoor-scherminitiatie" style="color: blue; text-decoration: underline; margin-right: 10px;">Go to Activity Page</a> <a href="/test-jsonld" style="color: blue; text-decoration: underline; margin-right: 10px;">View Component Test</a> <a href="/extreme-test" style="color: blue; text-decoration: underline;">View Extreme Test</a> </p> </div>  ${renderComponent($$result2, "JsonLD", $$JsonLD, { "data": jsonld })} ` })}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/jsonld-direct-test.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/jsonld-direct-test.astro";
const $$url = "/jsonld-direct-test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$JsonldDirectTest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
