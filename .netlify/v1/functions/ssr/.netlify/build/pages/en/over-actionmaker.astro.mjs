import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_JEKMtsuq.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_HyWPwEM7.mjs';
import { $ as $$AboutHero, a as $$Stats, b as $$Values, c as $$Founder, d as $$CTA } from '../../chunks/CTA_DBWy0zvB.mjs';
export { renderers } from '../../renderers.mjs';

const $$OverActionmaker = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Action Maker - Action Maker", "description": "It is my conviction that companies should have an enjoyable day without worries, so that their employees emerge from the experience as a strengthened team" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutHero", $$AboutHero, {})} ${renderComponent($$result2, "Stats", $$Stats, {})} ${renderComponent($$result2, "Values", $$Values, {})} ${renderComponent($$result2, "Founder", $$Founder, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/en/over-actionmaker.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/en/over-actionmaker.astro";
const $$url = "/en/over-actionmaker";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OverActionmaker,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
