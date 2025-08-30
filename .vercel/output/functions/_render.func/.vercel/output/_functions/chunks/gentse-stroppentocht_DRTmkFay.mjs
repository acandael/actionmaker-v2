import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Vivez une expérience unique et interactive de team building au cœur de Gand ! En petites équipes, partez à la découverte de la ville dans une aventure où la collaboration, la rapidité et l’attention aux détails seront récompensées.</p>";

				const frontmatter = {"title":"Jeu de Ville à Gand","description":"Team building à Gand : Découvrez, Jouez & Gagnez !","image":"gentse-stroppentocht/gentse-stroppentocht-1.jpg","priority":1,"isCityGame":true,"categories":["city-games"],"duration":"2-3 heures","groupSize":"6 - 150 personnes","availability":"Sur demande","features":["Chasse aux photos: Patershol","Golf urbain: Vrijdagsmarkt","Apprenez les expressions gantoises avec l'alphabet sémaphore","Repérage de graffitis: Werregarenstraat","Quiz tout au long du parcours","Dégustation de gin et/ou de jus de fruits","En option: Défis supplémentaires","Prix pour les gagnants!"],"gallery":["gentse-stroppentocht/gentse-stroppentocht-1.jpg","gentse-stroppentocht/gentse-stroppentocht-2.jpg","gentse-stroppentocht/gentse-stroppentocht-3.jpg","gentse-stroppentocht/gentse-stroppentocht-4.jpg","gentse-stroppentocht/gentse-stroppentocht-5.jpg","gentse-stroppentocht/gentse-stroppentocht-6.jpg","gentse-stroppentocht/gentse-stroppentocht-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/gentse-stroppentocht.md";
				const url = undefined;
				function rawContent() {
					return "\nVivez une expérience unique et interactive de team building au cœur de Gand ! En petites équipes, partez à la découverte de la ville dans une aventure où la collaboration, la rapidité et l'attention aux détails seront récompensées.\n";
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
