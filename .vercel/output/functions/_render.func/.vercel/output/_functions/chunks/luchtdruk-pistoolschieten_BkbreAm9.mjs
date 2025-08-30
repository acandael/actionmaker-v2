import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Luchtdruk pistool- en karabijnschieten is een uitdagende activiteit die precisie, concentratie en een vaste hand vereist. Onder begeleiding van ervaren instructeurs leren deelnemers de basistechnieken van het pistoolschieten in een veilige en gecontroleerde omgeving.</p>\n<p>De sessie begint met een uitgebreide veiligheidsinstructie en uitleg over de techniek. Deelnemers leren over de juiste schiethouding, ademhalingstechniek en trekkercontrole. Na de basistraining volgen verschillende oefeningen waarbij deelnemers hun vaardigheden kunnen verbeteren.</p>\n<p>De activiteit kan worden afgesloten met een onderlinge competitie, waarbij teams of individuen het tegen elkaar opnemen in verschillende schietdisciplines. Dit zorgt niet alleen voor extra spanning en plezier, maar stimuleert ook het competitie-element binnen de groep.</p>";

				const frontmatter = {"title":"Luchtdruk pistool- en karabijnschieten","description":"Luchtdruk pistool- en karabijnschieten is een uitdagende activiteit die precisie, concentratie en een vaste hand vereist","image":"luchtdruk-pistool/luchtdruk-pistoolschieten-1.jpg","priority":13,"categories":["outdoor"],"duration":"2 - 3 uur","groupSize":"8 - 30 personen","availability":"Het hele jaar door","features":["Professionele instructeurs","Alle materiaal inbegrepen","Veilige omgeving","Competitie-element mogelijk"],"gallery":["luchtdruk-pistool/luchtdruk-pistoolschieten-2.jpg","luchtdruk-pistool/luchtdruk-pistoolschieten-3.jpg","luchtdruk-pistool/luchtdruk-pistoolschieten-4.jpg","luchtdruk-pistool/luchtdruk-pistoolschieten-5.jpg","luchtdruk-pistool/luchtdruk-pistoolschieten-6.jpg","luchtdruk-pistool/luchtdruk-pistoolschieten-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/luchtdruk-pistoolschieten.md";
				const url = undefined;
				function rawContent() {
					return "\nLuchtdruk pistool- en karabijnschieten is een uitdagende activiteit die precisie, concentratie en een vaste hand vereist. Onder begeleiding van ervaren instructeurs leren deelnemers de basistechnieken van het pistoolschieten in een veilige en gecontroleerde omgeving.\n\nDe sessie begint met een uitgebreide veiligheidsinstructie en uitleg over de techniek. Deelnemers leren over de juiste schiethouding, ademhalingstechniek en trekkercontrole. Na de basistraining volgen verschillende oefeningen waarbij deelnemers hun vaardigheden kunnen verbeteren.\n\nDe activiteit kan worden afgesloten met een onderlinge competitie, waarbij teams of individuen het tegen elkaar opnemen in verschillende schietdisciplines. Dit zorgt niet alleen voor extra spanning en plezier, maar stimuleert ook het competitie-element binnen de groep.\n";
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
