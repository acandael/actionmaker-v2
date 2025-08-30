import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Bien que souvent considéré comme un sport masculin, il est également très accessible aux femmes.\nLe lancer de hache est étonnamment facile, la plupart des gens réussissent à lancer la hache dans la cible dans les cinq à dix premiers lancers, la difficulté réside dans la constance des bons lancers. Ce sport repose davantage sur la relaxation et le rythme que sur la force brute.</p>\n<p>Vous avez toujours voulu vous sentir comme un robuste Suédois.\nNous terminons par une compétition pour voir qui a le plus progressé.</p>";

				const frontmatter = {"title":"Lancer de Hache","description":"Le lancer de hache est étonnamment facile, la plupart des gens réussissent à lancer la hache dans la cible dans les cinq à dix premiers lancers","image":"bijlwerpen/bijlwerpen-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/e79edaba-57fe-41d7-960f-d939c3353d80","priority":4,"features":["esprit d'équipe","sport","relaxation"],"gallery":["bijlwerpen/bijlwerpen-2.jpg","bijlwerpen/bijlwerpen-3.jpg","bijlwerpen/bijlwerpen-4.jpg","bijlwerpen/bijlwerpen-5.jpg","bijlwerpen/bijlwerpen-6.jpg","bijlwerpen/bijlwerpen-7.jpg"],"categories":["outdoor","actief"],"duration":"30 minutes - 2 heures","groupSize":"4-200 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/bijlwerpen.md";
				const url = undefined;
				function rawContent() {
					return "\nBien que souvent considéré comme un sport masculin, il est également très accessible aux femmes.\nLe lancer de hache est étonnamment facile, la plupart des gens réussissent à lancer la hache dans la cible dans les cinq à dix premiers lancers, la difficulté réside dans la constance des bons lancers. Ce sport repose davantage sur la relaxation et le rythme que sur la force brute.\n\nVous avez toujours voulu vous sentir comme un robuste Suédois.\nNous terminons par une compétition pour voir qui a le plus progressé.\n";
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
