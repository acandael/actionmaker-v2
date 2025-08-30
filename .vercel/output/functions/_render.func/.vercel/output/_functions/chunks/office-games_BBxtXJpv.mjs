import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Cette activité de team building met en lumière la diversité des compétences de votre équipe et apporte une dose saine de compétition et de plaisir sur le lieu de travail. Quelle équipe construira le meilleur avion en papier, qui réussira le mieux à écrire ensemble le plus de mots reconnaissables (1 crayon contrôlé par 10 fils), et qui se révélera être le plus rapide dans la course de chaises de bureau ?</p>\n<p>La force physique, les compétences en communication, la créativité et le travail d’équipe sont tous mis à l’épreuve. Nous avons élaboré un programme varié avec des activités stimulantes qui font appel aux différents aspects de vos talents.</p>";

				const frontmatter = {"title":"The Office Games","description":"Découvrez les talents cachés au sein de votre bureau","image":"office-games/office-games-1.jpg","priority":18,"isGame":true,"features":["Défis créatifs","Compétences physiques et communicatives","Testez votre vitesse et votre collaboration lors de la course de chaises de bureau","Gestion du stress"],"gallery":["office-games/office-games-1.jpg","office-games/office-games-2.jpg","office-games/office-games-3.jpg","office-games/office-games-4.jpg","office-games/office-games-5.jpg","office-games/office-games-6.jpg"],"categories":["indoor"],"duration":"2 - 5 heures","groupSize":"8 - 1000 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/office-games.md";
				const url = undefined;
				function rawContent() {
					return "\nCette activité de team building met en lumière la diversité des compétences de votre équipe et apporte une dose saine de compétition et de plaisir sur le lieu de travail. Quelle équipe construira le meilleur avion en papier, qui réussira le mieux à écrire ensemble le plus de mots reconnaissables (1 crayon contrôlé par 10 fils), et qui se révélera être le plus rapide dans la course de chaises de bureau ?\n\nLa force physique, les compétences en communication, la créativité et le travail d'équipe sont tous mis à l'épreuve. Nous avons élaboré un programme varié avec des activités stimulantes qui font appel aux différents aspects de vos talents.\n";
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
