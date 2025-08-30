import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Until the middle of the twentieth century, almost every town had its own blacksmith. Since then, the profession has become much rarer. However, mechanical forging on an industrial scale is still commonly used.</p>\n<p>From forging plows, swords, and armor to silver and gold jewelry, the blacksmith profession has been crucial in world history.\nWould you like to work with hammer and anvil yourself? Forge your company logo or name in an active (and warm) team building session, or create a unique gift for a birthday or wedding together with your friends and family.</p>\n<p>Under the guidance of an experienced blacksmith, you’ll learn the intricacies of the craft before receiving an apron, gloves, and safety goggles so you can get started yourself. And at the end, you’ll of course take your creations home with you.</p>";

				const frontmatter = {"title":"Artistic Blacksmithing","description":"Blacksmithing is a very old profession and has produced many masterpieces throughout history.","image":"kunstsmeden/kunstsmeden-1.jpg","priority":2,"categories":["workshop","outdoor","actief"],"duration":"2 - 3 hours","groupSize":"Max. 20 participants per session","availability":"All year round","features":["Experienced blacksmith","A unique creation to take home","Safety goggles"],"gallery":["kunstsmeden/kunstsmeden-2.jpg","kunstsmeden/kunstsmeden-3.jpg","kunstsmeden/kunstsmeden-4.jpg","kunstsmeden/kunstsmeden-5.jpg","kunstsmeden/kunstsmeden-6.jpg","kunstsmeden/kunstsmeden-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/kunstsmeden.md";
				const url = undefined;
				function rawContent() {
					return "\nUntil the middle of the twentieth century, almost every town had its own blacksmith. Since then, the profession has become much rarer. However, mechanical forging on an industrial scale is still commonly used.\n\nFrom forging plows, swords, and armor to silver and gold jewelry, the blacksmith profession has been crucial in world history.\nWould you like to work with hammer and anvil yourself? Forge your company logo or name in an active (and warm) team building session, or create a unique gift for a birthday or wedding together with your friends and family.\n\nUnder the guidance of an experienced blacksmith, you'll learn the intricacies of the craft before receiving an apron, gloves, and safety goggles so you can get started yourself. And at the end, you'll of course take your creations home with you.\n";
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
