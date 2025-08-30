import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Nuclear Box en Magic Bomb dagen jouw team uit om samen te werken, puzzels op te lossen en de wereld te redden. Ideaal voor teambuilding, feestjes of een avontuurlijke dag met vrienden en familie.\nBen jij klaar om je team te leiden, puzzels op te lossen en de wereld te redden of de bom te ontmantelen? Neem de uitdaging aan en beleef een onvergetelijke escape room ervaring!</p>";

				const frontmatter = {"title":"Mobiele Escape Room (Indoor)","description":"Beleef een unieke en spannende escape room ervaring met onze mobiele escape room koffers!","image":"indoor-mobiele-escape-room/indoor-mobiele-escape-room-1.jpg","priority":2,"features":["escape room","bomkoffer","veelzijdige uitdagingen","actie en spanning","werken onder tijdsdruk"],"gallery":["indoor-mobiele-escape-room/indoor-mobiele-escape-room-2.jpg","indoor-mobiele-escape-room/indoor-mobiele-escape-room-3.jpg","indoor-mobiele-escape-room/indoor-mobiele-escape-room-4.jpg","indoor-mobiele-escape-room/indoor-mobiele-escape-room-5.jpg","indoor-mobiele-escape-room/indoor-mobiele-escape-room-6.jpg","indoor-mobiele-escape-room/indoor-mobiele-escape-room-7.jpg"],"categories":["indoor","innovaction"],"duration":"30 minuten - 2 uur","groupSize":"6 - 250 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/indoor-mobiele-escape-room.md";
				const url = undefined;
				function rawContent() {
					return "\nNuclear Box en Magic Bomb dagen jouw team uit om samen te werken, puzzels op te lossen en de wereld te redden. Ideaal voor teambuilding, feestjes of een avontuurlijke dag met vrienden en familie.\nBen jij klaar om je team te leiden, puzzels op te lossen en de wereld te redden of de bom te ontmantelen? Neem de uitdaging aan en beleef een onvergetelijke escape room ervaring!\n";
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
