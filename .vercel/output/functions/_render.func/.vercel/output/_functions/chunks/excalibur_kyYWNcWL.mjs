import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The sword of fortune for your entire team is firmly secured with locks and chains. To reveal the required number codes, you must successfully take on various challenges, such as the key chamber, the moat, the hall of duels, the minefield and more. Here, everyone’s unique talent gets the chance to shine.</p>\n<p>By successfully completing the trials, the winning team earns 1 digit of the code each time. After completing all challenges, all participants are brought to the knights’ hall. Here, the victorious teams step forward to enter their portion of the numbers and thus free the sword.</p>";

				const frontmatter = {"title":"Excalibur","description":"This activity places complete emphasis on collaboration","image":"excalibur/excalibur-1.jpg","priority":19,"isGame":true,"features":["Adventure","Team building","Competition"],"gallery":["excalibur/excalibur-2.jpg","excalibur/excalibur-3.jpg","excalibur/excalibur-4.jpg","excalibur/excalibur-5.jpg","excalibur/excalibur-6.jpg","excalibur/excalibur-7.jpg"],"categories":["outdoor","actief"],"duration":"2 - 5 hours","groupSize":"8 - 500 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/excalibur.md";
				const url = undefined;
				function rawContent() {
					return "\nThe sword of fortune for your entire team is firmly secured with locks and chains. To reveal the required number codes, you must successfully take on various challenges, such as the key chamber, the moat, the hall of duels, the minefield and more. Here, everyone's unique talent gets the chance to shine.\n\nBy successfully completing the trials, the winning team earns 1 digit of the code each time. After completing all challenges, all participants are brought to the knights' hall. Here, the victorious teams step forward to enter their portion of the numbers and thus free the sword.\n";
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
