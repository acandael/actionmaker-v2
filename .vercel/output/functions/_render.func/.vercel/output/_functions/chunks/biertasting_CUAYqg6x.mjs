import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Vivez un voyage unique à travers le monde de la bière lors de notre dégustation. Découvrez différents styles de bières, apprenez des anecdotes surprenantes et vivez une expérience conviviale et enrichissante. Idéal pour les amateurs comme pour les curieux !</p>\n<h2 id=\"quest-ce-que-la-dégustation-de-bières\">Qu’est-ce que la Dégustation de Bières ?</h2>\n<p>Les Bières : Une sélection soigneusement choisie de bières, y compris des options sans alcool, qui éveilleront vos papilles.</p>\n<p>La Dégustation : Découvrez l’art de la dégustation de bière et apprenez à reconnaître les nuances de goût et les arômes.</p>\n<p>Les Histoires : Derrière chaque bière se cache une histoire sur la brasserie et l’artisanat.</p>\n<h2 id=\"comment-ça-fonctionne\">Comment ça fonctionne ?</h2>\n<p><strong>Introduction :</strong></p>\n<p>Une brève explication sur la dégustation de bière, ce à quoi s’attendre et quelques conseils utiles.</p>\n<p>Apprenez les bases de la reconnaissance des saveurs et l’histoire derrière les bières.</p>\n<p><strong>Dégustation :</strong></p>\n<p>Ensemble, nous découvrons une série de bières, des classiques aux surprises.</p>\n<p>Découvrez pourquoi nous trinquons avec nos verres et apprenez des anecdotes amusantes, comme l’utilisation de la bière comme après-shampooing !</p>\n<p><strong>L’Expérience :</strong></p>\n<p>Vivez la bière comme jamais auparavant : avec plus de connaissances, d’appréciation et de plaisir.</p>\n<p>Boire de la bière devient une expérience que vous n’oublierez pas de sitôt.</p>";

				const frontmatter = {"title":"Dégustation de Bières","description":"Goûtez, Découvrez et Savourez!","image":"biertasting/biertasting-1.jpg","priority":9,"features":["Polyvalent : Convient aux amateurs de bière et aux débutants.","Sans alcool possible : Également pour ceux qui ne boivent pas d'alcool.","Apprendre et savourer : Combinez le plaisir avec des anecdotes intéressantes."],"gallery":["biertasting/biertasting-2.jpg","biertasting/biertasting-3.jpg","biertasting/biertasting-4.jpg","biertasting/biertasting-5.jpg","biertasting/biertasting-6.jpg","biertasting/biertasting-7.jpg"],"categories":["workshop"],"duration":"1,5 - 2 heures","groupSize":"6 - 40 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/biertasting.md";
				const url = undefined;
				function rawContent() {
					return "\nVivez un voyage unique à travers le monde de la bière lors de notre dégustation. Découvrez différents styles de bières, apprenez des anecdotes surprenantes et vivez une expérience conviviale et enrichissante. Idéal pour les amateurs comme pour les curieux !\n\n## Qu'est-ce que la Dégustation de Bières ?\n\nLes Bières : Une sélection soigneusement choisie de bières, y compris des options sans alcool, qui éveilleront vos papilles.\n\nLa Dégustation : Découvrez l'art de la dégustation de bière et apprenez à reconnaître les nuances de goût et les arômes.\n\nLes Histoires : Derrière chaque bière se cache une histoire sur la brasserie et l'artisanat.\n\n## Comment ça fonctionne ?\n\n**Introduction :**\n\nUne brève explication sur la dégustation de bière, ce à quoi s'attendre et quelques conseils utiles.\n\nApprenez les bases de la reconnaissance des saveurs et l'histoire derrière les bières.\n\n**Dégustation :**\n\nEnsemble, nous découvrons une série de bières, des classiques aux surprises.\n\nDécouvrez pourquoi nous trinquons avec nos verres et apprenez des anecdotes amusantes, comme l'utilisation de la bière comme après-shampooing !\n\n**L'Expérience :**\n\nVivez la bière comme jamais auparavant : avec plus de connaissances, d'appréciation et de plaisir.\n\nBoire de la bière devient une expérience que vous n'oublierez pas de sitôt.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"quest-ce-que-la-dégustation-de-bières","text":"Qu’est-ce que la Dégustation de Bières ?"},{"depth":2,"slug":"comment-ça-fonctionne","text":"Comment ça fonctionne ?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
