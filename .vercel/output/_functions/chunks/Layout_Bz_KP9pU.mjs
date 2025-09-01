import { b as createAstro, c as createComponent, e as addAttribute, ai as renderSlot, d as renderHead, r as renderComponent, F as Fragment, a as renderTemplate, u as unescapeHTML } from './astro/server_Q0G1hIgh.mjs';
import 'kleur/colors';
/* empty css                           */
import { g as getLangFromUrl, $ as $$Navbar, b as $$Footer } from './Footer_CRbhKRCs.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.actionmaker.be");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, isHomePage = false, description, jsonld } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const middlewareJsonLd = Astro2.locals?.layoutData?.jsonld;
  const finalJsonLd = middlewareJsonLd || jsonld;
  const showDebugPanel = Astro2.url.searchParams.has("debug");
  console.log("\u{1F9E9} LAYOUT RECEIVED PROPS:", {
    title,
    descriptionLength: description ? description.length : 0,
    jsonldType: typeof jsonld,
    jsonldValue: jsonld,
    jsonldStringified: JSON.stringify(jsonld),
    hasJsonLD: !!jsonld,
    jsonldLength: jsonld ? jsonld.length : 0,
    hasMiddlewareJsonLd: !!middlewareJsonLd,
    middlewareJsonLdLength: middlewareJsonLd ? middlewareJsonLd.length : 0,
    finalJsonLdType: typeof finalJsonLd,
    finalJsonLdLength: finalJsonLd ? finalJsonLd.length : 0,
    isEmptyString: jsonld === "",
    isNull: jsonld === null,
    isUndefined: jsonld === void 0
  });
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.ico"><link rel="canonical"${addAttribute(Astro2.url.href.replace(`/${lang}/`, "/"), "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image" property="og:image:secure_url" content="/logo.png"><meta property="og:image:alt"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(Astro2.url.href, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:image" content="/logo.png"><meta property="twitter:image:alt"${addAttribute(description, "content")}><meta property="twitter:url"${addAttribute(Astro2.url.href, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><title>${title}</title><!-- JSON-LD directly in head (no slot needed) -->${finalJsonLd && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['<meta name="jsonld-debug-length"', '><meta name="jsonld-debug-type"', '><meta name="jsonld-debug-has"', '><script type="application/ld+json">', "<\/script>"])), addAttribute(finalJsonLd.length.toString(), "content"), addAttribute(typeof finalJsonLd, "content"), addAttribute(!!finalJsonLd ? "true" : "false", "content"), unescapeHTML(finalJsonLd)) })}`}<!-- Head slot for other content -->${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body> ${showDebugPanel && renderTemplate`<div id="layout-debug" style="background: #f0f0f0; padding: 20px; margin: 20px; border-radius: 8px; position: fixed; top: 80px; left: 20px; z-index: 9999; max-width: 500px; max-height: 80vh; overflow: auto; border: 2px solid blue;"> <h2 style="color: blue;">Layout Debug Data:</h2> <pre style="white-space: pre-wrap;">

          ${JSON.stringify({
    props: {
      title,
      description,
      isHomePage,
      hasJsonLD: !!jsonld,
      jsonldLength: jsonld ? jsonld.length : 0,
      hasMiddlewareJsonLd: !!middlewareJsonLd,
      middlewareJsonLdLength: middlewareJsonLd ? middlewareJsonLd.length : 0,
      hasFinalJsonLd: !!finalJsonLd,
      finalJsonLdLength: finalJsonLd ? finalJsonLd.length : 0
    },
    url: Astro2.url.pathname
  }, null, 2)}
        </pre> </div>`} ${renderComponent($$result, "Navbar", $$Navbar, {})} <main${addAttribute(["min-h-screen pb-32", { "pt-20": !isHomePage }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "Toaster", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/ui/sonner", "client:component-export": "Toaster" })} </body></html>`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
