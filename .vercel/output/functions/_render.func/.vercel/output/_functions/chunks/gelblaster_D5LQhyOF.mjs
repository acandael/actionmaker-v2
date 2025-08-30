import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Le GelBlaster est le remplacement ultime du paintball, sans les tracas de la peinture, du désordre ou des combinaisons. Avec des projectiles en gel sûrs et écologiques, vous pouvez profiter pleinement de l’action et de la compétition. Une activité passionnante qui repose sur la tactique, le travail d’équipe et le plaisir !</p>";

				const frontmatter = {"title":"GelBlaster","description":"Adrénaline et Action sans désordre !","image":"gelblaster/gelblaster-1.jpg","priority":8,"features":["Sans désordre","Écologique","Sûr pour tous","Suspense et travail d'équipe"],"gallery":["gelblaster/gelblaster-2.jpg","gelblaster/gelblaster-3.jpg","gelblaster/gelblaster-4.jpg","gelblaster/gelblaster-5.jpg","gelblaster/gelblaster-6.jpg","gelblaster/gelblaster-7.jpg"],"categories":["outdoor","actief"],"duration":"45 minutes - 2 heures","groupSize":"10 - 200 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/gelblaster.md";
				const url = undefined;
				function rawContent() {
					return "\nLe GelBlaster est le remplacement ultime du paintball, sans les tracas de la peinture, du désordre ou des combinaisons. Avec des projectiles en gel sûrs et écologiques, vous pouvez profiter pleinement de l'action et de la compétition. Une activité passionnante qui repose sur la tactique, le travail d'équipe et le plaisir !\n";
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
