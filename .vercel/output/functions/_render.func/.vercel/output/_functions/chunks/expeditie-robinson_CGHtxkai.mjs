import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Bij ons kun je genieten van een Robinson-ervaring op een locatie naar keuze. Tijdens de uitdagende Robinsonproeven bundelen de kampleden hun krachten om het andere kamp te overwinnen.</p>\n<p>Het Expeditie Robinson-spel, geïnspireerd op het gelijknamige televisieprogramma, omvat diverse proeven waarin twee kampen strijden tegen elkaar. Deze proeven vereisen vaardigheden zoals het beheersen van vuur, leren overleven, gebruik van een wapen, hanteren van kokosnoten en meer…</p>";

				const frontmatter = {"title":"Expeditie Robinson","description":"Het Expeditie Robinson-spel, geïnspireerd op het gelijknamige televisieprogramma","image":"expeditie-robinson/expeditie-robinson-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/6b95fb48-c267-4bdf-8039-d0a69d6e926d","priority":16,"isGame":true,"features":["teambuilding","survival skills","beheersen van vuur"],"gallery":["expeditie-robinson/expeditie-robinson-2.jpg","expeditie-robinson/expeditie-robinson-3.jpg","expeditie-robinson/expeditie-robinson-4.jpg","expeditie-robinson/expeditie-robinson-5.jpg","expeditie-robinson/expeditie-robinson-6.jpg","expeditie-robinson/expeditie-robinson-7.jpg"],"categories":["outdoor","actief"],"duration":"2 - 5 uur","groupSize":"8 - 1000 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/expeditie-robinson.md";
				const url = undefined;
				function rawContent() {
					return "\nBij ons kun je genieten van een Robinson-ervaring op een locatie naar keuze. Tijdens de uitdagende Robinsonproeven bundelen de kampleden hun krachten om het andere kamp te overwinnen.\n\nHet Expeditie Robinson-spel, geïnspireerd op het gelijknamige televisieprogramma, omvat diverse proeven waarin twee kampen strijden tegen elkaar. Deze proeven vereisen vaardigheden zoals het beheersen van vuur, leren overleven, gebruik van een wapen, hanteren van kokosnoten en meer...\n";
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
