import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>De outdoorinitiatie schermen is een unieke en spannende activiteit die perfect geschikt is voor teambuilding. Tijdens deze sessie maken deelnemers kennis met de basisbeginselen van het schermen, een sport die niet alleen fysieke behendigheid vereist maar ook strategisch inzicht en snelle besluitvorming.</p>\n<p>Onder begeleiding van onze ervaren instructeurs leren deelnemers de fundamentele technieken van het schermen, waaronder de basishouding, voetenwerk en verschillende aanvals- en verdedigingsbewegingen. Veiligheid staat hierbij voorop, en alle deelnemers worden voorzien van professionele beschermingsuitrusting.</p>\n<p>De activiteit wordt afgesloten met een klein toernooi waarbij teams het tegen elkaar opnemen in een sportieve en vriendschappelijke sfeer. Dit zorgt niet alleen voor een spannende finale van de workshop, maar bevordert ook het teamgevoel en de onderlinge band tussen collega’s.</p>";

				const frontmatter = {"title":"Scherminitiatie (Outdoor)","description":"Onder begeleiding van onze ervaren instructeurs leren deelnemers de fundamentele technieken van het schermen","image":"outdoor-scherminitiatie/outdoor-scherminitiatie-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/bec895e0-71a8-46ba-b83a-4ebbbbfe4518","categories":["actief","outdoor"],"duration":"30 minuten - 2.5 uur","groupSize":"4 - 350 personen","availability":"Het hele jaar door","priority":2,"features":["Professionele scherminstructeurs","Alle materiaal inbegrepen","Veilige en begeleide initiatie","Onderlinge wedstrijdjes mogelijk"],"gallery":["outdoor-scherminitiatie/outdoor-scherminitiatie-2.jpg","outdoor-scherminitiatie/outdoor-scherminitiatie-3.jpg","outdoor-scherminitiatie/outdoor-scherminitiatie-4.jpg","outdoor-scherminitiatie/outdoor-scherminitiatie-5.jpg","outdoor-scherminitiatie/outdoor-scherminitiatie-6.jpg","outdoor-scherminitiatie/outdoor-scherminitiatie-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/outdoor-scherminitiatie.md";
				const url = undefined;
				function rawContent() {
					return "\nDe outdoorinitiatie schermen is een unieke en spannende activiteit die perfect geschikt is voor teambuilding. Tijdens deze sessie maken deelnemers kennis met de basisbeginselen van het schermen, een sport die niet alleen fysieke behendigheid vereist maar ook strategisch inzicht en snelle besluitvorming.\n\nOnder begeleiding van onze ervaren instructeurs leren deelnemers de fundamentele technieken van het schermen, waaronder de basishouding, voetenwerk en verschillende aanvals- en verdedigingsbewegingen. Veiligheid staat hierbij voorop, en alle deelnemers worden voorzien van professionele beschermingsuitrusting.\n\nDe activiteit wordt afgesloten met een klein toernooi waarbij teams het tegen elkaar opnemen in een sportieve en vriendschappelijke sfeer. Dit zorgt niet alleen voor een spannende finale van de workshop, maar bevordert ook het teamgevoel en de onderlinge band tussen collega's.\n";
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
