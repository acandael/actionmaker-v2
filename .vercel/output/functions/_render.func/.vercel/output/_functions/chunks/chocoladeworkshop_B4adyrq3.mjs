import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>L’atelier chocolat est une délicieuse combinaison de team building et de plaisir culinaire. Sous la direction d’un chocolatier professionnel, les participants découvrent l’art de la fabrication du chocolat et la riche histoire de cette gourmandise tant appréciée.</p>\n<p>L’atelier commence par une introduction au monde du chocolat, où les participants apprennent les différents types de chocolat, leurs origines et leurs caractéristiques. Une dégustation suit, au cours de laquelle différents chocolats sont goûtés et évalués en fonction de leur saveur, leur texture et leur arôme.</p>\n<p>Ensuite, les participants se lancent dans la création de différentes confections en chocolat. Du tempérage à la décoration, tous les aspects du métier de chocolatier sont abordés. Les équipes travaillent ensemble sur leurs créations, ce qui est non seulement instructif mais stimule également la créativité et la collaboration.</p>\n<p>L’atelier peut avoir lieu dans notre atelier de chocolatier ou sur place (si le lieu s’y prête).</p>";

				const frontmatter = {"title":"Atelier Chocolat","description":"Un atelier chocolat dirigé par un chocolatier professionnel.","image":"chocoladeworkshop/chocoladeworkshop-1.jpg","priority":4,"categories":["workshop"],"duration":"45 minutes - 2.5 heures","groupSize":"8 - 100 personnes","availability":"Sur demande","features":["esprit équipe","créativité","culinaire"],"gallery":["chocoladeworkshop/chocoladeworkshop-2.jpg","chocoladeworkshop/chocoladeworkshop-3.jpg","chocoladeworkshop/chocoladeworkshop-4.jpg","chocoladeworkshop/chocoladeworkshop-5.jpg","chocoladeworkshop/chocoladeworkshop-6.jpg","chocoladeworkshop/chocoladeworkshop-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/chocoladeworkshop.md";
				const url = undefined;
				function rawContent() {
					return "\nL'atelier chocolat est une délicieuse combinaison de team building et de plaisir culinaire. Sous la direction d'un chocolatier professionnel, les participants découvrent l'art de la fabrication du chocolat et la riche histoire de cette gourmandise tant appréciée.\n\nL'atelier commence par une introduction au monde du chocolat, où les participants apprennent les différents types de chocolat, leurs origines et leurs caractéristiques. Une dégustation suit, au cours de laquelle différents chocolats sont goûtés et évalués en fonction de leur saveur, leur texture et leur arôme.\n\nEnsuite, les participants se lancent dans la création de différentes confections en chocolat. Du tempérage à la décoration, tous les aspects du métier de chocolatier sont abordés. Les équipes travaillent ensemble sur leurs créations, ce qui est non seulement instructif mais stimule également la créativité et la collaboration.\n\nL'atelier peut avoir lieu dans notre atelier de chocolatier ou sur place (si le lieu s'y prête).\n";
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
