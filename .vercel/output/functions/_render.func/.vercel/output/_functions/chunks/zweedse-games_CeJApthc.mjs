import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The location is steeped in Swedish atmosphere, decorated with Swedish flags, and teams challenge each other with Scandinavian activities. Think biathlon shooting (INFRARÖD SKIDSKYTTE), axe throwing (KASTA YXA), playing kubb, Swedish puzzles, assembling IKEA cabinets, and more.</p>\n<p>The teams will discover that success depends on combining their strengths. And who knows, maybe the catering will include delicious Swedish meatballs to fully immerse participants in Swedish culture.</p>";

				const frontmatter = {"title":"The Swedish Games","description":"A surprising variant of the Highland Games, but with a Swedish twist.","image":"zweedse-games/zweedse-games-1.jpg","priority":24,"isGame":true,"features":["Biathlon shooting","Kubb playing","Axe throwing","IKEA puzzles"],"gallery":["zweedse-games/zweedse-games-2.jpg","zweedse-games/zweedse-games-3.jpg","zweedse-games/zweedse-games-4.jpg","zweedse-games/zweedse-games-5.jpg","zweedse-games/zweedse-games-6.jpg","zweedse-games/zweedse-games-7.jpg"],"categories":["outdoor","actief"],"duration":"2.5 - 5 hours","groupSize":"8 - 500 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/zweedse-games.md";
				const url = undefined;
				function rawContent() {
					return "\nThe location is steeped in Swedish atmosphere, decorated with Swedish flags, and teams challenge each other with Scandinavian activities. Think biathlon shooting (INFRARÖD SKIDSKYTTE), axe throwing (KASTA YXA), playing kubb, Swedish puzzles, assembling IKEA cabinets, and more.\n\nThe teams will discover that success depends on combining their strengths. And who knows, maybe the catering will include delicious Swedish meatballs to fully immerse participants in Swedish culture.\n";
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
