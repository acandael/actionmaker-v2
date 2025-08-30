import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Relive the coziness of the past with a series of classic folk games. This nostalgic activity is perfect if you’re looking for a relaxed, accessible and entertaining addition to your event. Whether it’s for open access, a party or team building, folk games bring everyone together.</p>";

				const frontmatter = {"title":"Traditional Folk Games (Outdoor)","description":"Nostalgia and Fun for Everyone!","image":"outdoor-volksspelen/outdoor-volksspelen-1.jpg","priority":12,"features":["Horseshoe Throwing","Dutch Shuffleboard","Coin Tossing","Darts","Electric Spiral"],"gallery":["outdoor-volksspelen/outdoor-volksspelen-2.jpg","outdoor-volksspelen/outdoor-volksspelen-3.jpg","outdoor-volksspelen/outdoor-volksspelen-4.jpg","outdoor-volksspelen/outdoor-volksspelen-5.jpg","outdoor-volksspelen/outdoor-volksspelen-6.jpg","outdoor-volksspelen/outdoor-volksspelen-7.jpg"],"categories":["outdoor"],"duration":"30 minuten-3 uur","groupSize":"8 - 500 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/outdoor-volksspelen.md";
				const url = undefined;
				function rawContent() {
					return "\nRelive the coziness of the past with a series of classic folk games. This nostalgic activity is perfect if you're looking for a relaxed, accessible and entertaining addition to your event. Whether it's for open access, a party or team building, folk games bring everyone together.\n";
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
