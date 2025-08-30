import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Experience a unique day in Bruges with the Brugse Metten City Game! This interactive game takes you through the most beautiful parts of the city while participating in fun and challenging activities. Perfect for groups who want to discover Bruges in a playful way.</p>";

				const frontmatter = {"title":"Bruges Matins Tour","description":"Brugse Metten City Game: Discover Bruges with fun and competition!","image":"brugse-metten-tocht/brugse-metten-tocht-1.jpg","priority":2,"isCityGame":true,"features":["Photo Hunt: Explore the Streets","Urban Golf at the Old Saint John Site","Recognize Bruges Symbols in the Belfry","Gin Tasting at the Congress Building","Quiz Along the Way","Optional: Bruges Expressions"],"gallery":["brugse-metten-tocht/brugse-metten-tocht-2.jpg","brugse-metten-tocht/brugse-metten-tocht-3.jpg","brugse-metten-tocht/brugse-metten-tocht-4.jpg","brugse-metten-tocht/brugse-metten-tocht-5.jpg","brugse-metten-tocht/brugse-metten-tocht-6.jpg","brugse-metten-tocht/brugse-metten-tocht-7.jpg"],"categories":["city-games"],"duration":"2 -3 hours","groupSize":"6 - 200 persons","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/brugse-metten-tocht.md";
				const url = undefined;
				function rawContent() {
					return "\nExperience a unique day in Bruges with the Brugse Metten City Game! This interactive game takes you through the most beautiful parts of the city while participating in fun and challenging activities. Perfect for groups who want to discover Bruges in a playful way.\n";
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
