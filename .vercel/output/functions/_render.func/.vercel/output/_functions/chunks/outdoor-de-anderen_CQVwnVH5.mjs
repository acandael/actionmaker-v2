import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Within the group, there are several members who are not who they appear to be, and it’s up to you to discover who they really are. At various moments, we will gather at the oval table to discuss and exchange opinions. After these intense conversations, a voting round follows.</p>\n<p>By successfully completing assignments, participants can protect themselves or earn an extra vote. The game challenges participants to play tactically. Who employs the most well-thought-out strategy? Who possesses the greatest power of persuasion?</p>";

				const frontmatter = {"title":"The Others (Outdoor)","description":"This program is inspired by a popular TV concept, namely \"The Traitors.\"","image":"outdoor-de-anderen/outdoor-de-anderen-1.jpg","priority":21,"isGame":true,"features":["Tactics","Strategy","Persuasion"],"gallery":["outdoor-de-anderen/outdoor-de-anderen-2.jpg","outdoor-de-anderen/outdoor-de-anderen-3.jpg"],"categories":["outdoor"],"duration":"2 - 3 hours","groupSize":"8 - 100 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/outdoor-de-anderen.md";
				const url = undefined;
				function rawContent() {
					return "\nWithin the group, there are several members who are not who they appear to be, and it's up to you to discover who they really are. At various moments, we will gather at the oval table to discuss and exchange opinions. After these intense conversations, a voting round follows.\n\nBy successfully completing assignments, participants can protect themselves or earn an extra vote. The game challenges participants to play tactically. Who employs the most well-thought-out strategy? Who possesses the greatest power of persuasion?\n";
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
