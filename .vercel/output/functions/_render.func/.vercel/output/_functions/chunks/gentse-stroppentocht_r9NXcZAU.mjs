import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Beleef een unieke en interactieve teambuilding in het hart van Gent! In kleine teams gaan jullie op ontdekkingstocht door de stad, waarbij samenwerking, snelheid en een goed oog voor detail worden beloond.</p>";

				const frontmatter = {"title":"Gentse Stroppentocht","description":"Teambuilding in Gent: Ontdek, Speel & Win!","image":"gentse-stroppentocht/gentse-stroppentocht-1.jpg","priority":1,"isCityGame":true,"categories":["city-games"],"duration":"+- 3 uur","groupSize":"6 - 150 personen","availability":"Het hele jaar door","features":["Fotozoektocht: Patershol","Urban Golf: Vrijdagsmarkt","Leer Gentse uitdrukkingen met semafooralfabet","Graffiti Spotten: Werregarenstraat","Quiz onderweg","Gin en/of fruitsap proeverij","Optioneel: Extra uitdagingen","Prijzen voor de winnaars!"],"gallery":["gentse-stroppentocht/gentse-stroppentocht-2.jpg","gentse-stroppentocht/gentse-stroppentocht-3.jpg","gentse-stroppentocht/gentse-stroppentocht-4.jpg","gentse-stroppentocht/gentse-stroppentocht-5.jpg","gentse-stroppentocht/gentse-stroppentocht-6.jpg","gentse-stroppentocht/gentse-stroppentocht-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/gentse-stroppentocht.md";
				const url = undefined;
				function rawContent() {
					return "\nBeleef een unieke en interactieve teambuilding in het hart van Gent! In kleine teams gaan jullie op ontdekkingstocht door de stad, waarbij samenwerking, snelheid en een goed oog voor detail worden beloond.\n";
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
