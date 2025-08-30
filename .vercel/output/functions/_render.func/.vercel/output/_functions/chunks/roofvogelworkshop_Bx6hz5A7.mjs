import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Experience the emotion of standing eye to eye with the rulers of the skies. After the demonstration, we prepare you to fly various birds of prey yourself and teach you about luring and the centuries-old falconry knots. To conclude the event, we’ll gladly show you our most impressive birds and tricks.</p>";

				const frontmatter = {"title":"Birds of Prey Workshop","description":"Experience the emotion of standing eye to eye with the rulers of the skies.","image":"roofvogelworkshop/roofvogelworkshop-1.jpg","priority":6,"categories":["workshop"],"duration":"45 minutes - 3 hours","groupSize":"Maximum 200 people","availability":"All year round","features":["Demonstration","Flying the birds","Luring the birds","Falconry knots"],"gallery":["roofvogelworkshop/roofvogelworkshop-2.jpg","roofvogelworkshop/roofvogelworkshop-3.jpg","roofvogelworkshop/roofvogelworkshop-4.jpg","roofvogelworkshop/roofvogelworkshop-5.jpg","roofvogelworkshop/roofvogelworkshop-6.jpg","roofvogelworkshop/roofvogelworkshop-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/roofvogelworkshop.md";
				const url = undefined;
				function rawContent() {
					return "\nExperience the emotion of standing eye to eye with the rulers of the skies. After the demonstration, we prepare you to fly various birds of prey yourself and teach you about luring and the centuries-old falconry knots. To conclude the event, we'll gladly show you our most impressive birds and tricks.\n";
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
