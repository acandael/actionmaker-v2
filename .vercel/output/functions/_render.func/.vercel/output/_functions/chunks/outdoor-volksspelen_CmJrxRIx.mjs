import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Herbeleef de gezelligheid van vroeger met een reeks klassieke volksspelen. Deze nostalgische activiteit is perfect als je op zoek bent naar een ontspannen, laagdrempelige en vermakelijke invulling van je evenement. Of het nu voor een vrije toegang, een feest of een teambuilding is, volksspelen brengen iedereen samen.</p>";

				const frontmatter = {"title":"Volksspelen (Outdoor)","description":"Nostalgie en Plezier voor Iedereen!","image":"outdoor-volksspelen/outdoor-volksspelen-1.jpg","priority":12,"features":["Hoefijzerwerpen","Sjoelbak","Muntwerpen","Darts","Sidderspiraal"],"gallery":["outdoor-volksspelen/outdoor-volksspelen-2.jpg","outdoor-volksspelen/outdoor-volksspelen-3.jpg","outdoor-volksspelen/outdoor-volksspelen-4.jpg","outdoor-volksspelen/outdoor-volksspelen-5.jpg","outdoor-volksspelen/outdoor-volksspelen-6.jpg","outdoor-volksspelen/outdoor-volksspelen-7.jpg"],"categories":["outdoor"],"duration":"30 minuten-3 uur","groupSize":"8 - 500 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/outdoor-volksspelen.md";
				const url = undefined;
				function rawContent() {
					return "\nHerbeleef de gezelligheid van vroeger met een reeks klassieke volksspelen. Deze nostalgische activiteit is perfect als je op zoek bent naar een ontspannen, laagdrempelige en vermakelijke invulling van je evenement. Of het nu voor een vrije toegang, een feest of een teambuilding is, volksspelen brengen iedereen samen.\n";
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
