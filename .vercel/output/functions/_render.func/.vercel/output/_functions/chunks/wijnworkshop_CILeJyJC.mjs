import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Don’t just call this experience a “tasting”—this dynamic wine workshop goes much further. During this interactive adventure, your group will truly learn to understand wine. It’s ideal for making informed choices in the store or at a restaurant, even when faced with complex wine lists. Suitable for both beginners and enthusiasts, our sommelier passionately answers every wine-related question.</p>\n<h2 id=\"how-does-it-work-exactly\">How does it work exactly?</h2>\n<p>During this workshop, you’ll learn to taste, discuss, and understand wines yourself. We don’t rely on lengthy explanations for each glass, but instead use fun experiments, exciting challenges, and a carefully curated selection of exceptional bottles. We place different styles side by side to discover the immense variety in the world of wine. We always finish with a surprising and unexpected gem.</p>";

				const frontmatter = {"title":"Wine Workshop","description":"Don't just call it a tasting—this dynamic wine workshop is an interactive adventure where your group will truly learn to understand wine","image":"wijnworkshop/wijnworkshop-1.jpg","priority":10,"features":["An interactive and entertaining group activity","A beautiful selection of wines","A lasting understanding of wine"],"gallery":["wijnworkshop/wijnworkshop-2.jpg","wijnworkshop/wijnworkshop-3.jpg","wijnworkshop/wijnworkshop-4.jpg","wijnworkshop/wijnworkshop-5.jpg"],"categories":["workshop"],"duration":"2-3 hours","groupSize":"1-15 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/wijnworkshop.md";
				const url = undefined;
				function rawContent() {
					return "\nDon't just call this experience a \"tasting\"—this dynamic wine workshop goes much further. During this interactive adventure, your group will truly learn to understand wine. It's ideal for making informed choices in the store or at a restaurant, even when faced with complex wine lists. Suitable for both beginners and enthusiasts, our sommelier passionately answers every wine-related question.\n\n## How does it work exactly?\n\nDuring this workshop, you'll learn to taste, discuss, and understand wines yourself. We don't rely on lengthy explanations for each glass, but instead use fun experiments, exciting challenges, and a carefully curated selection of exceptional bottles. We place different styles side by side to discover the immense variety in the world of wine. We always finish with a surprising and unexpected gem.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"how-does-it-work-exactly","text":"How does it work exactly?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
