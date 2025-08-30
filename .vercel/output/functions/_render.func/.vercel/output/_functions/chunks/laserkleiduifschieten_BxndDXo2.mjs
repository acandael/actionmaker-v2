import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Le tir aux pigeons laser offre une variante moderne et sûre du tir aux pigeons d’argile traditionnel. Cette activité innovante combine le défi du tir avec la technologie moderne, ce qui en fait une activité parfaite pour les événements de team building.</p>\n<p>L’activité utilise des fusils laser avancés qui réagissent à des pigeons d’argile spéciaux, créant ainsi une expérience de tir réaliste sans utiliser de vraies munitions. Cela rend l’activité non seulement plus sûre, mais aussi plus adaptée à différents lieux et conditions météorologiques.</p>\n<p>Les participants reçoivent d’abord une instruction détaillée sur la technique et l’utilisation des fusils. Ensuite, différents formats de jeu suivent où les équipes s’affrontent dans des compétitions stimulantes. La combinaison de technique, de concentration et de travail d’équipe en fait une expérience de team building unique et passionnante.</p>";

				const frontmatter = {"title":"Tir aux Pigeons Laser (Outdoor)","description":"Une version moderne et écologique du tir aux pigeons d'argile","image":"laserkleiduifschieten/laserkleiduifschieten-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/2f13904d-494d-4441-a9e4-471d1eeb3557","categories":["outdoor","innovaction"],"duration":"30 minutes - 2 heures","groupSize":"2 - 150 personnes","availability":"Toute l'année","priority":3,"features":["esprit équipe","sport","précision"],"gallery":["laserkleiduifschieten/laserkleiduifschieten-2.jpg","laserkleiduifschieten/laserkleiduifschieten-3.jpg","laserkleiduifschieten/laserkleiduifschieten-4.jpg","laserkleiduifschieten/laserkleiduifschieten-5.jpg","laserkleiduifschieten/laserkleiduifschieten-6.jpg","laserkleiduifschieten/laserkleiduifschieten-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/laserkleiduifschieten.md";
				const url = undefined;
				function rawContent() {
					return "\nLe tir aux pigeons laser offre une variante moderne et sûre du tir aux pigeons d'argile traditionnel. Cette activité innovante combine le défi du tir avec la technologie moderne, ce qui en fait une activité parfaite pour les événements de team building.\n\nL'activité utilise des fusils laser avancés qui réagissent à des pigeons d'argile spéciaux, créant ainsi une expérience de tir réaliste sans utiliser de vraies munitions. Cela rend l'activité non seulement plus sûre, mais aussi plus adaptée à différents lieux et conditions météorologiques.\n\nLes participants reçoivent d'abord une instruction détaillée sur la technique et l'utilisation des fusils. Ensuite, différents formats de jeu suivent où les équipes s'affrontent dans des compétitions stimulantes. La combinaison de technique, de concentration et de travail d'équipe en fait une expérience de team building unique et passionnante.\n";
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
