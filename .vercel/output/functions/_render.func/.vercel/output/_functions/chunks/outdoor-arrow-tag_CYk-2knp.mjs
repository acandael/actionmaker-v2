import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Arrow Tag (Outdoor) est la combinaison parfaite d’action, de stratégie et de collaboration, et une excellente alternative au paintball ! Tirez avec des flèches en mousse et découvrez à quel point cette variante du tir à l’arc est amusante et excitante. Plongez dans l’univers des Hunger Games et relevez le défi !</p>";

				const frontmatter = {"title":"Arrow Tag (Outdoor)","description":"Vivez l'excitation des Hunger Games !","image":"outdoor-arrow-tag/outdoor-arrow-tag-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/10a28ab1-6d11-4018-96a5-287dc7650b16","priority":7,"features":["Actif et sécurisé","Travail d'équipe et plaisir","Aventureux"],"gallery":["outdoor-arrow-tag/outdoor-arrow-tag-2.jpg","outdoor-arrow-tag/outdoor-arrow-tag-3.jpg","outdoor-arrow-tag/outdoor-arrow-tag-4.jpg","outdoor-arrow-tag/outdoor-arrow-tag-5.jpg","outdoor-arrow-tag/outdoor-arrow-tag-6.jpg"],"categories":["actief","outdoor"],"duration":"30 minutes - 2 heures","groupSize":"4-100 people","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/outdoor-arrow-tag.md";
				const url = undefined;
				function rawContent() {
					return "\nArrow Tag (Outdoor) est la combinaison parfaite d'action, de stratégie et de collaboration, et une excellente alternative au paintball ! Tirez avec des flèches en mousse et découvrez à quel point cette variante du tir à l'arc est amusante et excitante. Plongez dans l'univers des Hunger Games et relevez le défi !\n";
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
