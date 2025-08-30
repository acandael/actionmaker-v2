import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Elk team vertegenwoordigt een land en daagt elkaar uit in ludieke “Olympische disciplines”.</p>\n<p>De competitie omvat klassieke sporten zoals estafette, sumoworstelen en touwtrekken (een Olympische sport tot 1920), maar ook vaardigheden zoals concentratie, teamwork en inzicht worden op de proef gesteld, omdat deze net zo cruciaal zijn voor een topsporter.</p>\n<p>Welk team weet zijn vlag naar glorieuze hoogten te tillen? Uiteraard koesteren we te allen tijde de Olympische gedachte. De verschillende disciplines kunnen worden aangepast aan de locatie en jullie specifieke wensen, waardoor deze activiteit een perfecte combinatie vormt van sportieve uitdagingen en teambuilding.</p>";

				const frontmatter = {"title":"The Funny Olympic Games","description":"Deze activiteit belichaamt het idee van \"mens sana in corpore sano\", een gezonde geest in een gezond lichaam.","image":"funny-games/funny-games-1.jpg","priority":20,"isGame":true,"features":["sportieve uitdagingen","olympische gedachte","veel lachen"],"gallery":["funny-games/funny-games-2.jpg","funny-games/funny-games-3.jpg","funny-games/funny-games-4.jpg","funny-games/funny-games-5.jpg","funny-games/funny-games-6.jpg","funny-games/funny-games-7.jpg"],"categories":["outdoor","actief"],"duration":"2 - 5 uur","groupSize":"8 - 1000 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/funny-olympic-games.md";
				const url = undefined;
				function rawContent() {
					return "\nElk team vertegenwoordigt een land en daagt elkaar uit in ludieke \"Olympische disciplines\".\n\nDe competitie omvat klassieke sporten zoals estafette, sumoworstelen en touwtrekken (een Olympische sport tot 1920), maar ook vaardigheden zoals concentratie, teamwork en inzicht worden op de proef gesteld, omdat deze net zo cruciaal zijn voor een topsporter.\n\nWelk team weet zijn vlag naar glorieuze hoogten te tillen? Uiteraard koesteren we te allen tijde de Olympische gedachte. De verschillende disciplines kunnen worden aangepast aan de locatie en jullie specifieke wensen, waardoor deze activiteit een perfecte combinatie vormt van sportieve uitdagingen en teambuilding.\n";
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
