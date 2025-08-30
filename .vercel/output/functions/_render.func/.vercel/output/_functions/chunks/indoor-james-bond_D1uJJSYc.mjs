import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Welcome to our team building experience, where we’re searching for the ultimate team of colleagues to take on the role of the world’s most famous spy. Who will emerge as the best secret agent, who has the sharpest shooting eye, who possesses the best insight and deciphers Morse code like an expert? And of course, who’s the best at fencing, just like in “Die Another Day” (without Madonna as a coach, of course). All these skills lead us to creating the ultimate spy team.</p>\n<p>As optional additions, we can also organize a cocktail workshop (think of the classic “martini shaken, not stirred”), an exciting death ride, a drone workshop, and a casino activity to complete the spy atmosphere. This team building experience not only promises excitement and fun but also the discovery and utilization of unique talents within the team, essential for a successful mission.</p>";

				const frontmatter = {"title":"Spy Academy/James Bond (Indoor)","description":"We're looking for the ultimate team of colleagues to take on the role of the world's most famous spy.","image":"indoor-james-bond/indoor-james-bond-1.jpg","priority":20,"isGame":true,"features":["Fencing","Morse code","Shooting..."],"gallery":["indoor-james-bond/indoor-james-bond-2.jpg","indoor-james-bond/indoor-james-bond-3.jpg","indoor-james-bond/indoor-james-bond-4.jpg","indoor-james-bond/indoor-james-bond-5.jpg","indoor-james-bond/indoor-james-bond-6.jpg","indoor-james-bond/indoor-james-bond-7.jpg"],"categories":["indoor","innovaction"],"duration":"2 - 5 hours","groupSize":"8 - 1000 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/indoor-james-bond.md";
				const url = undefined;
				function rawContent() {
					return "\nWelcome to our team building experience, where we're searching for the ultimate team of colleagues to take on the role of the world's most famous spy. Who will emerge as the best secret agent, who has the sharpest shooting eye, who possesses the best insight and deciphers Morse code like an expert? And of course, who's the best at fencing, just like in \"Die Another Day\" (without Madonna as a coach, of course). All these skills lead us to creating the ultimate spy team.\n\nAs optional additions, we can also organize a cocktail workshop (think of the classic \"martini shaken, not stirred\"), an exciting death ride, a drone workshop, and a casino activity to complete the spy atmosphere. This team building experience not only promises excitement and fun but also the discovery and utilization of unique talents within the team, essential for a successful mission.\n";
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
