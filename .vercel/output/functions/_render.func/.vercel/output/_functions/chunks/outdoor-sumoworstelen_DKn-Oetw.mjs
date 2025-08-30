import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Outdoor sumo wrestling is pushing and pulling until your opponent falls. With 2 or 4 people, you enter the mat and begin with the famous Japanese sumo greeting. At the game master’s starting signal, the competition begins, and participants must push each other off the mat for half a point or make them fall for a full point. At the end, the winner of the match gets to make a victory jump on the loser. Everyone can participate multiple times.</p>\n<p>A novelty is the sumo twin fighting, a very fun variant of the well-known sumo wrestling, where good teamwork with your sumo partner is required.\nA round of sumo wrestling not only challenges the participants’ fitness but also the spectators’ laugh muscles - so keep your camera ready!</p>";

				const frontmatter = {"title":"Sumo Wrestling (Outdoor)","description":"A hilarious activity where participants battle each other in single and double inflatable sumo suits.","image":"outdoor-sumoworstelen/outdoor-sumoworstelen-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/3c3bd7aa-e0f1-4bbf-a9b9-992b8b2afc01","priority":9,"categories":["actief","outdoor"],"duration":"30 minutes - 90 minutes depending on physical condition","groupSize":"8 - 50 people","availability":"All year round","features":["Safe and fun","Team building","Competitive"],"gallery":["outdoor-sumoworstelen/outdoor-sumoworstelen-2.jpg","outdoor-sumoworstelen/outdoor-sumoworstelen-3.jpg","outdoor-sumoworstelen/outdoor-sumoworstelen-4.jpg","outdoor-sumoworstelen/outdoor-sumoworstelen-5.jpg","outdoor-sumoworstelen/outdoor-sumoworstelen-6.jpg","outdoor-sumoworstelen/outdoor-sumoworstelen-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/outdoor-sumoworstelen.md";
				const url = undefined;
				function rawContent() {
					return "\nOutdoor sumo wrestling is pushing and pulling until your opponent falls. With 2 or 4 people, you enter the mat and begin with the famous Japanese sumo greeting. At the game master's starting signal, the competition begins, and participants must push each other off the mat for half a point or make them fall for a full point. At the end, the winner of the match gets to make a victory jump on the loser. Everyone can participate multiple times.\n\nA novelty is the sumo twin fighting, a very fun variant of the well-known sumo wrestling, where good teamwork with your sumo partner is required.\nA round of sumo wrestling not only challenges the participants' fitness but also the spectators' laugh muscles - so keep your camera ready!\n";
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
