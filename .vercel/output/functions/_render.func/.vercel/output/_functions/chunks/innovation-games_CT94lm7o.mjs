import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Maak je klaar voor een teambuilding die je meeneemt naar de toekomst van innovatie. Deze unieke ervaring omvat een scala aan nieuwe en grensverleggende activiteiten, speciaal ontworpen voor een dynamische teambuilding.</p>\n<p>Ontdek de invloed van Virtual Reality (VR) op de hersenen: werk samen om een bom te ontmantelen, spring van een gebouw met 80 verdiepingen, zwaai met een lightsaber, en meer.\nSchiet met innovatieve laserkleiduifgeweren, milieuvriendelijk en toegankelijk voor iedereen.\nBeleef het schermen met een lasersabel, geïnspireerd op Star Wars, de nieuwste sensatie in officiële schermdisciplines.</p>\n<p>Leer vliegen met drones: wij voorzien zeer gebruiksvriendelijke drones, terwijl het team snel een parcours aflegt en foto’s maakt of vlieg mee met de drone via een fpv bril .op het einde volgt een vertrouwenstest.</p>\n<p>Test je schietvaardigheden met laser biatlonkarabijnen en sportpistolen uit Finland. Gecoacht door teamleden aan de hand van een console, ontdek wie het best schiet.</p>\n<p>Ontmantel een fysieke bom of red een nucleaire centrale met onze innovatieve escape boxen.\nSchiet met de nieuwste en milieuvriendelijke vorm van paintball: gelblaster</p>";

				const frontmatter = {"title":"Innovation Games (Indoor)","description":"Waag je aan uitdagende activiteiten en ontdek de kracht van innovatie in teambuilding","image":"innovation-games/innovation-games-1.jpg","priority":16,"isGame":true,"features":["Schermen met lasersabel","Vliegen met drones","Schieten met infrarood biatlonkarabijnen","Escape boxen","Gellblaster"],"gallery":["innovation-games/innovation-games-2.jpg","innovation-games/innovation-games-3.jpg","innovation-games/innovation-games-4.jpg","innovation-games/innovation-games-5.jpg","innovation-games/innovation-games-6.jpg","innovation-games/innovation-games-7.jpg"],"categories":["indoor","innovaction"],"duration":"2 - 5 uur","groupSize":"4 - 1000 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/innovation-games.md";
				const url = undefined;
				function rawContent() {
					return "\nMaak je klaar voor een teambuilding die je meeneemt naar de toekomst van innovatie. Deze unieke ervaring omvat een scala aan nieuwe en grensverleggende activiteiten, speciaal ontworpen voor een dynamische teambuilding.\n\nOntdek de invloed van Virtual Reality (VR) op de hersenen: werk samen om een bom te ontmantelen, spring van een gebouw met 80 verdiepingen, zwaai met een lightsaber, en meer.\nSchiet met innovatieve laserkleiduifgeweren, milieuvriendelijk en toegankelijk voor iedereen.\nBeleef het schermen met een lasersabel, geïnspireerd op Star Wars, de nieuwste sensatie in officiële schermdisciplines.\n\nLeer vliegen met drones: wij voorzien zeer gebruiksvriendelijke drones, terwijl het team snel een parcours aflegt en foto’s maakt of vlieg mee met de drone via een fpv bril .op het einde volgt een vertrouwenstest.\n\nTest je schietvaardigheden met laser biatlonkarabijnen en sportpistolen uit Finland. Gecoacht door teamleden aan de hand van een console, ontdek wie het best schiet.\n\nOntmantel een fysieke bom of red een nucleaire centrale met onze innovatieve escape boxen.\nSchiet met de nieuwste en milieuvriendelijke vorm van paintball: gelblaster\n";
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
