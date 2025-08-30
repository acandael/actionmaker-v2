import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>De schaapsherder brengt jullie de basistechnieken van het schapendrijven bij en leert hoe de commando’s bij de honden, Border Collies, gebruikt kunnen worden. Na deze uitleg gaan jullie zelf de schapen over een parcours drijven. De workshop kan afgesloten worden met een demonstratie van de schapenherder zelf.</p>";

				const frontmatter = {"title":"Schapendrijven","description":"Schapendrijven is een leuke activiteit voor groepen die graag willen genieten van de natuur en de schoonheid van de omgeving.","image":"schapendrijven/schapendrijven-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/1d589b57-7ad0-4484-88be-1d9c3c3c26c6","priority":1,"categories":["workshop"],"duration":"30 minuten - 2 uur","groupSize":"Maximum 200 personen","availability":"Het hele jaar door","features":["Basistechnieken schapen drijven","Commando's voor honden","Parcours drijven","Demonstratie"],"gallery":["schapendrijven/schapendrijven-1.jpg","schapendrijven/schapendrijven-2.jpg","schapendrijven/schapendrijven-3.jpg","schapendrijven/schapendrijven-4.jpg","schapendrijven/schapendrijven-5.jpg","schapendrijven/schapendrijven-6.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/schapendrijven.md";
				const url = undefined;
				function rawContent() {
					return "\nDe schaapsherder brengt jullie de basistechnieken van het schapendrijven bij en leert hoe de commando's bij de honden, Border Collies, gebruikt kunnen worden. Na deze uitleg gaan jullie zelf de schapen over een parcours drijven. De workshop kan afgesloten worden met een demonstratie van de schapenherder zelf.\n";
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
