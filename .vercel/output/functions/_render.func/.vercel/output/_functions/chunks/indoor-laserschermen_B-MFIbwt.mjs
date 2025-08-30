import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Droom jij ervan om een Jedi of Sith te worden, zoals in de legendarische Star Wars-films? Met lightsaber schermen stap je in de wereld van de Force en leer je vechten met een lichtzwaard! Deze erkende vierde schermdiscipline wordt begeleid door een van de eerste erkende instructeurs uit Vlaanderen.</p>";

				const frontmatter = {"title":"Lightsaber Schermen (Indoor)","description":"Word een ware Padawan!","image":"indoor-laserschermen/indoor-laserschermen-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/102cb4a2-6345-40dd-a2e1-37ed57c43929","priority":6,"features":["Voor Star Wars-fans en avonturiers","Actief en leuk","Voor jong en oud"],"gallery":["indoor-laserschermen/indoor-laserschermen-2.jpg","indoor-laserschermen/indoor-laserschermen-3.jpg","indoor-laserschermen/indoor-laserschermen-4.jpg","indoor-laserschermen/indoor-laserschermen-5.jpg","indoor-laserschermen/indoor-laserschermen-6.jpg","indoor-laserschermen/indoor-laserschermen-7.jpg"],"categories":["actief","indoor","innovaction"],"duration":"30 minuten - 2 uur","groupSize":"4 - 50 personen","availability":"Het hele jaar door"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/indoor-laserschermen.md";
				const url = undefined;
				function rawContent() {
					return "\nDroom jij ervan om een Jedi of Sith te worden, zoals in de legendarische Star Wars-films? Met lightsaber schermen stap je in de wereld van de Force en leer je vechten met een lichtzwaard! Deze erkende vierde schermdiscipline wordt begeleid door een van de eerste erkende instructeurs uit Vlaanderen.\n";
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
