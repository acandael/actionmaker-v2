import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>De chocoladeworkshop is een heerlijke combinatie van teambuilding en culinair genot. Onder leiding van een professionele chocolatier ontdekken deelnemers de kunst van het chocolade maken en de rijke geschiedenis van deze geliefde lekkernij.</p>\n<p>De workshop begint met een introductie in de wereld van chocolade, waarbij deelnemers leren over verschillende soorten chocolade, hun oorsprong en eigenschappen. Er volgt een proeverij waarbij verschillende chocoladesoorten worden geproefd en beoordeeld op smaak, textuur en aroma.</p>\n<p>Vervolgens gaan de deelnemers zelf aan de slag met het maken van verschillende chocoladecreaties. Van tempereren tot decoreren, alle aspecten van het chocolatier-vak komen aan bod. Teams werken samen aan hun creaties, wat niet alleen leerzaam is maar ook de creativiteit en samenwerking stimuleert.</p>\n<p>Zowel in atelier chocolatier of mogelijk op verplaatsing (indien locatie geschikt).</p>";

				const frontmatter = {"title":"Chocoladeworkshop","description":"Een chocoladeworkshop onder leiding van een professionele chocolatier.","image":"chocoladeworkshop/chocoladeworkshop-1.jpg","priority":4,"categories":["workshop"],"duration":"45 minuten - 2.5 uur","groupSize":"8 - 100 personen","availability":"Het hele jaar door","features":["Professionele chocolatier","Alle ingrediënten inbegrepen","Eigen creaties maken","Proeverij van verschillende chocolades"],"gallery":["chocoladeworkshop/chocoladeworkshop-2.jpg","chocoladeworkshop/chocoladeworkshop-3.jpg","chocoladeworkshop/chocoladeworkshop-4.jpg","chocoladeworkshop/chocoladeworkshop-5.jpg","chocoladeworkshop/chocoladeworkshop-6.jpg","chocoladeworkshop/chocoladeworkshop-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/chocoladeworkshop.md";
				const url = undefined;
				function rawContent() {
					return "\nDe chocoladeworkshop is een heerlijke combinatie van teambuilding en culinair genot. Onder leiding van een professionele chocolatier ontdekken deelnemers de kunst van het chocolade maken en de rijke geschiedenis van deze geliefde lekkernij.\n\nDe workshop begint met een introductie in de wereld van chocolade, waarbij deelnemers leren over verschillende soorten chocolade, hun oorsprong en eigenschappen. Er volgt een proeverij waarbij verschillende chocoladesoorten worden geproefd en beoordeeld op smaak, textuur en aroma.\n\nVervolgens gaan de deelnemers zelf aan de slag met het maken van verschillende chocoladecreaties. Van tempereren tot decoreren, alle aspecten van het chocolatier-vak komen aan bod. Teams werken samen aan hun creaties, wat niet alleen leerzaam is maar ook de creativiteit en samenwerking stimuleert.\n\nZowel in atelier chocolatier of mogelijk op verplaatsing (indien locatie geschikt).\n";
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
