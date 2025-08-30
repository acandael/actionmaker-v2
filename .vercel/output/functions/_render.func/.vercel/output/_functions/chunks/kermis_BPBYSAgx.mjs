import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Plongez dans l’ambiance d’une fête foraine, où le plaisir est au cœur de l’expérience. Différentes activités typiques de fête foraine sont au programme, comme le stand de pêche aux canards, le tir à la craie, le test de force pour l’homme le plus fort, et le jeu du marteau. Ces classiques peuvent être complétés par exemple par une diseuse de bonne aventure, qui ajoute une touche de mystère aux festivités, ou une activité de forge.</p>\n<p>Que vous participiez aux défis en rotation ou que vous choisissiez librement vos activités, cette activité de fête foraine détendue promet un moment convivial et amusant pour tous les participants.</p>";

				const frontmatter = {"title":"La Fête Foraine","description":"Laissez vos soucis derrière vous et profitez d'une journée remplie de sourires et de moments ludiques.","image":"kermis/kermis-1.jpg","priority":26,"isGame":true,"features":["Stand de pêche aux canards","Tir à la craie","Test de force","Jeu du marteau"],"gallery":["kermis/kermis-2.jpg","kermis/kermis-3.jpg","kermis/kermis-4.jpg","kermis/kermis-5.jpg","kermis/kermis-6.jpg","kermis/kermis-7.jpg"],"categories":["outdoor"],"duration":"2-3 heures","groupSize":"8-50 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/kermis.md";
				const url = undefined;
				function rawContent() {
					return "\nPlongez dans l'ambiance d'une fête foraine, où le plaisir est au cœur de l'expérience. Différentes activités typiques de fête foraine sont au programme, comme le stand de pêche aux canards, le tir à la craie, le test de force pour l'homme le plus fort, et le jeu du marteau. Ces classiques peuvent être complétés par exemple par une diseuse de bonne aventure, qui ajoute une touche de mystère aux festivités, ou une activité de forge.\n\nQue vous participiez aux défis en rotation ou que vous choisissiez librement vos activités, cette activité de fête foraine détendue promet un moment convivial et amusant pour tous les participants.\n";
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
