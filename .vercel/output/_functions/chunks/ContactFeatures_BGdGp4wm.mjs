import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle, Phone, Mail, ArrowUpDown, Users, Trophy } from 'lucide-react';
import { c as cn, g as getLangFromUrl, u as useTranslations } from './Footer_CcHV6wuQ.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server_Q0G1hIgh.mjs';
import 'kleur/colors';
import { C as Card } from './card_B05OATQR.mjs';
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_B1VbBFKz.mjs';
import { c as contactImage } from './about-us_Lp9xK2RJ.mjs';

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Root,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    }
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

const $$Astro$1 = createAstro("https://www.actionmaker.be");
const $$ContactInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactInfo;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Card", Card, { "className": "p-8" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-8"> <div class="aspect-4/3 relative rounded-xl overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": contactImage, "alt": t("contact.image.alt"), "width": 534, "height": 400, "class": "w-full h-full object-cover" })} <div class="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div> </div> <div class="space-y-4"> <h2 class="text-xl font-semibold">${t("contact.title")}</h2> <p class="text-muted-foreground">${t("contact.description")}</p> </div> <div class="space-y-4"> <a href="tel:+32485462505" class="flex items-center gap-3 text-lg hover:text-red-600 transition-colors"> ${renderComponent($$result2, "Phone", Phone, { "className": "h-5 w-5" })}
+32 485 46 25 05
</a> <a href="mailto:info@actionmaker.be" class="flex items-center gap-3 text-lg hover:text-red-600 transition-colors"> ${renderComponent($$result2, "Mail", Mail, { "className": "h-5 w-5" })}
info@actionmaker.be
</a> </div> <a${addAttribute(lang === "nl" ? "/over-actionmaker" : `/${lang}/over-actionmaker`, "href")} class="inline-block text-red-600 hover:text-red-700 font-medium transition-colors"> ${t("contact.read-more")} </a> </div> ` })}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/Contact/ContactInfo.astro", void 0);

const $$Astro = createAstro("https://www.actionmaker.be");
const $$ContactFeatures = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactFeatures;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const features = [
    {
      icon: ArrowUpDown,
      title: t("contact.features.flexible")
    },
    {
      icon: Users,
      title: t("contact.features.personal")
    },
    {
      icon: Trophy,
      title: t("contact.features.experienced")
    }
  ];
  return renderTemplate`${renderComponent($$result, "Card", Card, { "className": "p-8" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-6"> <img src="/logo.png" alt="Action Maker" class="h-16 w-auto"> <div class="space-y-4"> ${features.map((feature) => renderTemplate`<div class="flex items-center gap-4"> <div class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-50"> ${renderComponent($$result2, "feature.icon", feature.icon, { "className": "h-6 w-6 text-red-600" })} </div> <span class="font-medium">${feature.title}</span> </div>`)} </div> </div> ` })}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/Contact/ContactFeatures.astro", void 0);

export { $$ContactInfo as $, RadioGroup as R, RadioGroupItem as a, $$ContactFeatures as b };
