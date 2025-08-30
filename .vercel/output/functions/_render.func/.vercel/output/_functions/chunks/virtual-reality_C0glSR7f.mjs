import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Défis VR : Collaborer, Découvrir et Triompher!</p>\n<p>Plongez dans un monde rempli de suspense et d’aventure avec nos expériences VR uniques. La collaboration, la confiance et la précision sont les clés du succès. Avec différentes missions stimulantes et des jeux amusants, il y en a pour tous les goûts !</p>\n<p>Désamorçage de Bombe : Travaillez en Équipe et Désamorcez la Bombe</p>\n<p>Dans cette mission palpitante, tout tourne autour du travail d’équipe :\nCollaborez sous pression et désamorcez même les bombes les plus sournoises. Un faux pas, et tout est perdu. Pourrez-vous garder votre sang-froid et réussir en équipe ?</p>\n<h3 id=\"autres-aventures-vr\">Autres Aventures VR</h3>\n<p>En plus du désamorçage de bombe, nous proposons d’autres défis VR passionnants comme :</p>\n<p>Beat Saber : Montrez votre sens du rythme et frappez les beats tout en évitant les obstacles dans ce jeu musical.</p>\n<p>The Plank Experience : Oserez-vous ? Marchez sur la planche à des hauteurs vertigineuses et prouvez votre courage. Un exercice parfait de confiance !</p>\n<p>ISS Explorer : Flottez à l’intérieur et à l’extérieur de la Station Spatiale Internationale et découvrez la beauté de l’espace. Une expérience unique en apesanteur.</p>\n<h3 id=\"pourquoi-cette-activité\">Pourquoi cette activité ?</h3>\n<p>Cette expérience VR est parfaite pour le team building ou une activité excitante entre amis. La collaboration, la confiance et le plaisir sont au cœur de ces aventures inoubliables.</p>";

				const frontmatter = {"title":"Réalité Virtuelle","description":"Plongez dans un monde rempli de suspense et d'aventure avec nos expériences VR uniques","image":"virtual-reality/virtual-reality-1.jpg","priority":4,"categories":["indoor","innovaction"],"duration":"30 - 120 minutes","groupSize":"6 - 100 personnes","availability":"Tout l'année","features":["esprit équipe","technologie","divertissement"],"gallery":["virtual-reality/virtual-reality-2.jpg","virtual-reality/virtual-reality-3.jpg","virtual-reality/virtual-reality-4.jpg","virtual-reality/virtual-reality-5.jpg","virtual-reality/virtual-reality-6.jpg","virtual-reality/virtual-reality-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/virtual-reality.md";
				const url = undefined;
				function rawContent() {
					return "\nDéfis VR : Collaborer, Découvrir et Triompher!\n\nPlongez dans un monde rempli de suspense et d'aventure avec nos expériences VR uniques. La collaboration, la confiance et la précision sont les clés du succès. Avec différentes missions stimulantes et des jeux amusants, il y en a pour tous les goûts !\n\nDésamorçage de Bombe : Travaillez en Équipe et Désamorcez la Bombe\n\nDans cette mission palpitante, tout tourne autour du travail d'équipe :\nCollaborez sous pression et désamorcez même les bombes les plus sournoises. Un faux pas, et tout est perdu. Pourrez-vous garder votre sang-froid et réussir en équipe ?\n\n### Autres Aventures VR\n\nEn plus du désamorçage de bombe, nous proposons d'autres défis VR passionnants comme :\n\nBeat Saber : Montrez votre sens du rythme et frappez les beats tout en évitant les obstacles dans ce jeu musical.\n\nThe Plank Experience : Oserez-vous ? Marchez sur la planche à des hauteurs vertigineuses et prouvez votre courage. Un exercice parfait de confiance !\n\nISS Explorer : Flottez à l'intérieur et à l'extérieur de la Station Spatiale Internationale et découvrez la beauté de l'espace. Une expérience unique en apesanteur.\n\n### Pourquoi cette activité ?\n\nCette expérience VR est parfaite pour le team building ou une activité excitante entre amis. La collaboration, la confiance et le plaisir sont au cœur de ces aventures inoubliables.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"autres-aventures-vr","text":"Autres Aventures VR"},{"depth":3,"slug":"pourquoi-cette-activité","text":"Pourquoi cette activité ?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
