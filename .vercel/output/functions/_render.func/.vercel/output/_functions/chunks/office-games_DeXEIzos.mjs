import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>This team building activity highlights the diversity of your team’s skills and brings a healthy dose of competition and fun to the workplace. Which team will build the best paper airplane, who will succeed best at writing together the most recognizable words (1 pencil controlled by 10 strings), and who will prove to be the fastest in the office chair race?</p>\n<p>Physical strength, communication skills, creativity and teamwork are all put to the test. We have developed a varied program with stimulating activities that call upon different aspects of your talents.</p>";

				const frontmatter = {"title":"The Office Games","description":"Discover the hidden talents within your office","image":"office-games/office-games-1.jpg","priority":18,"isGame":true,"features":["Creative challenges","Physical and communication skills","Test your speed and collaboration during the office chair race","Stress management"],"gallery":["office-games/office-games-1.jpg","office-games/office-games-2.jpg","office-games/office-games-3.jpg","office-games/office-games-4.jpg","office-games/office-games-5.jpg","office-games/office-games-6.jpg"],"categories":["indoor"],"duration":"2 - 5 heures","groupSize":"8 - 1000 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/office-games.md";
				const url = undefined;
				function rawContent() {
					return "\nThis team building activity highlights the diversity of your team's skills and brings a healthy dose of competition and fun to the workplace. Which team will build the best paper airplane, who will succeed best at writing together the most recognizable words (1 pencil controlled by 10 strings), and who will prove to be the fastest in the office chair race?\n\nPhysical strength, communication skills, creativity and teamwork are all put to the test. We have developed a varied program with stimulating activities that call upon different aspects of your talents.\n";
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
