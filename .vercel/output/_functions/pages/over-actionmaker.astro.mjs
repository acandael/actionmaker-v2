import { a as createComponent, e as renderComponent, f as renderTemplate } from '../chunks/astro/server_BeOFNrkS.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DCNOqE5-.mjs';
import { $ as $$AboutHero, a as $$Stats, b as $$Values, c as $$Founder, d as $$CTA } from '../chunks/CTA_CqUPKdl2.mjs';
export { renderers } from '../renderers.mjs';

const $$OverActionmaker = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Over Action Maker - Action Maker", "description": "Het is mijn overtuiging dat bedrijven een leuke dag moeten hebben zonder zorgen, zodat hun werknemers als een versterkt team uit de ervaring komen" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutHero", $$AboutHero, {})} ${renderComponent($$result2, "Stats", $$Stats, {})} ${renderComponent($$result2, "Values", $$Values, {})} ${renderComponent($$result2, "Founder", $$Founder, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/over-actionmaker.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/over-actionmaker.astro";
const $$url = "/over-actionmaker";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OverActionmaker,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
