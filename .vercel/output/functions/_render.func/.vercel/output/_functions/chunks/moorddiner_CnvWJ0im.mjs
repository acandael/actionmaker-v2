import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"murder-dinner-1\">Murder Dinner 1</h2>\n<p>In this murder game, everyone sits down at the table in memory of the beloved deceased. But soon it becomes clear that the murderer is in your company…\nThe murder dinner is a nerve-wracking murder game where you must uncover the identity of a ruthless killer. This is done through clues that you earn by completing group tasks. But beware: The murderer won’t simply let you work undisturbed. They will do everything to prevent you from successfully completing the tasks… The best detective who manages to prevent further misfortune receives a suitable reward.</p>\n<h2 id=\"murder-dinner-2\">Murder Dinner 2</h2>\n<p>To celebrate their diamond wedding anniversary, Count and Countess Beaucourt invite their closest friends to a prestigious party. Seated at the table are a professor, a colonel, a writer, an actress, a banker, a playboy, an artist, a young widow, the couple’s unmarried daughter, the priest, a notary…\nThe party is in full swing when Hercule Poirot makes his appearance. Everyone is asked to take their seats at the tables.</p>";

				const frontmatter = {"title":"Murder Dinner","description":"The murder dinner is a nerve-wracking murder game where you must uncover the identity of a ruthless killer.","image":"moorddiner/moorddiner-1.jpg","priority":12,"isGame":true,"categories":["indoor"],"duration":"+/- 3h","groupSize":"6 - 500 people","availability":"All year round","features":["teamwork","communication","strategy"],"gallery":["moorddiner/moorddiner-2.jpg","moorddiner/moorddiner-3.jpg","moorddiner/moorddiner-4.jpg","moorddiner/moorddiner-5.jpg","moorddiner/moorddiner-6.jpg","moorddiner/moorddiner-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/moorddiner.md";
				const url = undefined;
				function rawContent() {
					return "\n## Murder Dinner 1\n\nIn this murder game, everyone sits down at the table in memory of the beloved deceased. But soon it becomes clear that the murderer is in your company...\nThe murder dinner is a nerve-wracking murder game where you must uncover the identity of a ruthless killer. This is done through clues that you earn by completing group tasks. But beware: The murderer won't simply let you work undisturbed. They will do everything to prevent you from successfully completing the tasks... The best detective who manages to prevent further misfortune receives a suitable reward.\n\n## Murder Dinner 2\n\nTo celebrate their diamond wedding anniversary, Count and Countess Beaucourt invite their closest friends to a prestigious party. Seated at the table are a professor, a colonel, a writer, an actress, a banker, a playboy, an artist, a young widow, the couple's unmarried daughter, the priest, a notary...\nThe party is in full swing when Hercule Poirot makes his appearance. Everyone is asked to take their seats at the tables.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"murder-dinner-1","text":"Murder Dinner 1"},{"depth":2,"slug":"murder-dinner-2","text":"Murder Dinner 2"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
