import { a as createComponent, e as renderComponent, f as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DHpP_QjO.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BW7egNRh.mjs';
export { renderers } from '../../renderers.mjs';

const $$Disclaimer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Avertissement | Action Maker", "description": "Lisez notre avertissement concernant l'utilisation de notre site web et de nos services." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-4 py-16"> <h1 class="text-4xl font-bold mb-8">Avertissement</h1> <div class="prose prose-zinc max-w-none"> <h2>1. Informations sur le Site Web</h2> <p>
Les informations sur ce site web ont été compilées avec le plus grand soin. Action Maker
        s'efforce de fournir des informations précises et actuelles mais ne peut garantir que toutes
        les informations sont complètes et correctes à tout moment.
</p> <h2>2. Responsabilité</h2> <p>
Action Maker ne peut être tenu responsable des dommages directs ou indirects résultant de
        l'utilisation des informations sur ce site web. Toutes les décisions que vous prenez sur la
        base de ces informations sont à vos propres risques.
</p> <h2>3. Propriété Intellectuelle</h2> <p>
Tout le contenu de ce site web (textes, images, logos, etc.) est la propriété d'Action Maker
        et est protégé par les droits de propriété intellectuelle. Il n'est pas permis d'utiliser ce
        contenu sans autorisation écrite préalable.
</p> <h2>4. Liens vers des Sites Externes</h2> <p>
Ce site web peut contenir des liens vers des sites externes. Action Maker n'est pas
        responsable du contenu ou des pratiques de confidentialité de ces sites.
</p> <h2>5. Modifications</h2> <p>
Action Maker se réserve le droit de modifier cet avertissement à tout moment. Nous vous
        recommandons de consulter régulièrement cet avertissement.
</p> <h2>6. Contact</h2> <p>
Pour toute question concernant cet avertissement, veuillez nous contacter à${" "} <a href="mailto:info@actionmaker.be">info@actionmaker.be</a> </p> </div> </div> ` })}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/fr/disclaimer.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/fr/disclaimer.astro";
const $$url = "/fr/disclaimer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Disclaimer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
