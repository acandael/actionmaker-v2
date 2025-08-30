import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Join the adventure with Texas Jones, the lesser-known but equally determined cousin of Indiana Jones, and help him find the 3 legendary cups of Charles V. This unique city game takes you through the magnificent city of Ghent, filled with history, mystery and challenges.</p>\n<h2 id=\"the-story-the-3-cups-of-charles-v\">The Story: The 3 Cups of Charles V</h2>\n<p>Charles V, born in Ghent, was one of the most powerful rulers of his time. According to an ancient legend, his astrologer ordered him to have 3 cups made. These cups had to be united at Ghent’s city hall to give the city its true greatness. But the cups were lost in history and are now hidden in three of the ten most important monuments of Ghent.</p>\n<p>The Charles V Foundation, wishing to honor this great emperor, has asked Texas Jones to find the cups. After years of research, he has gathered clues, but he is being followed by rivals who want to steal the treasure. That’s why Texas needs your help!</p>\n<h2 id=\"the-game\">The Game</h2>\n<p>Starting point: Texas Jones welcomes you and gives you the first clues.</p>\n<p>Collaboration: Use your knowledge, creativity and teamwork to complete the challenges.</p>\n<p>End point: At the end, all teams gather with Texas to share their findings and discover who found the most cups.</p>";

				const frontmatter = {"title":"Ghent City Game","description":"This unique city game takes you through the magnificent city of Ghent, filled with history, mystery and challenges.","image":"gents-stadsspel/gents-stadsspel-1.jpg","priority":4,"isCityGame":true,"features":["Teams: You will be divided into teams to search for the cups together.","Hints and Riddles: Use Texas Jones clues to discover which three of the ten monuments hide the cups.","Monuments: Explore some of the most beautiful and iconic sites in Ghent while searching for answers and solving puzzles.","A Race Against Time: Make sure to find the cups before the rivals strike."],"gallery":["gents-stadsspel/gents-stadsspel-2.jpg"],"categories":["city-games"],"duration":"2-3 heures","groupSize":"1-15 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/gents-stadsspel.md";
				const url = undefined;
				function rawContent() {
					return "\nJoin the adventure with Texas Jones, the lesser-known but equally determined cousin of Indiana Jones, and help him find the 3 legendary cups of Charles V. This unique city game takes you through the magnificent city of Ghent, filled with history, mystery and challenges.\n\n## The Story: The 3 Cups of Charles V\n\nCharles V, born in Ghent, was one of the most powerful rulers of his time. According to an ancient legend, his astrologer ordered him to have 3 cups made. These cups had to be united at Ghent's city hall to give the city its true greatness. But the cups were lost in history and are now hidden in three of the ten most important monuments of Ghent.\n\nThe Charles V Foundation, wishing to honor this great emperor, has asked Texas Jones to find the cups. After years of research, he has gathered clues, but he is being followed by rivals who want to steal the treasure. That's why Texas needs your help!\n\n## The Game\n\nStarting point: Texas Jones welcomes you and gives you the first clues.\n\nCollaboration: Use your knowledge, creativity and teamwork to complete the challenges.\n\nEnd point: At the end, all teams gather with Texas to share their findings and discover who found the most cups.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"the-story-the-3-cups-of-charles-v","text":"The Story: The 3 Cups of Charles V"},{"depth":2,"slug":"the-game","text":"The Game"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
