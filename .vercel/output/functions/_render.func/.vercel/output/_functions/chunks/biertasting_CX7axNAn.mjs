import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Experience a unique journey through the world of beer during our beer tasting. Enjoy diverse beer styles, learn surprising facts, and have a fun and educational experience. Perfect for both enthusiasts and curious newcomers!</p>\n<h2 id=\"what-is-beer-tasting\">What is Beer Tasting?</h2>\n<p>The Beers: A carefully selected range of beers, including non-alcoholic options, that will tantalize your taste buds.</p>\n<p>The Tasting: Discover the art of beer tasting and learn to recognize flavor nuances and aromas.</p>\n<p>The Stories: Behind each beer lies a story about the brewery and the craft.</p>\n<h2 id=\"how-does-it-work\">How does it work?</h2>\n<p><strong>Introduction:</strong></p>\n<p>A brief explanation about beer tasting, what to expect, and some fun tips.</p>\n<p>Learn the basics of flavor recognition and the story behind the beers.</p>\n<p><strong>Tasting:</strong></p>\n<p>Together we discover a range of beers, from classics to surprises.</p>\n<p>Find out why we clink our glasses and learn fun facts, like using beer as a hair conditioner!</p>\n<p><strong>The Experience:</strong></p>\n<p>Experience beer like never before: with more knowledge, appreciation, and enjoyment.</p>\n<p>Beer drinking becomes an experience you won’t soon forget.</p>";

				const frontmatter = {"title":"Beer Tasting","description":"Taste, Discover and Enjoy!","image":"biertasting/biertasting-1.jpg","priority":9,"features":["Versatile: Suitable for beer lovers and beginners alike.","Non-alcoholic options available: Also for those who don't drink alcohol.","Learn and enjoy: Combine fun with interesting facts."],"gallery":["biertasting/biertasting-2.jpg","biertasting/biertasting-3.jpg","biertasting/biertasting-4.jpg","biertasting/biertasting-5.jpg","biertasting/biertasting-6.jpg","biertasting/biertasting-7.jpg"],"categories":["workshop"],"duration":"1,5 - 2 uur","groupSize":"6 - 40 persons","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/biertasting.md";
				const url = undefined;
				function rawContent() {
					return "\nExperience a unique journey through the world of beer during our beer tasting. Enjoy diverse beer styles, learn surprising facts, and have a fun and educational experience. Perfect for both enthusiasts and curious newcomers!\n\n## What is Beer Tasting?\n\nThe Beers: A carefully selected range of beers, including non-alcoholic options, that will tantalize your taste buds.\n\nThe Tasting: Discover the art of beer tasting and learn to recognize flavor nuances and aromas.\n\nThe Stories: Behind each beer lies a story about the brewery and the craft.\n\n## How does it work?\n\n**Introduction:**\n\nA brief explanation about beer tasting, what to expect, and some fun tips.\n\nLearn the basics of flavor recognition and the story behind the beers.\n\n**Tasting:**\n\nTogether we discover a range of beers, from classics to surprises.\n\nFind out why we clink our glasses and learn fun facts, like using beer as a hair conditioner!\n\n**The Experience:**\n\nExperience beer like never before: with more knowledge, appreciation, and enjoyment.\n\nBeer drinking becomes an experience you won't soon forget.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"what-is-beer-tasting","text":"What is Beer Tasting?"},{"depth":2,"slug":"how-does-it-work","text":"How does it work?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
