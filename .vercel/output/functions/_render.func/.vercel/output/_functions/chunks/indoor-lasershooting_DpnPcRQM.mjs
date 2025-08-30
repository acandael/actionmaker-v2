import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Wil jij je schietkunsten laten zien in een spectaculaire, maar volledig veilige setting? Indoor laser kleiduifschieten biedt spanning en plezier voor iedereen, zelfs voor de minder grote durfallen. Ideaal voor binnen of als de afstand te klein is voor het gewone laserkleiduifschieten.</p>\n<h2 id=\"hoe-werkt-het\">Hoe werkt het?</h2>\n<p>Schiet met originele Winchester geweren op 5 targets die opgesteld\nTot vijf deelnemers schieten tegelijkertijd. De uitdaging? Wie het target als eerste?\nDit alles gebeurt met een speciaal infraroodsysteem, waardoor het volledig veilig is en er geen schade aan de locatie wordt toegebracht.</p>\n<h2 id=\"wat-maakt-het-zo-leuk\">Wat maakt het zo leuk</h2>\n<p>Volstrekt veilig: Omdat er met infrarood wordt geschoten, is er geen gevaar. Bovendien hebben de geweren geen terugslag.</p>\n<p>Milieuvriendelijk: Geen afval en geen schade</p>\n<p>Geschikt voor iedereen: Zelf als je nog nooit hebt geschoten, is dit een geweldige activiteit\nvoor jong en oud.</p>";

				const frontmatter = {"title":"Laser Kleiduifschieten (Indoor)","description":"Spannend, Veilig en Milieuvriendelijk!","image":"indoor-lasershooting/indoorlasershooting-1.jpg","features":["spannende teamactiviteit","communicatie","teamwork"],"gallery":["indoor-lasershooting/indoorlasershooting-2.jpg","indoor-lasershooting/indoorlasershooting-3.jpg","indoor-lasershooting/indoorlasershooting-4.jpg","indoor-lasershooting/indoorlasershooting-5.jpg","indoor-lasershooting/indoorlasershooting-6.jpg","indoor-lasershooting/indoorlasershooting-7.jpg"],"categories":["indoor","innovaction"],"duration":"30 minuten - 2 uur","groupSize":"8-30 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/indoor-lasershooting.md";
				const url = undefined;
				function rawContent() {
					return "\nWil jij je schietkunsten laten zien in een spectaculaire, maar volledig veilige setting? Indoor laser kleiduifschieten biedt spanning en plezier voor iedereen, zelfs voor de minder grote durfallen. Ideaal voor binnen of als de afstand te klein is voor het gewone laserkleiduifschieten.\n\n## Hoe werkt het?\n\nSchiet met originele Winchester geweren op 5 targets die opgesteld\nTot vijf deelnemers schieten tegelijkertijd. De uitdaging? Wie het target als eerste?\nDit alles gebeurt met een speciaal infraroodsysteem, waardoor het volledig veilig is en er geen schade aan de locatie wordt toegebracht.\n\n## Wat maakt het zo leuk\n\nVolstrekt veilig: Omdat er met infrarood wordt geschoten, is er geen gevaar. Bovendien hebben de geweren geen terugslag.\n\nMilieuvriendelijk: Geen afval en geen schade\n\nGeschikt voor iedereen: Zelf als je nog nooit hebt geschoten, is dit een geweldige activiteit\nvoor jong en oud.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"hoe-werkt-het","text":"Hoe werkt het?"},{"depth":2,"slug":"wat-maakt-het-zo-leuk","text":"Wat maakt het zo leuk"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
