import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Iedereen beseft dat de volgende horizon de ruimte is - eerst de maan, daarna mars, en wie weet wat daarna volgt. Wij bereiden jullie team voor op deze buitengewone toekomst.</p>\n<p>Via diverse activiteiten zoals laserschermen, het herstellen van een ruimteschip, en communiceren in de ruimte, zorgen wij ervoor dat jullie team kan overleven in deze uitdagende omgeving.</p>\n<p>Bij het winnen van een activiteit, waarbij jullie laten zien dat jullie klaar zijn voor deze avontuurlijke reis, ontvangen jullie een speciaal drankje. Dit drankje fungeert als bescherming tegen de kosmische straling, waarmee jullie jezelf wapenen voor de gevaren van de ruimte.</p>\n<p>Aan het einde van deze unieke ervaring nemen de winnende teams hun speciale drankje in als symbolisch begin van hun reis naar de toekomst. De teambuilding in de ruimte biedt niet alleen een leuke uitdaging, maar ook een voorproefje van wat komen gaat in het tijdperk van de ruimteverkenning.</p>";

				const frontmatter = {"title":"De Space Games","description":"Waar de toekomst centraal staat en de ruimte jullie speelterrein is.","image":"space-games/space-games-1.jpg","priority":19,"isGame":true,"features":["Laserschermen","Ruimteschip herstellen","Ruimtecommunicatie"],"gallery":["space-games/space-games-2.jpg","space-games/space-games-3.jpg","space-games/space-games-4.jpg","space-games/space-games-5.jpg","space-games/space-games-6.jpg"],"categories":["indoor","innovaction"],"duration":"2 - 5 uur","groupSize":"8 - 1000 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/space-games.md";
				const url = undefined;
				function rawContent() {
					return "\nIedereen beseft dat de volgende horizon de ruimte is - eerst de maan, daarna mars, en wie weet wat daarna volgt. Wij bereiden jullie team voor op deze buitengewone toekomst.\n\nVia diverse activiteiten zoals laserschermen, het herstellen van een ruimteschip, en communiceren in de ruimte, zorgen wij ervoor dat jullie team kan overleven in deze uitdagende omgeving.\n\nBij het winnen van een activiteit, waarbij jullie laten zien dat jullie klaar zijn voor deze avontuurlijke reis, ontvangen jullie een speciaal drankje. Dit drankje fungeert als bescherming tegen de kosmische straling, waarmee jullie jezelf wapenen voor de gevaren van de ruimte.\n\nAan het einde van deze unieke ervaring nemen de winnende teams hun speciale drankje in als symbolisch begin van hun reis naar de toekomst. De teambuilding in de ruimte biedt niet alleen een leuke uitdaging, maar ook een voorproefje van wat komen gaat in het tijdperk van de ruimteverkenning.\n";
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
