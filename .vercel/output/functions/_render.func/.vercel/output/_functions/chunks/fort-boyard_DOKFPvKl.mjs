import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Le programme Fort Boyard est particulièrement connu auprès des francophones. Pour remporter la victoire, les équipes s’affrontent dans des épreuves chronométrées stimulantes, comme dans l’émission de télévision. Dans différentes “salles”, on découvre qui collabore le mieux. Chaque talent individuel, allant de la logique aux capacités physiques, de la précision à la souplesse et même au goût, est mis à l’épreuve.</p>\n<p>Ce programme peut être vécu dans différents châteaux et autres lieux en Belgique, où les participants ont l’occasion de faire briller leurs diverses compétences.</p>";

				const frontmatter = {"title":"Fort Boyard","description":"Le programme Fort Boyard est particulièrement connu auprès des francophones","image":"fort-boyard/fort-boyard-1.jpg","isGame":true,"features":["esprit d'équipe","activités accessibles à tous","épreuves surprenantes"],"gallery":["fort-boyard/fort-boyard-2.jpg","fort-boyard/fort-boyard-3.jpg","fort-boyard/fort-boyard-4.jpg","fort-boyard/fort-boyard-5.jpg","fort-boyard/fort-boyard-6.jpg","fort-boyard/fort-boyard-7.jpg"],"categories":["outdoor","actief"],"duration":"2 - 5 heures","groupSize":"8 - 1000 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/fort-boyard.md";
				const url = undefined;
				function rawContent() {
					return "\nLe programme Fort Boyard est particulièrement connu auprès des francophones. Pour remporter la victoire, les équipes s'affrontent dans des épreuves chronométrées stimulantes, comme dans l'émission de télévision. Dans différentes \"salles\", on découvre qui collabore le mieux. Chaque talent individuel, allant de la logique aux capacités physiques, de la précision à la souplesse et même au goût, est mis à l'épreuve.\n\nCe programme peut être vécu dans différents châteaux et autres lieux en Belgique, où les participants ont l'occasion de faire briller leurs diverses compétences.\n";
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
