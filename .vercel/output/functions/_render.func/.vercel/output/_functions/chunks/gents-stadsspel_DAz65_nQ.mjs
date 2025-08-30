import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Ga mee op avontuur met Texas Jones, de minder bekende maar even vastberaden neef van Indiana Jones, en help hem bij het vinden van de legendarische 3 bekers van Keizer Karel. Dit unieke stadsspel neemt je mee door de prachtige stad Gent, vol geschiedenis, mysterie en uitdaging.</p>\n<h2 id=\"het-verhaal-de-3-bekers-van-keizer-karel\">Het Verhaal: De 3 Bekers van Keizer Karel</h2>\n<p>Keizer Karel, geboren in Gent, was een van de machtigste leiders van zijn tijd. Volgens een oude legende gaf zijn sterrenwichelaar hem de opdracht om 3 bekers te laten maken. Deze bekers moesten verenigd worden in het stadhuis van Gent om de stad haar ware grootsheid te geven. Maar de bekers raakten verloren in de geschiedenis en liggen nu verborgen in drie van de tien belangrijkste monumenten van Gent.</p>\n<p>De Stichting Keizer Karel, die deze grootse keizer wil eren, heeft Texas Jones gevraagd de bekers te vinden. Na jaren van zoeken heeft hij aanwijzingen verzameld, maar hij wordt gevolgd door rivalen die de buit willen stelen. Daarom heeft Texas jouw hulp nodig!</p>\n<h2 id=\"het-spel\">Het Spel</h2>\n<p>Startpunt: Texas Jones verwelkomt jullie en geeft de eerste aanwijzingen.</p>\n<p>Samenwerking: Gebruik jullie kennis, creativiteit en teamwork om de uitdagingen te voltooien.</p>\n<p>Eindpunt: Aan het einde verzamelen alle teams zich bij Texas om hun bevindingen te delen en te ontdekken wie de meeste bekers heeft gevonden.</p>";

				const frontmatter = {"title":"Gents Stadsspel","description":"Dit unieke stadsspel neemt je mee door de prachtige stad Gent, vol geschiedenis, mysterie en uitdaging.","image":"gents-stadsspel/gents-stadsspel-1.jpg","priority":4,"isCityGame":true,"features":["Teams: Jullie worden verdeeld in teams om samen op zoek te gaan naar de bekers.","Hints en Puzzels: Gebruik de aanwijzingen van Texas Jones om uit te zoeken welke drie van de tien monumenten de bekers verbergen.","Monumenten: Verken enkele van de mooiste en meest iconische locaties van Gent terwijl je antwoorden zoekt en raadsels oplost.","Een Race tegen de Tijd: Zorg ervoor dat jullie de bekers vinden voordat de rivalen toeslaan."],"gallery":["gents-stadsspel/gents-stadsspel-2.jpg"],"categories":["city-games"],"duration":"2-3 uur","groupSize":"1-15 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/gents-stadsspel.md";
				const url = undefined;
				function rawContent() {
					return "\nGa mee op avontuur met Texas Jones, de minder bekende maar even vastberaden neef van Indiana Jones, en help hem bij het vinden van de legendarische 3 bekers van Keizer Karel. Dit unieke stadsspel neemt je mee door de prachtige stad Gent, vol geschiedenis, mysterie en uitdaging.\n\n## Het Verhaal: De 3 Bekers van Keizer Karel\n\nKeizer Karel, geboren in Gent, was een van de machtigste leiders van zijn tijd. Volgens een oude legende gaf zijn sterrenwichelaar hem de opdracht om 3 bekers te laten maken. Deze bekers moesten verenigd worden in het stadhuis van Gent om de stad haar ware grootsheid te geven. Maar de bekers raakten verloren in de geschiedenis en liggen nu verborgen in drie van de tien belangrijkste monumenten van Gent.\n\nDe Stichting Keizer Karel, die deze grootse keizer wil eren, heeft Texas Jones gevraagd de bekers te vinden. Na jaren van zoeken heeft hij aanwijzingen verzameld, maar hij wordt gevolgd door rivalen die de buit willen stelen. Daarom heeft Texas jouw hulp nodig!\n\n## Het Spel\n\nStartpunt: Texas Jones verwelkomt jullie en geeft de eerste aanwijzingen.\n\nSamenwerking: Gebruik jullie kennis, creativiteit en teamwork om de uitdagingen te voltooien.\n\nEindpunt: Aan het einde verzamelen alle teams zich bij Texas om hun bevindingen te delen en te ontdekken wie de meeste bekers heeft gevonden.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"het-verhaal-de-3-bekers-van-keizer-karel","text":"Het Verhaal: De 3 Bekers van Keizer Karel"},{"depth":2,"slug":"het-spel","text":"Het Spel"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
