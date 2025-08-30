import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Deze teambuildingactiviteit zet de diversiteit van de vaardigheden van jouw team in de\nschijnwerpers en zorgt voor een gezonde dosis competitie en plezier op de werkvloer.. Welk team construeert het beste vliegtuigje, wie slaagt er het beste in om samen zoveel mogelijk herkenbare woorden te schrijven ( 1 potlood 10 draden om het te bedienen), en wie bewijst zich als de snelste in de bureaustoelenrace?</p>\n<p>Zowel fysieke kracht, communicatieve vaardigheden, creativiteit als teamwork komen aan bod. We hebben een gevarieerd programma samengesteld met uitdagende activiteiten die een beroep doen op verschillende aspecten van jullie talenten.</p>";

				const frontmatter = {"title":"The Office Games","description":"Ontdek de verborgen talenten binnen jouw kantoor","image":"office-games/office-games-1.jpg","priority":18,"isGame":true,"features":["Creatieve uitdagingen","Fysieke en communicatieve skills","Test jullie snelheid en samenwerking tijdens de bureaustoelenrace","Stressmanagement"],"gallery":["office-games/office-games-1.jpg","office-games/office-games-2.jpg","office-games/office-games-3.jpg","office-games/office-games-4.jpg","office-games/office-games-5.jpg","office-games/office-games-6.jpg"],"categories":["indoor"],"duration":"2 - 5 uur","groupSize":"8 - 1000 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/office-games.md";
				const url = undefined;
				function rawContent() {
					return "\nDeze teambuildingactiviteit zet de diversiteit van de vaardigheden van jouw team in de\nschijnwerpers en zorgt voor een gezonde dosis competitie en plezier op de werkvloer.. Welk team construeert het beste vliegtuigje, wie slaagt er het beste in om samen zoveel mogelijk herkenbare woorden te schrijven ( 1 potlood 10 draden om het te bedienen), en wie bewijst zich als de snelste in de bureaustoelenrace?\n\nZowel fysieke kracht, communicatieve vaardigheden, creativiteit als teamwork komen aan bod. We hebben een gevarieerd programma samengesteld met uitdagende activiteiten die een beroep doen op verschillende aspecten van jullie talenten.\n";
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
