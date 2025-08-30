import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>L’initiation à l’escrime est une activité unique et passionnante qui convient parfaitement au team building. Au cours de cette session, les participants découvrent les bases de l’escrime, un sport qui nécessite non seulement de l’agilité physique mais aussi une réflexion stratégique et une prise de décision rapide.</p>\n<p>Sous la direction de nos instructeurs expérimentés, les participants apprennent les techniques fondamentales de l’escrime, notamment la position de base, le jeu de jambes et différents mouvements d’attaque et de défense. La sécurité est la priorité absolue, et tous les participants sont équipés d’équipements de protection professionnels.</p>\n<p>L’activité se termine par un petit tournoi où les équipes s’affrontent dans une atmosphère sportive et amicale. Cela crée non seulement une finale passionnante de l’atelier, mais favorise également l’esprit d’équipe et les liens entre collègues.</p>";

				const frontmatter = {"title":"Initiation à l'Escrime (Indoor)","description":"Sous la direction de nos instructeurs expérimentés, les participants apprennent les techniques fondamentales de l'escrime","image":"indoor-scherminitiatie/indoor-scherminitiatie-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/bec895e0-71a8-46ba-b83a-4ebbbbfe4518","categories":["indoor","actief"],"duration":"30 minutes - 2.5 heures","groupSize":"4 - 350 personnes","availability":"Sur demande","priority":1,"features":["esprit équipe","sport","technique"],"gallery":["indoor-scherminitiatie/indoor-scherminitiatie-2.jpg","indoor-scherminitiatie/indoor-scherminitiatie-3.jpg","indoor-scherminitiatie/indoor-scherminitiatie-4.jpg","indoor-scherminitiatie/indoor-scherminitiatie-5.jpg","indoor-scherminitiatie/indoor-scherminitiatie-6.jpg","indoor-scherminitiatie/indoor-scherminitiatie-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/indoor-scherminitiatie.md";
				const url = undefined;
				function rawContent() {
					return "\nL'initiation à l'escrime est une activité unique et passionnante qui convient parfaitement au team building. Au cours de cette session, les participants découvrent les bases de l'escrime, un sport qui nécessite non seulement de l'agilité physique mais aussi une réflexion stratégique et une prise de décision rapide.\n\nSous la direction de nos instructeurs expérimentés, les participants apprennent les techniques fondamentales de l'escrime, notamment la position de base, le jeu de jambes et différents mouvements d'attaque et de défense. La sécurité est la priorité absolue, et tous les participants sont équipés d'équipements de protection professionnels.\n\nL'activité se termine par un petit tournoi où les équipes s'affrontent dans une atmosphère sportive et amicale. Cela crée non seulement une finale passionnante de l'atelier, mais favorise également l'esprit d'équipe et les liens entre collègues.\n";
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
