import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Archery is a classic sport that requires concentration, technique, and precision. Under the guidance of experienced instructors, participants learn the basic techniques of archery in a safe and relaxed environment.</p>\n<p>The session begins with a comprehensive briefing on safety and technique. Participants learn the proper shooting stance, how to draw the bow, and how to aim at the target. After the basic training, various exercises follow where participants can improve their skills.</p>\n<p>The activity can conclude with an exciting competition where teams or individuals compete against each other in various challenges. This not only adds extra excitement and fun but also promotes team spirit and the competitive element within the group.</p>";

				const frontmatter = {"title":"Archery","description":"Archery is a classic sport that requires concentration, technique, and precision.","video-url":"https://iframe.mediadelivery.net/embed/369439/d6b4ee1e-ce6c-4497-b7ed-dbabbcd10e10","image":"boogschieten/boogschieten-1.jpg","priority":10,"features":["Experienced instructors","Basic techniques","Team spirit"],"gallery":["boogschieten/boogschieten-2.jpg","boogschieten/boogschieten-3.jpg","boogschieten/boogschieten-4.jpg","boogschieten/boogschieten-5.jpg","boogschieten/boogschieten-6.jpg","boogschieten/boogschieten-7.jpg"],"categories":["outdoor"],"duration":"30 minutes - 2 hours","groupSize":"4 - 200 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/boogschieten.md";
				const url = undefined;
				function rawContent() {
					return "\nArchery is a classic sport that requires concentration, technique, and precision. Under the guidance of experienced instructors, participants learn the basic techniques of archery in a safe and relaxed environment.\n\nThe session begins with a comprehensive briefing on safety and technique. Participants learn the proper shooting stance, how to draw the bow, and how to aim at the target. After the basic training, various exercises follow where participants can improve their skills.\n\nThe activity can conclude with an exciting competition where teams or individuals compete against each other in various challenges. This not only adds extra excitement and fun but also promotes team spirit and the competitive element within the group.\n";
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
