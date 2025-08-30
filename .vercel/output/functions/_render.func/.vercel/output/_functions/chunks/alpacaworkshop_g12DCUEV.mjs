import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Thanks to their unique character, alpacas are excellent for exploring different ways to approach a situation as a team.\nThrough small tasks, you learn more about trust, communication, and leadership in your team. You decide which topic you want to address in your team: communication, collaboration and conflict management, or just fun. These sensitive animals give direct feedback to humans and their behavior. They sense whether something is harmonious; your actual reaction with your true feeling.</p>\n<p>Does your alpaca stand still, pull back, or refuse to follow? These are all indications that something isn’t right in your communication with them. We give you tips and discuss how you can progress together with your alpaca. This is not just a regular ‘walk’, this is an effective agility exercise with your animal.</p>";

				const frontmatter = {"title":"Alpaca Workshop","description":"These sensitive animals give direct feedback to people and how they behave","image":"alpacaworkshop/alpacaworkshop-1.jpg","priority":10,"features":["team spirit","communication","leadership"],"gallery":["alpacaworkshop/alpacaworkshop-2.jpg","alpacaworkshop/alpacaworkshop-3.jpg","alpacaworkshop/alpacaworkshop-4.jpg","alpacaworkshop/alpacaworkshop-5.jpg","alpacaworkshop/alpacaworkshop-6.jpg","alpacaworkshop/alpacaworkshop-7.jpg"],"categories":["workshop"],"duration":"1-3 hours","groupSize":"1-15 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/alpacaworkshop.md";
				const url = undefined;
				function rawContent() {
					return "\nThanks to their unique character, alpacas are excellent for exploring different ways to approach a situation as a team.\nThrough small tasks, you learn more about trust, communication, and leadership in your team. You decide which topic you want to address in your team: communication, collaboration and conflict management, or just fun. These sensitive animals give direct feedback to humans and their behavior. They sense whether something is harmonious; your actual reaction with your true feeling.\n\nDoes your alpaca stand still, pull back, or refuse to follow? These are all indications that something isn't right in your communication with them. We give you tips and discuss how you can progress together with your alpaca. This is not just a regular 'walk', this is an effective agility exercise with your animal.\n";
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
