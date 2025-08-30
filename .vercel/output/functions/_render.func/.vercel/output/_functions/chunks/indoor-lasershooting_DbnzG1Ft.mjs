import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Would you like to show off your shooting skills in a spectacular but completely safe setting? Indoor laser clay pigeon shooting offers excitement and fun for everyone, even those who are less adventurous. Perfect for indoor use or when the distance is too short for regular laser clay pigeon shooting.</p>\n<h2 id=\"how-does-it-work\">How does it work?</h2>\n<p>Shoot with original Winchester rifles at 5 set up targets.\nUp to five participants shoot simultaneously. The challenge? Who hits the target first?\nAll of this happens with a special infrared system, making it completely safe and causing no damage to the location.</p>\n<h2 id=\"what-makes-it-so-fun\">What makes it so fun</h2>\n<p>Completely safe: Because infrared is used for shooting, there is no danger. Moreover, the rifles have no recoil.</p>\n<p>Environmentally friendly: No waste and no damage</p>\n<p>Suitable for everyone: Even if you’ve never shot before, this is a great activity\nfor young and old.</p>";

				const frontmatter = {"title":"Laser Clay Pigeon Shooting (Indoor)","description":"Exciting, Safe and Environmentally Friendly!","image":"indoor-lasershooting/indoorlasershooting-1.jpg","features":["exciting team activity","communication","teamwork"],"gallery":["indoor-lasershooting/indoorlasershooting-2.jpg","indoor-lasershooting/indoorlasershooting-3.jpg","indoor-lasershooting/indoorlasershooting-4.jpg","indoor-lasershooting/indoorlasershooting-5.jpg","indoor-lasershooting/indoorlasershooting-6.jpg","indoor-lasershooting/indoorlasershooting-7.jpg"],"categories":["indoor","innovaction"],"duration":"30 minutes - 2 hours","groupSize":"8-30 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/indoor-lasershooting.md";
				const url = undefined;
				function rawContent() {
					return "\nWould you like to show off your shooting skills in a spectacular but completely safe setting? Indoor laser clay pigeon shooting offers excitement and fun for everyone, even those who are less adventurous. Perfect for indoor use or when the distance is too short for regular laser clay pigeon shooting.\n\n## How does it work?\n\nShoot with original Winchester rifles at 5 set up targets.\nUp to five participants shoot simultaneously. The challenge? Who hits the target first?\nAll of this happens with a special infrared system, making it completely safe and causing no damage to the location.\n\n## What makes it so fun\n\nCompletely safe: Because infrared is used for shooting, there is no danger. Moreover, the rifles have no recoil.\n\nEnvironmentally friendly: No waste and no damage\n\nSuitable for everyone: Even if you've never shot before, this is a great activity\nfor young and old.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"how-does-it-work","text":"How does it work?"},{"depth":2,"slug":"what-makes-it-so-fun","text":"What makes it so fun"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
