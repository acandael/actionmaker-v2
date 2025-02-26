import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BQZACKfH.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DuKO7j-Q.mjs';
export { renderers } from '../../renderers.mjs';

const $$Disclaimer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Disclaimer | Action Maker", "description": "Read our disclaimer for the use of our website and services." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-4 py-16"> <h1 class="text-4xl font-bold mb-8">Disclaimer</h1> <div class="prose prose-zinc max-w-none"> <h2>1. Website Information</h2> <p>
The information on this website has been compiled with the utmost care. Action Maker strives
        to provide accurate and current information but cannot guarantee that all information is
        complete and correct at all times.
</p> <h2>2. Liability</h2> <p>
Action Maker cannot be held liable for any direct or indirect damage resulting from the use
        of information on this website. All decisions you make based on this information are at your
        own account and risk.
</p> <h2>3. Intellectual Property</h2> <p>
All content on this website (texts, images, logos, etc.) is owned by Action Maker and is
        protected by intellectual property rights. It is not permitted to use this content without
        prior written permission.
</p> <h2>4. Links to External Websites</h2> <p>
This website may contain links to external websites. Action Maker is not responsible for the
        content or privacy practices of these websites.
</p> <h2>5. Changes</h2> <p>
Action Maker reserves the right to modify this disclaimer at any time. We recommend that you
        consult this disclaimer regularly.
</p> <h2>6. Contact</h2> <p>
For questions about this disclaimer, please contact us at${" "} <a href="mailto:info@actionmaker.be">info@actionmaker.be</a> </p> </div> </div> ` })}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/en/disclaimer.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/en/disclaimer.astro";
const $$url = "/en/disclaimer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Disclaimer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
