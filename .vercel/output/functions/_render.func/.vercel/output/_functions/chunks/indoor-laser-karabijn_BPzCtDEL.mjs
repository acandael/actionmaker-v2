import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Using the lights and console that come with the rifle/pistol, you’ll know where you’ve hit. The console displays your shooting pattern, making it easy to adjust. This is a great experience for both adults and children alike. The infrared biathlon and sports pistol shooting is also completely safe and environmentally friendly, and can be conducted both indoors and outdoors.</p>\n<p>This activity is ideal for team building, as team members who aren’t currently shooting can “coach” their teammates using the console. After training, we search for the champion through a competition.</p>";

				const frontmatter = {"title":"Laser Rifle and Sport Pistol (Indoor)","description":"In the infrared biathlon, participants shoot at a biathlon target using converted biathlon rifles","image":"indoor-laser-karabijn/indoor-laser-karabijn-1.jpg","priority":5,"categories":["indoor"],"duration":"30 minutes - 2 hours","groupSize":"2 - 200","availability":"All year round","features":["Relaxation","Group dynamics","Coaching"],"gallery":["indoor-laser-karabijn/indoor-laser-karabijn-2.jpg","indoor-laser-karabijn/indoor-laser-karabijn-3.jpg","indoor-laser-karabijn/indoor-laser-karabijn-4.jpg","indoor-laser-karabijn/indoor-laser-karabijn-5.jpg","indoor-laser-karabijn/indoor-laser-karabijn-6.jpg","indoor-laser-karabijn/indoor-laser-karabijn-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/indoor-laser-karabijn.md";
				const url = undefined;
				function rawContent() {
					return "\nUsing the lights and console that come with the rifle/pistol, you'll know where you've hit. The console displays your shooting pattern, making it easy to adjust. This is a great experience for both adults and children alike. The infrared biathlon and sports pistol shooting is also completely safe and environmentally friendly, and can be conducted both indoors and outdoors.\n\nThis activity is ideal for team building, as team members who aren't currently shooting can \"coach\" their teammates using the console. After training, we search for the champion through a competition.\n";
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
