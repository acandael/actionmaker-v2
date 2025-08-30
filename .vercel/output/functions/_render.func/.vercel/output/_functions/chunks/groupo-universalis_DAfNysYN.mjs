import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Bienvenue à Groupo Universalis, l’ultime aventure de team building où les groupes se réunissent pour devenir le groupe le plus universel ! Inspiré de l’émission de télévision Homo Universalis, nous mettons les équipes au défi de montrer leur polyvalence et leurs compétences de collaboration dans une série d’activités ludiques.</p>\n<p>Dans Groupo Universalis, tout tourne autour de la découverte et de l’utilisation des talents uniques de chacun. Chaque membre de l’équipe est encouragé à faire briller ses compétences, qu’il s’agisse de créativité, de résolution de problèmes, de force physique ou de perspicacité stratégique.</p>\n<p>Des énigmes stimulantes aux défis d’équipe passionnants, chaque composante de Groupo Universalis est conçue pour célébrer et renforcer la diversité au sein du groupe. Il ne s’agit pas seulement de gagner, mais aussi de créer des liens, de stimuler la confiance et de renforcer l’esprit d’équipe.</p>";

				const frontmatter = {"title":"Groupo Universalis","description":"Inspiré de l'émission de télévision Homo Universalis","image":"groupo-universalis/groupo-universalis-1.jpg","priority":14,"isGame":true,"features":["Activités pour tous les talents","Travail d'équipe et créativité","Des jeux courts et puissants"],"gallery":["groupo-universalis/groupo-universalis-2.jpg","groupo-universalis/groupo-universalis-3.jpg","groupo-universalis/groupo-universalis-4.jpg","groupo-universalis/groupo-universalis-5.jpg","groupo-universalis/groupo-universalis-6.jpg","groupo-universalis/groupo-universalis-7.jpg"],"categories":["indoor"],"duration":"2 - 3 heures","groupSize":"8 - 1000 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/groupo-universalis.md";
				const url = undefined;
				function rawContent() {
					return "\nBienvenue à Groupo Universalis, l'ultime aventure de team building où les groupes se réunissent pour devenir le groupe le plus universel ! Inspiré de l'émission de télévision Homo Universalis, nous mettons les équipes au défi de montrer leur polyvalence et leurs compétences de collaboration dans une série d'activités ludiques.\n\nDans Groupo Universalis, tout tourne autour de la découverte et de l'utilisation des talents uniques de chacun. Chaque membre de l'équipe est encouragé à faire briller ses compétences, qu'il s'agisse de créativité, de résolution de problèmes, de force physique ou de perspicacité stratégique.\n\nDes énigmes stimulantes aux défis d'équipe passionnants, chaque composante de Groupo Universalis est conçue pour célébrer et renforcer la diversité au sein du groupe. Il ne s'agit pas seulement de gagner, mais aussi de créer des liens, de stimuler la confiance et de renforcer l'esprit d'équipe.\n";
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
