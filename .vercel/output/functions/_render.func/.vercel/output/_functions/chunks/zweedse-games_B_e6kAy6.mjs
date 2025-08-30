import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>De locatie is doordrenkt met Zweedse sfeer, versierd met Zweedse vlaggen, en de teams dagen elkaar uit met Scandinavische activiteiten. Denk aan biatlonschieten (INFRARÖD SKIDSKYTTE), bijlwerpen (KASTA VXA), kubb spelen, Zweedse puzzels, het in elkaar zetten van IKEA-kasten, en meer.</p>\n<p>De teams zullen ontdekken dat succes afhangt van het bundelen van hun krachten. En wie weet, misschien voorziet de catering wel in heerlijke Zweedse balletjes om de deelnemers helemaal onder te dompelen in de Zweedse cultuur.</p>";

				const frontmatter = {"title":"De Zweedse Games","description":"Een verrassende variant op de Highland Games, maar dan met een Zweedse twist.","image":"zweedse-games/zweedse-games-1.jpg","priority":24,"isGame":true,"features":["Biatlonschieten","Kubb spelen","Bijlwerpen","IKEA puzzels"],"gallery":["zweedse-games/zweedse-games-2.jpg","zweedse-games/zweedse-games-3.jpg","zweedse-games/zweedse-games-4.jpg","zweedse-games/zweedse-games-5.jpg","zweedse-games/zweedse-games-6.jpg","zweedse-games/zweedse-games-7.jpg"],"categories":["outdoor","actief"],"duration":"2.5 - 5 uur","groupSize":"8 - 500 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/zweedse-games.md";
				const url = undefined;
				function rawContent() {
					return "\nDe locatie is doordrenkt met Zweedse sfeer, versierd met Zweedse vlaggen, en de teams dagen elkaar uit met Scandinavische activiteiten. Denk aan biatlonschieten (INFRARÖD SKIDSKYTTE), bijlwerpen (KASTA VXA), kubb spelen, Zweedse puzzels, het in elkaar zetten van IKEA-kasten, en meer.\n\nDe teams zullen ontdekken dat succes afhangt van het bundelen van hun krachten. En wie weet, misschien voorziet de catering wel in heerlijke Zweedse balletjes om de deelnemers helemaal onder te dompelen in de Zweedse cultuur.\n";
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
