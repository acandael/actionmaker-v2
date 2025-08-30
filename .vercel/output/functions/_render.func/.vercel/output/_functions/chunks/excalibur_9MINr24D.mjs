import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>L’épée de la fortune pour toute votre équipe est solidement fixée par des verrous et des chaînes. Pour révéler les codes numériques nécessaires, vous devez relever avec succès différents défis, comme la salle des clés, les douves, la salle des duels, le champ de mines et plus encore. Ici, le talent unique de chacun a l’occasion de briller.</p>\n<p>En réussissant les épreuves, l’équipe gagnante gagne à chaque fois 1 chiffre du code. Après avoir terminé tous les défis, tous les participants sont conduits à la salle des chevaliers. Ici, les équipes victorieuses s’avancent pour entrer leur partie des chiffres et ainsi libérer l’épée.</p>";

				const frontmatter = {"title":"Excalibur","description":"Cette activité met l'accent sur la collaboration totale","image":"excalibur/excalibur-1.jpg","priority":19,"isGame":true,"features":["Aventure","Team building","Compétition"],"gallery":["excalibur/excalibur-2.jpg","excalibur/excalibur-3.jpg","excalibur/excalibur-4.jpg","excalibur/excalibur-5.jpg","excalibur/excalibur-6.jpg","excalibur/excalibur-7.jpg"],"categories":["outdoor","actief"],"duration":"2 - 5 heures","groupSize":"8 - 500 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/excalibur.md";
				const url = undefined;
				function rawContent() {
					return "\nL'épée de la fortune pour toute votre équipe est solidement fixée par des verrous et des chaînes. Pour révéler les codes numériques nécessaires, vous devez relever avec succès différents défis, comme la salle des clés, les douves, la salle des duels, le champ de mines et plus encore. Ici, le talent unique de chacun a l'occasion de briller.\n\nEn réussissant les épreuves, l'équipe gagnante gagne à chaque fois 1 chiffre du code. Après avoir terminé tous les défis, tous les participants sont conduits à la salle des chevaliers. Ici, les équipes victorieuses s'avancent pour entrer leur partie des chiffres et ainsi libérer l'épée.\n";
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
