import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Crossbow shooting is a historical sport that requires precision, concentration, and a steady hand. Under the guidance of experienced instructors, participants learn the basic techniques of crossbow shooting in a safe and controlled environment.</p>\n<p>The session begins with a comprehensive briefing on safety and technique. Participants learn about the history of the crossbow, proper shooting stance, and aiming. After the basic training, various exercises follow where participants can improve their skills.</p>\n<p>The activity can conclude with an exciting competition where teams or individuals compete against each other in various challenges. This not only adds extra excitement and fun but also promotes team spirit and the competitive element within the group.</p>";

				const frontmatter = {"title":"Crossbow Shooting","description":"An exciting activity with modern crossbows.","image":"kruisboogschieten/kruisboogschieten-1.jpg","categories":["outdoor"],"duration":"30 minutes - 2 hours","groupSize":"5 - 300 people","availability":"All year round","features":["Professional guidance","All materials included","Various targets","Competition element possible"],"gallery":["kruisboogschieten/kruisboogschieten-2.jpg","kruisboogschieten/kruisboogschieten-3.jpg","kruisboogschieten/kruisboogschieten-4.jpg","kruisboogschieten/kruisboogschieten-5.jpg","kruisboogschieten/kruisboogschieten-6.jpg","kruisboogschieten/kruisboogschieten-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/kruisboogschieten.md";
				const url = undefined;
				function rawContent() {
					return "\nCrossbow shooting is a historical sport that requires precision, concentration, and a steady hand. Under the guidance of experienced instructors, participants learn the basic techniques of crossbow shooting in a safe and controlled environment.\n\nThe session begins with a comprehensive briefing on safety and technique. Participants learn about the history of the crossbow, proper shooting stance, and aiming. After the basic training, various exercises follow where participants can improve their skills.\n\nThe activity can conclude with an exciting competition where teams or individuals compete against each other in various challenges. This not only adds extra excitement and fun but also promotes team spirit and the competitive element within the group.\n";
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
