import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Bij voorkeur gehouden op een kasteel maar evenzeer mogelijk op andere locaties. Laat je meevoeren naar vervlogen tijden met typische middeleeuwse activiteiten, zoals kruisboogschieten, bijlwerpen, beurswerpen, schermen, hoefijzerwerpen, en ontrafel het geheim van de monnik. Onze begeleiders dragen middeleeuwse kledij om de historische atmosfeer te versterken (je mag uiteraard ook zelf in stijl verschijnen).</p>\n<p>Optioneel bieden we activiteiten aan zoals smeden, schapendrijven en een roofvogelworkshop om de middeleeuwse ervaring compleet te maken. Of je nu een pijl richt met een kruisboog of het geheim van de monnik ontrafelt, deze teambuilding belooft niet alleen plezier, maar ook een gevoel van verbondenheid en avontuur in een unieke setting. Verken de middeleeuwen en laat je team deelnemen aan deze onvergetelijke reis door de geschiedenis.</p>";

				const frontmatter = {"title":"Middeleeuwse Dag","description":"Duik in de betoverende sferen van de middeleeuwen met deze meeslepende teambuilding","image":"middeleeuwse-dag/middeleeuwse-dag-1.jpg","priority":22,"isGame":true,"features":["Kruisboogschieten","Bijlwerpen","Beurswerpen","Schermen","Hoefijzerwerpen","Het geheim van de monnik"],"gallery":["middeleeuwse-dag/middeleeuwse-dag-2.jpg","middeleeuwse-dag/middeleeuwse-dag-3.jpg","middeleeuwse-dag/middeleeuwse-dag-4.jpg","middeleeuwse-dag/middeleeuwse-dag-5.jpg","middeleeuwse-dag/middeleeuwse-dag-6.jpg","middeleeuwse-dag/middeleeuwse-dag-7.jpg"],"categories":["outdoor","actief"],"duration":"2.5 uur","groupSize":"8 - 1000 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/middeleeuwse-dag.md";
				const url = undefined;
				function rawContent() {
					return "\nBij voorkeur gehouden op een kasteel maar evenzeer mogelijk op andere locaties. Laat je meevoeren naar vervlogen tijden met typische middeleeuwse activiteiten, zoals kruisboogschieten, bijlwerpen, beurswerpen, schermen, hoefijzerwerpen, en ontrafel het geheim van de monnik. Onze begeleiders dragen middeleeuwse kledij om de historische atmosfeer te versterken (je mag uiteraard ook zelf in stijl verschijnen).\n\nOptioneel bieden we activiteiten aan zoals smeden, schapendrijven en een roofvogelworkshop om de middeleeuwse ervaring compleet te maken. Of je nu een pijl richt met een kruisboog of het geheim van de monnik ontrafelt, deze teambuilding belooft niet alleen plezier, maar ook een gevoel van verbondenheid en avontuur in een unieke setting. Verken de middeleeuwen en laat je team deelnemen aan deze onvergetelijke reis door de geschiedenis.\n";
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
