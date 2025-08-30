import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Deze teambuilding staat volledig in het teken van samenwerking en creativiteit. Gezamenlijk gaan we aan de slag om een indrukwekkende Goldberg machine te creëren. De keten is slechts zo sterk als de zwakste schakel, en jullie krijgen een overvloed aan materiaal ter beschikking. Denk hierbij aan knikkerbanen, dominosteentjes, enorme LEGO-blokken en elektrische apparaten.</p>\n<p>De uitdaging is om het wildste, maar vooral een functioneel ontwerp te bedenken en te bouwen. Na een grondige controle starten we de kettingreactie aan het begin, en hopelijk eindigt deze zonder hulp met een spectaculaire finale. Voor de extra gedreven teams zijn er optionele proeven beschikbaar, waarmee extra materiaal verdiend kan worden om jullie machine nog indrukwekkender te maken. Het draait allemaal om teamwork, innovatie en het gezamenlijk bereiken van een spectaculair eindresultaat.</p>";

				const frontmatter = {"title":"Chain Reaction","description":"Gezamenlijk gaan we aan de slag om een indrukwekkende Goldberg machine te creëren","image":"chain-reaction/chain-reaction-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/e893044e-8fc5-4c2e-bfc5-79d2976065f1","priority":13,"isGame":true,"features":["uitdaging en creativiteit","overvloed aan materiaal en mogelijkheden","teamwork","spectaculaire finish"],"gallery":["chain-reaction/chain-reaction-2.jpg","chain-reaction/chain-reaction-3.jpg","chain-reaction/chain-reaction-4.jpg","chain-reaction/chain-reaction-5.jpg","chain-reaction/chain-reaction-6.jpg","chain-reaction/chain-reaction-7.jpg"],"categories":["indoor"],"duration":"2 - 5 uur","groupSize":"6 - 800 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/chain-reaction.md";
				const url = undefined;
				function rawContent() {
					return "\nDeze teambuilding staat volledig in het teken van samenwerking en creativiteit. Gezamenlijk gaan we aan de slag om een indrukwekkende Goldberg machine te creëren. De keten is slechts zo sterk als de zwakste schakel, en jullie krijgen een overvloed aan materiaal ter beschikking. Denk hierbij aan knikkerbanen, dominosteentjes, enorme LEGO-blokken en elektrische apparaten.\n\nDe uitdaging is om het wildste, maar vooral een functioneel ontwerp te bedenken en te bouwen. Na een grondige controle starten we de kettingreactie aan het begin, en hopelijk eindigt deze zonder hulp met een spectaculaire finale. Voor de extra gedreven teams zijn er optionele proeven beschikbaar, waarmee extra materiaal verdiend kan worden om jullie machine nog indrukwekkender te maken. Het draait allemaal om teamwork, innovatie en het gezamenlijk bereiken van een spectaculair eindresultaat.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
