import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Tijdens dit interactieve spel worden jullie detectives in een mysterie vol intriges, verdachten en verborgen aanwijzingen. Met leuke opdrachten die helemaal passen bij de Cluedo-periode, worden jullie uitgedaagd om verbanden te leggen tussen een wapen, plaats of verdachte.</p>\n<p>Iedere deelnemer krijgt een stijlvolle detectivehoed en een vergrootglas om helemaal in de sfeer te komen. Het programma is volledig aanpasbaar voor zowel binnen als buiten, afhankelijk van jullie voorkeur.</p>\n<p>Ga samen op zoek naar de dader en beleef een teambuilding vol plezier, spanning en samenwerking!</p>";

				const frontmatter = {"title":"Moord Mystery (Outdoor)","description":"Beleef een onvergetelijke teambuilding met een spannend murder-mystery in Cluedo-stijl!","image":"outdoor-moord-mystery/outdoor-moord-mystery-1.jpg","isGame":true,"features":["Communicatiespel","Schietvaardigheid","Croquet in Cluedo-stijl"],"gallery":["outdoor-moord-mystery/outdoor-moord-mystery-2.jpg"],"categories":["outdoor"],"duration":"2 - 5 uur","groupSize":"6 -1000 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/outdoor-moord-mystery.md";
				const url = undefined;
				function rawContent() {
					return "\nTijdens dit interactieve spel worden jullie detectives in een mysterie vol intriges, verdachten en verborgen aanwijzingen. Met leuke opdrachten die helemaal passen bij de Cluedo-periode, worden jullie uitgedaagd om verbanden te leggen tussen een wapen, plaats of verdachte.\n\nIedere deelnemer krijgt een stijlvolle detectivehoed en een vergrootglas om helemaal in de sfeer te komen. Het programma is volledig aanpasbaar voor zowel binnen als buiten, afhankelijk van jullie voorkeur.\n\nGa samen op zoek naar de dader en beleef een teambuilding vol plezier, spanning en samenwerking!\n";
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
