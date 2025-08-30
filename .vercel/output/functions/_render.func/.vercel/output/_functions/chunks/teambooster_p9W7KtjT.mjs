import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>From assignments where good listening is essential to tasks where team members need to coach each other.</p>\n<p>This team building can be customized, taking into account the available budget and location.\nIf desired, we can offer coaching sessions.</p>\n<p>As an additional feature, we offer insightful evaluations, explaining what went well or not during the assignments. If desired, we can even offer coaching sessions that delve deeper into team dynamics and how to further improve them.</p>";

				const frontmatter = {"title":"TeamBooster","description":"Where activities are designed to stimulate the team and where collaboration is the key to success.","image":"teambooster/teambooster-1.jpg","priority":18,"isGame":true,"features":["Communication","Creativity","Coaching in option","Collaboration"],"gallery":["teambooster/teambooster-2.jpg","teambooster/teambooster-3.jpg","teambooster/teambooster-4.jpg","teambooster/teambooster-5.jpg","teambooster/teambooster-6.jpg","teambooster/teambooster-7.jpg"],"categories":["outdoor"],"duration":"2 - 5 hours","groupSize":"8 - 1000 people","availability":"All year round"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/teambooster.md";
				const url = undefined;
				function rawContent() {
					return "\nFrom assignments where good listening is essential to tasks where team members need to coach each other.\n\nThis team building can be customized, taking into account the available budget and location.\nIf desired, we can offer coaching sessions.\n\nAs an additional feature, we offer insightful evaluations, explaining what went well or not during the assignments. If desired, we can even offer coaching sessions that delve deeper into team dynamics and how to further improve them.\n";
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
