import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Kruisboogschieten is een historische sport die precisie, concentratie en een vaste hand vereist. Onder begeleiding van ervaren instructeurs leren deelnemers de basistechnieken van het kruisboogschieten in een veilige en gecontroleerde omgeving.</p>\n<p>De sessie begint met een uitgebreide instructie over veiligheid en techniek. Deelnemers leren over de geschiedenis van de kruisboog, de juiste schiethouding en het richten op het doel. Na de basistraining volgen verschillende oefeningen waarbij deelnemers hun vaardigheden kunnen verbeteren.</p>\n<p>De activiteit kan worden afgesloten met een spannende competitie, waarbij teams of individuen het tegen elkaar opnemen in verschillende uitdagingen. Dit zorgt niet alleen voor extra spanning en plezier, maar stimuleert ook de teamspirit en het competitieve element binnen de groep.</p>";

				const frontmatter = {"title":"Kruisboogschieten","description":"Een spannende activiteit met moderne kruisbogen.","image":"kruisboogschieten/kruisboogschieten-1.jpg","categories":["outdoor"],"duration":"30 minuten - 2 uur","groupSize":"5 - 300 personen","availability":"Het hele jaar door","features":["Professionele begeleiding","Alle materiaal inbegrepen","Verschillende doelwitten","Competitie-element mogelijk"],"gallery":["kruisboogschieten/kruisboogschieten-2.jpg","kruisboogschieten/kruisboogschieten-3.jpg","kruisboogschieten/kruisboogschieten-4.jpg","kruisboogschieten/kruisboogschieten-5.jpg","kruisboogschieten/kruisboogschieten-6.jpg","kruisboogschieten/kruisboogschieten-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/kruisboogschieten.md";
				const url = undefined;
				function rawContent() {
					return "\nKruisboogschieten is een historische sport die precisie, concentratie en een vaste hand vereist. Onder begeleiding van ervaren instructeurs leren deelnemers de basistechnieken van het kruisboogschieten in een veilige en gecontroleerde omgeving.\n\nDe sessie begint met een uitgebreide instructie over veiligheid en techniek. Deelnemers leren over de geschiedenis van de kruisboog, de juiste schiethouding en het richten op het doel. Na de basistraining volgen verschillende oefeningen waarbij deelnemers hun vaardigheden kunnen verbeteren.\n\nDe activiteit kan worden afgesloten met een spannende competitie, waarbij teams of individuen het tegen elkaar opnemen in verschillende uitdagingen. Dit zorgt niet alleen voor extra spanning en plezier, maar stimuleert ook de teamspirit en het competitieve element binnen de groep.\n";
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
