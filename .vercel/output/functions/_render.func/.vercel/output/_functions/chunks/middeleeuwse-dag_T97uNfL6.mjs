import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Preferably held at a castle but equally possible at other locations. Let yourself be transported to times gone by with typical medieval activities, such as crossbow shooting, axe throwing, purse throwing, fencing, horseshoe throwing, and unravel the monk’s secret. Our guides wear medieval clothing to enhance the historical atmosphere (you’re welcome to appear in style yourself).</p>\n<p>Optionally, we offer activities such as blacksmithing, sheep herding, and a birds of prey workshop to complete the medieval experience. Whether you’re aiming an arrow with a crossbow or unraveling the monk’s secret, this team building promises not only fun but also a sense of connection and adventure in a unique setting. Explore the Middle Ages and let your team participate in this unforgettable journey through history.</p>";

				const frontmatter = {"title":"Medieval Day","description":"Dive into the enchanting atmosphere of the Middle Ages with this immersive team building","image":"middeleeuwse-dag/middeleeuwse-dag-1.jpg","priority":22,"isGame":true,"features":["Crossbow shooting","Axe throwing","Purse throwing","Fencing","Horseshoe throwing","The Monk's Secret"],"gallery":["middeleeuwse-dag/middeleeuwse-dag-2.jpg","middeleeuwse-dag/middeleeuwse-dag-3.jpg","middeleeuwse-dag/middeleeuwse-dag-4.jpg","middeleeuwse-dag/middeleeuwse-dag-5.jpg","middeleeuwse-dag/middeleeuwse-dag-6.jpg","middeleeuwse-dag/middeleeuwse-dag-7.jpg"],"categories":["outdoor","actief"],"duration":"2.5 hours","groupSize":"8 - 1000 people","availability":"All year round"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/middeleeuwse-dag.md";
				const url = undefined;
				function rawContent() {
					return "\nPreferably held at a castle but equally possible at other locations. Let yourself be transported to times gone by with typical medieval activities, such as crossbow shooting, axe throwing, purse throwing, fencing, horseshoe throwing, and unravel the monk's secret. Our guides wear medieval clothing to enhance the historical atmosphere (you're welcome to appear in style yourself).\n\nOptionally, we offer activities such as blacksmithing, sheep herding, and a birds of prey workshop to complete the medieval experience. Whether you're aiming an arrow with a crossbow or unraveling the monk's secret, this team building promises not only fun but also a sense of connection and adventure in a unique setting. Explore the Middle Ages and let your team participate in this unforgettable journey through history.\n";
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
