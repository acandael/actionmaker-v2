import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BQZACKfH.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DuKO7j-Q.mjs';
import { $ as $$AboutHero, a as $$Stats, b as $$Values, c as $$Founder, d as $$CTA } from '../../chunks/CTA_BSMITK0P.mjs';
export { renderers } from '../../renderers.mjs';

const $$OverActionmaker = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xC0 propos d'Action Maker - Action Maker", "description": "Je crois que les entreprises doivent avoir une belle journ\xE9e sans souci, de sorte que leurs employ\xE9s sortent du groupe comme un groupe renforc\xE9 par l'exp\xE9rience" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutHero", $$AboutHero, {})} ${renderComponent($$result2, "Stats", $$Stats, {})} ${renderComponent($$result2, "Values", $$Values, {})} ${renderComponent($$result2, "Founder", $$Founder, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/fr/over-actionmaker.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/fr/over-actionmaker.astro";
const $$url = "/fr/over-actionmaker";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OverActionmaker,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
