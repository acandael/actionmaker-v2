import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_BRSFUN6r.mjs';
import 'kleur/colors';
/* empty css                                   */
import { $ as $$Layout } from '../chunks/Layout_D9Z4I-_f.mjs';
import { $ as $$Hero, a as $$TeamActivities, b as $$Features, c as $$Index$1, d as $$FAQ, e as $$CTA } from '../chunks/CTA_D5gr-4C3.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Activit\xE9s de Team Building | Action Maker", "isHomePage": true, "description": "D\xE9couvrez nos activit\xE9s de team building uniques et cr\xE9ez des exp\xE9riences inoubliables pour votre \xE9quipe." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "TeamActivities", $$TeamActivities, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Testimonials", $$Index$1, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/fr/index.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/fr/index.astro";
const $$url = "/fr";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
