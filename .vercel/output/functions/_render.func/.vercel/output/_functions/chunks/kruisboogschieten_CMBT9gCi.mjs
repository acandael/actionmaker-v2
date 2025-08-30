import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Le tir à l’arbalète est un sport historique qui exige précision, concentration et main stable. Sous la direction d’instructeurs expérimentés, les participants apprennent les techniques de base du tir à l’arbalète dans un environnement sûr et contrôlé.</p>\n<p>La session commence par une instruction approfondie sur la sécurité et la technique. Les participants découvrent l’histoire de l’arbalète, la position de tir correcte et le visé de la cible. Après la formation de base, différents exercices suivent permettant aux participants d’améliorer leurs compétences.</p>\n<p>L’activité peut se terminer par une compétition passionnante, où les équipes ou les individus s’affrontent dans différents défis. Cela apporte non seulement plus d’excitation et de plaisir, mais stimule également l’esprit d’équipe et l’élément compétitif au sein du groupe.</p>";

				const frontmatter = {"title":"Tir à l'Arbalète","description":"Une activité passionnante avec des arbalètes modernes","image":"kruisboogschieten/kruisboogschieten-1.jpg","categories":["outdoor","actief"],"duration":"30 minutes - 2 heures","groupSize":"5 - 300 personnes","availability":"Sur demande","features":["esprit équipe","sport","précision"],"gallery":["kruisboogschieten/kruisboogschieten-2.jpg","kruisboogschieten/kruisboogschieten-3.jpg","kruisboogschieten/kruisboogschieten-4.jpg","kruisboogschieten/kruisboogschieten-5.jpg","kruisboogschieten/kruisboogschieten-6.jpg","kruisboogschieten/kruisboogschieten-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/kruisboogschieten.md";
				const url = undefined;
				function rawContent() {
					return "\nLe tir à l'arbalète est un sport historique qui exige précision, concentration et main stable. Sous la direction d'instructeurs expérimentés, les participants apprennent les techniques de base du tir à l'arbalète dans un environnement sûr et contrôlé.\n\nLa session commence par une instruction approfondie sur la sécurité et la technique. Les participants découvrent l'histoire de l'arbalète, la position de tir correcte et le visé de la cible. Après la formation de base, différents exercices suivent permettant aux participants d'améliorer leurs compétences.\n\nL'activité peut se terminer par une compétition passionnante, où les équipes ou les individus s'affrontent dans différents défis. Cela apporte non seulement plus d'excitation et de plaisir, mais stimule également l'esprit d'équipe et l'élément compétitif au sein du groupe.\n";
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
