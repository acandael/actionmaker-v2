import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Rêvez-vous de devenir un Jedi ou un Sith, comme dans les légendaires films Star Wars ? Avec l’escrime au sabre laser, plongez dans l’univers de la Force et apprenez à manier un sabre laser ! Cette quatrième discipline d’escrime reconnue est encadrée par l’un des premiers instructeurs certifiés de Flandre.</p>";

				const frontmatter = {"title":"Escrime au Sabre Laser (Outdoor)","description":"Devenez un Véritable Padawan !","image":"outdoor-laserschermen/outdoor-laserschermen-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/102cb4a2-6345-40dd-a2e1-37ed57c43929","priority":6,"features":["Pour les fans de Star Wars et les aventuriers","Actif et amusant","Pour tous les âges"],"gallery":["outdoor-laserschermen/outdoor-laserschermen-2.jpg","outdoor-laserschermen/outdoor-laserschermen-3.jpg","outdoor-laserschermen/outdoor-laserschermen-4.jpg","outdoor-laserschermen/outdoor-laserschermen-5.jpg","outdoor-laserschermen/outdoor-laserschermen-6.jpg","outdoor-laserschermen/outdoor-laserschermen-7.jpg"],"categories":["actif","outdoor","innovaction"],"duration":"30 minutes - 2 heurs","groupSize":"4 - 50 personnes","availability":"Toute l'année"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/outdoor-laserschermen.md";
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
