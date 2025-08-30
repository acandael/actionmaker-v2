import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Binnen de groep bevinden zich enkele leden die niet zijn wie ze lijken te zijn, en het is aan jullie om te ontdekken wie ze werkelijk zijn. Op verschillende momenten zullen we samenkomen aan de ovale tafel om te discussiëren en meningen uit te wisselen. Na deze intense gesprekken volgt een stemmingsronde.</p>\n<p>Door het succesvol uitvoeren van opdrachten kunnen de deelnemers zichzelf beschermen of een extra stem verdienen. Het spel daagt deelnemers uit om tactisch te spelen. Wie hanteert de meest doordachte strategie? Wie bezit de grootste overtuigingskracht?</p>";

				const frontmatter = {"title":"De Anderen (Outdoor)","description":"Dit programma is geïnspireerd op een populair tv-concept, namelijk \"De Verraders\".","image":"outdoor-de-anderen/outdoor-de-anderen-1.jpg","priority":21,"isGame":true,"features":["Tactiek","Strategie","Overtuigingskracht"],"gallery":["outdoor-de-anderen/outdoor-de-anderen-2.jpg","outdoor-de-anderen/outdoor-de-anderen-3.jpg"],"categories":["outdoor"],"duration":"2 - 3 uur","groupSize":"8 - 100 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/outdoor-de-anderen.md";
				const url = undefined;
				function rawContent() {
					return "\nBinnen de groep bevinden zich enkele leden die niet zijn wie ze lijken te zijn, en het is aan jullie om te ontdekken wie ze werkelijk zijn. Op verschillende momenten zullen we samenkomen aan de ovale tafel om te discussiëren en meningen uit te wisselen. Na deze intense gesprekken volgt een stemmingsronde.\n\nDoor het succesvol uitvoeren van opdrachten kunnen de deelnemers zichzelf beschermen of een extra stem verdienen. Het spel daagt deelnemers uit om tactisch te spelen. Wie hanteert de meest doordachte strategie? Wie bezit de grootste overtuigingskracht?\n";
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
