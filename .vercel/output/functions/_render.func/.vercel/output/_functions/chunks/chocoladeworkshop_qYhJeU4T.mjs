import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The chocolate workshop is a delicious combination of team building and culinary enjoyment. Under the guidance of a professional chocolatier, participants discover the art of chocolate making and the rich history of this beloved delicacy.</p>\n<p>The workshop begins with an introduction to the world of chocolate, where participants learn about different types of chocolate, their origins, and characteristics. This is followed by a tasting session where various chocolates are examined and evaluated for taste, texture, and aroma.</p>\n<p>Participants then begin making their own chocolate creations. From tempering to decorating, all aspects of the chocolatier’s craft are covered. Teams work together on their creations, which is not only educational but also promotes creativity and collaboration.</p>\n<p>Both in our chocolate workshop or possible on location (if the location is suitable).</p>";

				const frontmatter = {"title":"Chocolate Workshop","description":"A chocolate workshop led by a professional chocolatier.","image":"chocoladeworkshop/chocoladeworkshop-1.jpg","priority":4,"categories":["workshop"],"duration":"45 minutes - 2.5 hours","groupSize":"8 - 100 people","availability":"All year round","features":["Professional chocolatier","All ingredients included","Create your own creations","Tasting of various chocolates"],"gallery":["chocoladeworkshop/chocoladeworkshop-2.jpg","chocoladeworkshop/chocoladeworkshop-3.jpg","chocoladeworkshop/chocoladeworkshop-4.jpg","chocoladeworkshop/chocoladeworkshop-5.jpg","chocoladeworkshop/chocoladeworkshop-6.jpg","chocoladeworkshop/chocoladeworkshop-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/chocoladeworkshop.md";
				const url = undefined;
				function rawContent() {
					return "\nThe chocolate workshop is a delicious combination of team building and culinary enjoyment. Under the guidance of a professional chocolatier, participants discover the art of chocolate making and the rich history of this beloved delicacy.\n\nThe workshop begins with an introduction to the world of chocolate, where participants learn about different types of chocolate, their origins, and characteristics. This is followed by a tasting session where various chocolates are examined and evaluated for taste, texture, and aroma.\n\nParticipants then begin making their own chocolate creations. From tempering to decorating, all aspects of the chocolatier's craft are covered. Teams work together on their creations, which is not only educational but also promotes creativity and collaboration.\n\nBoth in our chocolate workshop or possible on location (if the location is suitable).\n";
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
