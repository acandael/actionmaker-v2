import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Discover how well your taste, smell and touch senses work during this fun and challenging taste test! Test your knowledge of beer, cola, cheese, spices and more. Do you have a sharp sense of taste, or do you prefer to rely on the label?</p>\n<h2 id=\"make-it-even-more-fun-with-a-quiz\">Make it Even More Fun with a Quiz!</h2>\n<p>Combine the taste test with an original and animated quiz full of fun facts about food, flavors and drinks. Who knows the most about food and who will be surprised?</p>";

				const frontmatter = {"title":"Taste Test","description":"Can you trust your taste buds? Who makes the best use of taste, smell, and touch?","image":"smaaktest/smaaktest-1.jpg","priority":3,"categories":["workshop"],"duration":"2 - 5 hours","groupSize":"8 - 250 participants","availability":"All year round","features":["Do you know which spices you use in your dishes? Can you recognize them without the label?","Try to identify your favorite cheese or spices by taste alone.","Can you recognize your favorite beer or soda? Can you tell the difference between Jupiler, Maes, Leffe or Palm? Or between Coca-Cola and Pepsi?","Discover the power of your senses by trying to recognize different flavors and aromas."],"gallery":["smaaktest/smaaktest-1.jpg","smaaktest/smaaktest-2.jpg","smaaktest/smaaktest-3.jpg","smaaktest/smaaktest-4.jpg","smaaktest/smaaktest-5.jpg","smaaktest/smaaktest-6.jpg","smaaktest/smaaktest-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/smaaktest.md";
				const url = undefined;
				function rawContent() {
					return "\nDiscover how well your taste, smell and touch senses work during this fun and challenging taste test! Test your knowledge of beer, cola, cheese, spices and more. Do you have a sharp sense of taste, or do you prefer to rely on the label?\n\n## Make it Even More Fun with a Quiz!\n\nCombine the taste test with an original and animated quiz full of fun facts about food, flavors and drinks. Who knows the most about food and who will be surprised?\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"make-it-even-more-fun-with-a-quiz","text":"Make it Even More Fun with a Quiz!"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
