import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BRSFUN6r.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_pJ6dV5Z_.mjs';
export { renderers } from '../../renderers.mjs';

const $$TermsOfService = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Conditions G\xE9n\xE9rales | Action Maker", "description": "Lisez nos conditions g\xE9n\xE9rales d'utilisation de nos services." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-4 py-16"> <h1 class="text-4xl font-bold mb-8">Conditions Générales</h1> <div class="prose prose-zinc max-w-none"> <h2>1. Général</h2> <p>Ces conditions générales s'appliquent à tous les services d'Action Maker.</p> <h2>2. Services</h2> <p>
Action Maker propose des activités de team building et des événements pour les entreprises
        et les groupes.
</p> <h2>3. Réservations et Paiements</h2> <p>
Toutes les réservations ne sont définitives qu'après confirmation écrite et paiement de
        l'acompte.
</p> <h2>4. Annulation</h2> <p>Les conditions d'annulation suivantes s'appliquent :</p> <ul> <li>Jusqu'à 30 jours avant l'événement : gratuit</li> <li>14-30 jours avant l'événement : 50% du montant total</li> <li>Moins de 14 jours avant l'événement : 100% du montant total</li> </ul> <h2>5. Responsabilité</h2> <p>
La participation aux activités se fait à vos propres risques. Action Maker n'est pas
        responsable des dommages ou blessures éventuels.
</p> <h2>6. Confidentialité</h2> <p>
Nous respectons votre vie privée et traitons les données personnelles conformément à la
        législation RGPD.
</p> <h2>7. Modifications</h2> <p>
Action Maker se réserve le droit de modifier ces conditions. La version la plus récente est
        toujours applicable.
</p> <h2>8. Contact</h2> <p>
Pour toute question concernant ces conditions, veuillez nous contacter à info@actionmaker.be
</p> </div> </div> ` })}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/fr/terms-of-service.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/fr/terms-of-service.astro";
const $$url = "/fr/terms-of-service";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TermsOfService,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
