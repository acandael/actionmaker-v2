import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Blaaspijpschieten (Outdoor) is erg populair. Het is een spannende en uitdagende activiteit voor alle leeftijden. Er wordt een korte geschiedenis van het blaaspijpschieten gegeven. Daarna oefenen en competitie met blaaspijpen van 3 verschillende lengtes.</p>\n<p>Ga de strijd aan en ontdek wie de krachtigste adem en het beste schot heeft. Een activiteit vol spanning, uitdaging en vooral veel plezier!</p>";

				const frontmatter = {"title":"Blaaspijpschieten (Outdoor)","description":"Blaaspijpschieten is erg populair. Een spannende en uitdagende activiteit voor alle leeftijden.","image":"outdoor-blaaspijpschieten/outdoor-blaaspijpschieten-1.jpg","priority":11,"features":["competitie","sport","ontspanning"],"gallery":["outdoor-blaaspijpschieten/outdoor-blaaspijpschieten-2.jpg","outdoor-blaaspijpschieten/outdoor-blaaspijpschieten-3.jpg","outdoor-blaaspijpschieten/outdoor-blaaspijpschieten-4.jpg","outdoor-blaaspijpschieten/outdoor-blaaspijpschieten-5.jpg","outdoor-blaaspijpschieten/outdoor-blaaspijpschieten-6.jpg","outdoor-blaaspijpschieten/outdoor-blaaspijpschieten-7.jpg"],"categories":["outdoor"],"duration":"30 minuten - 2 uur","groupSize":"4 - 200 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/outdoor-blaaspijpschieten.md";
				const url = undefined;
				function rawContent() {
					return "\nBlaaspijpschieten (Outdoor) is erg populair. Het is een spannende en uitdagende activiteit voor alle leeftijden. Er wordt een korte geschiedenis van het blaaspijpschieten gegeven. Daarna oefenen en competitie met blaaspijpen van 3 verschillende lengtes.\n\nGa de strijd aan en ontdek wie de krachtigste adem en het beste schot heeft. Een activiteit vol spanning, uitdaging en vooral veel plezier!\n";
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
