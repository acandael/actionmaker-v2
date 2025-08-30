import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Do you dream of becoming a Jedi or Sith, like in the legendary Star Wars films? With lightsaber fencing, you step into the world of the Force and learn to fight with a lightsaber! This recognized fourth fencing discipline is guided by one of the first certified instructors from Flanders.</p>";

				const frontmatter = {"title":"Lightsaber Fencing (Outdoor)","description":"Become a True Padawan!","image":"outdoor-laserschermen/outdoor-laserschermen-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/102cb4a2-6345-40dd-a2e1-37ed57c43929","priority":6,"features":["For Star Wars fans and adventurers","Active and fun","For young and old"],"gallery":["outdoor-laserschermen/outdoor-laserschermen-2.jpg","outdoor-laserschermen/outdoor-laserschermen-3.jpg","outdoor-laserschermen/outdoor-laserschermen-4.jpg","outdoor-laserschermen/outdoor-laserschermen-5.jpg","outdoor-laserschermen/outdoor-laserschermen-6.jpg","outdoor-laserschermen/outdoor-laserschermen-7.jpg"],"categories":["actief","outdoor","innovaction"],"duration":"30 minutes - 2 hours","groupSize":"4 - 50 people","availability":"All year round"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/outdoor-laserschermen.md";
				const url = undefined;
				function rawContent() {
					return "\nDo you dream of becoming a Jedi or Sith, like in the legendary Star Wars films? With lightsaber fencing, you step into the world of the Force and learn to fight with a lightsaber! This recognized fourth fencing discipline is guided by one of the first certified instructors from Flanders.\n";
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
