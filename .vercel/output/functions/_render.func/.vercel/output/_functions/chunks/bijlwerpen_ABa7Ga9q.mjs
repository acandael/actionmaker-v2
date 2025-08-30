import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Although often seen as a men’s sport, it is also very accessible for women.\nAxe throwing is surprisingly easy, most people hit the target within their first five to ten throws. The challenge lies in throwing consistently well. The sport requires more relaxation and rhythm than raw strength.</p>\n<p>Feel like a strong Viking for once.\nWe conclude with a competition to see who has learned the most.</p>";

				const frontmatter = {"title":"Axe Throwing","description":"Axe throwing is surprisingly easy, most people hit the target within their first five to ten throws","image":"bijlwerpen/bijlwerpen-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/e79edaba-57fe-41d7-960f-d939c3353d80","priority":4,"features":["team spirit","sport","relaxation"],"gallery":["bijlwerpen/bijlwerpen-1.jpg","bijlwerpen/bijlwerpen-2.jpg","bijlwerpen/bijlwerpen-3.jpg","bijlwerpen/bijlwerpen-4.jpg","bijlwerpen/bijlwerpen-5.jpg","bijlwerpen/bijlwerpen-6.jpg"],"categories":["outdoor","actief"],"duration":"30 minutes - 2 hours","groupSize":"4-200 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/bijlwerpen.md";
				const url = undefined;
				function rawContent() {
					return "\nAlthough often seen as a men's sport, it is also very accessible for women.\nAxe throwing is surprisingly easy, most people hit the target within their first five to ten throws. The challenge lies in throwing consistently well. The sport requires more relaxation and rhythm than raw strength.\n\nFeel like a strong Viking for once.\nWe conclude with a competition to see who has learned the most.\n";
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
