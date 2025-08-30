import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Welkom bij Groupo Universalis, het ultieme teambuildingavontuur waar groepen samenkomen om de meest universele groep te worden! Geïnspireerd door het tv-programma Homo Universalis, dagen we teams uit om hun veelzijdigheid en samenwerkingsvaardigheden te tonen in een reeks ludieke activiteiten.</p>\n<p>In Groupo Universalis draait alles om het ontdekken en benutten van ieders unieke talenten. Elk teamlid wordt aangemoedigd om zijn of haar vaardigheden te laten schitteren, of het nu gaat om creativiteit, probleemoplossend vermogen, fysieke kracht of strategisch inzicht.</p>\n<p>Van uitdagende puzzels tot spannende teamuitdagingen, elk onderdeel van Groupo Universalis is ontworpen om de diversiteit binnen de groep te vieren en te versterken. Het draait niet alleen om winnen, maar ook om het opbouwen van onderlinge banden, het stimuleren van vertrouwen en het vergroten van het groepsgevoel.</p>";

				const frontmatter = {"title":"Groupo Universalis","description":"Geïnspireerd door het tv-programma Homo Universalis","image":"groupo-universalis/groupo-universalis-1.jpg","priority":14,"isGame":true,"features":["uiteenlopende activiteiten voor ieders talenten","samenwerking en creativiteit","veel korte en krachtige spelletjes"],"gallery":["groupo-universalis/groupo-universalis-2.jpg","groupo-universalis/groupo-universalis-3.jpg","groupo-universalis/groupo-universalis-4.jpg","groupo-universalis/groupo-universalis-5.jpg","groupo-universalis/groupo-universalis-6.jpg","groupo-universalis/groupo-universalis-7.jpg"],"categories":["indoor"],"duration":"2 - 3 uur","groupSize":"8 - 1000 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/groupo-universalis.md";
				const url = undefined;
				function rawContent() {
					return "\nWelkom bij Groupo Universalis, het ultieme teambuildingavontuur waar groepen samenkomen om de meest universele groep te worden! Geïnspireerd door het tv-programma Homo Universalis, dagen we teams uit om hun veelzijdigheid en samenwerkingsvaardigheden te tonen in een reeks ludieke activiteiten.\n\nIn Groupo Universalis draait alles om het ontdekken en benutten van ieders unieke talenten. Elk teamlid wordt aangemoedigd om zijn of haar vaardigheden te laten schitteren, of het nu gaat om creativiteit, probleemoplossend vermogen, fysieke kracht of strategisch inzicht.\n\nVan uitdagende puzzels tot spannende teamuitdagingen, elk onderdeel van Groupo Universalis is ontworpen om de diversiteit binnen de groep te vieren en te versterken. Het draait niet alleen om winnen, maar ook om het opbouwen van onderlinge banden, het stimuleren van vertrouwen en het vergroten van het groepsgevoel.\n";
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
