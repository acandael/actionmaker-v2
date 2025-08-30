import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"moorddiner-1\">Moorddiner 1</h2>\n<p>Tijdens dit moordspel schuif je met zijn allen aan tafel ter nagedachtenis van de dierbare overledene. Maar al snel blijkt dat de moordenaar zich in je gezelschap bevindt…\nHet moorddiner is een zenuwslopend moordspel waarbij je de identiteit van een meedogenloze moordenaar moet achterhalen. Dit aan de hand van tips die je verdient na het uitvoeren van groepsopdrachten. Maar: de moordenaar gaat je uiteraard niet zomaar ongestoord je gang laten gaan. Hij zal er alles aan doen om te verhinderen dat je de opdrachten tot een goed einde brengt… De beste detective, die erin slaagt verder onheil te voorkomen, krijgt een passende beloning.</p>\n<h2 id=\"moorddiner-2\">Moorddiner 2</h2>\n<p>Voor hun diamanten bruiloft te vieren, nodigen de Graaf en Gravin Beaucourt hun naaste vrienden uit op een prestigieus feest. aan tafel zitten mee een Professor, een Kolonel, een Schrijver, een Actrice, een Bankier, een Playboy, een Kunstenaar, een jonge Weduwe, de ongehuwde dochter van het koppel, de Pastoor, een Notaris….\nHet feest is aan de gang, Hercule Poirot doet zijn intrede. Iedereen wordt verzorgd plaats te nemen aan de tafels.</p>";

				const frontmatter = {"title":"Moorddiner","description":"Het moorddiner is een zenuwslopend moordspel waarbij je de identiteit van een meedogenloze moordenaar moet achterhalen.","image":"moorddiner/moorddiner-1.jpg","priority":12,"isGame":true,"categories":["indoor"],"duration":"+/- 3u.","groupSize":"6 - 500 personen","availability":"Het hele jaar door","features":["teamwork","communicatie","strategie"],"gallery":["moorddiner/moorddiner-2.jpg","moorddiner/moorddiner-3.jpg","moorddiner/moorddiner-4.jpg","moorddiner/moorddiner-5.jpg","moorddiner/moorddiner-6.jpg","moorddiner/moorddiner-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/moorddiner.md";
				const url = undefined;
				function rawContent() {
					return "\n## Moorddiner 1\n\nTijdens dit moordspel schuif je met zijn allen aan tafel ter nagedachtenis van de dierbare overledene. Maar al snel blijkt dat de moordenaar zich in je gezelschap bevindt…\nHet moorddiner is een zenuwslopend moordspel waarbij je de identiteit van een meedogenloze moordenaar moet achterhalen. Dit aan de hand van tips die je verdient na het uitvoeren van groepsopdrachten. Maar: de moordenaar gaat je uiteraard niet zomaar ongestoord je gang laten gaan. Hij zal er alles aan doen om te verhinderen dat je de opdrachten tot een goed einde brengt… De beste detective, die erin slaagt verder onheil te voorkomen, krijgt een passende beloning.\n\n## Moorddiner 2\n\nVoor hun diamanten bruiloft te vieren, nodigen de Graaf en Gravin Beaucourt hun naaste vrienden uit op een prestigieus feest. aan tafel zitten mee een Professor, een Kolonel, een Schrijver, een Actrice, een Bankier, een Playboy, een Kunstenaar, een jonge Weduwe, de ongehuwde dochter van het koppel, de Pastoor, een Notaris….\nHet feest is aan de gang, Hercule Poirot doet zijn intrede. Iedereen wordt verzorgd plaats te nemen aan de tafels.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"moorddiner-1","text":"Moorddiner 1"},{"depth":2,"slug":"moorddiner-2","text":"Moorddiner 2"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
