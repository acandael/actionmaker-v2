import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Hoewel het vaak als mannensport wordt gezien, is het ook zeer toegankelijk voor vrouwen .\nBijlwerpen is verrassend gemakkelijk, de meeste mensen werpen de bijl in het doel in de eerste vijf tot tien worpen, de moeilijkheid schuilt in het constant goed werpen. De sport is meer ontspanning en ritme dan brute kracht.</p>\n<p>U altijd al eens een stoere Zweed willen voelen.\nWe sluiten af met een wedstrijd om te zien wij er het meest bijgeleerd heeft.</p>";

				const frontmatter = {"title":"Bijlwerpen","description":"Bijlwerpen is verrassend gemakkelijk, de meeste mensen werpen de bijl in het doel in de eerste vijf tot tien worpen","image":"bijlwerpen/bijlwerpen-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/e79edaba-57fe-41d7-960f-d939c3353d80","priority":4,"features":["teamgeest","sport","ontspanning"],"gallery":["bijlwerpen/bijlwerpen-1.jpg","bijlwerpen/bijlwerpen-2.jpg","bijlwerpen/bijlwerpen-3.jpg","bijlwerpen/bijlwerpen-4.jpg","bijlwerpen/bijlwerpen-5.jpg","bijlwerpen/bijlwerpen-6.jpg"],"categories":["outdoor","actief"],"duration":"30 minuten - 2 uur","groupSize":"4-200 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/bijlwerpen.md";
				const url = undefined;
				function rawContent() {
					return "\nHoewel het vaak als mannensport wordt gezien, is het ook zeer toegankelijk voor vrouwen .\nBijlwerpen is verrassend gemakkelijk, de meeste mensen werpen de bijl in het doel in de eerste vijf tot tien worpen, de moeilijkheid schuilt in het constant goed werpen. De sport is meer ontspanning en ritme dan brute kracht.\n\nU altijd al eens een stoere Zweed willen voelen.\nWe sluiten af met een wedstrijd om te zien wij er het meest bijgeleerd heeft.\n";
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
