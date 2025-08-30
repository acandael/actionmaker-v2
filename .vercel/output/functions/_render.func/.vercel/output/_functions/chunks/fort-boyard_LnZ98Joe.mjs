import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Het programma Fort Boyard geniet vooral bekendheid onder Franstaligen. Om de overwinning te behalen, concurreren de teams net zoals in het tv-programma tegen elkaar in uitdagende tijdgebonden proeven. In verschillende “zalen” wordt onthuld wie het beste samenwerkt. Elk individueel talent, variërend van logisch inzicht tot fysieke vaardigheden, van nauwkeurigheid tot lenigheid en zelfs smaak, wordt op de proef gesteld.</p>\n<p>Dit programma kan worden ervaren op verschillende kastelen en andere locaties in België, waar de deelnemers de kans krijgen om hun diverse vaardigheden te laten schitteren.</p>";

				const frontmatter = {"title":"Fort Boyard","description":"Het programma Fort Boyard geniet vooral bekendheid onder Franstaligen","image":"fort-boyard/fort-boyard-1.jpg","isGame":true,"features":["teambuilding","activiteiten toegankelijk voor iedereen","verrassende opdrachten"],"gallery":["fort-boyard/fort-boyard-2.jpg","fort-boyard/fort-boyard-3.jpg","fort-boyard/fort-boyard-4.jpg","fort-boyard/fort-boyard-5.jpg","fort-boyard/fort-boyard-6.jpg","fort-boyard/fort-boyard-7.jpg"],"categories":["actief"],"duration":"2 - 5 uur","groupSize":"8 - 1000 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/fort-boyard.md";
				const url = undefined;
				function rawContent() {
					return "\nHet programma Fort Boyard geniet vooral bekendheid onder Franstaligen. Om de overwinning te behalen, concurreren de teams net zoals in het tv-programma tegen elkaar in uitdagende tijdgebonden proeven. In verschillende \"zalen\" wordt onthuld wie het beste samenwerkt. Elk individueel talent, variërend van logisch inzicht tot fysieke vaardigheden, van nauwkeurigheid tot lenigheid en zelfs smaak, wordt op de proef gesteld.\n\nDit programma kan worden ervaren op verschillende kastelen en andere locaties in België, waar de deelnemers de kans krijgen om hun diverse vaardigheden te laten schitteren.\n";
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
