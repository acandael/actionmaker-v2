import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_JEKMtsuq.mjs';
import 'kleur/colors';
/* empty css                                   */
import { $ as $$Layout } from '../chunks/Layout_HyWPwEM7.mjs';
import { $ as $$Hero, a as $$TeamActivities, b as $$Features, c as $$Index$1, d as $$FAQ, e as $$CTA } from '../chunks/CTA_BvHy02hI.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Team Building Activities | Action Maker", "isHomePage": true, "description": "Discover our unique team building activities and create unexpected experiences for your team." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "TeamActivities", $$TeamActivities, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Testimonials", $$Index$1, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/en/index.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
