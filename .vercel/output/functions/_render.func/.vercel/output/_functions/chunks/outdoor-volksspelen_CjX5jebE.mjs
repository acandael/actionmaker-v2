import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Revivez la convivialité d’antan avec une série de jeux populaires traditionnels. Cette activité nostalgique est parfaite si vous recherchez une animation décontractée, accessible et divertissante pour votre événement. Que ce soit pour un accès libre, une fête ou un team building, les jeux populaires rassemblent tout le monde.</p>";

				const frontmatter = {"title":"Jeux Populaires (Outdoor)","description":"Nostalgie et plaisir pour tous !","image":"outdoor-volksspelen/outdoor-volksspelen-1.jpg","priority":12,"features":["Lancer de fer à cheval","Billard hollandais","Lancer de pièces","Fléchettes","Spirale électrique"],"gallery":["outdoor-volksspelen/outdoor-volksspelen-2.jpg","outdoor-volksspelen/outdoor-volksspelen-3.jpg","outdoor-volksspelen/outdoor-volksspelen-4.jpg","outdoor-volksspelen/outdoor-volksspelen-5.jpg","outdoor-volksspelen/outdoor-volksspelen-6.jpg","outdoor-volksspelen/outdoor-volksspelen-7.jpg"],"categories":["outdoor"],"duration":"30 minuten-3 uur","groupSize":"8 - 500 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/outdoor-volksspelen.md";
				const url = undefined;
				function rawContent() {
					return "\nRevivez la convivialité d'antan avec une série de jeux populaires traditionnels. Cette activité nostalgique est parfaite si vous recherchez une animation décontractée, accessible et divertissante pour votre événement. Que ce soit pour un accès libre, une fête ou un team building, les jeux populaires rassemblent tout le monde.\n";
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
