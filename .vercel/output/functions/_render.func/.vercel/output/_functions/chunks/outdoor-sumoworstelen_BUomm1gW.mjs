import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>La lutte sumo outdoor consiste à pousser et tirer jusqu’à ce que votre adversaire tombe. À deux ou quatre personnes, vous entrez sur le tapis et commencez par le célèbre salut sumo japonais. Au signal de départ de l’animateur, le match commence et les participants doivent se pousser hors du tapis pour un demi-point ou faire tomber l’adversaire pour un point complet. Pour finir, le gagnant du match peut faire un saut de victoire sur le perdant. Tout le monde peut participer plusieurs fois.</p>\n<p>La nouveauté est le sumo en duo, une variante très amusante du jeu de lutte sumo bien connu, mais qui nécessite un bon travail d’équipe avec votre partenaire sumo.\nUn match de lutte sumo demande beaucoup d’endurance et fait travailler les zygomatiques des spectateurs, alors gardez votre appareil photo prêt !</p>";

				const frontmatter = {"title":"Lutte Sumo (Outdoor)","description":"Une activité hilarante où les participants s'affrontent dans des costumes de sumo gonflables simples et doubles.","image":"outdoor-sumoworstelen/outdoor-sumoworstelen-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/3c3bd7aa-e0f1-4bbf-a9b9-992b8b2afc01","priority":9,"categories":["outdoor","actief"],"duration":"30 minutes - 90 minutes selon la condition physique","groupSize":"8 - 50 personnes","availability":"Tout l'année","features":["esprit équipe","sport","divertissement"],"gallery":["outdoor-sumoworstelen/outdoor-sumoworstelen-2.jpg","outdoor-sumoworstelen/outdoor-sumoworstelen-3.jpg","outdoor-sumoworstelen/outdoor-sumoworstelen-4.jpg","outdoor-sumoworstelen/outdoor-sumoworstelen-5.jpg","outdoor-sumoworstelen/outdoor-sumoworstelen-6.jpg","outdoor-sumoworstelen/outdoor-sumoworstelen-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/outdoor-sumoworstelen.md";
				const url = undefined;
				function rawContent() {
					return "\nLa lutte sumo outdoor consiste à pousser et tirer jusqu'à ce que votre adversaire tombe. À deux ou quatre personnes, vous entrez sur le tapis et commencez par le célèbre salut sumo japonais. Au signal de départ de l'animateur, le match commence et les participants doivent se pousser hors du tapis pour un demi-point ou faire tomber l'adversaire pour un point complet. Pour finir, le gagnant du match peut faire un saut de victoire sur le perdant. Tout le monde peut participer plusieurs fois.\n\nLa nouveauté est le sumo en duo, une variante très amusante du jeu de lutte sumo bien connu, mais qui nécessite un bon travail d'équipe avec votre partenaire sumo.\nUn match de lutte sumo demande beaucoup d'endurance et fait travailler les zygomatiques des spectateurs, alors gardez votre appareil photo prêt !\n";
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
