import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Zeg niet zomaar tasting tegen deze dynamische wijnworkshop. Op dit interactief avontuur leer je als groep echt wijnen begrijpen. Ideaal om daarna in de winkel of op restaurant weloverwogen keuzes te maken in het kluwen dat wijnkaarten soms vormen. Op de leest van beginners en liefhebbers, maar onze sommelier beantwoordt met passie elke vineuze vraag.</p>\n<h2 id=\"hoe-werkt-dat-juist\">Hoe werkt dat juist?</h2>\n<p>Tijdens deze workshop leer jij zelf wijnen proeven, bespreken en begrijpen. Dit doen we niet aan de hand van een ellenlange uitleg bij elk glas, maar door middel van experimentele proefjes, pittige uitdagingen en een zorgvuldige selectie topflesjes. We plaatsen verschillende stijlen naast elkaar om zo de enorme variatie in de wijnwereld te ontdekken. Eindigen doen we steeds met een verrassende en onverwachte parel.</p>";

				const frontmatter = {"title":"Wijnworkshop","description":"Zeg niet zomaar tasting tegen deze dynamische wijnworkshop. Op dit interactief avontuur leer je als groep echt wijnen begrijpen","image":"wijnworkshop/wijnworkshop-1.jpg","priority":10,"features":["Een interactieve en entertainende groepsactiviteit","Een prachtige selectie wijnen","Een duurzaam inzicht in wijn"],"gallery":["wijnworkshop/wijnworkshop-2.jpg","wijnworkshop/wijnworkshop-3.jpg","wijnworkshop/wijnworkshop-4.jpg","wijnworkshop/wijnworkshop-5.jpg"],"categories":["workshop"],"duration":"2-3 uur","groupSize":"1-15 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/wijnworkshop.md";
				const url = undefined;
				function rawContent() {
					return "\nZeg niet zomaar tasting tegen deze dynamische wijnworkshop. Op dit interactief avontuur leer je als groep echt wijnen begrijpen. Ideaal om daarna in de winkel of op restaurant weloverwogen keuzes te maken in het kluwen dat wijnkaarten soms vormen. Op de leest van beginners en liefhebbers, maar onze sommelier beantwoordt met passie elke vineuze vraag.\n\n## Hoe werkt dat juist?\n\nTijdens deze workshop leer jij zelf wijnen proeven, bespreken en begrijpen. Dit doen we niet aan de hand van een ellenlange uitleg bij elk glas, maar door middel van experimentele proefjes, pittige uitdagingen en een zorgvuldige selectie topflesjes. We plaatsen verschillende stijlen naast elkaar om zo de enorme variatie in de wijnwereld te ontdekken. Eindigen doen we steeds met een verrassende en onverwachte parel.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"hoe-werkt-dat-juist","text":"Hoe werkt dat juist?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
