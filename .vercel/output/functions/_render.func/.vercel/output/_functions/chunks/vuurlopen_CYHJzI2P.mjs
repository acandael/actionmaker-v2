import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Do you have the courage to literally walk on glowing hot coals? Then this workshop is THE activity for you!</p>\n<p>Fire walking is an ancient tradition that requires not only courage but also trust in yourself and others. A unique experience that strengthens the bonds within your team and creates unforgettable memories.</p>";

				const frontmatter = {"title":"Fire Walking","description":"Would You Walk Through Fire for Each Other?","image":"vuurlopen/vuurlopen-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/9f864b33-8c45-4392-8e07-a720e8b500ee","priority":5,"features":["Building trust","Personal growth","Unique experience"],"gallery":["vuurlopen/vuurlopen-2.jpg","vuurlopen/vuurlopen-3.jpg","vuurlopen/vuurlopen-4.jpg","vuurlopen/vuurlopen-5.jpg","vuurlopen/vuurlopen-6.jpg","vuurlopen/vuurlopen-7.jpg"],"categories":["workshop"],"duration":"2-3 hours","groupSize":"8-50 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/vuurlopen.md";
				const url = undefined;
				function rawContent() {
					return "\nDo you have the courage to literally walk on glowing hot coals? Then this workshop is THE activity for you!\n\nFire walking is an ancient tradition that requires not only courage but also trust in yourself and others. A unique experience that strengthens the bonds within your team and creates unforgettable memories.\n";
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
