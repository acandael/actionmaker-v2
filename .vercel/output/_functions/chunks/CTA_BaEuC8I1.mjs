import { c as createAstro, a as createComponent, m as maybeRenderHead, e as renderComponent, b as addAttribute, h as renderScript, f as renderTemplate, r as renderSlot } from './astro/server_BeOFNrkS.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_BqFTDrm1.mjs';
import { ArrowRight, ArrowUpDown, Users, Trophy, GraduationCap, Building2, UtensilsCrossed, Palette, Tent, Dumbbell } from 'lucide-react';
import { g as getLangFromUrl, u as useTranslations, B as Button } from './Footer_CXfFBHF-.mjs';
/* empty css                         */
import { g as getCollection } from './_astro_content_Dc0mdglE.mjs';
import { C as Card, a as CardContent } from './card_T02v7n7h.mjs';
import 'clsx';

const ctaImage = new Proxy({"src":"/_astro/hero.BmSAP9KA.jpg","width":4032,"height":3024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/hero.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$b = createAstro("https://www.actionmaker.be");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Hero;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const teamBuildingsUrl = lang === "nl" ? "/teambuildings" : `/${lang}/teambuildings`;
  return renderTemplate`${maybeRenderHead()}<section class="relative flex items-center justify-center w-screen overflow-x-hidden h-[calc(100vh-64px)] mt-[64px]">  <div class="absolute inset-0 w-screen h-full"> <div class="relative w-full h-full"> <div class="absolute inset-0 overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": ctaImage, "alt": "Team building activities", "class": "w-full h-full object-cover object-center md:object-[center_30%] scale-[1.02]", "quality": "max", "loading": "eager" })} </div> <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 md:to-transparent backdrop-blur-[2px]"></div> </div> </div> <div class="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 md:py-24"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-balance text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6"> ${t("home.hero.title")} </h1> <p class="text-lg md:text-xl text-balance text-white/90 mb-6 md:mb-8"> ${t("home.hero.subtitle")} </p> <div class="flex justify-center"> <a${addAttribute(teamBuildingsUrl, "href")} class="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white py-2 px-4 sm:py-2.5 sm:px-5 md:py-4 md:px-8 text-xs sm:text-sm md:text-lg rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"> <span class="whitespace-nowrap">${t("home.hero.cta")}</span> ${renderComponent($$result, "ArrowRight", ArrowRight, { "className": "w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" })} </a> </div> </div> </div> </section> ${renderScript($$result, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/Hero.astro", void 0);

const $$Astro$a = createAstro("https://www.actionmaker.be");
const $$Features = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Features;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const features = [
    {
      icon: ArrowUpDown,
      title: t("features.flexible.title"),
      description: t("features.flexible.description")
    },
    {
      icon: Users,
      title: t("features.personal.title"),
      description: t("features.personal.description")
    },
    {
      icon: Trophy,
      title: t("features.experienced.title"),
      description: t("features.experienced.description")
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative py-32 px-4 bg-linear-to-b from-background to-muted/50 overflow-hidden" data-astro-cid-vnivfuh2>  <div class="absolute inset-0 opacity-40" data-astro-cid-vnivfuh2> <div class="absolute inset-0 bg-grid-white/10" data-astro-cid-vnivfuh2></div> <div class="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" data-astro-cid-vnivfuh2></div> </div> <div class="relative max-w-7xl mx-auto" data-astro-cid-vnivfuh2> <div class="text-center mb-20" data-astro-cid-vnivfuh2> <h2 class="text-balance text-4xl font-bold mb-4" data-astro-cid-vnivfuh2> ${t("features.title")} <span class="text-red-600" data-astro-cid-vnivfuh2>Action Maker</span> </h2> <div class="w-24 h-1 bg-red-600 mx-auto rounded-full" data-astro-cid-vnivfuh2></div> </div> <div class="grid md:grid-cols-3 gap-8" data-astro-cid-vnivfuh2> ${features.map((feature, index) => renderTemplate`<div class="group relative p-8 rounded-2xl bg-white hover:bg-linear-to-b hover:from-white hover:to-red-50/50 shadow-md hover:shadow-xl transition-all duration-500 ease-out" data-feature${addAttribute(index, "data-index")} data-astro-cid-vnivfuh2>  <div class="relative mb-6 inline-block" data-astro-cid-vnivfuh2> <div class="absolute inset-0 bg-red-100 rounded-2xl transform rotate-6 transition-transform duration-300 group-hover:rotate-12" data-astro-cid-vnivfuh2></div> <div class="relative w-16 h-16 rounded-2xl bg-red-500 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110" data-astro-cid-vnivfuh2> ${renderComponent($$result, "feature.icon", feature.icon, { "className": "w-8 h-8 text-white", "data-astro-cid-vnivfuh2": true })} </div> </div>  <h3 class="text-xl font-semibold mb-4 group-hover:text-red-600 transition-colors duration-300" data-astro-cid-vnivfuh2> ${feature.title} </h3> <p class="text-muted-foreground leading-relaxed" data-astro-cid-vnivfuh2>${feature.description}</p>  <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/0 to-transparent group-hover:via-red-500/40 transition-all duration-700" data-astro-cid-vnivfuh2></div> <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-red-500/20 transition-all duration-500" data-astro-cid-vnivfuh2></div> <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-red-500/20 transition-all duration-500" data-astro-cid-vnivfuh2></div> </div>`)} </div> </div> </section>  ${renderScript($$result, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/Features.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/Features.astro", void 0);

const actief = new Proxy({"src":"/_astro/actief.Dh2hPa6D.jpg","width":800,"height":567,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/categories/actief.jpg";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_0$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: actief
}, Symbol.toStringTag, { value: 'Module' }));

const cityGames = new Proxy({"src":"/_astro/city-games.CpcSJou2.jpg","width":800,"height":566,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/categories/city-games.jpg";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_1$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: cityGames
}, Symbol.toStringTag, { value: 'Module' }));

const indoor = new Proxy({"src":"/_astro/indoor.CTJQX_yj.jpg","width":800,"height":567,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/categories/indoor.jpg";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_2$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: indoor
}, Symbol.toStringTag, { value: 'Module' }));

const innovaction = new Proxy({"src":"/_astro/innovaction.CT7azeEP.jpg","width":800,"height":600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/categories/innovaction.jpg";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_3$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: innovaction
}, Symbol.toStringTag, { value: 'Module' }));

const outdoor = new Proxy({"src":"/_astro/outdoor.H8IOX1Vu.jpg","width":800,"height":567,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/categories/outdoor.jpg";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_4$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: outdoor
}, Symbol.toStringTag, { value: 'Module' }));

const workshop = new Proxy({"src":"/_astro/workshop.Z7PsUtXS.jpg","width":800,"height":567,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/categories/workshop.jpg";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_5$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: workshop
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro("https://www.actionmaker.be");
const $$ActivityCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ActivityCard;
  const { title, description, image, categoryId, index = 999 } = Astro2.props;
  const categoryMapping = {
    active: "actief",
    innovaction: "innovaction"
  };
  const imageImports = /* #__PURE__ */ Object.assign({"/src/assets/categories/actief.jpg": __vite_glob_0_0$2,"/src/assets/categories/city-games.jpg": __vite_glob_0_1$2,"/src/assets/categories/indoor.jpg": __vite_glob_0_2$2,"/src/assets/categories/innovaction.jpg": __vite_glob_0_3$2,"/src/assets/categories/outdoor.jpg": __vite_glob_0_4$1,"/src/assets/categories/workshop.jpg": __vite_glob_0_5$1




});
  const baseImageName = categoryId.split("/").pop() || categoryId;
  const mappedImageName = categoryMapping[baseImageName] || baseImageName;
  const imagePath = `/src/assets/categories/${mappedImageName}.jpg`;
  if (!imageImports[imagePath]) {
    console.error(`Image not found: ${imagePath}`);
    throw new Error(`Image not found: ${imagePath}`);
  }
  const imageData = imageImports[imagePath].default;
  return renderTemplate`${renderComponent($$result, "Card", Card, { "className": "group overflow-hidden transition-all duration-300 hover:shadow-xl translate-y-8 opacity-0", "data-category-card": true, "data-index": index }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardContent", CardContent, { "className": "p-0 relative" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="relative h-72 overflow-hidden"> ${renderComponent($$result3, "Image", $$Image, { "src": imageData, "alt": title, "width": 800, "height": 600, "class": "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" })} <div class="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-70"></div> <div class="absolute inset-0 flex flex-col items-center justify-center text-white p-8"> ${renderSlot($$result3, $$slots["icon"])} <h3 class="text-2xl font-bold mb-3 text-center tracking-wide"> ${title} </h3> <p class="text-sm text-center max-w-xs opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"> ${description} </p> </div> </div> ` })} ` })}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/TeamActivities/ActivityCard.astro", void 0);

const $$Astro$8 = createAstro("https://www.actionmaker.be");
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<div class="text-center mb-16"> <p class="text-lg text-muted-foreground mb-2">${t("teamActivities.subtitle")}</p> <h2 class="text-balance text-4xl font-bold">${t("teamActivities.title")}</h2> </div>`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/TeamActivities/SectionTitle.astro", void 0);

const $$Astro$7 = createAstro("https://www.actionmaker.be");
const $$CategoryIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CategoryIcon;
  const { category } = Astro2.props;
  const iconMap = {
    actief: Dumbbell,
    outdoor: Tent,
    cultureel: Palette,
    culinair: UtensilsCrossed,
    indoor: Building2,
    workshop: GraduationCap
  };
  const IconComponent = iconMap[category] || Building2;
  return renderTemplate`${maybeRenderHead()}<div class="mb-6 text-white"> ${renderComponent($$result, "IconComponent", IconComponent, { "className": "w-12 h-12" })} </div>`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/TeamActivities/CategoryIcon.astro", void 0);

const $$Astro$6 = createAstro("https://www.actionmaker.be");
const $$TeamActivities = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TeamActivities;
  const lang = getLangFromUrl(Astro2.url);
  const categoryMapping = {
    active: "actief",
    culinary: "culinair",
    cultural: "cultureel",
    innovaction: "innovaction"
  };
  const desiredOrder = {
    indoor: 1,
    outdoor: 2,
    actief: 3,
    innovaction: 4,
    "city-games": 5,
    workshop: 6
  };
  const allCategories = await getCollection("categories");
  const categories = allCategories.filter((category) => category.id.startsWith(`${lang}/`)).map((category) => {
    const id = category.id.replace(`${lang}/`, "");
    return {
      id,
      title: category.data.title,
      description: category.data.description,
      order: desiredOrder[id] || 999
      // Use the desired order or default to 999
    };
  }).sort((a, b) => a.order - b.order);
  const getCategoryUrl = (categoryId) => {
    const baseUrl = "/teambuildings";
    const mappedCategoryId = categoryMapping[categoryId] || categoryId;
    const queryParam = `?category=${mappedCategoryId}#activities-section`;
    return lang === "nl" ? `${baseUrl}${queryParam}` : `/${lang}${baseUrl}${queryParam}`;
  };
  return renderTemplate`${maybeRenderHead()}<section class="py-24 px-4 bg-background"> <div class="max-w-7xl mx-auto"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "subtitle": "Welke Soort Teambuilding Zoek Je?", "title": "Maak Je Keuze" })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${categories.map((category) => renderTemplate`<a${addAttribute(getCategoryUrl(category.id), "href")}> ${renderComponent($$result, "ActivityCard", $$ActivityCard, { "title": category.title, "description": category.description, "image": `/images/categories/${category.id}.jpg`, "categoryId": category.id, "index": category.order }, { "icon": async ($$result2) => renderTemplate`${renderComponent($$result2, "CategoryIcon", $$CategoryIcon, { "category": category.id, "slot": "icon" })}` })} </a>`)} </div> </div> </section> ${renderScript($$result, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/TeamActivities.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/TeamActivities.astro", void 0);

const anjaCapelle = new Proxy({"src":"/_astro/anja-capelle.V-PaucZl.jpeg","width":540,"height":458,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/testimonials/anja-capelle.jpeg";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_0$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: anjaCapelle
}, Symbol.toStringTag, { value: 'Module' }));

const julieDejonckheere = new Proxy({"src":"/_astro/julie-dejonckheere.BQvzlhMc.jpeg","width":200,"height":200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/testimonials/julie-dejonckheere.jpeg";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_1$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: julieDejonckheere
}, Symbol.toStringTag, { value: 'Module' }));

const lucPierson = new Proxy({"src":"/_astro/luc-pierson.tEUPgF4A.jpeg","width":200,"height":200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/testimonials/luc-pierson.jpeg";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_2$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: lucPierson
}, Symbol.toStringTag, { value: 'Module' }));

const tomVanoirbeek = new Proxy({"src":"/_astro/tom-vanoirbeek.CRpWP2ZQ.jpg","width":183,"height":165,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/testimonials/tom-vanoirbeek.jpg";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_3$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: tomVanoirbeek
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("https://www.actionmaker.be");
const $$TestimonialCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TestimonialCard;
  const { name, company, text, image } = Astro2.props;
  const imageImports = /* #__PURE__ */ Object.assign({"/src/assets/testimonials/anja-capelle.jpeg": __vite_glob_0_0$1,"/src/assets/testimonials/julie-dejonckheere.jpeg": __vite_glob_0_1$1,"/src/assets/testimonials/luc-pierson.jpeg": __vite_glob_0_2$1,"/src/assets/testimonials/tom-vanoirbeek.jpg": __vite_glob_0_3$1




});
  const imagePath = `/src/assets/testimonials/${image}`;
  const imageData = imageImports[imagePath]?.default;
  if (!imageData) {
    console.error(`Image not found: ${imagePath}`);
  }
  return renderTemplate`${maybeRenderHead()}<div class="group relative p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300" data-astro-cid-rijrvxho> <div class="flex flex-col items-center text-center" data-astro-cid-rijrvxho> <div class="mb-8 relative" data-astro-cid-rijrvxho> <div class="absolute inset-0 bg-linear-to-b from-red-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-rijrvxho></div> ${imageData && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": imageData, "alt": name, "width": 96, "height": 96, "class": "w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl transform group-hover:scale-105 transition-transform duration-300", "data-astro-cid-rijrvxho": true })}`} </div> <blockquote class="text-lg text-muted-foreground mb-6 italic relative px-8" data-astro-cid-rijrvxho> <span class="relative z-10" data-astro-cid-rijrvxho>"${text}"</span> </blockquote> <div class="relative" data-astro-cid-rijrvxho> <div class="font-semibold text-lg group-hover:text-red-600 transition-colors duration-300" data-astro-cid-rijrvxho> ${name} </div> <div class="text-muted-foreground" data-astro-cid-rijrvxho>${company}</div> </div> </div> </div> `;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/Testimonials/TestimonialCard.astro", void 0);

const amazon = new Proxy({"src":"/_astro/amazon.Cbs_o6ur.png","width":800,"height":479,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/logos/amazon.png";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: amazon
}, Symbol.toStringTag, { value: 'Module' }));

const apple = new Proxy({"src":"/_astro/apple.DMOtXEII.png","width":800,"height":983,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/logos/apple.png";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: apple
}, Symbol.toStringTag, { value: 'Module' }));

const europeanCouncil = new Proxy({"src":"/_astro/european-council.Bpbcvvtw.png","width":1024,"height":817,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/logos/european-council.png";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: europeanCouncil
}, Symbol.toStringTag, { value: 'Module' }));

const google = new Proxy({"src":"/_astro/google.CVASPXT7.png","width":800,"height":271,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/logos/google.png";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: google
}, Symbol.toStringTag, { value: 'Module' }));

const hbo = new Proxy({"src":"/_astro/hbo.UD6BlatT.png","width":800,"height":330,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/logos/hbo.png";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: hbo
}, Symbol.toStringTag, { value: 'Module' }));

const kazou = new Proxy({"src":"/_astro/kazou.CMJo01Xy.png","width":60,"height":60,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/logos/kazou.png";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: kazou
}, Symbol.toStringTag, { value: 'Module' }));

const microsoft = new Proxy({"src":"/_astro/microsoft.B7pp5460.png","width":800,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/logos/microsoft.png";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: microsoft
}, Symbol.toStringTag, { value: 'Module' }));

const nike = new Proxy({"src":"/_astro/nike.ByAih8L9.png","width":800,"height":286,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/logos/nike.png";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: nike
}, Symbol.toStringTag, { value: 'Module' }));

const nmbs = new Proxy({"src":"/_astro/nmbs.BWxBs5VM.png","width":278,"height":181,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/logos/nmbs.png";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: nmbs
}, Symbol.toStringTag, { value: 'Module' }));

const proximus = new Proxy({"src":"/_astro/proximus.Dn8kgvej.png","width":1000,"height":838,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/logos/proximus.png";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: proximus
}, Symbol.toStringTag, { value: 'Module' }));

const siemens = new Proxy({"src":"/_astro/siemens.B5ZQ5enm.png","width":220,"height":150,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/logos/siemens.png";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: siemens
}, Symbol.toStringTag, { value: 'Module' }));

const ugent = new Proxy({"src":"/_astro/ugent.1wrBQVTF.png","width":945,"height":795,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/logos/ugent.png";
							}
							
							return target[name];
						}
					});

const __vite_glob_0_11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: ugent
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://www.actionmaker.be");
const $$ClientLogos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ClientLogos;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const imageImports = /* #__PURE__ */ Object.assign({"/src/assets/logos/amazon.png": __vite_glob_0_0,"/src/assets/logos/apple.png": __vite_glob_0_1,"/src/assets/logos/european-council.png": __vite_glob_0_2,"/src/assets/logos/google.png": __vite_glob_0_3,"/src/assets/logos/hbo.png": __vite_glob_0_4,"/src/assets/logos/kazou.png": __vite_glob_0_5,"/src/assets/logos/microsoft.png": __vite_glob_0_6,"/src/assets/logos/nike.png": __vite_glob_0_7,"/src/assets/logos/nmbs.png": __vite_glob_0_8,"/src/assets/logos/proximus.png": __vite_glob_0_9,"/src/assets/logos/siemens.png": __vite_glob_0_10,"/src/assets/logos/ugent.png": __vite_glob_0_11




});
  const logos = await getCollection("logos");
  return renderTemplate`${maybeRenderHead()}<div class="space-y-16" data-astro-cid-sodmizi3> <h3 class="text-center text-xl text-muted-foreground animate-fade-in" data-astro-cid-sodmizi3> ${t("testimonials.logos-title")} </h3> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" data-astro-cid-sodmizi3> ${logos.map((logo, index) => {
    const imagePath = `/src/assets/logos/${logo.data.image}`;
    const imageData = imageImports[imagePath]?.default;
    if (!imageData) {
      console.error(`Logo image not found: ${imagePath}`);
      return null;
    }
    return renderTemplate`${renderComponent($$result, "Card", Card, { "className": "group relative h-32 overflow-hidden bg-white hover:bg-muted/50 transition-all duration-500 ease-out", "data-client-logo": true, "data-index": index, "data-astro-cid-sodmizi3": true }, { "default": async ($$result2) => renderTemplate`<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500" data-astro-cid-sodmizi3> <div class="absolute inset-0 bg-linear-to-br from-red-500/10 via-red-500/5 to-transparent" data-astro-cid-sodmizi3></div> </div> <div class="relative h-full px-8 py-6 flex items-center justify-center" data-astro-cid-sodmizi3> ${renderComponent($$result2, "Image", $$Image, { "src": imageData, "alt": logo.data.name, "width": 120, "height": 60, "class": "w-auto h-16 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-500 ease-out", "data-astro-cid-sodmizi3": true })} </div> <div class="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/0 to-transparent group-hover:via-red-500/40 transition-all duration-700 ease-in-out" data-astro-cid-sodmizi3></div> <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-red-500/20 transition-all duration-500 ease-out" data-astro-cid-sodmizi3></div> <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-red-500/20 transition-all duration-500 ease-out" data-astro-cid-sodmizi3></div> ` })}`;
  })} </div> </div>  ${renderScript($$result, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/Testimonials/ClientLogos.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/Testimonials/ClientLogos.astro", void 0);

const $$Astro$3 = createAstro("https://www.actionmaker.be");
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  let testimonials = [];
  let logos = [];
  try {
    const allTestimonials = await getCollection("testimonials");
    testimonials = allTestimonials.filter((testimonial) => {
      const isLocaleMatch = testimonial.id.startsWith(`${lang}/`);
      return isLocaleMatch;
    });
    logos = await getCollection("logos");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return renderTemplate`${maybeRenderHead()}<section class="py-24 px-4 bg-linear-to-b from-background to-muted/50"> <div class="max-w-7xl mx-auto"> <div class="text-center mb-20"> <h2 class="text-balance text-4xl font-bold mb-4">${t("testimonials.title")}</h2> <div class="w-24 h-1 bg-red-600 mx-auto rounded-full"></div> </div> ${testimonials && testimonials.length > 0 && renderTemplate`<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32"> ${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result, "TestimonialCard", $$TestimonialCard, { "name": testimonial.data.name, "company": testimonial.data.company, "text": testimonial.data.text, "image": testimonial.data.image })}`)} </div>`} ${renderComponent($$result, "ClientLogos", $$ClientLogos, { "clients": logos })} </div> </section>`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/Testimonials.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Testimonials", $$Testimonials, {})}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/Testimonials/index.astro", void 0);

const $$Astro$2 = createAstro("https://www.actionmaker.be");
const $$FAQAccordion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FAQAccordion;
  const lang = getLangFromUrl(Astro2.url);
  const faqs = await getCollection("faqs", ({ id }) => {
    return id.startsWith(`${lang}/`);
  });
  return renderTemplate`${maybeRenderHead()}<div class="w-full"> <div id="faq-root"${addAttribute(JSON.stringify(faqs), "data-faqs")}>  </div> </div> ${renderScript($$result, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/FAQ/FAQAccordion.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/FAQ/FAQAccordion.astro", void 0);

const $$Astro$1 = createAstro("https://www.actionmaker.be");
const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FAQ;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="py-24 px-4 bg-background"> <div class="max-w-3xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-balance text-4xl font-bold mb-4">${t("faq.title")}</h2> </div> ${renderComponent($$result, "FAQAccordion", $$FAQAccordion, {})} </div> </section>`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/FAQ.astro", void 0);

const $$Astro = createAstro("https://www.actionmaker.be");
const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTA;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const stats = [
    { value: "10000+", label: t("cta.klanten") },
    { value: "50+", label: t("cta.activiteiten") },
    { value: "10+", label: t("cta.jaar") },
    { value: "98%", label: t("cta.reviews") }
  ];
  const getLocalizedPath = (path) => {
    return lang === "nl" ? path : `/${lang}${path}`;
  };
  return renderTemplate`${maybeRenderHead()}<section class="relative py-32 px-4 overflow-hidden bg-zinc-50" data-astro-cid-4xty6sx2>  <div class="absolute inset-0" data-astro-cid-4xty6sx2> <div class="absolute inset-0 bg-grid-pattern mix-blend-multiply opacity-[0.15]" data-astro-cid-4xty6sx2></div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-50 via-zinc-50/80 to-zinc-50" data-astro-cid-4xty6sx2></div> </div> <div class="relative max-w-7xl mx-auto" data-astro-cid-4xty6sx2> <div class="grid lg:grid-cols-2 gap-16 items-center" data-astro-cid-4xty6sx2>  <div class="space-y-12" data-astro-cid-4xty6sx2> <div class="space-y-6" data-astro-cid-4xty6sx2> <h2 class="text-balance text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight" data-astro-cid-4xty6sx2> <span class="text-red-600" data-astro-cid-4xty6sx2>${t("cta.heading.highlight")}</span> ${t("cta.heading.line1")} <br data-astro-cid-4xty6sx2> <span class="text-red-600" data-astro-cid-4xty6sx2>${t("cta.heading.highlight")}</span> ${t("cta.heading.line2")} </h2> <p class="text-xl text-muted-foreground max-w-xl" data-astro-cid-4xty6sx2> ${t("cta.ontdek")} </p> </div>  <div class="grid grid-cols-2 gap-8" data-astro-cid-4xty6sx2> ${stats.map(({ value, label }) => renderTemplate`<div class="space-y-2" data-astro-cid-4xty6sx2> <div class="text-3xl font-bold text-green-600" data-astro-cid-4xty6sx2>${value}</div> <div class="text-muted-foreground" data-astro-cid-4xty6sx2>${label}</div> </div>`)} </div> <div class="flex flex-col sm:flex-row gap-4" data-astro-cid-4xty6sx2> ${renderComponent($$result, "Button", Button, { "size": "lg", "className": "bg-red-600 hover:bg-red-700 text-white group px-8 py-6 text-lg rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300", "data-astro-cid-4xty6sx2": true }, { "default": ($$result2) => renderTemplate` <a${addAttribute(getLocalizedPath("/teambuildings"), "href")} class="flex items-center gap-2" data-astro-cid-4xty6sx2> ${t("cta.cta")} ${renderComponent($$result2, "ArrowRight", ArrowRight, { "className": "ml-2 h-5 w-5 transition-transform group-hover:translate-x-1", "data-astro-cid-4xty6sx2": true })} </a> ` })} </div> </div>  <div class="relative" data-astro-cid-4xty6sx2> <div class="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500" data-astro-cid-4xty6sx2> ${renderComponent($$result, "Image", $$Image, { "src": ctaImage, "alt": "Team collaboration", "width": 800, "height": 600, "class": "absolute inset-0 w-full h-full object-cover", "data-astro-cid-4xty6sx2": true })} <div class="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" data-astro-cid-4xty6sx2></div> </div>  <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-red-600/10 rounded-full blur-2xl" data-astro-cid-4xty6sx2></div> <div class="absolute -top-6 -right-6 w-32 h-32 bg-red-600/10 rounded-full blur-2xl" data-astro-cid-4xty6sx2></div> </div> </div> </div> </section> `;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/CTA.astro", void 0);

export { $$Hero as $, $$TeamActivities as a, $$Features as b, $$Index as c, $$FAQ as d, $$CTA as e };
