import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The Fort Boyard program is particularly well-known among French speakers. To achieve victory, teams compete against each other in challenging time-bound trials, just like in the TV show. In different “chambers,” it is revealed who works together best. Every individual talent, ranging from logical insight to physical skills, from precision to flexibility and even taste, is put to the test.</p>\n<p>This program can be experienced at various castles and other locations in Belgium, where participants get the chance to let their diverse skills shine.</p>";

				const frontmatter = {"title":"Fort Boyard","description":"The Fort Boyard program is particularly well-known among French speakers","image":"fort-boyard/fort-boyard-1.jpg","isGame":true,"features":["teambuilding","activities accessible to everyone","surprising challenges"],"gallery":["fort-boyard/fort-boyard-2.jpg","fort-boyard/fort-boyard-3.jpg","fort-boyard/fort-boyard-4.jpg","fort-boyard/fort-boyard-5.jpg","fort-boyard/fort-boyard-6.jpg","fort-boyard/fort-boyard-7.jpg"],"categories":["outdoor","actief"],"duration":"2 - 5 hours","groupSize":"8 - 1000 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/fort-boyard.md";
				const url = undefined;
				function rawContent() {
					return "\nThe Fort Boyard program is particularly well-known among French speakers. To achieve victory, teams compete against each other in challenging time-bound trials, just like in the TV show. In different \"chambers,\" it is revealed who works together best. Every individual talent, ranging from logical insight to physical skills, from precision to flexibility and even taste, is put to the test.\n\nThis program can be experienced at various castles and other locations in Belgium, where participants get the chance to let their diverse skills shine.\n";
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
