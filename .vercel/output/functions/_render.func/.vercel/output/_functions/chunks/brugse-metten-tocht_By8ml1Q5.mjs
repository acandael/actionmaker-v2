import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Beleef een unieke dag in Brugge met het Brugse Metten Stadsspel! Dit interactieve spel neemt je mee door de mooiste delen van de stad terwijl je deelneemt aan leuke en uitdagende activiteiten. Ideaal voor groepen die Brugge op een speelse manier willen ontdekken.</p>";

				const frontmatter = {"title":"Brugse Metten Tocht","description":"Brugse Metten Stadsspel: Ontdek Brugge met plezier en competitie!","image":"brugse-metten-tocht/brugse-metten-tocht-1.jpg","isCityGame":true,"priority":2,"features":["Fotozoektocht: Verken het Straatbeeld","Urban Golf op de Site Oud Sint-Ja","Brugse Symbolen Herkennen in het Belfort","Jenevers Proeven in het Congresgebouw","Quiz Onderweg","In Optie: Brugse Zegswijzen"],"gallery":["brugse-metten-tocht/brugse-metten-tocht-2.jpg","brugse-metten-tocht/brugse-metten-tocht-3.jpg","brugse-metten-tocht/brugse-metten-tocht-4.jpg","brugse-metten-tocht/brugse-metten-tocht-5.jpg","brugse-metten-tocht/brugse-metten-tocht-6.jpg","brugse-metten-tocht/brugse-metten-tocht-7.jpg"],"categories":["city-games"],"duration":"2-3 uur","groupSize":"6 - 200 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/brugse-metten-tocht.md";
				const url = undefined;
				function rawContent() {
					return "\nBeleef een unieke dag in Brugge met het Brugse Metten Stadsspel! Dit interactieve spel neemt je mee door de mooiste delen van de stad terwijl je deelneemt aan leuke en uitdagende activiteiten. Ideaal voor groepen die Brugge op een speelse manier willen ontdekken.\n";
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
