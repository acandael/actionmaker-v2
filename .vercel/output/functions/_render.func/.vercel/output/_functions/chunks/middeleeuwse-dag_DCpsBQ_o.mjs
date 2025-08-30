import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>De préférence organisée dans un château, mais également possible dans d’autres lieux. Laissez-vous transporter dans le temps avec des activités typiquement médiévales, comme le tir à l’arbalète, le lancer de hache, le lancer de bourse, l’escrime, le lancer de fer à cheval, et percez le secret du moine. Nos animateurs portent des costumes médiévaux pour renforcer l’atmosphère historique (vous êtes bien sûr invités à venir également habillés dans le style).</p>\n<p>En option, nous proposons des activités comme la forge, la conduite de moutons et un atelier de rapaces pour compléter l’expérience médiévale. Que vous visiez avec une arbalète ou que vous perciez le secret du moine, ce team building promet non seulement du plaisir, mais aussi un sentiment de connexion et d’aventure dans un cadre unique. Explorez le Moyen Âge et permettez à votre équipe de participer à ce voyage inoubliable à travers l’histoire.</p>";

				const frontmatter = {"title":"Journée Médiévale","description":"Plongez dans l'atmosphère envoûtante du Moyen Âge avec ce team building immersif","image":"middeleeuwse-dag/middeleeuwse-dag-1.jpg","priority":22,"isGame":true,"features":["Tir à l'arbalète","Lancer de hache","Lancer de bourse","Escrime","Lancer de fer à cheval","Le secret du moine"],"gallery":["middeleeuwse-dag/middeleeuwse-dag-2.jpg","middeleeuwse-dag/middeleeuwse-dag-3.jpg","middeleeuwse-dag/middeleeuwse-dag-4.jpg","middeleeuwse-dag/middeleeuwse-dag-5.jpg","middeleeuwse-dag/middeleeuwse-dag-6.jpg","middeleeuwse-dag/middeleeuwse-dag-7.jpg"],"categories":["outdoor","actief"],"duration":"2.5 heures","groupSize":"8 - 1000 personnes","availability":"Toute l'année"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/middeleeuwse-dag.md";
				const url = undefined;
				function rawContent() {
					return "\nDe préférence organisée dans un château, mais également possible dans d'autres lieux. Laissez-vous transporter dans le temps avec des activités typiquement médiévales, comme le tir à l'arbalète, le lancer de hache, le lancer de bourse, l'escrime, le lancer de fer à cheval, et percez le secret du moine. Nos animateurs portent des costumes médiévaux pour renforcer l'atmosphère historique (vous êtes bien sûr invités à venir également habillés dans le style).\n\nEn option, nous proposons des activités comme la forge, la conduite de moutons et un atelier de rapaces pour compléter l'expérience médiévale. Que vous visiez avec une arbalète ou que vous perciez le secret du moine, ce team building promet non seulement du plaisir, mais aussi un sentiment de connexion et d'aventure dans un cadre unique. Explorez le Moyen Âge et permettez à votre équipe de participer à ce voyage inoubliable à travers l'histoire.\n";
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
