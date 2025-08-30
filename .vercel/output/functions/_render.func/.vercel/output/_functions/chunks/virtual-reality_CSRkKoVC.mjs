import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>VR-Challenges: Collaborate, Discover and Triumph!</p>\n<p>Step into a world full of suspense and adventure with our unique VR experiences. Collaboration, trust and precision are the keys to success. With various challenging missions and fun games, there’s something for everyone!\nBomb Defusal: Work Together and Defuse the Bomb</p>\n<p>In this nerve-wracking mission, it’s all about teamwork:\nWork together under time pressure and defuse even the trickiest bombs. One wrong move, and all is lost. Can you keep your cool and succeed as a team?</p>\n<h3 id=\"additional-vr-adventures\">Additional VR Adventures</h3>\n<p>Besides bomb defusal, we offer more exciting VR challenges like:</p>\n<p>Beat Saber: Show your sense of rhythm and hit the beats while dodging obstacles in this musical game.</p>\n<p>The Plank Experience: Do you dare? Walk the plank at dizzying heights and prove your courage. A perfect exercise in trust!</p>\n<p>ISS Explorer: Float inside and outside the International Space Station and discover the beauty of space. A unique zero-gravity experience.</p>\n<h3 id=\"why-this-activity\">Why this activity?</h3>\n<p>This VR experience is perfect for team building or an exciting activity with friends. Collaboration, trust and fun are central while you experience unforgettable adventures.</p>";

				const frontmatter = {"title":"Virtual Reality","description":"Step into a world full of suspense and adventure with our unique VR experiences","image":"virtual-reality/virtual-reality-1.jpg","priority":4,"categories":["indoor","innovaction"],"duration":"30 - 120 minutes","groupSize":"6 - 100 people","availability":"All year round","features":["teamwork","communication","strategy"],"gallery":["virtual-reality/virtual-reality-2.jpg","virtual-reality/virtual-reality-3.jpg","virtual-reality/virtual-reality-4.jpg","virtual-reality/virtual-reality-5.jpg","virtual-reality/virtual-reality-6.jpg","virtual-reality/virtual-reality-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/virtual-reality.md";
				const url = undefined;
				function rawContent() {
					return "\nVR-Challenges: Collaborate, Discover and Triumph!\n\nStep into a world full of suspense and adventure with our unique VR experiences. Collaboration, trust and precision are the keys to success. With various challenging missions and fun games, there's something for everyone!\nBomb Defusal: Work Together and Defuse the Bomb\n\nIn this nerve-wracking mission, it's all about teamwork:\nWork together under time pressure and defuse even the trickiest bombs. One wrong move, and all is lost. Can you keep your cool and succeed as a team?\n\n### Additional VR Adventures\n\nBesides bomb defusal, we offer more exciting VR challenges like:\n\nBeat Saber: Show your sense of rhythm and hit the beats while dodging obstacles in this musical game.\n\nThe Plank Experience: Do you dare? Walk the plank at dizzying heights and prove your courage. A perfect exercise in trust!\n\nISS Explorer: Float inside and outside the International Space Station and discover the beauty of space. A unique zero-gravity experience.\n\n### Why this activity?\n\nThis VR experience is perfect for team building or an exciting activity with friends. Collaboration, trust and fun are central while you experience unforgettable adventures.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"additional-vr-adventures","text":"Additional VR Adventures"},{"depth":3,"slug":"why-this-activity","text":"Why this activity?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
