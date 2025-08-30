import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Laserkleiduifschieten biedt een moderne en veilige variant op het traditionele kleiduifschieten. Deze innovatieve activiteit combineert de uitdaging van het schieten met moderne technologie, waardoor het perfect geschikt is voor teambuilding events.</p>\n<p>De activiteit gebruikt geavanceerde lasergeweren die reageren op speciale kleiduiven, waardoor een realistische schietervaring wordt gecreëerd zonder gebruik van echte munitie. Dit maakt de activiteit niet alleen veiliger, maar ook geschikter voor verschillende locaties en weersomstandigheden.</p>\n<p>Deelnemers krijgen eerst een uitgebreide instructie over de techniek en het gebruik van de geweren. Daarna volgen verschillende spelvormen waarbij teams het tegen elkaar opnemen in uitdagende competities. De combinatie van techniek, concentratie en teamwork maakt dit tot een unieke en boeiende teambuildingervaring.</p>";

				const frontmatter = {"title":"Laser Kleiduifschieten (Outdoor)","description":"Een moderne en milieuvriendelijke variant van kleiduifschieten.","image":"laserkleiduifschieten/laserkleiduifschieten-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/2f13904d-494d-4441-a9e4-471d1eeb3557","categories":["outdoor","innovaction"],"duration":"30 minuten - 2 uur","groupSize":"2 - 150 personen","availability":"Het hele jaar door","priority":3,"features":["Professionele begeleiding","Alle materiaal inbegrepen","Milieuvriendelijk","Competitie-element mogelijk"],"gallery":["laserkleiduifschieten/laserkleiduifschieten-2.jpg","laserkleiduifschieten/laserkleiduifschieten-3.jpg","laserkleiduifschieten/laserkleiduifschieten-4.jpg","laserkleiduifschieten/laserkleiduifschieten-5.jpg","laserkleiduifschieten/laserkleiduifschieten-6.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/laserkleiduifschieten.md";
				const url = undefined;
				function rawContent() {
					return "\nLaserkleiduifschieten biedt een moderne en veilige variant op het traditionele kleiduifschieten. Deze innovatieve activiteit combineert de uitdaging van het schieten met moderne technologie, waardoor het perfect geschikt is voor teambuilding events.\n\nDe activiteit gebruikt geavanceerde lasergeweren die reageren op speciale kleiduiven, waardoor een realistische schietervaring wordt gecreëerd zonder gebruik van echte munitie. Dit maakt de activiteit niet alleen veiliger, maar ook geschikter voor verschillende locaties en weersomstandigheden.\n\nDeelnemers krijgen eerst een uitgebreide instructie over de techniek en het gebruik van de geweren. Daarna volgen verschillende spelvormen waarbij teams het tegen elkaar opnemen in uitdagende competities. De combinatie van techniek, concentratie en teamwork maakt dit tot een unieke en boeiende teambuildingervaring.\n";
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
