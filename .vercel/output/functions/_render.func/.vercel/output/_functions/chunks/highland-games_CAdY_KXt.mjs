import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>As a participant, you’ll be immediately immersed in the Scottish Highlands through themed clothing and appropriate music!</p>\n<p>During your own Highland Games, everything revolves around effective collaboration. You’ll face various challenges and trials, for which you’ll always receive the necessary explanation and thinking time. The trials bring you completely into the Scottish atmosphere, with hay bale tossing, axe throwing, tug of war, and horseshoe throwing being just a few examples of the unique tests of strength and skill.</p>";

				const frontmatter = {"title":"The Highland Games","description":"An authentic combination of traditional challenges infused with Scottish character.","image":"highland-games/highland-games-1.jpg","priority":15,"isGame":true,"features":["Scottish atmosphere","challenging and sporting activities","teamwork"],"gallery":["highland-games/highland-games-2.jpg","highland-games/highland-games-3.jpg","highland-games/highland-games-4.jpg","highland-games/highland-games-5.jpg","highland-games/highland-games-6.jpg","highland-games/highland-games-7.jpg"],"categories":["outdoor","actief"],"duration":"2 - 5 hours","groupSize":"8 - 1000 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/highland-games.md";
				const url = undefined;
				function rawContent() {
					return "\nAs a participant, you'll be immediately immersed in the Scottish Highlands through themed clothing and appropriate music!\n\nDuring your own Highland Games, everything revolves around effective collaboration. You'll face various challenges and trials, for which you'll always receive the necessary explanation and thinking time. The trials bring you completely into the Scottish atmosphere, with hay bale tossing, axe throwing, tug of war, and horseshoe throwing being just a few examples of the unique tests of strength and skill.\n";
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
