import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Le tir à l’arc est un sport classique qui nécessite concentration, technique et précision. Sous la direction d’instructeurs expérimentés, les participants apprennent les techniques de base du tir à l’arc dans un environnement sûr et détendu.</p>\n<p>La session commence par une instruction détaillée sur la sécurité et la technique. Les participants apprennent la position de tir correcte, la tension de l’arc et le visé de la cible. Après la formation de base, différents exercices permettent aux participants d’améliorer leurs compétences.</p>\n<p>L’activité peut se terminer par une compétition passionnante, où les équipes ou les individus s’affrontent dans différents défis. Cela crée non seulement plus d’excitation et de plaisir, mais stimule également l’esprit d’équipe et l’élément compétitif au sein du groupe.</p>";

				const frontmatter = {"title":"Tir à l'Arc","description":"Le tir à l'arc est un sport classique qui nécessite concentration, technique et précision.","image":"boogschieten/boogschieten-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/d6b4ee1e-ce6c-4497-b7ed-dbabbcd10e10","priority":10,"features":["instructeurs expérimentés","techniques de base","teamspirit"],"gallery":["boogschieten/boogschieten-2.jpg","boogschieten/boogschieten-3.jpg","boogschieten/boogschieten-4.jpg","boogschieten/boogschieten-5.jpg","boogschieten/boogschieten-6.jpg","boogschieten/boogschieten-7.jpg"],"categories":["outdoor"],"duration":"30 minutes - 2 heures","groupSize":"4 - 200 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/boogschieten.md";
				const url = undefined;
				function rawContent() {
					return "\nLe tir à l'arc est un sport classique qui nécessite concentration, technique et précision. Sous la direction d'instructeurs expérimentés, les participants apprennent les techniques de base du tir à l'arc dans un environnement sûr et détendu.\n\nLa session commence par une instruction détaillée sur la sécurité et la technique. Les participants apprennent la position de tir correcte, la tension de l'arc et le visé de la cible. Après la formation de base, différents exercices permettent aux participants d'améliorer leurs compétences.\n\nL'activité peut se terminer par une compétition passionnante, où les équipes ou les individus s'affrontent dans différents défis. Cela crée non seulement plus d'excitation et de plaisir, mais stimule également l'esprit d'équipe et l'élément compétitif au sein du groupe.\n";
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
