import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Het gelukszwaard voor jullie hele team zit stevig vast met sloten en kettingen. Om de benodigde cijfercodes te onthullen, moeten jullie met succes verschillende uitdagingen aangaan, zoals de sleutelzaal, de slotgracht, de zaal der duels, het mijnenveld en meer. Hier krijgt ieders unieke talent de kans om te schitteren.</p>\n<p>Door succesvol de proeven te doorstaan verdient het winnende team telkens 1 cijfer van de code. Na het afronden van alle uitdagingen worden alle deelnemers naar de ridderzaal gebracht. Hier stappen de zegevierende teams naar voren om hun deel van de cijfers in te voeren en zo het zwaard te bevrijden.</p>";

				const frontmatter = {"title":"Excalibur","description":"Deze activiteit legt de volledige nadruk op samenwerking","image":"excalibur/excalibur-1.jpg","priority":19,"isGame":true,"features":["Avontuur","Teambuilding","Competitie"],"gallery":["excalibur/excalibur-2.jpg","excalibur/excalibur-3.jpg","excalibur/excalibur-4.jpg","excalibur/excalibur-5.jpg","excalibur/excalibur-6.jpg","excalibur/excalibur-7.jpg"],"categories":["outdoor","actief"],"duration":"2 - 5 uur","groupSize":"8 - 500 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/excalibur.md";
				const url = undefined;
				function rawContent() {
					return "\nHet gelukszwaard voor jullie hele team zit stevig vast met sloten en kettingen. Om de benodigde cijfercodes te onthullen, moeten jullie met succes verschillende uitdagingen aangaan, zoals de sleutelzaal, de slotgracht, de zaal der duels, het mijnenveld en meer. Hier krijgt ieders unieke talent de kans om te schitteren.\n\nDoor succesvol de proeven te doorstaan verdient het winnende team telkens 1 cijfer van de code. Na het afronden van alle uitdagingen worden alle deelnemers naar de ridderzaal gebracht. Hier stappen de zegevierende teams naar voren om hun deel van de cijfers in te voeren en zo het zwaard te bevrijden.\n";
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
