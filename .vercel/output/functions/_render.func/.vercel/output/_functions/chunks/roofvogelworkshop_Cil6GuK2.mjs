import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Ervaar de emotie om oog in oog te staan met de heersers van het luchtruim. Na de demonstratie bereiden we je voor om zelf verschillende roofvogels te vliegen en leren we je loerdraaien en de eeuwenoude valkeniersknoop. Om het evenement af te sluiten tonen we je graag onze meest impressionante vogels en trucs.</p>";

				const frontmatter = {"title":"Roofvogelworkshop","description":"Ervaar de emotie om oog in oog te staan met de heersers van het luchtruim.","image":"roofvogelworkshop/roofvogelworkshop-1.jpg","priority":6,"categories":["workshop"],"duration":"45 minuten - 3 uur","groupSize":"Maximum 200 personen","availability":"Het hele jaar door","features":["Demonstratie","Vogelvliegen","Loerdraaien","Valkeniersknoop"],"gallery":["roofvogelworkshop/roofvogelworkshop-2.jpg","roofvogelworkshop/roofvogelworkshop-3.jpg","roofvogelworkshop/roofvogelworkshop-4.jpg","roofvogelworkshop/roofvogelworkshop-5.jpg","roofvogelworkshop/roofvogelworkshop-6.jpg","roofvogelworkshop/roofvogelworkshop-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/roofvogelworkshop.md";
				const url = undefined;
				function rawContent() {
					return "\nErvaar de emotie om oog in oog te staan met de heersers van het luchtruim. Na de demonstratie bereiden we je voor om zelf verschillende roofvogels te vliegen en leren we je loerdraaien en de eeuwenoude valkeniersknoop. Om het evenement af te sluiten tonen we je graag onze meest impressionante vogels en trucs.\n";
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
