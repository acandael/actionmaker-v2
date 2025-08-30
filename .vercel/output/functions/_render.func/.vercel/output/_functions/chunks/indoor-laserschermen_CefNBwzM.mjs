import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Rêvez-vous de devenir un Jedi ou un Sith, comme dans les légendaires films Star Wars ? Avec l’escrime au sabre laser, plongez dans l’univers de la Force et apprenez à manier un sabre laser ! Cette quatrième discipline d’escrime reconnue est encadrée par l’un des premiers instructeurs certifiés de Flandre.</p>";

				const frontmatter = {"title":"Escrime au sabre laser (Indoor)","description":"Devenez un véritable Padawan !","image":"indoor-laserschermen/indoor-laserschermen-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/102cb4a2-6345-40dd-a2e1-37ed57c43929","priority":6,"features":["Pour les fans de Star Wars et les aventuriers","Actif et amusant","Pour tous les âges"],"gallery":["indoor-laserschermen/indoor-laserschermen-2.jpg","indoor-laserschermen/indoor-laserschermen-3.jpg","indoor-laserschermen/indoor-laserschermen-4.jpg","indoor-laserschermen/indoor-laserschermen-5.jpg","indoor-laserschermen/indoor-laserschermen-6.jpg","indoor-laserschermen/indoor-laserschermen-7.jpg"],"categories":["actief","indoor","innovaction"],"duration":"30 minutes - 2 heurs","groupSize":"4 - 50 personnes","availability":"Toute l'année"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/indoor-laserschermen.md";
				const url = undefined;
				function rawContent() {
					return "\nRêvez-vous de devenir un Jedi ou un Sith, comme dans les légendaires films Star Wars ? Avec l'escrime au sabre laser, plongez dans l'univers de la Force et apprenez à manier un sabre laser ! Cette quatrième discipline d'escrime reconnue est encadrée par l'un des premiers instructeurs certifiés de Flandre.\n";
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
