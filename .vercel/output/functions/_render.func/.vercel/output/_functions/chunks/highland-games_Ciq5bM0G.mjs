import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>En tant que participant, vous serez immédiatement plongé dans l’ambiance des Highlands écossais grâce aux costumes adaptés et à la musique appropriée !</p>\n<p>Pendant vos propres Highland Games, tout tourne autour de la collaboration efficace. Vous serez confronté à divers défis et épreuves, pour lesquels vous recevrez toujours les explications nécessaires et le temps de réflexion. Les épreuves vous plongent complètement dans l’atmosphère écossaise, avec le lancer de botte de foin, le lancer de hache, le tir à la corde et le lancer de fer à cheval comme quelques exemples des épreuves uniques de force et d’adresse.</p>";

				const frontmatter = {"title":"Les Highland Games","description":"Une combinaison authentique de défis traditionnels imprégnés de caractère écossais.","image":"highland-games/highland-games-1.jpg","priority":15,"isGame":true,"features":["Ambiance écossaise","activités sportives et stimulantes","travail d'équipe"],"gallery":["highland-games/highland-games-2.jpg","highland-games/highland-games-3.jpg","highland-games/highland-games-4.jpg","highland-games/highland-games-5.jpg","highland-games/highland-games-6.jpg","highland-games/highland-games-7.jpg"],"categories":["outdoor","actief"],"duration":"2 - 5 heures","groupSize":"8 - 1000 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/highland-games.md";
				const url = undefined;
				function rawContent() {
					return "\nEn tant que participant, vous serez immédiatement plongé dans l'ambiance des Highlands écossais grâce aux costumes adaptés et à la musique appropriée !\n\nPendant vos propres Highland Games, tout tourne autour de la collaboration efficace. Vous serez confronté à divers défis et épreuves, pour lesquels vous recevrez toujours les explications nécessaires et le temps de réflexion. Les épreuves vous plongent complètement dans l'atmosphère écossaise, avec le lancer de botte de foin, le lancer de hache, le tir à la corde et le lancer de fer à cheval comme quelques exemples des épreuves uniques de force et d'adresse.\n";
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
