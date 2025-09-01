import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, e as addAttribute } from './astro/server_Q0G1hIgh.mjs';
import 'kleur/colors';
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_B1VbBFKz.mjs';
import { c as contactImage } from './about-us_Lp9xK2RJ.mjs';
import { g as getLangFromUrl, u as useTranslations, B as Button } from './Footer_CcHV6wuQ.mjs';
import { C as Card } from './card_B05OATQR.mjs';
import { Users, Trophy, Calendar, Star, Heart, Shield, Target, ArrowRight } from 'lucide-react';
/* empty css                                    */

const $$Astro$4 = createAstro("https://www.actionmaker.be");
const $$AboutHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AboutHero;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="relative py-24 px-4 bg-background"> <div class="max-w-7xl mx-auto"> <div class="grid lg:grid-cols-2 gap-12 items-center">  <div class="space-y-8"> <h1 class="text-balance text-4xl md:text-5xl font-bold tracking-tight"> ${t("about.title")} </h1> <div class="space-y-6 text-lg text-muted-foreground"> <p>${t("about.description.p1")}</p> <p>${t("about.description.p2")}</p> <p>${t("about.description.p3")}</p> </div> </div>  <div class="relative"> <div class="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl"> ${renderComponent($$result, "Image", $$Image, { "src": contactImage, "alt": t("about.image.alt"), "width": 534, "height": 400, "class": "w-full h-full object-cover" })} <div class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-black/20 to-transparent"></div> </div>  <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div> <div class="absolute -top-6 -right-6 w-32 h-32 bg-red-600/10 rounded-full blur-2xl"></div> </div> </div> </div> </section>`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/About/AboutHero.astro", void 0);

const founderImage = new Proxy({"src":"/_astro/founder.BYIjpSHc.jpg","width":567,"height":452,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/founder.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro("https://www.actionmaker.be");
const $$Founder = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Founder;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-24 px-4 bg-background"> <div class="max-w-7xl mx-auto"> <h2 class="text-4xl font-bold text-center mb-20">${t("about.founder.title")}</h2> ${renderComponent($$result, "Card", Card, { "className": "p-8 md:p-12" }, { "default": ($$result2) => renderTemplate` <div class="grid lg:grid-cols-2 gap-12 items-center">  <div class="relative aspect-4/3 rounded-xl overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": founderImage, "alt": t("about.founder.title"), "width": 567, "height": 425, "class": "w-full h-full object-cover" })} <div class="absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 to-transparent"></div> </div>  <div class="space-y-6"> <div class="space-y-2"> <h3 class="text-2xl font-bold">Frederiek Troubleyn</h3> <p class="text-red-600 font-medium">${t("about.founder.subtitle")}</p> </div> <div class="space-y-4 text-muted-foreground"> <p>${t("about.founder.description.p1")}</p> <p>${t("about.founder.description.p2")}</p> <p>${t("about.founder.description.p3")}</p> <p>${t("about.founder.description.p4")}</p> </div> </div> </div> ` })} </div> </section>`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/About/Founder.astro", void 0);

const $$Astro$2 = createAstro("https://www.actionmaker.be");
const $$Stats = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Stats;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const stats = [
    {
      icon: Users,
      value: "10000+",
      label: t("about.stats.tevreden")
    },
    {
      icon: Trophy,
      value: "50+",
      label: t("about.stats.unieke")
    },
    {
      icon: Calendar,
      value: "15+",
      label: t("about.stats.jaar")
    },
    {
      icon: Star,
      value: "98%",
      label: t("about.stats.positief")
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-24 px-4 bg-muted/50"> <div class="max-w-7xl mx-auto"> <div class="grid grid-cols-2 lg:grid-cols-4 gap-8"> ${stats.map((stat, index) => renderTemplate`<div class="group relative p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")}> <div class="flex flex-col items-center text-center space-y-4"> <div class="p-3 bg-green-50 rounded-lg group-hover:scale-110 transition-transform duration-300"> ${renderComponent($$result, "stat.icon", stat.icon, { "className": "w-6 h-6 text-green-600" })} </div> <div class="space-y-2"> <div class="text-3xl font-bold text-green-600">${stat.value}</div> <div class="text-sm text-muted-foreground">${stat.label}</div> </div> </div>  <div class="absolute inset-0 bg-linear-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent transition-all duration-500 rounded-xl"></div> </div>`)} </div> </div> </section>`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/About/Stats.astro", void 0);

const $$Astro$1 = createAstro("https://www.actionmaker.be");
const $$Values = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Values;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const values = [
    {
      icon: Heart,
      title: t("about.values.passie.title"),
      description: t("about.values.passie.description")
    },
    {
      icon: Shield,
      title: t("about.values.kwaliteit.title"),
      description: t("about.values.kwaliteit.description")
    },
    {
      icon: Users,
      title: t("about.values.persoonlijk.title"),
      description: t("about.values.persoonlijk.description")
    },
    {
      icon: Target,
      title: t("about.values.resultaat.title"),
      description: t("about.values.resultaat.description")
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-24 px-4 bg-background"> <div class="max-w-7xl mx-auto"> <div class="text-center mb-20"> <h2 class="text-4xl font-bold mb-4">${t("about.values.title")}</h2> <p class="text-lg text-muted-foreground max-w-2xl mx-auto"> ${t("about.values.subtitle")} </p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> ${values.map((value, index) => renderTemplate`<div class="group p-8 rounded-2xl bg-white hover:bg-linear-to-b hover:from-white hover:to-red-50/50 shadow-md hover:shadow-xl transition-all duration-500 ease-out" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")}>  <div class="relative mb-6 inline-block"> <div class="absolute inset-0 bg-red-100 rounded-2xl transform rotate-6 transition-transform duration-300 group-hover:rotate-12"></div> <div class="relative w-16 h-16 rounded-2xl bg-red-500 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110"> ${renderComponent($$result, "value.icon", value.icon, { "className": "w-8 h-8 text-white" })} </div> </div>  <h3 class="text-xl font-semibold mb-4 group-hover:text-red-600 transition-colors duration-300"> ${value.title} </h3> <p class="text-muted-foreground leading-relaxed">${value.description}</p> </div>`)} </div> </div> </section>`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/About/Values.astro", void 0);

const $$Astro = createAstro("https://www.actionmaker.be");
const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTA;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="relative py-32 px-4 overflow-hidden bg-linear-to-b from-background to-muted/50" data-astro-cid-3neszb7o>  <div class="absolute inset-0 opacity-40" data-astro-cid-3neszb7o> <div class="absolute inset-0 bg-grid-white/10" data-astro-cid-3neszb7o></div> <div class="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" data-astro-cid-3neszb7o></div> </div> <div class="relative max-w-3xl mx-auto text-center" data-astro-cid-3neszb7o> <h2 class="text-3xl md:text-4xl font-bold mb-6" data-astro-cid-3neszb7o> ${t("about.cta.title")} </h2> <p class="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" data-astro-cid-3neszb7o> ${t("about.cta.description")} </p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-3neszb7o> ${renderComponent($$result, "Button", Button, { "size": "lg", "className": "bg-red-600 hover:bg-red-700 text-white group px-8 py-6 text-lg rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300", "data-astro-cid-3neszb7o": true }, { "default": ($$result2) => renderTemplate` <a${addAttribute(lang === "nl" ? "/contact" : `/${lang}/contact`, "href")} class="flex items-center" data-astro-cid-3neszb7o> ${t("about.cta.cta")} ${renderComponent($$result2, "ArrowRight", ArrowRight, { "className": "ml-2 h-5 w-5 transition-transform group-hover:translate-x-1", "data-astro-cid-3neszb7o": true })} </a> ` })} </div>  <div class="mt-12 text-muted-foreground" data-astro-cid-3neszb7o> <p class="text-sm" data-astro-cid-3neszb7o> ${t("about.cta.call")}${" "} <a href="tel:+32476960657" class="text-red-600 hover:text-red-700 transition-colors" data-astro-cid-3neszb7o>
476 96 06 57
</a> </p> </div> </div> </section> `;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/About/CTA.astro", void 0);

export { $$AboutHero as $, $$Stats as a, $$Values as b, $$Founder as c, $$CTA as d };
