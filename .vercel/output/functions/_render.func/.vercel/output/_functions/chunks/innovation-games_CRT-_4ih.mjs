import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Préparez-vous pour un team building qui vous emmène vers le futur de l’innovation. Cette expérience unique comprend une gamme d’activités nouvelles et avant-gardistes, spécialement conçues pour un team building dynamique.</p>\n<p>Découvrez l’influence de la Réalité Virtuelle (VR) sur le cerveau : collaborez pour désamorcer une bombe, sautez d’un immeuble de 80 étages, maniez un sabre laser, et plus encore.\nTirez avec des fusils à pigeons laser innovants, écologiques et accessibles à tous.\nVivez l’expérience de l’escrime au sabre laser, inspirée de Star Wars, la dernière sensation dans les disciplines officielles d’escrime.</p>\n<p>Apprenez à piloter des drones : nous fournissons des drones très conviviaux, pendant que l’équipe parcourt rapidement un circuit et prend des photos, ou volez avec le drone via des lunettes FPV. Un test de confiance conclut l’activité.</p>\n<p>Testez vos compétences de tir avec des carabines de biathlon laser et des pistolets de sport finlandais. Coachés par les membres de l’équipe à l’aide d’une console, découvrez qui est le meilleur tireur.</p>\n<p>Désamorcez une bombe physique ou sauvez une centrale nucléaire avec nos boîtes d’évasion innovantes.\nTirez avec la forme la plus récente et écologique de paintball : le gellblaster</p>";

				const frontmatter = {"title":"Innovation Games (Indoor)","description":"Relevez des défis passionnants et découvrez la puissance de l'innovation dans le team building","image":"innovation-games/innovation-games-1.jpg","priority":16,"isGame":true,"features":["Escrime au sabre laser","Pilotage de drones","Tir avec carabines de biathlon infrarouge","Boîtes d'évasion","Gellblaster"],"gallery":["innovation-games/innovation-games-2.jpg","innovation-games/innovation-games-3.jpg","innovation-games/innovation-games-4.jpg","innovation-games/innovation-games-5.jpg","innovation-games/innovation-games-6.jpg","innovation-games/innovation-games-7.jpg"],"categories":["indoor","innovaction"],"duration":"2 - 5 heures","groupSize":"4 - 1000 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/innovation-games.md";
				const url = undefined;
				function rawContent() {
					return "\nPréparez-vous pour un team building qui vous emmène vers le futur de l'innovation. Cette expérience unique comprend une gamme d'activités nouvelles et avant-gardistes, spécialement conçues pour un team building dynamique.\n\nDécouvrez l'influence de la Réalité Virtuelle (VR) sur le cerveau : collaborez pour désamorcer une bombe, sautez d'un immeuble de 80 étages, maniez un sabre laser, et plus encore.\nTirez avec des fusils à pigeons laser innovants, écologiques et accessibles à tous.\nVivez l'expérience de l'escrime au sabre laser, inspirée de Star Wars, la dernière sensation dans les disciplines officielles d'escrime.\n\nApprenez à piloter des drones : nous fournissons des drones très conviviaux, pendant que l'équipe parcourt rapidement un circuit et prend des photos, ou volez avec le drone via des lunettes FPV. Un test de confiance conclut l'activité.\n\nTestez vos compétences de tir avec des carabines de biathlon laser et des pistolets de sport finlandais. Coachés par les membres de l'équipe à l'aide d'une console, découvrez qui est le meilleur tireur.\n\nDésamorcez une bombe physique ou sauvez une centrale nucléaire avec nos boîtes d'évasion innovantes.\nTirez avec la forme la plus récente et écologique de paintball : le gellblaster\n";
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
