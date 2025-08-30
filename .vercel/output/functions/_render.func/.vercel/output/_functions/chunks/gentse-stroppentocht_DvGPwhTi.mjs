import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Experience a unique and interactive team building in the heart of Ghent! In small teams, you’ll embark on a discovery tour through the city, where collaboration, speed, and a keen eye for detail will be rewarded.</p>";

				const frontmatter = {"title":"Ghent City Game","description":"Team Building in Ghent: Discover, Play & Win!","image":"gentse-stroppentocht/gentse-stroppentocht-1.jpg","priority":1,"isCityGame":true,"categories":["city-games"],"duration":"+- 3 hours","groupSize":"6 - 150 persons","availability":"All year round","features":["Photo hunt: Patershol","Urban Golf: Vrijdagsmarkt","Learn Ghent expressions with semaphore alphabet","Graffiti Spotting: Werregarenstraat","Quiz along the way","Gin and/or fruit juice tasting","Optional: Extra challenges","Prizes for the winners!"],"gallery":["gentse-stroppentocht/gentse-stroppentocht-2.jpg","gentse-stroppentocht/gentse-stroppentocht-3.jpg","gentse-stroppentocht/gentse-stroppentocht-4.jpg","gentse-stroppentocht/gentse-stroppentocht-5.jpg","gentse-stroppentocht/gentse-stroppentocht-6.jpg","gentse-stroppentocht/gentse-stroppentocht-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/gentse-stroppentocht.md";
				const url = undefined;
				function rawContent() {
					return "\nExperience a unique and interactive team building in the heart of Ghent! In small teams, you'll embark on a discovery tour through the city, where collaboration, speed, and a keen eye for detail will be rewarded.\n";
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
