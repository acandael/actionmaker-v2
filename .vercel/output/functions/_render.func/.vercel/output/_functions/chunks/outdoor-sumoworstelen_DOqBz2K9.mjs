import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Outdoor sumoworstelen is duwen en trekken totdat je tegenstander erbij neervalt. Met 2 of 4 personen betreedt u de mat en start u met de bekende Japanse sumogroet. Op het startsignaal van de spelbegeleider gaat de wedstrijd van start en moeten de deelnemers elkaar van de mat af duwen voor een half punt of omgooien voor een heel punt. Tot slot mag de winnaar van de match een overwinningsjump op de verliezer maken. Iedereen kan meerdere keren deelnemen.</p>\n<p>Nieuwigheid is de sumo tweeling, het is een erg leuke variant op het welbekende sumo worstel spel, maar bij deze vergt het dus goed teamwork met je sumo-partner.\nEen partijtje sumoworstelen vergt veel van de conditie en van de lachspieren van de toeschouwers, dus houdt uw camera klaar!</p>";

				const frontmatter = {"title":"Sumoworstelen (Outdoor)","description":"Een hilarische activiteit waarbij deelnemers in opblaasbare enkele en dubbele sumopakken tegen elkaar strijden.","image":"outdoor-sumoworstelen/outdoor-sumoworstelen-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/3c3bd7aa-e0f1-4bbf-a9b9-992b8b2afc01","priority":9,"categories":["actief","outdoor"],"duration":"30 minuten - 90 minuten afhankelijk van fysieke conditie","groupSize":"8 - 50 personen","availability":"Het hele jaar door","features":["Opblaasbare sumopakken","Veilige matten","Professionele begeleiding","Toernooi-formule mogelijk"],"gallery":["outdoor-sumoworstelen/outdoor-sumoworstelen-2.jpg","outdoor-sumoworstelen/outdoor-sumoworstelen-3.jpg","outdoor-sumoworstelen/outdoor-sumoworstelen-4.jpg","outdoor-sumoworstelen/outdoor-sumoworstelen-5.jpg","outdoor-sumoworstelen/outdoor-sumoworstelen-6.jpg","outdoor-sumoworstelen/outdoor-sumoworstelen-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/outdoor-sumoworstelen.md";
				const url = undefined;
				function rawContent() {
					return "\nOutdoor sumoworstelen is duwen en trekken totdat je tegenstander erbij neervalt. Met 2 of 4 personen betreedt u de mat en start u met de bekende Japanse sumogroet. Op het startsignaal van de spelbegeleider gaat de wedstrijd van start en moeten de deelnemers elkaar van de mat af duwen voor een half punt of omgooien voor een heel punt. Tot slot mag de winnaar van de match een overwinningsjump op de verliezer maken. Iedereen kan meerdere keren deelnemen.\n\nNieuwigheid is de sumo tweeling, het is een erg leuke variant op het welbekende sumo worstel spel, maar bij deze vergt het dus goed teamwork met je sumo-partner.\nEen partijtje sumoworstelen vergt veel van de conditie en van de lachspieren van de toeschouwers, dus houdt uw camera klaar!\n";
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
