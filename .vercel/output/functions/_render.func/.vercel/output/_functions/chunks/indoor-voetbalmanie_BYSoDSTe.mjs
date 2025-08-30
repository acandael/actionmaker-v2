import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Duik in de voetbalsfeer met een reeks unieke activiteiten (vb: voetbalbowling, voetbaldarts, mini kicker, voetbalquiz, …) die speciaal zijn ontworpen voor het voetbalevenement van het jaar.</p>\n<p>Of je nu een fervent voetbalfan bent of gewoon op zoek bent naar plezier en competitie, deze activiteiten beloven een onvergetelijke ervaring vol voetbalenthousiasme. Doe mee, scoor doelpunten en geniet van de opwinding van het EK voetbal op een geheel nieuwe manier!</p>";

				const frontmatter = {"title":"Voetbalmanie (Indoor)","description":"Beleef het voetbal op een geheel nieuwe manier met onze speciaal ontwikkelde activiteit","image":"indoor-voetbalmanie/indoor-voetbalmanie-1.jpg","priority":21,"isGame":true,"features":["Voetbalbowling","Voetbaldarts","Voetbalquiz","Voetbalsnooker","Mini Kicker"],"gallery":["indoor-voetbalmanie/indoor-voetbalmanie-2.jpg","indoor-voetbalmanie/indoor-voetbalmanie-3.jpg","indoor-voetbalmanie/indoor-voetbalmanie-4.jpg"],"categories":["indoor"],"duration":"30 minuten - 2 uur","groupSize":"8 - 200 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/indoor-voetbalmanie.md";
				const url = undefined;
				function rawContent() {
					return "\nDuik in de voetbalsfeer met een reeks unieke activiteiten (vb: voetbalbowling, voetbaldarts, mini kicker, voetbalquiz, ...) die speciaal zijn ontworpen voor het voetbalevenement van het jaar.\n\nOf je nu een fervent voetbalfan bent of gewoon op zoek bent naar plezier en competitie, deze activiteiten beloven een onvergetelijke ervaring vol voetbalenthousiasme. Doe mee, scoor doelpunten en geniet van de opwinding van het EK voetbal op een geheel nieuwe manier!\n";
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
