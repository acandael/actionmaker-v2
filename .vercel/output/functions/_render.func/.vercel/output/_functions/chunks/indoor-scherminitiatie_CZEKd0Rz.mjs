import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Indoor Fencing initiation is a unique and exciting activity that’s perfect for team building. During this session, participants learn the basics of fencing, a sport that requires not only physical skill but also strategic thinking and quick decision-making.</p>\n<p>Under the guidance of our experienced instructors, participants learn the fundamental techniques of fencing, including basic stance, footwork, and various attack and defense movements. Safety is the top priority, and all participants are equipped with professional protective gear.</p>\n<p>The activity concludes with a small tournament where teams compete against each other in a sporting and friendly atmosphere. This not only provides an exciting finale to the workshop but also promotes team spirit and bonding between colleagues.</p>";

				const frontmatter = {"title":"Fencing Initiation (Indoor)","description":"Under the guidance of our experienced instructors, participants learn the basic techniques of fencing","image":"indoor-scherminitiatie/indoor-scherminitiatie-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/bec895e0-71a8-46ba-b83a-4ebbbbfe4518","categories":["indoor","actief"],"duration":"30 minutes - 2.5 hours","groupSize":"4 - 350 people","availability":"All year round","priority":1,"features":["Professional fencing instructors","All materials included","Safe and guided introduction","Possible mutual competitions"],"gallery":["indoor-scherminitiatie/indoor-scherminitiatie-2.jpg","indoor-scherminitiatie/indoor-scherminitiatie-3.jpg","indoor-scherminitiatie/indoor-scherminitiatie-4.jpg","indoor-scherminitiatie/indoor-scherminitiatie-5.jpg","indoor-scherminitiatie/indoor-scherminitiatie-6.jpg","indoor-scherminitiatie/indoor-scherminitiatie-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/indoor-scherminitiatie.md";
				const url = undefined;
				function rawContent() {
					return "\nIndoor Fencing initiation is a unique and exciting activity that's perfect for team building. During this session, participants learn the basics of fencing, a sport that requires not only physical skill but also strategic thinking and quick decision-making.\n\nUnder the guidance of our experienced instructors, participants learn the fundamental techniques of fencing, including basic stance, footwork, and various attack and defense movements. Safety is the top priority, and all participants are equipped with professional protective gear.\n\nThe activity concludes with a small tournament where teams compete against each other in a sporting and friendly atmosphere. This not only provides an exciting finale to the workshop but also promotes team spirit and bonding between colleagues.\n";
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
