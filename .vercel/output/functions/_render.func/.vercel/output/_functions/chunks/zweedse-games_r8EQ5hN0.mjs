import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Le lieu est imprégné d’ambiance suédoise, décoré de drapeaux suédois, et les équipes se défient avec des activités scandinaves. Pensez au tir de biathlon (INFRARÖD SKIDSKYTTE), au lancer de hache (KASTA YXA), au jeu de Kubb, aux puzzles suédois, au montage de meubles IKEA, et plus encore.</p>\n<p>Les équipes découvriront que le succès dépend de la mise en commun de leurs forces. Et qui sait, peut-être que le service de restauration proposera de délicieuses boulettes suédoises pour immerger complètement les participants dans la culture suédoise.</p>";

				const frontmatter = {"title":"Les Jeux Suédois","description":"Une variante surprenante des Highland Games, mais avec une touche suédoise.","image":"zweedse-games/zweedse-games-1.jpg","priority":24,"isGame":true,"features":["Tir de biathlon","Jeu de Kubb","Lancer de hache","Puzzles IKEA"],"gallery":["zweedse-games/zweedse-games-2.jpg","zweedse-games/zweedse-games-3.jpg","zweedse-games/zweedse-games-4.jpg","zweedse-games/zweedse-games-5.jpg","zweedse-games/zweedse-games-6.jpg","zweedse-games/zweedse-games-7.jpg"],"categories":["outdoor","actief"],"duration":"2.5 - 5 heures","groupSize":"8 - 500 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/zweedse-games.md";
				const url = undefined;
				function rawContent() {
					return "\nLe lieu est imprégné d'ambiance suédoise, décoré de drapeaux suédois, et les équipes se défient avec des activités scandinaves. Pensez au tir de biathlon (INFRARÖD SKIDSKYTTE), au lancer de hache (KASTA YXA), au jeu de Kubb, aux puzzles suédois, au montage de meubles IKEA, et plus encore.\n\nLes équipes découvriront que le succès dépend de la mise en commun de leurs forces. Et qui sait, peut-être que le service de restauration proposera de délicieuses boulettes suédoises pour immerger complètement les participants dans la culture suédoise.\n";
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
