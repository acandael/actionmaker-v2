import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Arrow Tag (Indoor) is the perfect combination of action, strategy, and collaboration, and a great alternative to paintball! Shoot with soft foam arrows and discover how fun and exciting this variation of archery is. Immerse yourself in the world of the Hunger Games and take on the challenge!</p>";

				const frontmatter = {"title":"Arrow Tag (Indoor)","description":"Experience the Thrill of the Hunger Games!","image":"indoor-arrow-tag/indoor-arrow-tag-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/10a28ab1-6d11-4018-96a5-287dc7650b16","priority":7,"features":["Active and safe","Teamwork and fun","Adventurous"],"gallery":["indoor-arrow-tag/indoor-arrow-tag-2.jpg","indoor-arrow-tag/indoor-arrow-tag-3.jpg","indoor-arrow-tag/indoor-arrow-tag-4.jpg","indoor-arrow-tag/indoor-arrow-tag-5.jpg","indoor-arrow-tag/indoor-arrow-tag-6.jpg"],"categories":["actief","indoor"],"duration":"30 minutes - 2 hours","groupSize":"10-100 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/indoor-arrow-tag.md";
				const url = undefined;
				function rawContent() {
					return "\nArrow Tag (Indoor) is the perfect combination of action, strategy, and collaboration, and a great alternative to paintball! Shoot with soft foam arrows and discover how fun and exciting this variation of archery is. Immerse yourself in the world of the Hunger Games and take on the challenge!\n";
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
