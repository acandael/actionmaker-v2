import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>La sarbacane (Outdoor) est très populaire. C’est une activité passionnante et stimulante pour tous les âges. Une brève histoire de la sarbacane est présentée. Ensuite, nous passons à la pratique et à la compétition avec des sarbacanes de 3 longueurs différentes.</p>\n<p>Relevez le défi et découvrez qui a le souffle le plus puissant et le meilleur tir. Une activité pleine de suspense, de défis et surtout beaucoup de plaisir!</p>";

				const frontmatter = {"title":"Tir à la Sarbacane (Outdoor)","description":"La chasse au sarbacane en extérieur est très populaire. Une activité passionnante et stimulante pour tous les âges.","image":"outdoor-blaaspijpschieten/outdoor-blaaspijpschieten-1.jpg","priority":11,"features":["esprit d'équipe","sport","relaxation"],"gallery":["outdoor-blaaspijpschieten/outdoor-blaaspijpschieten-2.jpg","outdoor-blaaspijpschieten/outdoor-blaaspijpschieten-3.jpg","outdoor-blaaspijpschieten/outdoor-blaaspijpschieten-4.jpg","outdoor-blaaspijpschieten/outdoor-blaaspijpschieten-5.jpg","outdoor-blaaspijpschieten/outdoor-blaaspijpschieten-6.jpg","outdoor-blaaspijpschieten/outdoor-blaaspijpschieten-7.jpg"],"categories":["outdoor"],"duration":"30 - 2 heures","groupSize":"4 - 200 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/outdoor-blaaspijpschieten.md";
				const url = undefined;
				function rawContent() {
					return "\nLa sarbacane (Outdoor) est très populaire. C'est une activité passionnante et stimulante pour tous les âges. Une brève histoire de la sarbacane est présentée. Ensuite, nous passons à la pratique et à la compétition avec des sarbacanes de 3 longueurs différentes.\n\nRelevez le défi et découvrez qui a le souffle le plus puissant et le meilleur tir. Une activité pleine de suspense, de défis et surtout beaucoup de plaisir!\n";
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
