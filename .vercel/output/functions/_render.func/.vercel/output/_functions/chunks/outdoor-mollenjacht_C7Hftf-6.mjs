import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Different teams compete against each other to claim victory.</p>\n<p>But be warned, because in each team there is a hidden saboteur. Some people are playing a double game: they try to discreetly sabotage the challenges (for example, the mole run, the timed quiz, the Swiss cheese, …).</p>\n<p>Try to always stay one step ahead of the mole by forging clever alliances and ultimately unmasking them.\nIn short, let yourself be drawn into a brilliant game where trust and betrayal have never been so close, because you never know who you can trust 100%.</p>\n<p>The teams are formed based on an online questionnaire that you will have filled out a week in advance. The evening before the team building, the mole receives an SMS with instructions.</p>";

				const frontmatter = {"title":"The Mole Hunt (Outdoor)","description":"This team building is based on the popular TV show The Mole","image":"outdoor-mollenjacht/outdoor-mollenjacht-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/94de6955-8473-4cc6-9dd7-90bc509b858a","priority":14,"isGame":true,"features":["The Mole Run","Time Quiz","Signal flags or Morse","Swiss cheese","Milk cans/towers"],"gallery":["outdoor-mollenjacht/outdoor-mollenjacht-2.jpg","outdoor-mollenjacht/outdoor-mollenjacht-3.jpg","outdoor-mollenjacht/outdoor-mollenjacht-4.jpg","outdoor-mollenjacht/outdoor-mollenjacht-5.jpg","outdoor-mollenjacht/outdoor-mollenjacht-6.jpg","outdoor-mollenjacht/outdoor-mollenjacht-7.jpg"],"categories":["outdoor"],"duration":"2 - 5 hours","groupSize":"8 - 1000 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/outdoor-mollenjacht.md";
				const url = undefined;
				function rawContent() {
					return "\nDifferent teams compete against each other to claim victory.\n\nBut be warned, because in each team there is a hidden saboteur. Some people are playing a double game: they try to discreetly sabotage the challenges (for example, the mole run, the timed quiz, the Swiss cheese, ...).\n\nTry to always stay one step ahead of the mole by forging clever alliances and ultimately unmasking them.\nIn short, let yourself be drawn into a brilliant game where trust and betrayal have never been so close, because you never know who you can trust 100%.\n\nThe teams are formed based on an online questionnaire that you will have filled out a week in advance. The evening before the team building, the mole receives an SMS with instructions.\n";
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
