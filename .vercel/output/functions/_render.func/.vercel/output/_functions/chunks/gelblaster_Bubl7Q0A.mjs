import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Gelblaster is dé ultieme vervanging voor paintball, zonder het gedoe van verf, rommel of overalls. Met veilige, milieuvriendelijke gelprojectielen kun je volop genieten van actie en competitie. Een spannende activiteit die draait om tactiek, teamwork en plezier!</p>";

				const frontmatter = {"title":"GelBlaster","description":"Adrenaline en Actie zonder Rommel!","image":"gelblaster/gelblaster-1.jpg","priority":8,"features":["Geen Rommel","Milieuvriendelijk","Veilig voor Iedereen","Spanning en Teamwork"],"gallery":["gelblaster/gelblaster-2.jpg","gelblaster/gelblaster-3.jpg","gelblaster/gelblaster-4.jpg","gelblaster/gelblaster-5.jpg","gelblaster/gelblaster-6.jpg","gelblaster/gelblaster-7.jpg"],"categories":["outdoor","actief"],"duration":"45 minuten - 2 uur","groupSize":"10 - 200 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/gelblaster.md";
				const url = undefined;
				function rawContent() {
					return "\nGelblaster is dé ultieme vervanging voor paintball, zonder het gedoe van verf, rommel of overalls. Met veilige, milieuvriendelijke gelprojectielen kun je volop genieten van actie en competitie. Een spannende activiteit die draait om tactiek, teamwork en plezier!\n";
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
