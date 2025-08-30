import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Avez-vous le courage de marcher littéralement sur des charbons ardents ? Alors cet atelier est l’activité qu’il vous faut !</p>\n<p>La marche sur le feu est une tradition ancestrale qui demande non seulement du courage, mais aussi de la confiance en soi et en les autres. Une expérience unique qui renforce les liens au sein de votre équipe et crée des souvenirs inoubliables.</p>";

				const frontmatter = {"title":"Marche sur le Feu","description":"Êtes-vous prêts à traverser le feu ensemble ?","image":"vuurlopen/vuurlopen-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/9f864b33-8c45-4392-8e07-a720e8b500ee","priority":5,"features":["Développer la confiance","Croissance personnelle","Expérience unique"],"gallery":["vuurlopen/vuurlopen-2.jpg","vuurlopen/vuurlopen-3.jpg","vuurlopen/vuurlopen-4.jpg","vuurlopen/vuurlopen-5.jpg","vuurlopen/vuurlopen-6.jpg","vuurlopen/vuurlopen-7.jpg"],"categories":["workshop"],"duration":"2-3 heures","groupSize":"8-50 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/vuurlopen.md";
				const url = undefined;
				function rawContent() {
					return "\nAvez-vous le courage de marcher littéralement sur des charbons ardents ? Alors cet atelier est l'activité qu'il vous faut !\n\nLa marche sur le feu est une tradition ancestrale qui demande non seulement du courage, mais aussi de la confiance en soi et en les autres. Une expérience unique qui renforce les liens au sein de votre équipe et crée des souvenirs inoubliables.\n";
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
