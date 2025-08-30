import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Vivez une journée unique à Bruges avec le jeu urbain Brugse Metten ! Ce jeu interactif vous emmène à travers les plus beaux quartiers de la ville tout en participant à des activités amusantes et stimulantes. Idéal pour les groupes qui souhaitent découvrir Bruges de manière ludique.</p>";

				const frontmatter = {"title":"Parcours des Matines de Bruges","description":"Jeu urbain Brugse Metten : Découvrez Bruges avec plaisir et compétition !","image":"brugse-metten-tocht/brugse-metten-tocht-1.jpg","priority":2,"isCityGame":true,"features":["Chasse aux photos : Explorez les rues","Golf urbain sur le site de l'Ancien Saint-Jean","Reconnaître les symboles brugeois au Beffroi","Dégustation de genièvre au Palais des Congrès","Quiz en cours de route","En option : Expressions brugeoises"],"gallery":["brugse-metten-tocht/brugse-metten-tocht-2.jpg","brugse-metten-tocht/brugse-metten-tocht-3.jpg","brugse-metten-tocht/brugse-metten-tocht-4.jpg","brugse-metten-tocht/brugse-metten-tocht-5.jpg","brugse-metten-tocht/brugse-metten-tocht-6.jpg","brugse-metten-tocht/brugse-metten-tocht-7.jpg"],"categories":["city-games"],"duration":"2 - 3 heures","groupSize":"6 - 200 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/brugse-metten-tocht.md";
				const url = undefined;
				function rawContent() {
					return "\nVivez une journée unique à Bruges avec le jeu urbain Brugse Metten ! Ce jeu interactif vous emmène à travers les plus beaux quartiers de la ville tout en participant à des activités amusantes et stimulantes. Idéal pour les groupes qui souhaitent découvrir Bruges de manière ludique.\n";
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
