import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Dîner Mystère","description":"Le dîner mystère est un jeu de meurtre palpitant où vous devez découvrir l'identité d'un meurtrier impitoyable.","image":"moorddiner/moorddiner-1.jpg","priority":12,"isGame":true,"categories":["indoor"],"duration":"3-4 heures","groupSize":"6 - 500 personnes","availability":"Sur demande","features":["esprit","communiquer","stratégie"],"gallery":["moorddiner/moorddiner-2.jpg","moorddiner/moorddiner-3.jpg","moorddiner/moorddiner-4.jpg","moorddiner/moorddiner-5.jpg","moorddiner/moorddiner-6.jpg","moorddiner/moorddiner-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/moorddiner.md";
				const url = undefined;
				function rawContent() {
					return "";
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
