import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Nuclear Box and Magic Bomb challenge your team to work together, solve puzzles, and save the world. Perfect for team building, parties, or an adventurous day with friends and family.</p>\n<p>Are you ready to lead your team, solve puzzles, and save the world or defuse the bomb? Take on the challenge and experience an unforgettable escape room adventure!</p>";

				const frontmatter = {"title":"Mobile Escape Room (Outdoor)","description":"Experience a unique and exciting escape room adventure with our mobile escape room cases!","image":"outdoor-mobiele-escape-room/outdoor-mobiele-escape-room-1.jpg","priority":2,"features":["escape room","bomb case","versatile challenges","action and excitement","working under time pressure"],"gallery":["outdoor-mobiele-escape-room/outdoor-mobiele-escape-room-2.jpg","outdoor-mobiele-escape-room/outdoor-mobiele-escape-room-3.jpg"],"categories":["outdoor","innovaction"],"duration":"30 minutes - 2 hours","groupSize":"6 - 250 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/outdoor-mobiele-escape-room.md";
				const url = undefined;
				function rawContent() {
					return "\nNuclear Box and Magic Bomb challenge your team to work together, solve puzzles, and save the world. Perfect for team building, parties, or an adventurous day with friends and family.\n\nAre you ready to lead your team, solve puzzles, and save the world or defuse the bomb? Take on the challenge and experience an unforgettable escape room adventure!\n";
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
