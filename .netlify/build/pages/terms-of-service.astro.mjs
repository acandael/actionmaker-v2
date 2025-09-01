import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_JEKMtsuq.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_HyWPwEM7.mjs';
export { renderers } from '../renderers.mjs';

const $$TermsOfService = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Algemene Voorwaarden | Action Maker", "description": "Lees onze algemene voorwaarden voor het gebruik van onze diensten." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-4 py-16"> <h1 class="text-4xl font-bold mb-8">Algemene Voorwaarden</h1> <div class="prose prose-zinc max-w-none"> <h2>1. Algemeen</h2> <p>Deze algemene voorwaarden zijn van toepassing op alle diensten van Action Maker.</p> <h2>2. Diensten</h2> <p>
Action Maker biedt teambuilding activiteiten en evenementen aan voor bedrijven en groepen.
</p> <h2>3. Boekingen en Betalingen</h2> <p>
Alle boekingen zijn pas definitief na schriftelijke bevestiging en betaling van het
        voorschot.
</p> <h2>4. Annulering</h2> <p>Bij annulering gelden de volgende voorwaarden:</p> <ul> <li>Tot 30 dagen voor aanvang: kosteloos</li> <li>14-30 dagen voor aanvang: 50% van het totaalbedrag</li> <li>Minder dan 14 dagen voor aanvang: 100% van het totaalbedrag</li> </ul> <h2>5. Aansprakelijkheid</h2> <p>
Deelname aan activiteiten is op eigen risico. Action Maker is niet aansprakelijk voor
        eventuele schade of letsel.
</p> <h2>6. Privacy</h2> <p>Wij respecteren uw privacy en verwerken persoonsgegevens conform de AVG/GDPR wetgeving.</p> <h2>7. Wijzigingen</h2> <p>
Action Maker behoudt zich het recht voor om deze voorwaarden te wijzigen. De meest recente
        versie is altijd van toepassing.
</p> <h2>8. Contact</h2> <p>Voor vragen over deze voorwaarden kunt u contact opnemen via info@actionmaker.be</p> </div> </div> ` })}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/terms-of-service.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/terms-of-service.astro";
const $$url = "/terms-of-service";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TermsOfService,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
