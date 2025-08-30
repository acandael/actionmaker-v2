import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Vivez une expérience unique et palpitante d’escape room avec nos valises d’escape room mobiles ! Nuclear Box et Magic Bomb mettent votre équipe au défi de collaborer, résoudre des énigmes et sauver le monde. Idéal pour le team building, les fêtes ou une journée d’aventure entre amis et en famille.</p>\n<p>Êtes-vous prêt à diriger votre équipe, résoudre des énigmes et sauver le monde ou désamorcer la bombe ? Relevez le défi et vivez une expérience d’escape room inoubliable !</p>";

				const frontmatter = {"title":"Escape Room Mobile (Outdoor)","description":"Nuclear Box & Magic Bomb","image":"outdoor-mobiele-escape-room/outdoor-mobiele-escape-room-1.jpg","priority":2,"features":["Mobile","Mallette explosive","Esprit d'équipe","Polyvalent et amusant"],"gallery":["outdoor-mobiele-escape-room/outdoor-mobiele-escape-room-2.jpg","outdoor-mobiele-escape-room/outdoor-mobiele-escape-room-3.jpg"],"categories":["outdoor","innovaction"],"duration":"30 minutes - 2 heures","groupSize":"6 - 250 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/outdoor-mobiele-escape-room.md";
				const url = undefined;
				function rawContent() {
					return "\nVivez une expérience unique et palpitante d'escape room avec nos valises d'escape room mobiles ! Nuclear Box et Magic Bomb mettent votre équipe au défi de collaborer, résoudre des énigmes et sauver le monde. Idéal pour le team building, les fêtes ou une journée d'aventure entre amis et en famille.\n\nÊtes-vous prêt à diriger votre équipe, résoudre des énigmes et sauver le monde ou désamorcer la bombe ? Relevez le défi et vivez une expérience d'escape room inoubliable !\n";
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
