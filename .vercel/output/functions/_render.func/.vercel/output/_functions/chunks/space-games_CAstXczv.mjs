import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Everyone realizes that the next frontier is space - first the moon, then mars, and who knows what follows. We prepare your team for this extraordinary future.</p>\n<p>Through various activities such as laser fencing, repairing a spaceship, and communicating in space, we ensure that your team can survive in this challenging environment.</p>\n<p>When winning an activity, where you demonstrate that you’re ready for this adventurous journey, you’ll receive a special drink. This drink acts as protection against cosmic radiation, arming yourselves against the dangers of space.</p>\n<p>At the end of this unique experience, the winning teams take their special drink as a symbolic start to their journey into the future. Team building in space not only offers a fun challenge but also a taste of what’s to come in the era of space exploration.</p>";

				const frontmatter = {"title":"The Space Games","description":"Where the future takes center stage and space is your playground.","image":"space-games/space-games-1.jpg","priority":19,"isGame":true,"features":["Laser fencing","Spaceship repair","Space communication"],"gallery":["space-games/space-games-2.jpg","space-games/space-games-3.jpg","space-games/space-games-4.jpg","space-games/space-games-5.jpg","space-games/space-games-6.jpg"],"categories":["indoor","innovaction"],"duration":"2-3 hours","groupSize":"8-50 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/space-games.md";
				const url = undefined;
				function rawContent() {
					return "\nEveryone realizes that the next frontier is space - first the moon, then mars, and who knows what follows. We prepare your team for this extraordinary future.\n\nThrough various activities such as laser fencing, repairing a spaceship, and communicating in space, we ensure that your team can survive in this challenging environment.\n\nWhen winning an activity, where you demonstrate that you're ready for this adventurous journey, you'll receive a special drink. This drink acts as protection against cosmic radiation, arming yourselves against the dangers of space.\n\nAt the end of this unique experience, the winning teams take their special drink as a symbolic start to their journey into the future. Team building in space not only offers a fun challenge but also a taste of what's to come in the era of space exploration.\n";
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
