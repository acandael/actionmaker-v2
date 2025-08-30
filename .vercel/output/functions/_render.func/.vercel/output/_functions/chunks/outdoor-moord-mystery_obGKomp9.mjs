import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Plongez dans une expérience de team building passionnante où le mystère et l’intrigue se mêlent à des défis stimulants. Dans ce jeu inspiré de Cluedo, les participants doivent résoudre un meurtre mystérieux en utilisant leurs compétences de déduction, de communication et de tir.</p>\n<p>Les équipes collaborent pour rassembler des indices, interroger des suspects et résoudre des énigmes, tout en participant à des activités physiques comme le croquet thématique. Cette combinaison unique de réflexion stratégique et d’activité physique crée une expérience de team building mémorable qui renforce la cohésion d’équipe et stimule la pensée créative.</p>";

				const frontmatter = {"title":"Mystère du Meurtre (Outdoor)","description":"Vivez un team building inoubliable avec un mystérieux meurtre dans le style Cluedo!","image":"outdoor-moord-mystery/outdoor-moord-mystery-1.jpg","isGame":true,"features":["Jeu de communication","Compétences de tir","Croquet style Cluedo"],"gallery":["outdoor-moord-mystery/outdoor-moord-mystery-2.jpg"],"categories":["outdoor"],"duration":"2 - 5 heures","groupSize":"6 - 1000 personnes","availability":"Toute l'année"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/outdoor-moord-mystery.md";
				const url = undefined;
				function rawContent() {
					return "\nPlongez dans une expérience de team building passionnante où le mystère et l'intrigue se mêlent à des défis stimulants. Dans ce jeu inspiré de Cluedo, les participants doivent résoudre un meurtre mystérieux en utilisant leurs compétences de déduction, de communication et de tir.\n\nLes équipes collaborent pour rassembler des indices, interroger des suspects et résoudre des énigmes, tout en participant à des activités physiques comme le croquet thématique. Cette combinaison unique de réflexion stratégique et d'activité physique crée une expérience de team building mémorable qui renforce la cohésion d'équipe et stimule la pensée créative.\n";
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
