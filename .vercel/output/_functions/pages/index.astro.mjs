import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_BQZACKfH.mjs';
import 'kleur/colors';
/* empty css                                   */
import { g as getLangFromUrl, $ as $$Layout } from '../chunks/Layout_DuKO7j-Q.mjs';
import { $ as $$Hero, a as $$TeamActivities, b as $$Features, c as $$Index$1, d as $$FAQ, e as $$CTA } from '../chunks/CTA_CRvV-b7C.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Teambuilding Activiteiten | Action Maker", "isHomePage": true, "description": "Ontdek onze unieke teambuilding activiteiten en cre\xEBer onvergetelijke ervaringen voor je team." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "TeamActivities", $$TeamActivities, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Testimonials", $$Index$1, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/index.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
