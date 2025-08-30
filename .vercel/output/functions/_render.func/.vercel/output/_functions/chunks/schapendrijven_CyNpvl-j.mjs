import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Le berger vous enseignera les techniques de base de la conduite des moutons et vous montrera comment utiliser les commandes avec les chiens, des Border Collies. Après cette explication, vous conduirez vous-même les moutons à travers un parcours. L’atelier peut se terminer par une démonstration du berger.</p>";

				const frontmatter = {"title":"Conduite de Moutons","description":"La conduite de moutons est une activité agréable pour les groupes qui souhaitent profiter de la nature et de la beauté de l'environnement.","image":"schapendrijven/schapendrijven-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/1d589b57-7ad0-4484-88be-1d9c3c3c26c6","priority":1,"categories":["outdoor","workshop"],"duration":"30 minutes - 2 hours","groupSize":"Maximum 200 personnes","availability":"Sur demande","features":["esprit équipe","nature","animaux"],"gallery":["schapendrijven/schapendrijven-1.jpg","schapendrijven/schapendrijven-2.jpg","schapendrijven/schapendrijven-3.jpg","schapendrijven/schapendrijven-4.jpg","schapendrijven/schapendrijven-5.jpg","schapendrijven/schapendrijven-6.jpg","schapendrijven/schapendrijven-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/schapendrijven.md";
				const url = undefined;
				function rawContent() {
					return "\nLe berger vous enseignera les techniques de base de la conduite des moutons et vous montrera comment utiliser les commandes avec les chiens, des Border Collies. Après cette explication, vous conduirez vous-même les moutons à travers un parcours. L'atelier peut se terminer par une démonstration du berger.\n";
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
