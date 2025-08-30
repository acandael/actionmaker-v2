import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Ce team building est entièrement axé sur la collaboration et la créativité. Ensemble, nous allons créer une impressionnante machine de Goldberg. La chaîne n’est que aussi forte que son maillon le plus faible, et vous aurez à votre disposition une abondance de matériel. Pensez aux pistes de billes, aux dominos, aux énormes blocs LEGO et aux appareils électriques.</p>\n<p>Le défi consiste à concevoir et construire le design le plus fou, mais surtout fonctionnel. Après une vérification approfondie, nous démarrons la réaction en chaîne au début, et espérons qu’elle se terminera sans aide par une finale spectaculaire. Pour les équipes plus motivées, des épreuves optionnelles sont disponibles, permettant de gagner du matériel supplémentaire pour rendre votre machine encore plus impressionnante. Tout tourne autour du travail d’équipe, de l’innovation et de l’atteinte collective d’un résultat final spectaculaire.</p>";

				const frontmatter = {"title":"Chain Reaction","description":"Together we will work to create an impressive Goldberg machine","image":"chain-reaction/chain-reaction-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/e893044e-8fc5-4c2e-bfc5-79d2976065f1","priority":13,"isGame":true,"features":["challenge and creativity","abundance of materials and possibilities","teamwork","spectacular finish"],"gallery":["chain-reaction/chain-reaction-2.jpg","chain-reaction/chain-reaction-3.jpg","chain-reaction/chain-reaction-4.jpg","chain-reaction/chain-reaction-5.jpg","chain-reaction/chain-reaction-6.jpg","chain-reaction/chain-reaction-7.jpg"],"categories":["indoor"],"duration":"2 - 5 hours","groupSize":"6 - 800 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/chain-reaction.md";
				const url = undefined;
				function rawContent() {
					return "\nCe team building est entièrement axé sur la collaboration et la créativité. Ensemble, nous allons créer une impressionnante machine de Goldberg. La chaîne n'est que aussi forte que son maillon le plus faible, et vous aurez à votre disposition une abondance de matériel. Pensez aux pistes de billes, aux dominos, aux énormes blocs LEGO et aux appareils électriques.\n\nLe défi consiste à concevoir et construire le design le plus fou, mais surtout fonctionnel. Après une vérification approfondie, nous démarrons la réaction en chaîne au début, et espérons qu'elle se terminera sans aide par une finale spectaculaire. Pour les équipes plus motivées, des épreuves optionnelles sont disponibles, permettant de gagner du matériel supplémentaire pour rendre votre machine encore plus impressionnante. Tout tourne autour du travail d'équipe, de l'innovation et de l'atteinte collective d'un résultat final spectaculaire.\n";
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
