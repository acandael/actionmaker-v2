import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Chaque équipe représente un pays et se défie dans des “disciplines olympiques” ludiques.</p>\n<p>La compétition comprend des sports classiques comme la course de relais, la lutte sumo et le tir à la corde (un sport olympique jusqu’en 1920), mais aussi des compétences comme la concentration, le travail d’équipe et la perspicacité sont mises à l’épreuve, car elles sont tout aussi cruciales pour un athlète de haut niveau.</p>\n<p>Quelle équipe saura hisser son drapeau à des hauteurs glorieuses ? Bien sûr, nous chérissons en tout temps l’esprit olympique. Les différentes disciplines peuvent être adaptées au lieu et à vos souhaits spécifiques, faisant de cette activité une combinaison parfaite de défis sportifs et de team building.</p>";

				const frontmatter = {"title":"The Funny Olympic Games","description":"Cette activité incarne l'idée de 'mens sana in corpore sano', - un esprit sain dans un corps sain.","image":"funny-games/funny-games-1.jpg","priority":20,"isGame":true,"features":["défis sportifs","esprit olympique","beaucoup de rires"],"gallery":["funny-games/funny-games-2.jpg","funny-games/funny-games-3.jpg","funny-games/funny-games-4.jpg","funny-games/funny-games-5.jpg","funny-games/funny-games-6.jpg","funny-games/funny-games-7.jpg"],"categories":["outdoor","actief"],"duration":"2 - 5 heures","groupSize":"8 - 1000 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/funny-olympic-games.md";
				const url = undefined;
				function rawContent() {
					return "\nChaque équipe représente un pays et se défie dans des \"disciplines olympiques\" ludiques.\n\nLa compétition comprend des sports classiques comme la course de relais, la lutte sumo et le tir à la corde (un sport olympique jusqu'en 1920), mais aussi des compétences comme la concentration, le travail d'équipe et la perspicacité sont mises à l'épreuve, car elles sont tout aussi cruciales pour un athlète de haut niveau.\n\nQuelle équipe saura hisser son drapeau à des hauteurs glorieuses ? Bien sûr, nous chérissons en tout temps l'esprit olympique. Les différentes disciplines peuvent être adaptées au lieu et à vos souhaits spécifiques, faisant de cette activité une combinaison parfaite de défis sportifs et de team building.\n";
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
