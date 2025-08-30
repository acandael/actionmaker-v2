import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>La sarbacane (Indoor) est très populaire. C’est une activité passionnante et stimulante pour tous les âges. Une brève histoire de la sarbacane est présentée. Ensuite, nous passons à la pratique et à la compétition avec des sarbacanes de 3 longueurs différentes.</p>\n<p>Relevez le défi et découvrez qui a le souffle le plus puissant et le meilleur tir. Une activité pleine de suspense, de défis et surtout beaucoup de plaisir!</p>";

				const frontmatter = {"title":"Tir à la Sarbacane (Indoor)","description":"Le tir à la sarbacane en intérieur est très populaire. Une activité passionnante et stimulante pour tous les âges.","image":"indoor-blaaspijpschieten/indoor-blaaspijpschieten-1.jpg","features":["esprit d'équipe","sport","relaxation"],"gallery":["indoor-blaaspijpschieten/indoor-blaaspijpschieten-2.jpg","indoor-blaaspijpschieten/indoor-blaaspijpschieten-3.jpg","indoor-blaaspijpschieten/indoor-blaaspijpschieten-4.jpg","indoor-blaaspijpschieten/indoor-blaaspijpschieten-5.jpg","indoor-blaaspijpschieten/indoor-blaaspijpschieten-6.jpg","indoor-blaaspijpschieten/indoor-blaaspijpschieten-7.jpg"],"categories":["indoor"],"duration":"30 - 2 heures","groupSize":"4 - 200 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/indoor-blaaspijpschieten.md";
				const url = undefined;
				function rawContent() {
					return "\nLa sarbacane (Indoor) est très populaire. C'est une activité passionnante et stimulante pour tous les âges. Une brève histoire de la sarbacane est présentée. Ensuite, nous passons à la pratique et à la compétition avec des sarbacanes de 3 longueurs différentes.\n\nRelevez le défi et découvrez qui a le souffle le plus puissant et le meilleur tir. Une activité pleine de suspense, de défis et surtout beaucoup de plaisir!\n";
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
