import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Bienvenue dans notre team building, où nous recherchons l’équipe ultime de collègues pour incarner l’espion le plus célèbre au monde. Qui se révélera être le meilleur agent secret, qui a l’œil le plus précis, qui possède la meilleure perspicacité et déchiffre le morse comme un expert ? Et bien sûr, qui excelle en escrime, à la manière de “Die Another Day” (sans Madonna comme coach, bien sûr). Toutes ces compétences nous mènent à la création de l’équipe d’espions ultime.</p>\n<p>En option, nous pouvons également organiser un atelier cocktail (pensez au classique “martini shaken, not stirred”), une death ride excitante, un atelier drone et une activité casino pour compléter l’ambiance d’espionnage. Ce team building promet non seulement de l’excitation et du plaisir, mais aussi la découverte et l’utilisation des talents uniques au sein de l’équipe, essentiels pour une mission réussie.</p>";

				const frontmatter = {"title":"Spy-academy/James Bond (Outdoor)","description":"Nous recherchons l'équipe ultime de collègues pour incarner l'espion le plus célèbre au monde.","image":"outdoor-james-bond/outdoor-james-bond-1.jpg","priority":23,"isGame":true,"features":["Escrime","Code Morse","Tir..."],"gallery":["outdoor-james-bond/outdoor-james-bond-2.jpg"],"categories":["outdoor","innovaction"],"duration":"2 - 5 heures","groupSize":"8 - 1000 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/outdoor-james-bond.md";
				const url = undefined;
				function rawContent() {
					return "\nBienvenue dans notre team building, où nous recherchons l'équipe ultime de collègues pour incarner l'espion le plus célèbre au monde. Qui se révélera être le meilleur agent secret, qui a l'œil le plus précis, qui possède la meilleure perspicacité et déchiffre le morse comme un expert ? Et bien sûr, qui excelle en escrime, à la manière de \"Die Another Day\" (sans Madonna comme coach, bien sûr). Toutes ces compétences nous mènent à la création de l'équipe d'espions ultime.\n\nEn option, nous pouvons également organiser un atelier cocktail (pensez au classique \"martini shaken, not stirred\"), une death ride excitante, un atelier drone et une activité casino pour compléter l'ambiance d'espionnage. Ce team building promet non seulement de l'excitation et du plaisir, mais aussi la découverte et l'utilisation des talents uniques au sein de l'équipe, essentiels pour une mission réussie.\n";
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
