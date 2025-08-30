import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Découvrez à quel point votre goût, votre odorat et votre toucher fonctionnent bien lors de ce test de dégustation amusant et stimulant ! Testez vos connaissances en matière de bière, de cola, de fromage, d’épices et plus encore. Avez-vous un sens du goût aiguisé ou préférez-vous vous fier à l’étiquette ?</p>\n<h2 id=\"rendez-le-encore-plus-amusant-avec-un-quiz\">Rendez-le encore plus amusant avec un Quiz !</h2>\n<p>Combinez le test de dégustation avec un quiz original et animé rempli d’anecdotes intéressantes sur la nourriture, les saveurs et les boissons. Qui en sait le plus sur l’alimentation et qui se laissera surprendre?</p>";

				const frontmatter = {"title":"Test de Dégustation","description":"Pouvez-vous faire confiance à votre goût ? Qui fait le meilleur usage des sens du goût, de l'odorat et du toucher?","image":"smaaktest/smaaktest-1.jpg","priority":3,"categories":["workshop"],"duration":"2 - 5 heures","groupSize":"8 - 250 personnes","availability":"Tout l'année","features":["Savez-vous quelles épices vous utilisez dans vos plats ? Pouvez-vous les reconnaître sans l'étiquette ?","Essayez d'identifier votre fromage ou vos épices préférés, uniquement au goût.","Reconnaissez-vous votre bière ou soda préféré ? Pouvez-vous faire la différence entre Jupiler, Maes, Leffe ou Palm ? Ou entre Coca-Cola et Pepsi ?","Découvrez la puissance de vos sens en essayant de reconnaître différentes saveurs et odeurs."],"gallery":["smaaktest/smaaktest-2.jpg","smaaktest/smaaktest-3.jpg","smaaktest/smaaktest-4.jpg","smaaktest/smaaktest-5.jpg","smaaktest/smaaktest-6.jpg","smaaktest/smaaktest-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/smaaktest.md";
				const url = undefined;
				function rawContent() {
					return "\nDécouvrez à quel point votre goût, votre odorat et votre toucher fonctionnent bien lors de ce test de dégustation amusant et stimulant ! Testez vos connaissances en matière de bière, de cola, de fromage, d'épices et plus encore. Avez-vous un sens du goût aiguisé ou préférez-vous vous fier à l'étiquette ?\n\n## Rendez-le encore plus amusant avec un Quiz !\n\nCombinez le test de dégustation avec un quiz original et animé rempli d'anecdotes intéressantes sur la nourriture, les saveurs et les boissons. Qui en sait le plus sur l'alimentation et qui se laissera surprendre?\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"rendez-le-encore-plus-amusant-avec-un-quiz","text":"Rendez-le encore plus amusant avec un Quiz !"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
