import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Pour découvrir des anecdotes amusantes sur Anvers tout en renforçant l’esprit d’équipe au sein de votre groupe, nous vous recommandons le parcours ludique des Mains Fortes. Une bonne dose d’activités d’équipe, un soupçon de chasse au trésor et une pincée de gastronomie, bref, le mélange idéal pour un après-midi à Anvers.</p>\n<p>Nos experts d’Anvers partent à la recherche des ‘Mains les plus Fortes’ parmi vous. Qui sait bien chercher, est créatif et habile, mais sait aussi bien écouter et répondre correctement aux questions du quiz ludique ? Jouer au basket en ville, créer une chronologie d’Anvers, découvrir les points forts, déguster du chocolat, ce n’est qu’un petit aperçu de tout ce qui vous attend. L’équipe qui possède le plus de compétences sera déclarée gagnante et pourra se proclamer ‘les mains les plus fortes’. Une activité SUPER forte au centre d’Anvers !”</p>\n<p>Les membres de l’équipe gagnante remporteront des prix.</p>";

				const frontmatter = {"title":"Mains Fortes d’Anvers","description":"Découvrez des anecdotes amusantes sur Anvers tout en renforçant esprit équipe au sein de votre groupe","image":"antwerpse-straffe-handjes/antwerpse-straffe-handjes-1.jpg","priority":3,"isCityGame":true,"features":["Chasse aux photos : Explorez les rues","Shoot-outs sur un terrain de basket emblématique","Reconnaître les symboles anversois au Steen","Speed dating avec le plus ancien escalator en bois d'Europe","Anvers chronologique en route","En option : Dégustation de bières anversoises","Anecdotes intéressantes","Activités amusantes","Prix"],"gallery":["antwerpse-straffe-handjes/antwerpse-straffe-handjes-2.jpg","antwerpse-straffe-handjes/antwerpse-straffe-handjes-3.jpg","antwerpse-straffe-handjes/antwerpse-straffe-handjes-4.jpg","antwerpse-straffe-handjes/antwerpse-straffe-handjes-5.jpg","antwerpse-straffe-handjes/antwerpse-straffe-handjes-6.jpg","antwerpse-straffe-handjes/antwerpse-straffe-handjes-7.jpg"],"categories":["city-games"],"duration":"2-3 heures","groupSize":"6-100 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/antwerpse-straffe-handjes.md";
				const url = undefined;
				function rawContent() {
					return "\nPour découvrir des anecdotes amusantes sur Anvers tout en renforçant l'esprit d'équipe au sein de votre groupe, nous vous recommandons le parcours ludique des Mains Fortes. Une bonne dose d'activités d'équipe, un soupçon de chasse au trésor et une pincée de gastronomie, bref, le mélange idéal pour un après-midi à Anvers.\n\nNos experts d'Anvers partent à la recherche des 'Mains les plus Fortes' parmi vous. Qui sait bien chercher, est créatif et habile, mais sait aussi bien écouter et répondre correctement aux questions du quiz ludique ? Jouer au basket en ville, créer une chronologie d'Anvers, découvrir les points forts, déguster du chocolat, ce n'est qu'un petit aperçu de tout ce qui vous attend. L'équipe qui possède le plus de compétences sera déclarée gagnante et pourra se proclamer 'les mains les plus fortes'. Une activité SUPER forte au centre d'Anvers !\"\n\nLes membres de l'équipe gagnante remporteront des prix.\n";
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
