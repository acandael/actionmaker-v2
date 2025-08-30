import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>This team building is ideal for strengthening team spirit. Making music together as a team creates a unique experience and provides a positive group feeling. It allows colleagues to focus on playing together and offers them a different way of communicating with each other. The group dynamics are positively influenced as a result. No prior knowledge is required. This can be combined with eco-percussion, for example.</p>";

				const frontmatter = {"title":"Indoor Djembe Workshop","description":"Making music as a team creates a unique experience and provides a positive group feeling.","image":"indoor-djembe/indoor-djembe-1.jpg","priority":7,"categories":["workshop"],"duration":"30 minutes - 2 hours","groupSize":"Maximum 250 people","availability":"All year round","features":["Unique experience","Positive group feeling","Playing together","Communication"],"gallery":["indoor-djembe/indoor-djembe-2.jpg","indoor-djembe/indoor-djembe-3.jpg","indoor-djembe/indoor-djembe-4.jpg","indoor-djembe/indoor-djembe-5.jpg","indoor-djembe/indoor-djembe-6.jpg","indoor-djembe/indoor-djembe-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/indoor-djembe.md";
				const url = undefined;
				function rawContent() {
					return "\nThis team building is ideal for strengthening team spirit. Making music together as a team creates a unique experience and provides a positive group feeling. It allows colleagues to focus on playing together and offers them a different way of communicating with each other. The group dynamics are positively influenced as a result. No prior knowledge is required. This can be combined with eco-percussion, for example.\n";
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
