import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Ontdek hoe goed jouw smaak, geur en tastzin werken tijdens deze leuke en uitdagende smaaktest! Test je kennis van bier, cola, kaas, kruiden en meer. Heb jij een scherp smaakzintuig of vertrouw je toch liever op het etiket?</p>\n<h2 id=\"maak-het-nog-leuker-met-een-quiz\">Maak het nog leuker met een Quiz!</h2>\n<p>Combineer de smaaktest met een originele en geanimeerde quiz boordevol leuke weetjes over eten, smaken en dranken. Wie weet het meeste over voeding en wie laat zich verrassen?</p>";

				const frontmatter = {"title":"Smaaktest","description":"Vertrouw jij op je zintuigen?","image":"smaaktest/smaaktest-1.jpg","priority":3,"categories":["workshop"],"duration":"2 - 5 uur","groupSize":"8 - 250 personen","availability":"het hele jaar door","features":["Weet je welke kruiden je gebruikt in je eten? Kun je ze herkennen zonder het etiket?","Probeer jouw favoriete kaas of kruiden te identificeren, puur op smaak.","Herken je jouw favoriete bier of frisdrank? Kun je het verschil proeven tussen Jupiler, Maes, Leffe of Palm? Of tussen Coca-Cola en Pepsi?","Ontdek hoe sterk jouw zintuigen zijn terwijl je verschillende smaken en geuren probeert te herkennen."],"gallery":["smaaktest/smaaktest-2.jpg","smaaktest/smaaktest-3.jpg","smaaktest/smaaktest-4.jpg","smaaktest/smaaktest-5.jpg","smaaktest/smaaktest-6.jpg","smaaktest/smaaktest-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/smaaktest.md";
				const url = undefined;
				function rawContent() {
					return "\nOntdek hoe goed jouw smaak, geur en tastzin werken tijdens deze leuke en uitdagende smaaktest! Test je kennis van bier, cola, kaas, kruiden en meer. Heb jij een scherp smaakzintuig of vertrouw je toch liever op het etiket?\n\n## Maak het nog leuker met een Quiz!\n\nCombineer de smaaktest met een originele en geanimeerde quiz boordevol leuke weetjes over eten, smaken en dranken. Wie weet het meeste over voeding en wie laat zich verrassen?\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"maak-het-nog-leuker-met-een-quiz","text":"Maak het nog leuker met een Quiz!"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
