import { c as createAstro, a as createComponent, m as maybeRenderHead, h as renderScript, b as addAttribute, e as renderComponent, f as renderTemplate } from './astro/server_BeOFNrkS.mjs';
import 'kleur/colors';
import { C as Card } from './card_T02v7n7h.mjs';
import { $ as $$Image } from './_astro_assets_BqFTDrm1.mjs';
import { g as getLangFromUrl, u as useTranslations, c as cn } from './Footer_CXfFBHF-.mjs';
/* empty css                                 */
import 'clsx';
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

const $$Astro$1 = createAstro("https://www.actionmaker.be");
const $$ActivityGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ActivityGrid;
  const { activities, imageImports } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const getActivityUrl = (id) => {
    const baseUrl = "/teambuildings";
    const cleanId = id.replace(/^(nl|fr|de)\//, "").replace(/\.md$/, "");
    return lang === "nl" ? `${baseUrl}/${cleanId}` : `/${lang}${baseUrl}/${cleanId}`;
  };
  const sortedActivities = [...activities].sort((a, b) => {
    return (a.data.priority ?? 999) - (b.data.priority ?? 999);
  });
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-rrqb6lcm> ${sortedActivities.map((activity) => {
    const imagePath = `/src/assets/activities/${activity.data.image}`;
    const imageData = imageImports[imagePath]?.default;
    if (!imageData) {
      console.error(`Image not found: ${imagePath}`);
      return null;
    }
    const activityInfo = {
      id: activity.id,
      title: activity.data.title,
      priority: activity.data.priority,
      categories: activity.data.categories
    };
    return renderTemplate`<a${addAttribute(getActivityUrl(activity.id), "href")} class="block"${addAttribute(JSON.stringify(activityInfo), "data-activity-info")} data-astro-cid-rrqb6lcm> ${renderComponent($$result, "Card", Card, { "className": "group overflow-hidden transition-all duration-300 hover:shadow-xl", "data-astro-cid-rrqb6lcm": true }, { "default": ($$result2) => renderTemplate` <div class="relative h-72 overflow-hidden" data-astro-cid-rrqb6lcm> ${renderComponent($$result2, "Image", $$Image, { "src": imageData, "alt": activity.data.title, "width": 800, "height": 600, "class": "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110", "data-astro-cid-rrqb6lcm": true })} <div class="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-70" data-astro-cid-rrqb6lcm></div> </div> <div class="p-6" data-astro-cid-rrqb6lcm> <h3 class="text-xl font-bold mb-2" data-astro-cid-rrqb6lcm>${activity.data.title}</h3> <p class="text-sm text-muted-foreground line-clamp-2" data-astro-cid-rrqb6lcm>${activity.data.description}</p> </div> ` })} </a>`;
  })} </div>  ${renderScript($$result, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/TeamActivitiesList/ActivityGrid.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/TeamActivitiesList/ActivityGrid.astro", void 0);

const $$Astro = createAstro("https://www.actionmaker.be");
const $$CategoryFilters = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryFilters;
  const { categories, selectedCategory, fromHomepage = false } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap justify-center gap-4 mb-16"> <a${addAttribute(lang === "nl" ? "/teambuildings" : `/${lang}/teambuildings`, "href")}${addAttribute([
    "px-4 py-2 rounded-full border transition-colors",
    !selectedCategory ? "bg-red-600 text-white border-red-600" : "border-gray-200 hover:border-red-600 hover:text-red-600"
  ], "class:list")}> ${t("teambuildings.all-activities")} </a> ${categories.map((category) => {
    const categoryUrl = lang === "nl" ? `/teambuildings?category=${category.id}#activities-section` : `/${lang}/teambuildings?category=${category.id}#activities-section`;
    return renderTemplate`<a${addAttribute(categoryUrl, "href")}${addAttribute([
      "px-4 py-2 rounded-full border transition-colors",
      selectedCategory === category.id ? "bg-red-600 text-white border-red-600" : "border-gray-200 hover:border-red-600 hover:text-red-600"
    ], "class:list")}> ${category.data.title} </a>`;
  })} </div> ${renderScript($$result, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/TeamActivitiesList/CategoryFilters.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/TeamActivitiesList/CategoryFilters.astro", void 0);

const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { $$CategoryFilters as $, Separator as S, $$ActivityGrid as a };
