import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Verschillende teams strijden tegen elkaar om de overwinning binnen te halen.</p>\n<p>Maar wees gewaarschuwd, want in ieder team zit er een saboteur verscholen. Een aantal mensen spelen dubbelspel: ze proberen ongemerkt de opdrachten (vb. mollenloop, time quiz, gatenkaas, …) te saboteren.</p>\n<p>Probeer de mol steeds een stapje voor te zijn door sluwe samenwerkingsverbanden te smeden en uiteindelijk te ontmaskeren.\nKortom, laat je meesleuren in een schitterend spel waar vertrouwen en verraad nooit zo dicht bij elkaar hebben gelegen, want je weet nooit wie je voor 100% kunt vertrouwen.</p>\n<p>De teams worden samengesteld op basis van een vooraf door jullie ingevulde online vragenlijst die een week op voorhand opgestuurd wordt. De avond voor de teambuilding krijgt de mol een sms met instructies.</p>";

				const frontmatter = {"title":"De Mollenjacht (Outdoor)","description":"Deze teambuilding is gebaseerd op het populaire tv-programma De Mol","image":"outdoor-mollenjacht/outdoor-mollenjacht-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/94de6955-8473-4cc6-9dd7-90bc509b858a","priority":14,"isGame":true,"features":["De Mollenloop","Time Quiz","Seinvlaggen of morse","Gatenkaas","Melkkannen/torens"],"gallery":["outdoor-mollenjacht/outdoor-mollenjacht-2.jpg","outdoor-mollenjacht/outdoor-mollenjacht-3.jpg","outdoor-mollenjacht/outdoor-mollenjacht-4.jpg","outdoor-mollenjacht/outdoor-mollenjacht-5.jpg","outdoor-mollenjacht/outdoor-mollenjacht-6.jpg","outdoor-mollenjacht/outdoor-mollenjacht-7.jpg"],"categories":["outdoor"],"duration":"2 - 5 uur","groupSize":"8 - 1000 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/outdoor-mollenjacht.md";
				const url = undefined;
				function rawContent() {
					return "\nVerschillende teams strijden tegen elkaar om de overwinning binnen te halen.\n\nMaar wees gewaarschuwd, want in ieder team zit er een saboteur verscholen. Een aantal mensen spelen dubbelspel: ze proberen ongemerkt de opdrachten (vb. mollenloop, time quiz, gatenkaas, ...) te saboteren.\n\nProbeer de mol steeds een stapje voor te zijn door sluwe samenwerkingsverbanden te smeden en uiteindelijk te ontmaskeren.\nKortom, laat je meesleuren in een schitterend spel waar vertrouwen en verraad nooit zo dicht bij elkaar hebben gelegen, want je weet nooit wie je voor 100% kunt vertrouwen.\n\nDe teams worden samengesteld op basis van een vooraf door jullie ingevulde online vragenlijst die een week op voorhand opgestuurd wordt. De avond voor de teambuilding krijgt de mol een sms met instructies.\n";
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
