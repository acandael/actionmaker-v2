import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Tout le monde réalise que la prochaine frontière est l’espace - d’abord la Lune, puis mars, et qui sait ce qui suivra. Nous préparons votre équipe à cet avenir extraordinaire.</p>\n<p>À travers diverses activités comme l’escrime laser, la réparation d’un vaisseau spatial et la communication dans l’espace, nous nous assurons que votre équipe puisse survivre dans cet environnement stimulant.</p>\n<p>En remportant une activité, où vous démontrez que vous êtes prêts pour ce voyage aventureux, vous recevrez une boisson spéciale. Cette boisson agit comme une protection contre les radiations cosmiques, vous armant contre les dangers de l’espace.</p>\n<p>À la fin de cette expérience unique, les équipes gagnantes prennent leur boisson spéciale comme début symbolique de leur voyage vers le futur. Le team building dans l’espace offre non seulement un défi amusant, mais aussi un avant-goût de ce qui nous attend dans l’ère de l’exploration spatiale.</p>";

				const frontmatter = {"title":"Space Games","description":"Où le futur est au centre et l'espace est votre terrain de jeu.","image":"space-games/space-games-1.jpg","priority":19,"isGame":true,"features":["Escrime laser","Réparation de vaisseau spatial","Communication spatiale"],"gallery":["space-games/space-games-2.jpg","space-games/space-games-3.jpg","space-games/space-games-4.jpg","space-games/space-games-5.jpg","space-games/space-games-6.jpg"],"categories":["indoor","innovaction"],"duration":"2-3 heures","groupSize":"8-50 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/space-games.md";
				const url = undefined;
				function rawContent() {
					return "\nTout le monde réalise que la prochaine frontière est l'espace - d'abord la Lune, puis mars, et qui sait ce qui suivra. Nous préparons votre équipe à cet avenir extraordinaire.\n\nÀ travers diverses activités comme l'escrime laser, la réparation d'un vaisseau spatial et la communication dans l'espace, nous nous assurons que votre équipe puisse survivre dans cet environnement stimulant.\n\nEn remportant une activité, où vous démontrez que vous êtes prêts pour ce voyage aventureux, vous recevrez une boisson spéciale. Cette boisson agit comme une protection contre les radiations cosmiques, vous armant contre les dangers de l'espace.\n\nÀ la fin de cette expérience unique, les équipes gagnantes prennent leur boisson spéciale comme début symbolique de leur voyage vers le futur. Le team building dans l'espace offre non seulement un défi amusant, mais aussi un avant-goût de ce qui nous attend dans l'ère de l'exploration spatiale.\n";
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
