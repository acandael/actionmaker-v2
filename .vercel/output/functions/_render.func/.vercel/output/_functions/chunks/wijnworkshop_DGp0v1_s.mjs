import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Ne qualifiez pas simplement cette expérience de « dégustation » : cet atelier de vin dynamique va bien plus loin. Lors de cette aventure interactive, vous apprendrez en groupe à vraiment comprendre le vin. Idéal ensuite pour faire des choix éclairés en magasin ou au restaurant, face à la complexité des cartes des vins. Adapté aux débutants comme aux amateurs, notre sommelier répond avec passion à toutes vos questions œnologiques.</p>\n<h2 id=\"comment-ça-fonctionne-exactement\">Comment ça fonctionne exactement ?</h2>\n<p>Au cours de cet atelier, vous apprendrez vous-même à déguster, discuter et comprendre les vins. Nous ne procédons pas par de longues explications pour chaque verre, mais grâce à des expériences ludiques, des défis stimulants et une sélection soignée de bouteilles d’exception. Nous mettons différents styles côte à côte afin de découvrir l’immense diversité du monde du vin. Nous terminons toujours par une perle surprenante et inattendue.</p>";

				const frontmatter = {"title":"Wijnworkshop","description":"Ne dites pas simplement dégustation à cet atelier de vin dynamique. Lors de cette aventure interactive, vous apprendrez en groupe à vraiment comprendre le vin","image":"wijnworkshop/wijnworkshop-1.jpg","priority":10,"features":["Une activité de groupe interactive et divertissante","Une magnifique sélection de vins","Une compréhension durable du vin"],"gallery":["wijnworkshop/wijnworkshop-2.jpg","wijnworkshop/wijnworkshop-3.jpg","wijnworkshop/wijnworkshop-4.jpg","wijnworkshop/wijnworkshop-5.jpg"],"categories":["workshop"],"duration":"2-3 heures","groupSize":"1-15 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/wijnworkshop.md";
				const url = undefined;
				function rawContent() {
					return "\nNe qualifiez pas simplement cette expérience de « dégustation » : cet atelier de vin dynamique va bien plus loin. Lors de cette aventure interactive, vous apprendrez en groupe à vraiment comprendre le vin. Idéal ensuite pour faire des choix éclairés en magasin ou au restaurant, face à la complexité des cartes des vins. Adapté aux débutants comme aux amateurs, notre sommelier répond avec passion à toutes vos questions œnologiques.\n\n## Comment ça fonctionne exactement ?\n\nAu cours de cet atelier, vous apprendrez vous-même à déguster, discuter et comprendre les vins. Nous ne procédons pas par de longues explications pour chaque verre, mais grâce à des expériences ludiques, des défis stimulants et une sélection soignée de bouteilles d’exception. Nous mettons différents styles côte à côte afin de découvrir l’immense diversité du monde du vin. Nous terminons toujours par une perle surprenante et inattendue.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"comment-ça-fonctionne-exactement","text":"Comment ça fonctionne exactement ?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
