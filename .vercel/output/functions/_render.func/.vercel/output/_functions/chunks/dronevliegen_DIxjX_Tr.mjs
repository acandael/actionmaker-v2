import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Drones are becoming increasingly important in our modern world. They are used for various applications, such as surveying terrain, inspecting solar panels, crowd control, and even attempts at package delivery. But have you ever wanted to fly a drone yourself?</p>\n<p>We work with professional drones that are also used in various professional applications.</p>\n<p>With this activity, you’ll get acquainted with the exciting world of drones, guided by a certified drone pilot!</p>";

				const frontmatter = {"title":"Drone Flying","description":"Learn, Experience, and Discover!","image":"dronevliegen/dronevliegen-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/d1ad05d2-54ab-4b52-8e64-2943ff452f8b","priority":3,"features":["Learn the basics","Practice","Team challenge"],"gallery":["dronevliegen/dronevliegen-2.jpg","dronevliegen/dronevliegen-3.jpg","dronevliegen/dronevliegen-4.jpg","dronevliegen/dronevliegen-5.jpg","dronevliegen/dronevliegen-6.jpg","dronevliegen/dronevliegen-7.jpg"],"categories":["outdoor","indoor","innovaction"],"duration":"1 - 2.5 hours","groupSize":"8 - 250 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/dronevliegen.md";
				const url = undefined;
				function rawContent() {
					return "\nDrones are becoming increasingly important in our modern world. They are used for various applications, such as surveying terrain, inspecting solar panels, crowd control, and even attempts at package delivery. But have you ever wanted to fly a drone yourself?\n\nWe work with professional drones that are also used in various professional applications.\n\nWith this activity, you'll get acquainted with the exciting world of drones, guided by a certified drone pilot!\n";
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
