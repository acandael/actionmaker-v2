import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Drones worden steeds belangrijker in onze moderne wereld. Ze worden gebruikt voor allerlei toepassingen, zoals het opmeten van terreinen, het controleren van zonnepanelen, crowd control en zelfs pogingen om pakjes te leveren. Maar heb je ooit zelf willen vliegen met een drone?</p>\n<p>Wij werken met professionele drones die ook in verschillende professionele toepassingen gebruikt worden.</p>\n<p>Met deze activiteit maak je kennis met de spannende wereld van drones, begeleid door een gecertificeerd dronepiloot!</p>";

				const frontmatter = {"title":"Dronevliegen","description":"Leer, Ervaar en Ontdek!","image":"dronevliegen/dronevliegen-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/d1ad05d2-54ab-4b52-8e64-2943ff452f8b","priority":3,"features":["Leer de basis","Oefenen","Teamuitdaging"],"gallery":["dronevliegen/dronevliegen-2.jpg","dronevliegen/dronevliegen-3.jpg","dronevliegen/dronevliegen-4.jpg","dronevliegen/dronevliegen-5.jpg","dronevliegen/dronevliegen-6.jpg","dronevliegen/dronevliegen-7.jpg"],"categories":["innovaction","indoor"],"duration":"1 - 2.5 uur","groupSize":"8 - 250 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/dronevliegen.md";
				const url = undefined;
				function rawContent() {
					return "\nDrones worden steeds belangrijker in onze moderne wereld. Ze worden gebruikt voor allerlei toepassingen, zoals het opmeten van terreinen, het controleren van zonnepanelen, crowd control en zelfs pogingen om pakjes te leveren. Maar heb je ooit zelf willen vliegen met een drone?\n\nWij werken met professionele drones die ook in verschillende professionele toepassingen gebruikt worden.\n\nMet deze activiteit maak je kennis met de spannende wereld van drones, begeleid door een gecertificeerd dronepiloot!\n";
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
