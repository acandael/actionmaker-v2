import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Welkom bij onze teambuilding, waar we op zoek gaan naar het ultieme team van collega’s om de rol van ‘s werelds meest bekende spion op zich te nemen. Wie ontpopt zich als de beste geheim agent, wie heeft een scherp schuttersoog, wie bezit het beste inzicht en ontcijfert morse als een expert? En natuurlijk, wie kan er het beste schermen, geheel à la “Die Another Day” (zonder Madonna als coach, natuurlijk). Al deze vaardigheden leiden ons naar het creëren van het ultieme spionnenteam.</p>\n<p>Als optionele toevoeging kunnen we ook een cocktailworkshop organiseren (denk aan de klassieke “martini shaken, not stirred”), een spannende death ride, een droneworkshop en een casino-activiteit om de spion-sfeer compleet te maken. Deze teambuilding belooft niet alleen opwinding en plezier, maar ook het ontdekken en benutten van unieke talenten binnen het team, essentieel voor een succesvolle missie.</p>";

				const frontmatter = {"title":"Spy-academy/James Bond (Outdoor)","description":"We gaan op zoek naar het ultieme team van collega's om de rol van 's werelds meest bekende spion op zich te nemen.","image":"outdoor-james-bond/outdoor-james-bond-1.jpg","priority":23,"isGame":true,"features":["Schermen","Morse code","Schieten..."],"gallery":["outdoor-james-bond/outdoor-james-bond-2.jpg"],"categories":["outdoor","innovaction"],"duration":"2 - 5 uur","groupSize":"8 - 1000 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/outdoor-james-bond.md";
				const url = undefined;
				function rawContent() {
					return "\nWelkom bij onze teambuilding, waar we op zoek gaan naar het ultieme team van collega's om de rol van 's werelds meest bekende spion op zich te nemen. Wie ontpopt zich als de beste geheim agent, wie heeft een scherp schuttersoog, wie bezit het beste inzicht en ontcijfert morse als een expert? En natuurlijk, wie kan er het beste schermen, geheel à la \"Die Another Day\" (zonder Madonna als coach, natuurlijk). Al deze vaardigheden leiden ons naar het creëren van het ultieme spionnenteam.\n\nAls optionele toevoeging kunnen we ook een cocktailworkshop organiseren (denk aan de klassieke \"martini shaken, not stirred\"), een spannende death ride, een droneworkshop en een casino-activiteit om de spion-sfeer compleet te maken. Deze teambuilding belooft niet alleen opwinding en plezier, maar ook het ontdekken en benutten van unieke talenten binnen het team, essentieel voor een succesvolle missie.\n";
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
