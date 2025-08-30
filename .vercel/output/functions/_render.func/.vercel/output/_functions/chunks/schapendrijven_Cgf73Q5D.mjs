import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The shepherd will teach you the basic techniques of sheep herding and show you how to use commands with the dogs, Border Collies. After this explanation, you will drive the sheep through a course yourself. The workshop can be concluded with a demonstration by the shepherd.</p>";

				const frontmatter = {"title":"Sheep Herding","description":"Sheep herding is an interesting activity for groups who want to enjoy nature and the beauty of the surroundings.","image":"schapendrijven/schapendrijven-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/1d589b57-7ad0-4484-88be-1d9c3c3c26c6","priority":1,"categories":["outdoor","workshop"],"duration":"30 minutes - 2 hours","groupSize":"Maximum 200 people","availability":"All year round","features":["Basic sheep herding techniques","Dog commands","Course completion","Demonstration"],"gallery":["schapendrijven/schapendrijven-2.jpg","schapendrijven/schapendrijven-3.jpg","schapendrijven/schapendrijven-4.jpg","schapendrijven/schapendrijven-5.jpg","schapendrijven/schapendrijven-6.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/schapendrijven.md";
				const url = undefined;
				function rawContent() {
					return "\nThe shepherd will teach you the basic techniques of sheep herding and show you how to use commands with the dogs, Border Collies. After this explanation, you will drive the sheep through a course yourself. The workshop can be concluded with a demonstration by the shepherd.\n";
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
