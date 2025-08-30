import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Leuke weetjes over Antwerpen ontdekken en gelijktijdig de teamgeest versterken binnen je team, dan bevelen we de ludieke Straffe Handjes-tocht aan. Een flinke scheut teamactiviteiten, een vleugje zoektocht en een korrel gastronomie, kortom de ideale mix voor een middagje Antwerpen.</p>\n<p>Onze Antwerpen Kenners gaan op zoek naar de Strafste Handjes onder jullie. Wie kan er goed speuren, is creatief en behendig, maar kan ook goed luisteren en de ludieke quizvragen correct beantwoorden? Basketten in de stad, een tijdslijn opzetten van Antwerpen, highlights ontdekken, chocolade proeven, het is maar een kleine opsomming van alles wat er te gebeuren staat. Het team dat over de meeste vaardigheden beschikt is de winnaar en mag zich tot de ‘strafste handjes’ laten uitroepen. Een KEI-straffe activiteit in Antwerpen centrum! ”</p>\n<p>De winnende teamleden vallen in de prijzen.</p>";

				const frontmatter = {"title":"Antwerpse Straffe Handjes","description":"Leuke weetjes over Antwerpen ontdekken en gelijktijdig de teamgeest versterken binnen je team","image":"antwerpse-straffe-handjes/antwerpse-straffe-handjes-1.jpg","priority":3,"isCityGame":true,"features":["Fotozoektocht: Verken het Straatbeeld","Shoot-outs op een iconische basketbal-locatie","Antwerpse Symbolen Herkennen in het Steen","Speeddate met de oudste houten roltrap van Europa","Antwerpen Chronologisch Onderweg","In Optie: Antwerpse Biertasting","Leuke weetjes","Grappige activiteiten","Prijzen"],"gallery":["antwerpse-straffe-handjes/antwerpse-straffe-handjes-1.jpg","antwerpse-straffe-handjes/antwerpse-straffe-handjes-2.jpg","antwerpse-straffe-handjes/antwerpse-straffe-handjes-3.jpg","antwerpse-straffe-handjes/antwerpse-straffe-handjes-4.jpg","antwerpse-straffe-handjes/antwerpse-straffe-handjes-5.jpg","antwerpse-straffe-handjes/antwerpse-straffe-handjes-6.jpg","antwerpse-straffe-handjes/antwerpse-straffe-handjes-7.jpg"],"categories":["city-games"],"duration":"2-3 uur","groupSize":"6-100 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/antwerpse-straffe-handjes.md";
				const url = undefined;
				function rawContent() {
					return "\nLeuke weetjes over Antwerpen ontdekken en gelijktijdig de teamgeest versterken binnen je team, dan bevelen we de ludieke Straffe Handjes-tocht aan. Een flinke scheut teamactiviteiten, een vleugje zoektocht en een korrel gastronomie, kortom de ideale mix voor een middagje Antwerpen.\n\nOnze Antwerpen Kenners gaan op zoek naar de Strafste Handjes onder jullie. Wie kan er goed speuren, is creatief en behendig, maar kan ook goed luisteren en de ludieke quizvragen correct beantwoorden? Basketten in de stad, een tijdslijn opzetten van Antwerpen, highlights ontdekken, chocolade proeven, het is maar een kleine opsomming van alles wat er te gebeuren staat. Het team dat over de meeste vaardigheden beschikt is de winnaar en mag zich tot de ‘strafste handjes’ laten uitroepen. Een KEI-straffe activiteit in Antwerpen centrum! \"\n\nDe winnende teamleden vallen in de prijzen.\n";
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
