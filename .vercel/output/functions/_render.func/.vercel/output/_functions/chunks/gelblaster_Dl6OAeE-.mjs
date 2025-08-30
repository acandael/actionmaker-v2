import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>GelBlaster is the ultimate replacement for paintball, without the hassle of paint, mess, or overalls. With safe, environmentally friendly gel projectiles, you can fully enjoy the action and competition. An exciting activity that revolves around tactics, teamwork, and fun!</p>";

				const frontmatter = {"title":"GelBlaster","description":"Adrenaline and Action without the Mess!","image":"gelblaster/gelblaster-1.jpg","priority":8,"features":["No Mess","Eco-friendly","Safe for Everyone","Suspense and Teamwork"],"gallery":["gelblaster/gelblaster-2.jpg","gelblaster/gelblaster-3.jpg","gelblaster/gelblaster-4.jpg","gelblaster/gelblaster-5.jpg","gelblaster/gelblaster-6.jpg","gelblaster/gelblaster-7.jpg"],"categories":["outdoor","actief"],"duration":"45 minutes - 2 hours","groupSize":"10 - 200 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/gelblaster.md";
				const url = undefined;
				function rawContent() {
					return "\nGelBlaster is the ultimate replacement for paintball, without the hassle of paint, mess, or overalls. With safe, environmentally friendly gel projectiles, you can fully enjoy the action and competition. An exciting activity that revolves around tactics, teamwork, and fun!\n";
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
