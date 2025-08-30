import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Partez à l’aventure avec Texas Jones, le cousin moins connu mais tout aussi déterminé d’Indiana Jones, et aidez-le à retrouver les 3 légendaires coupes de Charles Quint. Ce jeu de ville unique vous emmène à travers la magnifique ville de Gand, remplie d’histoire, de mystère et de défis.</p>\n<h2 id=\"lhistoire--les-3-coupes-de-charles-quint\">L’Histoire : Les 3 Coupes de Charles Quint</h2>\n<p>Charles Quint, né à Gand, était l’un des dirigeants les plus puissants de son époque. Selon une ancienne légende, son astrologue lui ordonna de faire fabriquer 3 coupes. Ces coupes devaient être réunies à l’hôtel de ville de Gand pour donner à la ville sa véritable grandeur. Mais les coupes se sont perdues dans l’histoire et sont maintenant cachées dans trois des dix monuments les plus importants de Gand.</p>\n<p>La Fondation Charles Quint, qui souhaite honorer ce grand empereur, a demandé à Texas Jones de retrouver les coupes. Après des années de recherche, il a rassemblé des indices, mais il est suivi par des rivaux qui veulent voler le butin. C’est pourquoi Texas a besoin de votre aide !</p>\n<h2 id=\"le-jeu\">Le Jeu</h2>\n<p>Point de départ : Texas Jones vous accueille et vous donne les premiers indices.</p>\n<p>Collaboration : Utilisez vos connaissances, votre créativité et votre travail d’équipe pour accomplir les défis.</p>\n<p>Point final : À la fin, toutes les équipes se rassemblent auprès de Texas pour partager leurs découvertes et découvrir qui a trouvé le plus de coupes.</p>";

				const frontmatter = {"title":"Jeu de Ville à Gand","description":"Ce jeu de ville unique vous emmène à travers la magnifique ville de Gand, remplie d'histoire, de mystère et de défis.","image":"gents-stadsspel/gents-stadsspel-1.jpg","priority":4,"isCityGame":true,"features":["Équipes: Vous serez divisés en équipes pour partir ensemble à la recherche des coupes.","Indices et Énigmes: Utilisez les indices de Texas Jones pour découvrir lesquels des dix monuments cachent les trois coupes.","Monuments: Explorez certains des plus beaux sites emblématiques de Gand tout en cherchant des réponses et en résolvant des énigmes.","Une Course Contre la Montre: Assurez-vous de trouver les coupes avant que les rivaux ne frappent."],"gallery":["gents-stadsspel/gents-stadsspel-2.jpg"],"categories":["city-games"],"duration":"2-3 heures","groupSize":"1-15 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/gents-stadsspel.md";
				const url = undefined;
				function rawContent() {
					return "\nPartez à l'aventure avec Texas Jones, le cousin moins connu mais tout aussi déterminé d'Indiana Jones, et aidez-le à retrouver les 3 légendaires coupes de Charles Quint. Ce jeu de ville unique vous emmène à travers la magnifique ville de Gand, remplie d'histoire, de mystère et de défis.\n\n## L'Histoire : Les 3 Coupes de Charles Quint\n\nCharles Quint, né à Gand, était l'un des dirigeants les plus puissants de son époque. Selon une ancienne légende, son astrologue lui ordonna de faire fabriquer 3 coupes. Ces coupes devaient être réunies à l'hôtel de ville de Gand pour donner à la ville sa véritable grandeur. Mais les coupes se sont perdues dans l'histoire et sont maintenant cachées dans trois des dix monuments les plus importants de Gand.\n\nLa Fondation Charles Quint, qui souhaite honorer ce grand empereur, a demandé à Texas Jones de retrouver les coupes. Après des années de recherche, il a rassemblé des indices, mais il est suivi par des rivaux qui veulent voler le butin. C'est pourquoi Texas a besoin de votre aide !\n\n## Le Jeu\n\nPoint de départ : Texas Jones vous accueille et vous donne les premiers indices.\n\nCollaboration : Utilisez vos connaissances, votre créativité et votre travail d'équipe pour accomplir les défis.\n\nPoint final : À la fin, toutes les équipes se rassemblent auprès de Texas pour partager leurs découvertes et découvrir qui a trouvé le plus de coupes.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"lhistoire--les-3-coupes-de-charles-quint","text":"L’Histoire : Les 3 Coupes de Charles Quint"},{"depth":2,"slug":"le-jeu","text":"Le Jeu"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
