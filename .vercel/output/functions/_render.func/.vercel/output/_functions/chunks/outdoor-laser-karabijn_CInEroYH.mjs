import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Aan de hand van de lichten en de console die bij het geweer/pistool hoort weet u waar u getroffen hebt. De console toont uw schietpatroon zodanig dat u dit makkelijk kan aanpassen. Dit is een superleuke ervaring voor zowel volwassenen als kinderen. Het infrarood biatlon- en sportpistool schieten is daarenboven ook nog volledig veilig en milieuvriendelijk en kan zowel binnen als buiten plaatsvinden.</p>\n<p>Deze activiteit is ideaal voor een teambuilding, de ploegleden die niet aan het schieten zijn kunnen hun teamgenoten “coachen” aan de hand van de console. Na het oefenen, gaan we door een competitie op zoek naar de kampioen</p>";

				const frontmatter = {"title":"Laser karabijn- en sportpistool (Outdoor)","description":"Bij het infrarood biatlonschieten wordt er met omgebouwde biatlongeweren geschoten op een biatlon doel","image":"outdoor-laser-karabijn/outdoor-laser-karabijn-1.jpg","priority":5,"categories":["outdoor"],"duration":"30 minuten - 2 uur","groupSize":"2 - 200","availability":"Het hele jaar door","features":["ontspanning","groepsdynamiek","coaching"],"gallery":["outdoor-laser-karabijn/outdoor-laser-karabijn-2.jpg","outdoor-laser-karabijn/outdoor-laser-karabijn-3.jpg","outdoor-laser-karabijn/outdoor-laser-karabijn-4.jpg","outdoor-laser-karabijn/outdoor-laser-karabijn-5.jpg","outdoor-laser-karabijn/outdoor-laser-karabijn-6.jpg","outdoor-laser-karabijn/outdoor-laser-karabijn-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/outdoor-laser-karabijn.md";
				const url = undefined;
				function rawContent() {
					return "\nAan de hand van de lichten en de console die bij het geweer/pistool hoort weet u waar u getroffen hebt. De console toont uw schietpatroon zodanig dat u dit makkelijk kan aanpassen. Dit is een superleuke ervaring voor zowel volwassenen als kinderen. Het infrarood biatlon- en sportpistool schieten is daarenboven ook nog volledig veilig en milieuvriendelijk en kan zowel binnen als buiten plaatsvinden.\n\nDeze activiteit is ideaal voor een teambuilding, de ploegleden die niet aan het schieten zijn kunnen hun teamgenoten “coachen” aan de hand van de console. Na het oefenen, gaan we door een competitie op zoek naar de kampioen\n";
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
