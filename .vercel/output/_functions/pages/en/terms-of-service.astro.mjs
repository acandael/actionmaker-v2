import { a as createComponent, e as renderComponent, f as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DHpP_QjO.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CayRevs7.mjs';
export { renderers } from '../../renderers.mjs';

const $$TermsOfService = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Terms of Service | Action Maker", "description": "Read our terms of service for using our services." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-4 py-16"> <h1 class="text-4xl font-bold mb-8">Terms of Service</h1> <div class="prose prose-zinc max-w-none"> <h2>1. General</h2> <p>These terms of service apply to all services provided by Action Maker.</p> <h2>2. Services</h2> <p>Action Maker provides team building activities and events for companies and groups.</p> <h2>3. Bookings and Payments</h2> <p>All bookings are only final after written confirmation and payment of the deposit.</p> <h2>4. Cancellation</h2> <p>The following cancellation terms apply:</p> <ul> <li>Up to 30 days before the event: free of charge</li> <li>14-30 days before the event: 50% of the total amount</li> <li>Less than 14 days before the event: 100% of the total amount</li> </ul> <h2>5. Liability</h2> <p>
Participation in activities is at your own risk. Action Maker is not liable for any damage
        or injury.
</p> <h2>6. Privacy</h2> <p>We respect your privacy and process personal data in accordance with GDPR legislation.</p> <h2>7. Changes</h2> <p>
Action Maker reserves the right to modify these terms. The most recent version is always
        applicable.
</p> <h2>8. Contact</h2> <p>For questions about these terms, please contact us at info@actionmaker.be</p> </div> </div> ` })}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/en/terms-of-service.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/en/terms-of-service.astro";
const $$url = "/en/terms-of-service";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TermsOfService,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
