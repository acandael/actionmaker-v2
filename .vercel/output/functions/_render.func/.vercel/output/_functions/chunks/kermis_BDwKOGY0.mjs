import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Step into the atmosphere of a traditional fair, where fun takes center stage. Various typical fair activities are on the program, including the duck pond game, chalk shooting, the test of strength for the strongest person, and the high striker. These classics can be complemented with, for example, a fortune teller who adds a touch of mystery to the festivities, or a blacksmith activity.</p>\n<p>Whether you rotate through the challenges or freely choose which activities to participate in, this relaxing fair experience promises a cheerful and entertaining time for all participants.</p>";

				const frontmatter = {"title":"The Fair","description":"Leave your worries behind and enjoy a day filled with smiling faces and playful moments.","image":"kermis/kermis-1.jpg","priority":26,"isGame":true,"features":["Duck pond game","Chalk shooting","Test of strength","High striker"],"gallery":["kermis/kermis-2.jpg","kermis/kermis-3.jpg","kermis/kermis-4.jpg","kermis/kermis-5.jpg","kermis/kermis-6.jpg","kermis/kermis-7.jpg"],"categories":["outdoor"],"duration":"2-3 hours","groupSize":"8-50 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/kermis.md";
				const url = undefined;
				function rawContent() {
					return "\nStep into the atmosphere of a traditional fair, where fun takes center stage. Various typical fair activities are on the program, including the duck pond game, chalk shooting, the test of strength for the strongest person, and the high striker. These classics can be complemented with, for example, a fortune teller who adds a touch of mystery to the festivities, or a blacksmith activity.\n\nWhether you rotate through the challenges or freely choose which activities to participate in, this relaxing fair experience promises a cheerful and entertaining time for all participants.\n";
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
