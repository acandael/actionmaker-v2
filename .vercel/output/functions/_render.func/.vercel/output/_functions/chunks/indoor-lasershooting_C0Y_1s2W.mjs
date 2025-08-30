import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Voulez-vous montrer vos talents de tireur dans un cadre spectaculaire mais totalement sécurisé ? Le tir au pigeon d’argile laser en intérieur offre de l’excitation et du plaisir pour tous, même pour les moins téméraires. Idéal pour l’intérieur ou lorsque la distance est trop courte pour le tir au pigeon d’argile laser classique.</p>\n<h2 id=\"comment-ça-marche\">Comment ça marche ?</h2>\n<p>Tirez avec des fusils Winchester d’origine sur 5 cibles installées.\nJusqu’à cinq participants tirent simultanément. Le défi ? Qui touchera la cible en premier ?\nTout cela se fait avec un système infrarouge spécial, ce qui le rend totalement sûr et n’endommage pas le lieu.</p>\n<h2 id=\"ce-qui-le-rend-si-amusant\">Ce qui le rend si amusant</h2>\n<p>Totalement sûr : Grâce à l’utilisation de l’infrarouge, il n’y a aucun danger. De plus, les fusils n’ont pas de recul.</p>\n<p>Écologique : Pas de déchets et pas de dégâts</p>\n<p>Accessible à tous : Même si vous n’avez jamais tiré, c’est une activité formidable pour petits et grands.</p>";

				const frontmatter = {"title":"Tir au Pigeon d'Argile Laser (Indoor)","description":"Passionnant, sûr et écologique !","image":"indoor-lasershooting/indoorlasershooting-1.jpg","features":["activité d'équipe passionnante","communication","travail d'équipe"],"gallery":["indoor-lasershooting/indoorlasershooting-2.jpg","indoor-lasershooting/indoorlasershooting-3.jpg","indoor-lasershooting/indoorlasershooting-4.jpg","indoor-lasershooting/indoorlasershooting-5.jpg","indoor-lasershooting/indoorlasershooting-6.jpg","indoor-lasershooting/indoorlasershooting-7.jpg"],"categories":["indoor","innovaction"],"duration":"30 minutes - 2 heures","groupSize":"8 - 30 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/indoor-lasershooting.md";
				const url = undefined;
				function rawContent() {
					return "\nVoulez-vous montrer vos talents de tireur dans un cadre spectaculaire mais totalement sécurisé ? Le tir au pigeon d'argile laser en intérieur offre de l'excitation et du plaisir pour tous, même pour les moins téméraires. Idéal pour l'intérieur ou lorsque la distance est trop courte pour le tir au pigeon d'argile laser classique.\n\n## Comment ça marche ?\n\nTirez avec des fusils Winchester d'origine sur 5 cibles installées.\nJusqu'à cinq participants tirent simultanément. Le défi ? Qui touchera la cible en premier ?\nTout cela se fait avec un système infrarouge spécial, ce qui le rend totalement sûr et n'endommage pas le lieu.\n\n## Ce qui le rend si amusant\n\nTotalement sûr : Grâce à l'utilisation de l'infrarouge, il n'y a aucun danger. De plus, les fusils n'ont pas de recul.\n\nÉcologique : Pas de déchets et pas de dégâts\n\nAccessible à tous : Même si vous n'avez jamais tiré, c'est une activité formidable pour petits et grands.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"comment-ça-marche","text":"Comment ça marche ?"},{"depth":2,"slug":"ce-qui-le-rend-si-amusant","text":"Ce qui le rend si amusant"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
