import { a as createComponent, e as renderComponent, f as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DHpP_QjO.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CayRevs7.mjs';
export { renderers } from '../renderers.mjs';

const $$Disclaimer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Disclaimer | Action Maker", "description": "Lees onze disclaimer voor het gebruik van onze website en diensten." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-4 py-16"> <h1 class="text-4xl font-bold mb-8">Disclaimer</h1> <div class="prose prose-zinc max-w-none"> <h2>1. Informatie op de Website</h2> <p>
De informatie op deze website is met de grootst mogelijke zorg samengesteld. Action Maker
        streeft ernaar om accurate en actuele informatie aan te bieden, maar kan niet garanderen dat
        alle informatie op elk moment volledig en juist is.
</p> <h2>2. Aansprakelijkheid</h2> <p>
Action Maker kan niet aansprakelijk worden gesteld voor directe of indirecte schade die
        ontstaat door het gebruik van de informatie op deze website. Alle beslissingen die u neemt
        op basis van deze informatie zijn voor eigen rekening en risico.
</p> <h2>3. Intellectueel Eigendom</h2> <p>
Alle content op deze website (teksten, afbeeldingen, logo's, etc.) is eigendom van Action
        Maker en wordt beschermd door intellectuele eigendomsrechten. Het is niet toegestaan om deze
        content te gebruiken zonder voorafgaande schriftelijke toestemming.
</p> <h2>4. Links naar Externe Websites</h2> <p>
Deze website kan links bevatten naar externe websites. Action Maker is niet verantwoordelijk
        voor de inhoud of privacy praktijken van deze websites.
</p> <h2>5. Wijzigingen</h2> <p>
Action Maker behoudt zich het recht voor om deze disclaimer te allen tijde te wijzigen. Wij
        raden u aan om deze disclaimer regelmatig te raadplegen.
</p> <h2>6. Contact</h2> <p>
Voor vragen over deze disclaimer kunt u contact opnemen via${" "} <a href="mailto:info@actionmaker.be">info@actionmaker.be</a> </p> </div> </div> ` })}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/disclaimer.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/disclaimer.astro";
const $$url = "/disclaimer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Disclaimer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
