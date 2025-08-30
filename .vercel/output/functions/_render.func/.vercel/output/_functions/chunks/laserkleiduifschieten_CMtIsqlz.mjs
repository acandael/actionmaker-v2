import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Laser clay pigeon shooting offers a modern and safe variant of traditional clay pigeon shooting. This innovative activity combines the challenge of shooting with modern technology, making it perfect for team building events.</p>\n<p>The activity uses advanced laser guns that react to special clay pigeons, creating a realistic shooting experience without using real ammunition. This makes the activity not only safer, but also more suitable for different locations and weather conditions.</p>\n<p>Participants first receive detailed instruction on the technique and use of the guns. Then, different game formats follow where teams compete against each other in stimulating competitions. The combination of technique, concentration and teamwork makes this a unique and exciting team building experience.</p>";

				const frontmatter = {"title":"Laser Clay Pigeon Shooting (Outdoor)","description":"A modern and environmentally friendly variant of clay pigeon shooting.","image":"laserkleiduifschieten/laserkleiduifschieten-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/2f13904d-494d-4441-a9e4-471d1eeb3557","categories":["outdoor","innovaction"],"duration":"30 minutes - 2 hours","groupSize":"2 - 150 people","availability":"All year round","priority":3,"features":["Professional guidance","All materials included","Environmentally friendly","Competition element possible"],"gallery":["laserkleiduifschieten/laserkleiduifschieten-2.jpg","laserkleiduifschieten/laserkleiduifschieten-3.jpg","laserkleiduifschieten/laserkleiduifschieten-4.jpg","laserkleiduifschieten/laserkleiduifschieten-5.jpg","laserkleiduifschieten/laserkleiduifschieten-6.jpg","laserkleiduifschieten/laserkleiduifschieten-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/laserkleiduifschieten.md";
				const url = undefined;
				function rawContent() {
					return "\nLaser clay pigeon shooting offers a modern and safe variant of traditional clay pigeon shooting. This innovative activity combines the challenge of shooting with modern technology, making it perfect for team building events.\n\nThe activity uses advanced laser guns that react to special clay pigeons, creating a realistic shooting experience without using real ammunition. This makes the activity not only safer, but also more suitable for different locations and weather conditions.\n\nParticipants first receive detailed instruction on the technique and use of the guns. Then, different game formats follow where teams compete against each other in stimulating competitions. The combination of technique, concentration and teamwork makes this a unique and exciting team building experience.\n";
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
