import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Immerse yourself in the football atmosphere with a series of unique activities (e.g., football bowling, football darts, mini table football, football quiz, …) specially designed for the football event of the year.</p>\n<p>Whether you’re an avid football supporter or simply looking for fun and competition, these activities promise an unforgettable experience filled with football enthusiasm. Participate, score goals and enjoy the excitement of the European Football Championship in a completely new way!</p>";

				const frontmatter = {"title":"Football Mania (Outdoor)","description":"Experience football in a completely new way with our specially developed activity","image":"outdoor-voetbalmanie/outdoor-voetbalmanie-1.jpg","priority":25,"isGame":true,"features":["Football bowling","Precision shooting","Football darts","Football quiz","Mini Kicker","The Monk's Secret"],"gallery":["outdoor-voetbalmanie/outdoor-voetbalmanie-2.jpg","outdoor-voetbalmanie/outdoor-voetbalmanie-3.jpg","outdoor-voetbalmanie/outdoor-voetbalmanie-4.jpg","outdoor-voetbalmanie/outdoor-voetbalmanie-5.jpg"],"categories":["outdoor"],"duration":"2-3 hours","groupSize":"8-50 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/outdoor-voetbalmanie.md";
				const url = undefined;
				function rawContent() {
					return "\nImmerse yourself in the football atmosphere with a series of unique activities (e.g., football bowling, football darts, mini table football, football quiz, ...) specially designed for the football event of the year.\n\nWhether you're an avid football supporter or simply looking for fun and competition, these activities promise an unforgettable experience filled with football enthusiasm. Participate, score goals and enjoy the excitement of the European Football Championship in a completely new way!\n";
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
