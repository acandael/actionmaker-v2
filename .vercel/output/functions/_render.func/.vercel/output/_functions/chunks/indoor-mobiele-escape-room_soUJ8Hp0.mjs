import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Vivez une expérience unique et palpitante d’escape room avec nos valises d’escape room mobiles ! Nuclear Box et Magic Bomb mettent votre équipe au défi de collaborer, résoudre des énigmes et sauver le monde. Idéal pour le team building, les fêtes ou une journée d’aventure entre amis et en famille.</p>\n<p>Êtes-vous prêt à diriger votre équipe, résoudre des énigmes et sauver le monde ou désamorcer la bombe ? Relevez le défi et vivez une expérience d’escape room inoubliable !</p>";

				const frontmatter = {"title":"Escape Room Mobile (Indoor)","description":"Nuclear Box & Magic Bomb","image":"indoor-mobiele-escape-room/indoor-mobiele-escape-room-1.jpg","priority":2,"features":["Mobile","Mallette explosive","Esprit d'équipe","Polyvalent et amusant"],"gallery":["indoor-mobiele-escape-room/indoor-mobiele-escape-room-2.jpg","indoor-mobiele-escape-room/indoor-mobiele-escape-room-3.jpg","indoor-mobiele-escape-room/indoor-mobiele-escape-room-4.jpg","indoor-mobiele-escape-room/indoor-mobiele-escape-room-5.jpg","indoor-mobiele-escape-room/indoor-mobiele-escape-room-6.jpg","indoor-mobiele-escape-room/indoor-mobiele-escape-room-7.jpg"],"categories":["indoor","innovaction"],"duration":"30 minutes - 2 heures","groupSize":"6 - 250 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/indoor-mobiele-escape-room.md";
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
