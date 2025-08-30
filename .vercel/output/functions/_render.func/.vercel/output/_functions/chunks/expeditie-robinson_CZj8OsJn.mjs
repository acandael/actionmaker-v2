import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Chez nous, vous pouvez vivre une expérience Robinson sur le lieu de votre choix. Pendant les épreuves stimulantes de Robinson, les membres du camp unissent leurs forces pour vaincre l’autre camp.</p>\n<p>Le jeu Expédition Robinson, inspiré de l’émission de télévision du même nom, comprend diverses épreuves où deux camps s’affrontent. Ces épreuves nécessitent des compétences telles que la maîtrise du feu, l’apprentissage de la survie, l’utilisation d’armes, la manipulation de noix de coco et plus encore…</p>";

				const frontmatter = {"title":"Expédition Robinson","description":"Le jeu Expédition Robinson, inspiré de l'émission de télévision du même nom","image":"expeditie-robinson/expeditie-robinson-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/6b95fb48-c267-4bdf-8039-d0a69d6e926d","priority":16,"isGame":true,"features":["esprit d'équipe","techniques de survie","maîtrise du feu"],"gallery":["expeditie-robinson/expeditie-robinson-2.jpg","expeditie-robinson/expeditie-robinson-3.jpg","expeditie-robinson/expeditie-robinson-4.jpg","expeditie-robinson/expeditie-robinson-5.jpg","expeditie-robinson/expeditie-robinson-6.jpg","expeditie-robinson/expeditie-robinson-7.jpg"],"categories":["outdoor","actief"],"duration":"2 - 5 heures","groupSize":"8 - 1000 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/expeditie-robinson.md";
				const url = undefined;
				function rawContent() {
					return "\nChez nous, vous pouvez vivre une expérience Robinson sur le lieu de votre choix. Pendant les épreuves stimulantes de Robinson, les membres du camp unissent leurs forces pour vaincre l'autre camp.\n\nLe jeu Expédition Robinson, inspiré de l'émission de télévision du même nom, comprend diverses épreuves où deux camps s'affrontent. Ces épreuves nécessitent des compétences telles que la maîtrise du feu, l'apprentissage de la survie, l'utilisation d'armes, la manipulation de noix de coco et plus encore...\n";
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
