import { c as createComponent, b as createAstro, e as addAttribute, f as renderScript, a as renderTemplate, m as maybeRenderHead, r as renderComponent, A as AstroError, U as UnknownContentCollectionError, R as RenderUndefinedEntryError, u as unescapeHTML, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent, k as renderHead, l as renderSlot } from './astro/server_BQZACKfH.mjs';
import 'kleur/colors';
/* empty css                           */
import { clsx } from 'clsx';
import { $ as $$Image, V as VALID_INPUT_FORMATS } from './_astro_assets_uY909pE1.mjs';
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ArrowRight, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z, ZodIssueCode } from 'zod';
import { r as removeBase, i as isRemotePath, p as prependForwardSlash } from './path_Cvt6sEOY.mjs';
import * as devalue from 'devalue';

const $$Astro$5 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/anthonycandaele/Projects/ActionMaker/website/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/node_modules/astro/components/ClientRouter.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const languages = {
  nl: "Nederlands",
  fr: "Français",
  en: "English"
};
const defaultLang = "nl";
const ui = {
  nl: {
    // Home
    "home.hero.title": "Een breed gamma van unieke teambuildings",
    "home.hero.subtitle": "Versterk je team met een leuke dag zonder zorgen",
    "home.hero.cta": "Bekijk onze activiteiten/teambuildings",
    // Navigation
    "nav.home": "Home",
    "nav.teambuildings": "Teambuildings",
    "nav.concepts": "Concepts",
    "nav.concepten": "Concepten",
    "nav.about": "Over ons",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "nav.close": "Menu sluiten",
    // Features
    "features.title": "Waarom kiezen voor",
    "features.flexible.title": "Flexibel",
    "features.flexible.description": "Een onvoorziene wijziging op het laatste moment? Geen probleem, wij zijn flexibel en kunnen jouw activiteit/teambuilding aanpassen aan elke omstandigheid.",
    "features.personal.title": "Persoonlijk",
    "features.personal.description": "Action Maker organiseert praktisch alle activiteiten zelf en indien niet werken we met betrouwbare onderaannemers",
    "features.experienced.title": "Ervaren animatoren",
    "features.experienced.description": "Al onze animatoren zijn heel ervaren en gedreven. Als ware experts begeleiden ze verschillende activiteiten.",
    // CTA
    "cta.versterk": "Versterk je team vandaag nog",
    "cta.description": "Ontdek onze unieke teambuilding activiteiten en creëer onvergetelijke ervaringen voor je team.",
    "cta.button": "Vind je teambuilding",
    "cta.klanten": "Tevreden klanten",
    "cta.activiteiten": "Unieke activiteiten",
    "cta.jaar": "Jaar ervaring",
    "cta.reviews": "Positieve reviews",
    "cta.ontdek": "Ontdek onze unieke teambuilding activiteiten en creëer onvergetelijke ervaringen voor je team.",
    "cta.cta": "Vind je teambuilding",
    // CTA Section
    "cta.heading.line1": "Je Team,",
    "cta.heading.line2": "Je Bedrijf",
    "cta.heading.highlight": "Versterk",
    // Testimonials
    "testimonials.logos-title": "Zij vertrouwen op Action Maker",
    "testimonials.title": "Wat onze klanten zeggen",
    // FAQ
    "faq.title": "Veelgestelde vragen",
    "faq.question1": "Hoe werkt het boekingsproces?",
    "faq.answer1": "Het boekingsproces is eenvoudig...",
    // Footer
    "footer.contact": "Contacteer ons",
    "footer.address": "Hundelgemsesteenweg 445 A, 9050 Gentbrugge",
    "footer.rights": "Alle rechten voorbehouden",
    "footer.development": "Webontwikkeling door",
    // Footer Section Titles
    "footer.sections.indoor": "Indoor activiteiten",
    "footer.sections.outdoor": "Outdoor activiteiten",
    "footer.sections.city-games": "City Games",
    "footer.sections.actief": "Actief",
    "footer.sections.innovaction": "InnovAction",
    "footer.sections.workshops": "Workshops",
    // Teambuildings
    "teambuildings.title": "Vind je teambuilding in ons breed gamma",
    "teambuildings.activities-found_one": "{{count}} activiteit gevonden in",
    "teambuildings.activities-found_other": "{{count}} activiteiten gevonden in",
    "teambuildings.activities-available_one": "{{count}} activiteit beschikbaar",
    "teambuildings.activities-available_other": "{{count}} activiteiten beschikbaar",
    "teambuildings.all-activities": "Alle activiteiten",
    "teambuildings.regular-title": "Activiteiten",
    "teambuildings.games-title": "Teambuildinggames",
    // About
    "about.title": "Over Action Maker",
    "about.description.p1": "Er komt heel wat kijken bij het organiseren van een teambuilding. Je moet geschikt materiaal vinden, gespecialiseerde animatoren, en wat als je door gewijzigde omstandigheden op het laatste moment een andere activiteit moet vinden?",
    "about.description.p2": "We weten hoe stresserend dit kan zijn. Action Maker heeft immers 15 jaar ervaring met het organiseren van teambuildings voor bedrijven en het versterken van de groepsgeest.",
    "about.description.p3": "Neem daarom vandaag nog contact op met Action Maker, je ontvangt binnen de twee dagen een offerte en wij nemen alle zorgen uit je handen zodat je team een leuke dag heeft zonder zorgen, en versterkt als team uit de ervaring komt.",
    "about.image.alt": "Team building activiteit",
    // Founder
    "about.founder.title": "Oprichter",
    "about.founder.subtitle": "Oprichter & Zaakvoerder",
    "about.founder.description.p1": "Geïnspireerd door mijn vader en zijn eigen evenementenbureau en na mijn opleiding als topschermer, begon ik met het organiseren van scherminititaties.",
    "about.founder.description.p2": "Het frustreerde mij dat veel teambuilding bedrijven te weinig naar de klant luisterden en steeds dezelfde activiteiten organiseerden, vaak op amateuristische wijze.",
    "about.founder.description.p3": "Daarom begon ik 15 jaar geleden met het uitbouwen van een breed gamma aan unieke activiteiten. Hierbij stond persoonlijk contact met de klant voorop.",
    "about.founder.description.p4": "Het is mijn overtuiging dat bedrijven een leuke dag moeten hebben zonder zorgen, zodat hun werknemers als een versterkt team uit de ervaring komen.",
    "about.founder.image.alt": "Frederiek Troubleyn",
    // About Stats
    "about.stats.tevreden": "Tevreden klanten",
    "about.stats.unieke": "Unieke activiteiten",
    "about.stats.jaar": "Jaar ervaring",
    "about.stats.positief": "Positieve reviews",
    // About Values
    "about.values.title": "Onze Waarden",
    "about.values.subtitle": "Bij Action Maker streven we naar excellentie in alles wat we doen",
    "about.values.passie.title": "Passie",
    "about.values.passie.description": "Wij zijn gepassioneerd door teambuilding en dat merk je aan alles wat we doen",
    "about.values.kwaliteit.title": "Kwaliteit",
    "about.values.kwaliteit.description": "We streven naar de hoogste kwaliteit in materiaal en begeleiding",
    "about.values.persoonlijk.title": "Persoonlijk",
    "about.values.persoonlijk.description": "Persoonlijk contact en maatwerk staan bij ons centraal",
    "about.values.resultaat.title": "Resultaat",
    "about.values.resultaat.description": "We focussen op het versterken van teams en meetbare resultaten",
    // About CTA
    "about.cta.title": "Klaar om je team te versterken?",
    "about.cta.description": "Neem vandaag nog contact op met Action Maker en ontdek hoe wij jouw team kunnen versterken met onze unieke teambuilding activiteiten.",
    "about.cta.cta": "Contacteer ons",
    "about.cta.call": "Of bel ons direct op",
    // Contact Info
    "contact.title": "Neem vandaag nog contact met ons op",
    "contact.description": "Wij helpen je graag bij het organiseren van je teambuilding. Neem vandaag nog contact met ons op.",
    "contact.read-more": "Lees meer over ons",
    "contact.image.alt": "Team building activiteit",
    // Contact Features
    "contact.features.flexible": "Flexibel",
    "contact.features.personal": "Persoonlijke aanpak",
    "contact.features.experienced": "Ervaren animatoren",
    // Activity page translations
    "activity.features-title": "Wat kun je bijvoorbeeld verwachten",
    "activity.group-size": "Groepsgrootte",
    "activity.duration": "Duur",
    "activity.availability": "Beschikbaarheid",
    "activity.request-quote": "Offerte aanvragen",
    "activity.booking-title": "Deze activiteit boeken",
    "activity.gallery-title": "Galerij",
    "activity.video-title": "Video",
    // Team Activities
    "teamActivities.title": "Welk type activiteit/teambuilding zoek je?",
    "teamActivities.subtitle": "Maak je keuze",
    // Footer translations
    "footer.rights-reserved": "Alle rechten voorbehouden",
    "footer.terms-of-service": "Algemene Voorwaarden",
    "footer.disclaimer": "Disclaimer"
  },
  fr: {
    // Home
    "home.hero.title": "Une large gamme d'activités de team building uniques",
    "home.hero.subtitle": "Renforcez votre équipe avec une journée agréable sans soucis",
    "home.hero.cta": "Découvrez nos activités",
    // Navigation
    "nav.home": "Accueil",
    "nav.teambuildings": "Team Building",
    "nav.concepts": "Concepts",
    "nav.concepten": "Concepts",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "nav.close": "Fermer le menu",
    // CTA
    "cta.versterk": "Renforcez votre équipe dès aujourd'hui",
    "cta.description": "Découvrez nos activités uniques de team building et créez des expériences inoubliables pour votre équipe.",
    "cta.button": "Trouvez votre team building",
    "cta.klanten": "Clients satisfaits",
    "cta.activiteiten": "Activités uniques",
    "cta.jaar": "Années d'expérience",
    "cta.reviews": "Avis positifs",
    "cta.ontdek": "Découvrez nos activités uniques de team building et créez des expériences inoubliables pour votre équipe.",
    "cta.cta": "Trouvez votre team building",
    // CTA Section
    "cta.heading.line1": "Votre Équipe,",
    "cta.heading.line2": "Votre Entreprise",
    "cta.heading.highlight": "Renforcez",
    // Testimonials
    "testimonials.logos-title": "Ils font confiance à Action Maker",
    "testimonials.title": "Ce que disent nos clients",
    // FAQ
    "faq.title": "Questions fréquentes",
    "faq.question1": "Comment fonctionne le processus de réservation?",
    "faq.answer1": "Le processus de réservation est simple...",
    // Footer
    "footer.contact": "Contactez-nous",
    "footer.address": "Hundelgemsesteenweg 445 A, 9050 Gentbrugge",
    "footer.rights": "Tous droits réservés",
    "footer.development": "Développement web par",
    // Footer Section Titles
    "footer.sections.indoor": "Activités d'intérieur",
    "footer.sections.outdoor": "Activités d'extérieur",
    "footer.sections.workshops": "Ateliers",
    "footer.sections.citygames": "Jeux de ville",
    // Features
    "features.title": "Pourquoi Choisir",
    "features.flexible.title": "Flexible",
    "features.flexible.description": "Un changement imprévu à la dernière minute ? Pas de problème, nous sommes flexibles et pouvons adapter votre activité/team building à toutes les circonstances.",
    "features.personal.title": "Personnel",
    "features.personal.description": "Action Maker organise pratiquement toutes les activités lui-même et sinon nous travaillons avec des sous-traitants fiables",
    "features.experienced.title": "Animateurs expérimentés",
    "features.experienced.description": "Tous nos animateurs sont expérimentés et experts dans les activités qu'ils encadrent.",
    // Teambuildings
    "teambuildings.title": "Trouvez votre team building dans notre large gamme",
    "teambuildings.activities-found_one": "{{count}} activité trouvée dans",
    "teambuildings.activities-found_other": "{{count}} activités trouvées dans",
    "teambuildings.activities-available_one": "{{count}} activité disponible",
    "teambuildings.activities-available_other": "{{count}} activités disponibles",
    "teambuildings.all-activities": "Toutes les activités",
    "teambuildings.regular-title": "Activités",
    "teambuildings.games-title": "Jeux de team building",
    // About
    "about.title": "À propos d'Action Maker",
    "about.description.p1": "L'organisation d'un Team Building demande beaucoup de préparation. Vous devez trouver le matériel approprié, des animateurs spécialisés, et que faire si vous devez trouver une autre activité à la dernière minute en raison de circonstances modifiées ?",
    "about.description.p2": "Nous savons à quel point cela peut être stressant. Action Maker a 15 ans d'expérience dans l'organisation de team buildings pour les entreprises et le renforcement de l'esprit d'équipe.",
    "about.description.p3": "Contactez donc Action Maker dès aujourd'hui, vous recevrez un devis dans les deux jours et nous nous occuperons de tout pour que votre équipe passe une belle journée sans soucis et sorte renforcée de l'expérience.",
    "about.image.alt": "Activité de team building",
    // Founder
    "about.founder.title": "Fondateur",
    "about.founder.subtitle": "Fondateur & Directeur",
    "about.founder.description.p1": "Mon père avait sa propre agence événementielle. Après ma formation d'escrimeur de haut niveau, j'ai commencé à organiser des initiations à l'escrime.",
    "about.founder.description.p2": "J'étais frustré de voir que de nombreuses entreprises de team building n'écoutaient pas assez leurs clients et organisaient toujours les mêmes activités, souvent de manière amateur.",
    "about.founder.description.p3": "C'est pourquoi j'ai commencé il y a 15 ans à développer une large gamme d'activités uniques. Le contact personnel avec le client était la priorité.",
    "about.founder.description.p4": "Je suis convaincu que les entreprises doivent passer une bonne journée sans soucis, afin que leurs employés ressortent de l'expérience en équipe renforcée.",
    "about.founder.image.alt": "Frederiek Troubleyn",
    // About Stats
    "about.stats.tevreden": "Clients satisfaits",
    "about.stats.unieke": "Activités uniques",
    "about.stats.jaar": "Années d'expérience",
    "about.stats.positief": "Avis positifs",
    // About Values
    "about.values.title": "Nos Valeurs",
    "about.values.subtitle": "Chez Action Maker, nous visons l'excellence dans tout ce que nous faisons",
    "about.values.passie.title": "Passion",
    "about.values.passie.description": "Nous sommes passionnés par le team building et cela se reflète dans tout ce que nous faisons",
    "about.values.kwaliteit.title": "Qualité",
    "about.values.kwaliteit.description": "Nous visons la plus haute qualité en matériel et en encadrement",
    "about.values.persoonlijk.title": "Personnel",
    "about.values.persoonlijk.description": "Le contact personnel et le sur-mesure sont au cœur de notre approche",
    "about.values.resultaat.title": "Résultat",
    "about.values.resultaat.description": "Nous nous concentrons sur le renforcement des équipes et des résultats mesurables",
    // About CTA
    "about.cta.title": "Prêt à renforcer votre équipe ?",
    "about.cta.description": "Contactez Action Maker dès aujourd'hui et découvrez comment nous pouvons renforcer votre équipe avec nos activités uniques de team building.",
    "about.cta.cta": "Contactez-nous",
    "about.cta.call": "Ou appelez-nous directement au",
    // Contact Info
    "contact.title": "Contactez-nous",
    "contact.description": "Nous vous aidons volontiers à organiser votre team building. Contactez-nous dès aujourd'hui.",
    "contact.read-more": "En savoir plus sur nous",
    "contact.image.alt": "Activité de team building",
    // Contact Features
    "contact.features.flexible": "Flexible et adaptable",
    "contact.features.personal": "Approche personnalisée",
    "contact.features.experienced": "Animateurs expérimentés",
    // Activity page translations
    "activity.features-title": "Ce que vous pouvez attendre",
    "activity.group-size": "Taille du groupe",
    "activity.duration": "Durée",
    "activity.availability": "Disponibilité",
    "activity.request-quote": "Demander un devis",
    "activity.booking-title": "Réserver cette activité",
    "activity.gallery-title": "Galerie",
    "activity.video-title": "Vidéo",
    // Team Activities
    "teamActivities.title": "Quel type d'activité/team building recherchez-vous ?",
    "teamActivities.subtitle": "Faites votre choix",
    // Footer translations
    "footer.rights-reserved": "Tous droits réservés",
    "footer.terms-of-service": "Conditions Générales",
    "footer.disclaimer": "Avertissement"
  },
  en: {
    // Home
    "home.hero.title": "A wide range of unique team building activities",
    "home.hero.subtitle": "Strengthen your team with a fun day without worries",
    "home.hero.cta": "View our activities",
    // Navigation
    "nav.home": "Home",
    "nav.teambuildings": "Team Building",
    "nav.concepts": "Concepts",
    "nav.concepten": "Concepts",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "nav.close": "Close menu",
    // CTA
    "cta.versterk": "Strengthen your team today",
    "cta.description": "Discover our unique team building activities and create unforgettable experiences for your team.",
    "cta.button": "Find your team building",
    "cta.klanten": "Satisfied Customers",
    "cta.activiteiten": "Unique Activities",
    "cta.jaar": "Years Experience",
    "cta.reviews": "Positive Reviews",
    "cta.ontdek": "Discover our unique team building activities and create unforgettable experiences for your team.",
    "cta.cta": "Find your team building",
    // CTA Section
    "cta.heading.line1": "your team,",
    "cta.heading.line2": "your company",
    "cta.heading.highlight": "Strengthen",
    // Testimonials
    "testimonials.logos-title": "They trust Action Maker",
    "testimonials.title": "What our customers say",
    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.question1": "How does the booking process work?",
    "faq.answer1": "The booking process is simple...",
    // Footer
    "footer.contact": "Contact us",
    "footer.address": "Hundelgemsesteenweg 445 A, 9050 Gentbrugge",
    "footer.rights": "All rights reserved",
    "footer.development": "Web development by",
    // Footer Section Titles
    "footer.sections.indoor": "Indoor Activities",
    "footer.sections.outdoor": "Outdoor Activities",
    "footer.sections.workshops": "Workshops",
    "footer.sections.citygames": "City Games",
    // Features
    "features.title": "Why Choose Action Maker",
    "features.flexible.title": "Flexible",
    "features.flexible.description": "An unforeseen change at the last moment? No problem, we are flexible and can adapt your activity/team building to any circumstance.",
    "features.personal.title": "Personal",
    "features.personal.description": "Action Maker organizes practically all activities in-house and when not, we work with reliable subcontractors",
    "features.experienced.title": "Experienced Animators",
    "features.experienced.description": "All our animators are experienced and experts in the activities they supervise.",
    // Teambuildings
    "teambuildings.title": "Find your team building in our wide range",
    "teambuildings.activities-found_one": "{{count}} activity found in",
    "teambuildings.activities-found_other": "{{count}} activities found in",
    "teambuildings.activities-available_one": "{{count}} activity available",
    "teambuildings.activities-available_other": "{{count}} activities available",
    "teambuildings.all-activities": "All activities",
    "teambuildings.regular-title": "Activities",
    "teambuildings.games-title": "Teambuildinggames",
    // About
    "about.title": "About Action Maker",
    "about.description.p1": "Organizing a team building requires a lot of preparation. You need to find suitable equipment, specialized animators, and what if you need to find a different activity at the last minute due to changed circumstances?",
    "about.description.p2": "We know how stressful that can be. Action Maker has 15 years of experience in organizing team buildings for companies and strengthening team spirit.",
    "about.description.p3": "Therefore, contact Action Maker today, you will receive an offer within two days and we will take away all your worries so your team can have a beautiful day without concerns and emerge strengthened from the experience.",
    "about.image.alt": "Team building activity",
    // Founder
    "about.founder.title": "Founder",
    "about.founder.subtitle": "Founder & CEO",
    "about.founder.description.p1": "My father had his own event agency. After my training as a competitive fencer, I started organizing fencing introductions.",
    "about.founder.description.p2": "It frustrated me that many team building companies listened too little to their customers and always organized the same activities, often in an amateurish way.",
    "about.founder.description.p3": "That's why I started developing a wide range of unique activities 15 years ago. Personal contact with the customer was paramount.",
    "about.founder.description.p4": "I am convinced that companies need to have a beautiful day without worries so their employees emerge as a strengthened team from the experience.",
    "about.founder.image.alt": "Frederiek Troubleyn",
    // About Stats
    "about.stats.tevreden": "Satisfied Customers",
    "about.stats.unieke": "Unique Activities",
    "about.stats.jaar": "Years Experience",
    "about.stats.positief": "Positive Reviews",
    // About Values
    "about.values.title": "Our Values",
    "about.values.subtitle": "At Action Maker, we strive for excellence in everything we do",
    "about.values.passie.title": "Passion",
    "about.values.passie.description": "We are passionate about team building and it shows in everything we do",
    "about.values.kwaliteit.title": "Quality",
    "about.values.kwaliteit.description": "We strive for the highest quality in equipment and supervision",
    "about.values.persoonlijk.title": "Personal",
    "about.values.persoonlijk.description": "Personal contact and customized solutions are central to our approach",
    "about.values.resultaat.title": "Results",
    "about.values.resultaat.description": "We focus on strengthening teams and measurable results",
    // About CTA
    "about.cta.title": "Ready to strengthen your team?",
    "about.cta.description": "Contact Action Maker today and discover how we can strengthen your team with our unique team building activities.",
    "about.cta.cta": "Contact us",
    "about.cta.call": "Or call us directly at",
    // Contact Info
    "contact.title": "Contact Us",
    "contact.description": "We are happy to help you organize your team building. Contact us today.",
    "contact.read-more": "Learn more about us",
    "contact.image.alt": "Team building activity",
    // Contact Features
    "contact.features.flexible": "Flexible and adaptable",
    "contact.features.personal": "Personal approach",
    "contact.features.experienced": "Experienced animators",
    // Activity page translations
    "activity.features-title": "What You Can Expect",
    "activity.group-size": "Group Size",
    "activity.duration": "Duration",
    "activity.availability": "Availability",
    "activity.request-quote": "Request Quote",
    "activity.booking-title": "Book this Activity",
    "activity.gallery-title": "Gallery",
    "activity.video-title": "Video",
    // Team Activities
    "teamActivities.title": "What type of activity/team building are you looking for?",
    "teamActivities.subtitle": "Make your choice",
    // Footer translations
    "footer.rights-reserved": "All rights reserved",
    "footer.terms-of-service": "Terms of Service",
    "footer.disclaimer": "Disclaimer"
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
function getRouteFromUrl(url) {
  const [, , ...rest] = url.pathname.split("/");
  return rest.join("/") || "";
}
function getLocalizedURL(url, locale) {
  getRouteFromUrl(url);
  const currentPath = url.pathname;
  const currentRoute = currentPath === "/" ? "" : currentPath.replace(/^\/[a-z]{2}\/|^\//, "");
  return locale === defaultLang ? `/${currentRoute}` : `/${locale}/${currentRoute}`;
}

const $$Astro$4 = createAstro();
const $$LanguageSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const url = Astro2.url;
  const currentLang = getLangFromUrl(url);
  const languageOptions = Object.entries(languages).map(([lang, label]) => ({
    lang,
    label,
    href: getLocalizedURL(url, lang)
  }));
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block text-left"> <select class="appearance-none bg-transparent pl-3 pr-8 py-2 text-sm rounded-lg border border-white/10 hover:border-red-600 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors text-white/90" onchange="window.location.href = this.value"> ${languageOptions.map(({ lang, label, href }) => renderTemplate`<option${addAttribute(href, "value")}${addAttribute(currentLang === lang, "selected")} class="bg-black"> ${label} </option>`)} </select> <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/70"> <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> </div>`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/LanguageSelector.astro", void 0);

const $$Astro$3 = createAstro();
const $$MobileMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MobileMenu;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const getLocalizedPath = (path) => {
    return lang === "nl" ? path : `/${lang}${path}`;
  };
  const links = [
    { href: getLocalizedPath("/"), label: t("nav.home") },
    { href: getLocalizedPath("/teambuildings"), label: t("nav.teambuildings") },
    { href: getLocalizedPath("/over-actionmaker"), label: t("nav.about") },
    { href: getLocalizedPath("/contact"), label: t("nav.contact") }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="fixed inset-y-0 right-0 w-full max-w-sm bg-black border-l border-white/10 translate-x-full transition-transform duration-300 ease-in-out z-50" data-mobile-menu> <div class="h-20 flex items-center justify-end px-4"> <button type="button" class="p-2 -mr-2 text-white/70 hover:text-white transition-colors" data-mobile-menu-trigger> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <nav class="px-4 space-y-4"> ${links.map(({ href, label }) => renderTemplate`<a${addAttribute(href, "href")} class="block text-lg text-white/90 hover:text-white transition-colors"> ${label} </a>`)} <div class="pt-4"> ${renderComponent($$result, "LanguageSelector", $$LanguageSelector, {})} </div> </nav> </div> ${renderScript($$result, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/Navbar/MobileMenu.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/Navbar/MobileMenu.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo.Bn-JZ0P1.png","width":150,"height":84,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anthonycandaele/Projects/ActionMaker/website/src/assets/logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const getLocalizedPath = (path) => {
    return lang === "nl" ? path : `/${lang}${path}`;
  };
  const links = [
    { href: getLocalizedPath("/"), label: t("nav.home") },
    { href: getLocalizedPath("/teambuildings"), label: t("nav.teambuildings") },
    { href: getLocalizedPath("/over-actionmaker"), label: t("nav.about") },
    { href: getLocalizedPath("/contact"), label: t("nav.contact") }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 right-0 h-20 bg-black backdrop-blur-lg z-50 border-b overflow-hidden border-white/10"> <div class="max-w-7xl mx-auto h-full px-4 flex items-center justify-between"> <a${addAttribute(getLocalizedPath("/"), "href")} class="flex items-center gap-2"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "Action Maker", "width": 150, "height": 84 })} </a> <nav class="hidden md:flex items-center gap-8"> ${links.map(({ href, label }) => renderTemplate`<a${addAttribute(href, "href")} class="relative text-sm font-medium text-white/90 hover:text-white transition-colors group inline-block"> ${label} <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" aria-hidden="true"></span> </a>`)} </nav> <div class="flex items-center gap-4">  <div class="hidden md:block"> ${renderComponent($$result, "LanguageSelector", $$LanguageSelector, {})} </div> <div class="hidden md:block"> ${renderComponent($$result, "Button", Button, { "asChild": true, "className": "bg-red-600 hover:bg-red-700 text-white" }, { "default": ($$result2) => renderTemplate` <a${addAttribute(getLocalizedPath("/contact"), "href")} class="flex items-center gap-2"> ${t("nav.contact")} ${renderComponent($$result2, "ArrowRight", ArrowRight, { "className": "w-4 h-4" })} </a> ` })} </div> <button type="button" class="md:hidden p-2 -mr-2 text-white/70 hover:text-white transition-colors" data-mobile-menu-trigger> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path> </svg> </button> </div> </div> </header> ${renderComponent($$result, "MobileMenu", $$MobileMenu, {})} ${renderScript($$result, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/Navbar/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/Navbar/Navbar.astro", void 0);

const footerLinks = [
  {
    title: "footer.sections.indoor",
    links: [
      { id: "indoor-scherminitiatie", url: "/teambuildings/indoor-scherminitiatie" },
      { id: "indoor-mobiele-escape-room", url: "/teambuildings/indoor-mobiele-escape-room" },
      { id: "dronevliegen", url: "/teambuildings/dronevliegen" },
      { id: "virtual-reality", url: "/teambuildings/virtual-reality" },
      { id: "laser-biatlon", url: "/teambuildings/laser-biatlon" },
      { id: "indoor-laserschermen", url: "/teambuildings/indoor-laserschermen" },
      { id: "indoor-arrow-tag", url: "/teambuildings/indoor-arrow-tag" },
      { id: "smaaktest", url: "/teambuildings/smaaktest" },
      { id: "biertasting", url: "/teambuildings/biertasting" },
      { id: "chocoladeworkshop", url: "/teambuildings/chocoladeworkshop" },
      { id: "indoor-sumoworstelen", url: "/teambuildings/indoor-sumoworstelen" },
      { id: "indoor-blaaspijpschieten", url: "/teambuildings/indoor-blaaspijpschieten" },
      { id: "indoor-laser-karabijn", url: "/teambuildings/indoor-laser-karabijn" },
      { id: "volksspelen", url: "/teambuildings/volksspelen" },
      { id: "indoor-djembe", url: "/teambuildings/indoor-djembe" },
      { id: "indoor-lasershooting", url: "/teambuildings/indoor-lasershooting" },
      { id: "indoor-mollenjacht", url: "/teambuildings/indoor-mollenjacht" },
      { id: "moorddiner", url: "/teambuildings/moorddiner" },
      { id: "chain-reaction", url: "/teambuildings/chain-reaction" },
      { id: "groupo-universalis", url: "/teambuildings/groupo-universalis" },
      { id: "indoor-moord-mystery", url: "/teambuildings/indoor-moord-mystery" },
      { id: "innovation-games", url: "/teambuildings/innovation-games" },
      { id: "indoor-de-anderen", url: "/teambuildings/indoor-de-anderen" },
      { id: "office-games", url: "/teambuildings/office-games" },
      { id: "space-games", url: "/teambuildings/space-games" },
      { id: "indoor-james-bond", url: "/teambuildings/indoor-james-bond" },
      { id: "teambooster", url: "/teambuildings/teambooster" },
      { id: "indoor-voetbalmanie", url: "/teambuildings/indoor-voetbalmanie" }
    ]
  },
  {
    title: "footer.sections.outdoor",
    links: [
      { id: "outdoor-scherminitiatie", url: "/teambuildings/outdoor-scherminitiatie" },
      { id: "outdoor-mobiele-escape-room", url: "/teambuildings/outdoor-mobiele-escape-room" },
      { id: "laser-kleiduifschieten", url: "/teambuildings/laser-kleiduifschieten" },
      { id: "dronevliegen", url: "/teambuildings/dronevliegen" },
      { id: "bijlwerpen", url: "/teambuildings/bijlwerpen" },
      { id: "outdoor-laser-karabijn", url: "/teambuildings/outdoor-laser-karabijn" },
      { id: "kunstsmeden", url: "/teambuildings/kunstsmeden" },
      { id: "outdoor-laserschermen", url: "/teambuildings/outdoor-laserschermen" },
      { id: "outdoor-arrowtag", url: "/teambuildings/outdoor-arrow-tag" },
      { id: "gelblaster", url: "/teambuildings/gelblaster" },
      { id: "roofvogelworkshop", url: "/teambuildings/roofvogelworkshop" },
      { id: "outdoor-sumoworstelen", url: "/teambuildings/outdoor-sumoworstelen" },
      { id: "boogschieten", url: "/teambuildings/boogschieten" },
      { id: "outdoor-blaaspijpschieten", url: "/teambuildings/outdoor-blaaspijpschieten" },
      { id: "volksspelen", url: "/teambuildings/volksspelen" },
      { id: "outdoor-djembe", url: "/teambuildings/outdoor-djembe" },
      { id: "luchtdruk-pistoolschieten", url: "/teambuildings/luchtdruk-pistoolschieten" },
      { id: "vuurlopen", url: "/teambuildings/vuurlopen" },
      { id: "alpacaworkshop", url: "/teambuildings/alpacaworkshop" },
      { id: "outdoor-mollenjacht", url: "/teambuildings/outdoor-mollenjacht" },
      { id: "highland-games", url: "/teambuildings/highland-games" },
      { id: "expeditie-robinson", url: "/teambuildings/expeditie-robinson" },
      { id: "groupo-universalis", url: "/teambuildings/groupo-universalis" },
      { id: "outdoor-moord-mystery", url: "/teambuildings/outdoor-moord-mystery" },
      { id: "teambooster", url: "/teambuildings/teambooster" },
      { id: "excalibur", url: "/teambuildings/excalibur" },
      { id: "funny-olympic-games", url: "/teambuildings/funny-olympic-games" },
      { id: "outdoor-de-anderen", url: "/teambuildings/outdoor-de-anderen" },
      { id: "middeleeuws-dag", url: "/teambuildings/middeleeuws-dag" },
      { id: "outdoor-james-bond", url: "/teambuildings/outdoor-james-bond" },
      { id: "zweedse-games", url: "/teambuildings/zweedse-games" },
      { id: "outdoor-voetbalmanie", url: "/teambuildings/outdoor-voetbalmanie" }
    ]
  },
  {
    title: "footer.sections.actief",
    links: [
      { id: "scherminitiatie", url: "/teambuildings/scherminitiatie" },
      { id: "laser-schermen", url: "/teambuildings/laser-schermen" },
      { id: "kunstsmeden", url: "/teambuildings/kunstsmeden" },
      { id: "arrowtag", url: "/teambuildings/arrowtag" },
      { id: "gelblaster", url: "/teambuildings/gelblaster" },
      { id: "outdoor-sumoworstelen", url: "/teambuildings/outdoor-sumoworstelen" },
      { id: "indoor-sumoworstelen", url: "/teambuildings/indoor-sumoworstelen" },
      { id: "highland-games", url: "/teambuildings/highland-games" },
      { id: "funny-olympic-games", url: "/teambuildings/funny-olympic-games" },
      { id: "expeditie-robinson", url: "/teambuildings/expeditie-robinson" },
      { id: "fort-boyard", url: "/teambuildings/fort-boyard" },
      { id: "excalibur", url: "/teambuildings/excalibur" },
      { id: "zweedse-games", url: "/teambuildings/zweedse-games" },
      { id: "middeleeuws-dag", url: "/teambuildings/middeleeuws-dag" }
    ]
  },
  {
    title: "footer.sections.innovaction",
    links: [
      { id: "laser-schermen", url: "/teambuildings/laser-schermen" },
      { id: "dronevliegen", url: "/teambuildings/dronevliegen" },
      { id: "laser-kleiduifschieten", url: "/teambuildings/laser-kleiduifschieten" },
      { id: "virtual-reality", url: "/teambuildings/virtual-reality" },
      { id: "laser-biatlon", url: "/teambuildings/laser-biatlon" },
      { id: "mobiele-escape-room", url: "/teambuildings/mobiele-escape-room" },
      { id: "gelblaster", url: "/teambuildings/gelblaster" },
      { id: "indoor-lasershooting", url: "/teambuildings/indoor-lasershooting" },
      { id: "innovation-games", url: "/teambuildings/innovation-games" },
      { id: "space-games", url: "/teambuildings/space-games" },
      { id: "spy-academy", url: "/teambuildings/spy-academy" }
    ]
  },
  {
    title: "footer.sections.city-games",
    links: [
      { id: "brugse-metten-tocht", url: "/teambuildings/brugse-metten-tocht" },
      { id: "antwerpse-straffe-handjes", url: "/teambuildings/antwerpse-straffe-handjes" },
      { id: "gentse-stroppentocht", url: "/teambuildings/gentse-stroppentocht" },
      { id: "gents-stadsspel", url: "/teambuildings/gents-stadsspel" }
    ]
  },
  {
    title: "footer.sections.workshops",
    links: [
      { id: "smaaktest", url: "/teambuildings/smaaktest" },
      { id: "biertasting", url: "/teambuildings/biertasting" },
      { id: "chocoladeworkshop", url: "/teambuildings/chocoladeworkshop" },
      { id: "kunstsmeden", url: "/teambuildings/kunstsmeden" },
      { id: "vuurlopen", url: "/teambuildings/vuurlopen" },
      { id: "roofvogelworkshop", url: "/teambuildings/roofvogelworkshop" },
      { id: "djembe", url: "/teambuildings/djembe" },
      { id: "alpacaworkshop", url: "/teambuildings/alpacaworkshop" }
    ]
  }
];

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_DyGAqAES.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_uY909pE1.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      const id = imageSrcToImportId(decodedImagePath.src, fileName);
      const imported = imageAssetMap.get(id);
      if (!id || imageObjects.has(id) || !imported) {
        continue;
      }
      const image = await getImage({ ...decodedImagePath, src: imported });
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute
    }).map(([key, value]) => value ? `${key}=${JSON.stringify(String(value))}` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function createReference({ lookupMap }) {
  let store = null;
  globalDataStore.get().then((s) => store = s);
  return function reference(collection) {
    return z.union([
      z.string(),
      z.object({
        id: z.string(),
        collection: z.string()
      }),
      z.object({
        slug: z.string(),
        collection: z.string()
      })
    ]).transform(
      (lookup, ctx) => {
        if (!store) {
          ctx.addIssue({
            code: ZodIssueCode.custom,
            message: `**${ctx.path.join(".")}:** Reference to ${collection} could not be resolved: store not available.
This is an Astro bug, so please file an issue at https://github.com/withastro/astro/issues.`
          });
          return;
        }
        const flattenedErrorPath = ctx.path.join(".");
        if (typeof lookup === "object") {
          if (lookup.collection !== collection) {
            ctx.addIssue({
              code: ZodIssueCode.custom,
              message: `**${flattenedErrorPath}**: Reference to ${collection} invalid. Expected ${collection}. Received ${lookup.collection}.`
            });
            return;
          }
          return lookup;
        }
        if (!lookupMap[collection]) {
          return { id: lookup, collection };
        }
        const { type, entries } = lookupMap[collection];
        const entry = entries[lookup];
        if (!entry) {
          ctx.addIssue({
            code: ZodIssueCode.custom,
            message: `**${flattenedErrorPath}**: Reference to ${collection} invalid. Expected ${Object.keys(
              entries
            ).map((c) => JSON.stringify(c)).join(" | ")}. Received ${JSON.stringify(lookup)}.`
          });
          return;
        }
        if (type === "content") {
          return { slug: lookup, collection };
        }
        return { id: lookup, collection };
      }
    );
  };
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

createReference({ lookupMap });

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const activities = await getCollection("activities", ({ id }) => {
    return id.startsWith(`${lang}/`);
  });
  const activityTitles = new Map(
    activities.map((activity) => [
      activity.id.split("/").pop()?.replace(".md", ""),
      activity.data.title
    ])
  );
  return renderTemplate`${maybeRenderHead()}<footer class="bg-black text-zinc-200"> <div class="max-w-7xl mx-auto px-4 py-16"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">  <div class="lg:col-span-2"> <h3 class="font-semibold mb-4 text-red-500">Action Maker</h3> <div class="mt-6 space-y-2"> <p class="text-sm">Action Maker BVBA</p> <p class="text-sm">Hundelgemsesteenweg 445 A</p> <p class="text-sm">9050 Gentbrugge</p> <p class="text-sm">IBAN: BE74 3631 8185 2307</p> <p class="text-sm">BTW: BE0716509976</p> </div> <div class="mt-6 space-y-3"> <a href="tel:+32476960657" class="flex items-center text-sm hover:text-white transition-colors"> ${renderComponent($$result, "Phone", Phone, { "className": "h-4 w-4 mr-2" })}
+32 476 96 06 57
</a> <a href="mailto:info@actionmaker.be" class="flex items-center text-sm hover:text-white transition-colors"> ${renderComponent($$result, "Mail", Mail, { "className": "h-4 w-4 mr-2" })}
info@actionmaker.be
</a> </div> <div class="mt-6 flex space-x-4"> <a href="https://www.facebook.com/actionmaker.be" target="_blank" rel="noopener noreferrer" class="text-zinc-400 hover:text-white transition-colors"> ${renderComponent($$result, "Facebook", Facebook, { "className": "h-5 w-5" })} </a> <a href="https://www.instagram.com/action.maker/" target="_blank" rel="noopener noreferrer" class="text-zinc-400 hover:text-white transition-colors"> ${renderComponent($$result, "Instagram", Instagram, { "className": "h-5 w-5" })} </a> </div> </div>  <div class="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${footerLinks.slice(0, 2).map((section) => renderTemplate`<div> <h3 class="font-semibold mb-4 text-red-500"> ${t(section.title)} </h3> <ul class="space-y-2 text-sm"> ${section.links.map((link) => {
    const activityId = link.url.split("/").pop() || "";
    const title = activityTitles.get(activityId);
    const localizedUrl = lang === "nl" ? link.url : `/${lang}${link.url}`;
    return renderTemplate`<li> <a${addAttribute(localizedUrl, "href")} class="hover:text-white transition-colors"> ${title} </a> </li>`;
  })} </ul> </div>`)}  <div class="space-y-12"> ${footerLinks.slice(2, 3).map((section) => renderTemplate`<div> <h3 class="font-semibold mb-4 text-red-500"> ${t(section.title)} </h3> <ul class="space-y-2 text-sm"> ${section.links.map((link) => {
    const activityId = link.url.split("/").pop() || "";
    const title = activityTitles.get(activityId);
    const localizedUrl = lang === "nl" ? link.url : `/${lang}${link.url}`;
    return renderTemplate`<li> <a${addAttribute(localizedUrl, "href")} class="hover:text-white transition-colors"> ${title} </a> </li>`;
  })} </ul> </div>`)} ${footerLinks.slice(4, 5).map((section) => renderTemplate`<div> <h3 class="font-semibold mb-4 text-red-500"> ${t(section.title)} </h3> <ul class="space-y-2 text-sm"> ${section.links.map((link) => {
    const activityId = link.url.split("/").pop() || "";
    const title = activityTitles.get(activityId);
    const localizedUrl = lang === "nl" ? link.url : `/${lang}${link.url}`;
    return renderTemplate`<li> <a${addAttribute(localizedUrl, "href")} class="hover:text-white transition-colors"> ${title} </a> </li>`;
  })} </ul> </div>`)} </div>  <div class="space-y-12"> ${footerLinks.slice(3, 4).map((section) => renderTemplate`<div> <h3 class="font-semibold mb-4 text-red-500"> ${t(section.title)} </h3> <ul class="space-y-2 text-sm"> ${section.links.map((link) => {
    const activityId = link.url.split("/").pop() || "";
    const title = activityTitles.get(activityId);
    const localizedUrl = lang === "nl" ? link.url : `/${lang}${link.url}`;
    return renderTemplate`<li> <a${addAttribute(localizedUrl, "href")} class="hover:text-white transition-colors"> ${title} </a> </li>`;
  })} </ul> </div>`)} ${footerLinks.slice(5).map((section) => renderTemplate`<div> <h3 class="font-semibold mb-4 text-red-500"> ${t(section.title)} </h3> <ul class="space-y-2 text-sm"> ${section.links.map((link) => {
    const activityId = link.url.split("/").pop() || "";
    const title = activityTitles.get(activityId);
    const localizedUrl = lang === "nl" ? link.url : `/${lang}${link.url}`;
    return renderTemplate`<li> <a${addAttribute(localizedUrl, "href")} class="hover:text-white transition-colors"> ${title} </a> </li>`;
  })} </ul> </div>`)} </div> </div> </div>  <div class="mt-12 pt-8 border-t border-zinc-800"> <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"> <p class="text-sm text-zinc-400">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Action Maker. ${t("footer.rights-reserved")}.
${" "} ${t("footer.development")} <a${addAttribute(`https://www.webmoov.be/${lang === "fr" ? "" : lang}`, "href")} target="_blank">Webmoov</a> </p> <div class="flex space-x-6"> <a${addAttribute(lang === "nl" ? "/terms-of-service" : `/${lang}/terms-of-service`, "href")} class="text-sm text-zinc-400 hover:text-white transition-colors"> ${t("footer.terms-of-service")} </a> <a${addAttribute(lang === "nl" ? "/disclaimer" : `/${lang}/disclaimer`, "href")} class="text-sm text-zinc-400 hover:text-white transition-colors"> ${t("footer.disclaimer")} </a> </div> </div> </div> </div> </footer>`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/components/Footer/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, isHomePage = false, description } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.ico"><link rel="canonical"${addAttribute(Astro2.url.href.replace(`/${lang}/`, "/"), "href")}><!-- Open Graph / Facebook   --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image" property="og:image:secure_url" content="/logo.png"><meta property="og:image:alt"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(Astro2.url.href, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:image" content="/logo.png"><meta property="twitter:image:alt"${addAttribute(description, "content")}><meta property="twitter:url"${addAttribute(Astro2.url.href, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main${addAttribute(["min-h-screen pb-32", { "pt-20": !isHomePage }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "Toaster", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/ui/sonner", "client:component-export": "Toaster" })} </body></html>`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/layouts/Layout.astro", void 0);

export { $$Layout as $, Button as B, getCollection as a, ui as b, cn as c, getLangFromUrl as g, useTranslations as u };
