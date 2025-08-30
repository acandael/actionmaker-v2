import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Get ready for a team building experience that takes you to the future of innovation. This unique experience includes a range of new and groundbreaking activities, specially designed for dynamic team building.</p>\n<p>Discover the impact of Virtual Reality (VR) on the brain: work together to defuse a bomb, jump from an 80-story building, swing a lightsaber, and more.\nShoot with innovative laser clay pigeon rifles, environmentally friendly and accessible to everyone.\nExperience lightsaber fencing, inspired by Star Wars, the latest sensation in official fencing disciplines.</p>\n<p>Learn to fly drones: we provide very user-friendly drones, while the team quickly completes a course and takes photos or fly along with the drone via FPV goggles. A trust test follows at the end.</p>\n<p>Test your shooting skills with laser biathlon rifles and Finnish sport pistols. Coached by team members using a console, discover who shoots best.</p>\n<p>Defuse a physical bomb or save a nuclear power plant with our innovative escape boxes.\nShoot with the newest and most environmentally friendly form of paintball: GelBlaster</p>";

				const frontmatter = {"title":"Innovation Games (Indoor)","description":"Take on challenging activities and discover the power of innovation in team building","image":"innovation-games/innovation-games-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369390/f61177ac-ff87-4c59-9e12-2bfbbfc578e6","priority":16,"isGame":true,"features":["Lightsaber fencing","Drone flying","Shooting with infrared biathlon rifles","Escape boxes","GelBlaster"],"gallery":["innovation-games/innovation-games-2.jpg","innovation-games/innovation-games-3.jpg","innovation-games/innovation-games-4.jpg","innovation-games/innovation-games-5.jpg","innovation-games/innovation-games-6.jpg","innovation-games/innovation-games-7.jpg"],"categories":["indoor","innovaction"],"duration":"2 - 5 hours","groupSize":"4 - 1000 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/innovation-games.md";
				const url = undefined;
				function rawContent() {
					return "\nGet ready for a team building experience that takes you to the future of innovation. This unique experience includes a range of new and groundbreaking activities, specially designed for dynamic team building.\n\nDiscover the impact of Virtual Reality (VR) on the brain: work together to defuse a bomb, jump from an 80-story building, swing a lightsaber, and more.\nShoot with innovative laser clay pigeon rifles, environmentally friendly and accessible to everyone.\nExperience lightsaber fencing, inspired by Star Wars, the latest sensation in official fencing disciplines.\n\nLearn to fly drones: we provide very user-friendly drones, while the team quickly completes a course and takes photos or fly along with the drone via FPV goggles. A trust test follows at the end.\n\nTest your shooting skills with laser biathlon rifles and Finnish sport pistols. Coached by team members using a console, discover who shoots best.\n\nDefuse a physical bomb or save a nuclear power plant with our innovative escape boxes.\nShoot with the newest and most environmentally friendly form of paintball: GelBlaster\n";
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
