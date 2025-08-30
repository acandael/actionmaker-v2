import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Als deelnemer word je onmiddellijk ondergedompeld in de Schotse Highlands door de aangepaste kledij en de passende muziek!</p>\n<p>Tijdens jouw eigen Highland Games draait alles om effectieve samenwerking. Je wordt geconfronteerd met diverse uitdagingen en proeven, waarvoor je steeds de nodige uitleg en bedenktijd krijgt. De proeven brengen je volledig in de Schotse sferen, met hooibaalgooien, bijlwerpen, touwtrekken en hoefijzerwerpen als slechts een aantal voorbeelden van de unieke kracht- en behendigheidsproeven.</p>";

				const frontmatter = {"title":"De Highland Games","description":"Een authentieke combinatie van traditionele uitdagingen doordrenkt met een Schots karakter.","image":"highland-games/highland-games-1.jpg","priority":15,"isGame":true,"features":["Schotse sfeer","uitdagende en sportieve activiteiten","teamwork"],"gallery":["highland-games/highland-games-2.jpg","highland-games/highland-games-3.jpg","highland-games/highland-games-4.jpg","highland-games/highland-games-5.jpg","highland-games/highland-games-6.jpg","highland-games/highland-games-7.jpg"],"categories":["outdoor","actief"],"duration":"2 - 5 uur","groupSize":"8 - 1000 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/highland-games.md";
				const url = undefined;
				function rawContent() {
					return "\nAls deelnemer word je onmiddellijk ondergedompeld in de Schotse Highlands door de aangepaste kledij en de passende muziek!\n\nTijdens jouw eigen Highland Games draait alles om effectieve samenwerking. Je wordt geconfronteerd met diverse uitdagingen en proeven, waarvoor je steeds de nodige uitleg en bedenktijd krijgt. De proeven brengen je volledig in de Schotse sferen, met hooibaalgooien, bijlwerpen, touwtrekken en hoefijzerwerpen als slechts een aantal voorbeelden van de unieke kracht- en behendigheidsproeven.\n";
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
