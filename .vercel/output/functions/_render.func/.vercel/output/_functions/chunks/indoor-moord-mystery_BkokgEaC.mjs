import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>During this interactive game, you become detectives in a mystery full of intrigue, suspects, and hidden clues. With fun challenges that perfectly fit the Cluedo period, you’ll be challenged to make connections between a weapon, location, or suspect.</p>\n<p>Each participant receives a stylish detective hat and a magnifying glass to get fully into the atmosphere. The program is completely adaptable for both indoor and outdoor settings, depending on your preference.</p>\n<p>Work together to find the culprit and experience a team building full of fun, excitement, and collaboration!</p>";

				const frontmatter = {"title":"Murder Mystery (Indoor)","description":"Experience an unforgettable team building with an exciting murder mystery in Cluedo style!","image":"indoor-moord-mystery/indoor-moord-mystery-1.jpg","priority":15,"isGame":true,"features":["Communication game","Shooting skills","Cluedo-style croquet"],"gallery":["indoor-moord-mystery/indoor-moord-mystery-2.jpg","indoor-moord-mystery/indoor-moord-mystery-3.jpg","indoor-moord-mystery/indoor-moord-mystery-4.jpg","indoor-moord-mystery/indoor-moord-mystery-5.jpg","indoor-moord-mystery/indoor-moord-mystery-6.jpg","indoor-moord-mystery/indoor-moord-mystery-7.jpg"],"categories":["indoor"],"duration":"2 - 5 hours","groupSize":"6 - 1000 people","availability":"All year round"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/indoor-moord-mystery.md";
				const url = undefined;
				function rawContent() {
					return "\nDuring this interactive game, you become detectives in a mystery full of intrigue, suspects, and hidden clues. With fun challenges that perfectly fit the Cluedo period, you'll be challenged to make connections between a weapon, location, or suspect.\n\nEach participant receives a stylish detective hat and a magnifying glass to get fully into the atmosphere. The program is completely adaptable for both indoor and outdoor settings, depending on your preference.\n\nWork together to find the culprit and experience a team building full of fun, excitement, and collaboration!\n";
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
