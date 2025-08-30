import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Boogschieten is een klassieke sport die concentratie, techniek en precisie vereist. Onder begeleiding van ervaren instructeurs leren deelnemers de basistechnieken van het boogschieten in een veilige en ontspannen omgeving.</p>\n<p>De sessie begint met een uitgebreide instructie over veiligheid en techniek. Deelnemers leren over de juiste schiethouding, het spannen van de boog en het richten op het doel. Na de basistraining volgen verschillende oefeningen waarbij deelnemers hun vaardigheden kunnen verbeteren.</p>\n<p>De activiteit kan worden afgesloten met een spannende competitie, waarbij teams of individuen het tegen elkaar opnemen in verschillende uitdagingen. Dit zorgt niet alleen voor extra spanning en plezier, maar stimuleert ook de teamspirit en het competitieve element binnen de groep.</p>";

				const frontmatter = {"title":"Boogschieten","description":"Boogschieten is een klassieke sport die concentratie, techniek en precisie vereist","image":"boogschieten/boogschieten-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/d6b4ee1e-ce6c-4497-b7ed-dbabbcd10e10","priority":10,"features":["ervaren instructeurs","basistechnieken boogschieten","teamspirit"],"gallery":["boogschieten/boogschieten-2.jpg","boogschieten/boogschieten-3.jpg","boogschieten/boogschieten-4.jpg","boogschieten/boogschieten-5.jpg","boogschieten/boogschieten-6.jpg","boogschieten/boogschieten-7.jpg"],"categories":["outdoor"],"duration":"30 minuten - 2 uur","groupSize":"4 - 200 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/boogschieten.md";
				const url = undefined;
				function rawContent() {
					return "\nBoogschieten is een klassieke sport die concentratie, techniek en precisie vereist. Onder begeleiding van ervaren instructeurs leren deelnemers de basistechnieken van het boogschieten in een veilige en ontspannen omgeving.\n\nDe sessie begint met een uitgebreide instructie over veiligheid en techniek. Deelnemers leren over de juiste schiethouding, het spannen van de boog en het richten op het doel. Na de basistraining volgen verschillende oefeningen waarbij deelnemers hun vaardigheden kunnen verbeteren.\n\nDe activiteit kan worden afgesloten met een spannende competitie, waarbij teams of individuen het tegen elkaar opnemen in verschillende uitdagingen. Dit zorgt niet alleen voor extra spanning en plezier, maar stimuleert ook de teamspirit en het competitieve element binnen de groep.\n";
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
