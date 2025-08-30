import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Dankzij hun unieke karakter zijn alpaca’s enorm geschikt om samen op zoek te gaan naar de verschillende manieren om een situatie binnen een team aan te pakken.\nJe komt door middel van kleine opdrachten meer te weten over vertrouwen, communicatie en leiderschap in je team. Jij geeft aan welk thema binnen je team je wil behandelen; communiceren, samenwerken en conflicten beheren of gewoon enkel fun. Deze fijngevoelige dieren geven directe feedback op de mens en hoe die zich gedraagt. Ze voelen aan of het klopt; je eigenlijke reactie met je daadwerkelijk gevoel.</p>\n<p>Blijft je alpaca staan, trekt hij tegen, wil hij niet mee? Allemaal indicaties dat er iets niet klopt in je communicatie met hen. We geven je tips en bespreken hoe je samen met je alpaca verder kan. Dit is geen gewone ‘wandeling’, dit is een effectieve behendigheidsoefening met je dier.</p>";

				const frontmatter = {"title":"Alpaca Workshop","description":"Deze fijngevoelige dieren geven directe feedback op de mens en hoe die zich gedraagt","image":"alpacaworkshop/alpacaworkshop-1.jpg","priority":10,"features":["teamgeest","communicatie","leiderschap"],"gallery":["alpacaworkshop/alpacaworkshop-2.jpg","alpacaworkshop/alpacaworkshop-3.jpg","alpacaworkshop/alpacaworkshop-4.jpg","alpacaworkshop/alpacaworkshop-5.jpg","alpacaworkshop/alpacaworkshop-6.jpg","alpacaworkshop/alpacaworkshop-7.jpg"],"categories":["workshop"],"duration":"2-3 uur","groupSize":"1-15 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/alpacaworkshop.md";
				const url = undefined;
				function rawContent() {
					return "\nDankzij hun unieke karakter zijn alpaca’s enorm geschikt om samen op zoek te gaan naar de verschillende manieren om een situatie binnen een team aan te pakken.\nJe komt door middel van kleine opdrachten meer te weten over vertrouwen, communicatie en leiderschap in je team. Jij geeft aan welk thema binnen je team je wil behandelen; communiceren, samenwerken en conflicten beheren of gewoon enkel fun. Deze fijngevoelige dieren geven directe feedback op de mens en hoe die zich gedraagt. Ze voelen aan of het klopt; je eigenlijke reactie met je daadwerkelijk gevoel.\n\nBlijft je alpaca staan, trekt hij tegen, wil hij niet mee? Allemaal indicaties dat er iets niet klopt in je communicatie met hen. We geven je tips en bespreken hoe je samen met je alpaca verder kan. Dit is geen gewone ‘wandeling’, dit is een effectieve behendigheidsoefening met je dier.\n";
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
