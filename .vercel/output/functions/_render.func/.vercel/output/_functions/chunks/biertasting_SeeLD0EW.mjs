import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Ervaar een unieke reis door de wereld van bier tijdens onze biertasting. Geniet van diverse bierstijlen, leer verrassende weetjes en beleef een gezellige en leerrijke ervaring. Ideaal voor liefhebbers én nieuwsgierigen!</p>\n<h2 id=\"wat-is-biertasting\">Wat is Biertasting?</h2>\n<p>De Bieren: Een zorgvuldig geselecteerde reeks bieren, inclusief alcoholvrije opties, die je smaakpapillen prikkelen.</p>\n<p>Het Proeven: Ontdek de kunst van het bierproeven en leer de smaaknuances en aroma’s herkennen.</p>\n<p>De Verhalen: Achter elk bier schuilt een verhaal over de brouwerij en het ambacht.</p>\n<h2 id=\"hoe-werkt-het\">Hoe werkt het?</h2>\n<p><strong>Introductie:</strong></p>\n<p>Een korte uitleg over bierproeven, wat je kunt verwachten en enkele leuke tips.</p>\n<p>Leer de basis van smaakherkenning en het verhaal achter de bieren.</p>\n<p><strong>Proeven:</strong></p>\n<p>Samen ontdekken we een reeks bieren, van klassiekers tot verrassingen.</p>\n<p>Ontdek waarom we klinken met onze glazen en leer grappige feitjes, zoals het gebruik van bier als haarspoeling!</p>\n<p><strong>De Beleving:</strong></p>\n<p>Beleef bier als nooit tevoren: met meer kennis, waardering en plezier.</p>\n<p>Bier drinken wordt een ervaring die je niet snel zult vergeten.</p>";

				const frontmatter = {"title":"Biertasting","description":"Proef, Ontdek en Geniet!","image":"biertasting/biertasting-1.jpg","priority":9,"features":["Veelzijdig: Geschikt voor bierliefhebbers én beginners.","Alcoholvrij mogelijk: Ook voor wie geen alcohol drinkt.","Leren en genieten: Combineer plezier met interessante weetjes."],"gallery":["biertasting/biertasting-2.jpg","biertasting/biertasting-3.jpg","biertasting/biertasting-4.jpg","biertasting/biertasting-5.jpg","biertasting/biertasting-6.jpg","biertasting/biertasting-7.jpg"],"categories":["workshop"],"duration":"1,5 - 2 uur","groupSize":"6 - 40 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/biertasting.md";
				const url = undefined;
				function rawContent() {
					return "\nErvaar een unieke reis door de wereld van bier tijdens onze biertasting. Geniet van diverse bierstijlen, leer verrassende weetjes en beleef een gezellige en leerrijke ervaring. Ideaal voor liefhebbers én nieuwsgierigen!\n\n## Wat is Biertasting?\n\nDe Bieren: Een zorgvuldig geselecteerde reeks bieren, inclusief alcoholvrije opties, die je smaakpapillen prikkelen.\n\nHet Proeven: Ontdek de kunst van het bierproeven en leer de smaaknuances en aroma’s herkennen.\n\nDe Verhalen: Achter elk bier schuilt een verhaal over de brouwerij en het ambacht.\n\n## Hoe werkt het?\n\n**Introductie:**\n\nEen korte uitleg over bierproeven, wat je kunt verwachten en enkele leuke tips.\n\nLeer de basis van smaakherkenning en het verhaal achter de bieren.\n\n**Proeven:**\n\nSamen ontdekken we een reeks bieren, van klassiekers tot verrassingen.\n\nOntdek waarom we klinken met onze glazen en leer grappige feitjes, zoals het gebruik van bier als haarspoeling!\n\n**De Beleving:**\n\nBeleef bier als nooit tevoren: met meer kennis, waardering en plezier.\n\nBier drinken wordt een ervaring die je niet snel zult vergeten.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"wat-is-biertasting","text":"Wat is Biertasting?"},{"depth":2,"slug":"hoe-werkt-het","text":"Hoe werkt het?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
