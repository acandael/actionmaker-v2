import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Hebben jullie het lef om letterlijk over gloeiend hete kolen te lopen? Dan is deze workshop dé activiteit voor jullie!</p>\n<p>Vuurlopen is een eeuwenoude traditie die niet alleen moed, maar ook vertrouwen in jezelf en elkaar vraagt. Een unieke ervaring die de banden binnen jullie team versterkt en onvergetelijke herinneringen creëert.</p>";

				const frontmatter = {"title":"Vuurlopen","description":"Gaan jullie door het vuur voor elkaar?","image":"vuurlopen/vuurlopen-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/9f864b33-8c45-4392-8e07-a720e8b500ee","priority":5,"features":["Vertrouwen opbouwen","Persoonlijke groei","Unieke ervaring"],"gallery":["vuurlopen/vuurlopen-2.jpg","vuurlopen/vuurlopen-3.jpg","vuurlopen/vuurlopen-4.jpg","vuurlopen/vuurlopen-5.jpg","vuurlopen/vuurlopen-6.jpg","vuurlopen/vuurlopen-7.jpg"],"categories":["workshop"],"duration":"2-3 uur","groupSize":"8-50 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/vuurlopen.md";
				const url = undefined;
				function rawContent() {
					return "\nHebben jullie het lef om letterlijk over gloeiend hete kolen te lopen? Dan is deze workshop dé activiteit voor jullie!\n\nVuurlopen is een eeuwenoude traditie die niet alleen moed, maar ook vertrouwen in jezelf en elkaar vraagt. Een unieke ervaring die de banden binnen jullie team versterkt en onvergetelijke herinneringen creëert.\n";
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
