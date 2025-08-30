import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>With us, you can enjoy a Robinson experience at a location of your choice. During the challenging Robinson trials, camp members join forces to overcome the other camp.</p>\n<p>The Expedition Robinson game, inspired by the television show of the same name, includes various trials where two camps compete against each other. These trials require skills such as mastering fire, learning survival skills, using weapons, handling coconuts and more…</p>";

				const frontmatter = {"title":"Expedition Robinson","description":"The Expedition Robinson game, inspired by the television show of the same name","image":"expeditie-robinson/expeditie-robinson-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/6b95fb48-c267-4bdf-8039-d0a69d6e926d","priority":16,"isGame":true,"features":["teambuilding","survival skills","fire mastery"],"gallery":["expeditie-robinson/expeditie-robinson-2.jpg","expeditie-robinson/expeditie-robinson-3.jpg","expeditie-robinson/expeditie-robinson-4.jpg","expeditie-robinson/expeditie-robinson-5.jpg","expeditie-robinson/expeditie-robinson-6.jpg","expeditie-robinson/expeditie-robinson-7.jpg"],"categories":["outdoor","actief"],"duration":"2 - 5 hours","groupSize":"8 - 1000 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/expeditie-robinson.md";
				const url = undefined;
				function rawContent() {
					return "\nWith us, you can enjoy a Robinson experience at a location of your choice. During the challenging Robinson trials, camp members join forces to overcome the other camp.\n\nThe Expedition Robinson game, inspired by the television show of the same name, includes various trials where two camps compete against each other. These trials require skills such as mastering fire, learning survival skills, using weapons, handling coconuts and more...\n";
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
