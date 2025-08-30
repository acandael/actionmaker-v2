import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Différentes équipes s’affrontent pour remporter la victoire.</p>\n<p>Mais soyez avertis, car dans chaque équipe se cache un saboteur. Certaines personnes jouent un double jeu : elles tentent de saboter discrètement les épreuves (par exemple, la course à la taupe, le quiz chronométré, le fromage troué, …).</p>\n<p>Essayez d’avoir toujours un coup d’avance sur la taupe en forgeant des alliances astucieuses et finalement en la démasquant.\nBref, laissez-vous entraîner dans un jeu brillant où la confiance et la trahison n’ont jamais été aussi proches, car vous ne savez jamais à qui vous pouvez faire confiance à 100%.</p>\n<p>Les équipes sont constituées sur base d’un questionnaire en ligne que vous aurez rempli une semaine à l’avance. La veille du team building, la taupe reçoit un SMS avec ses instructions.</p>";

				const frontmatter = {"title":"La Chasse à la Taupe (Indoor)","description":"Ce team building est basé sur la populaire émission de télévision La Taupe","image":"indoor-mollenjacht/indoor-mollenjacht-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/94de6955-8473-4cc6-9dd7-90bc509b858a","priority":11,"isGame":true,"features":["La Course à la Taupe","Quiz Chronométré","Drapeaux de signalisation ou morse","Fromage troué","Pots de lait/tours"],"gallery":["indoor-mollenjacht/indoor-mollenjacht-2.jpg","indoor-mollenjacht/indoor-mollenjacht-3.jpg","indoor-mollenjacht/indoor-mollenjacht-4.jpg","indoor-mollenjacht/indoor-mollenjacht-5.jpg","indoor-mollenjacht/indoor-mollenjacht-6.jpg","indoor-mollenjacht/indoor-mollenjacht-7.jpg"],"categories":["indoor"],"duration":"2 - 5 heures","groupSize":"8 - 1000 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/indoor-mollenjacht.md";
				const url = undefined;
				function rawContent() {
					return "\nDifférentes équipes s'affrontent pour remporter la victoire.\n\nMais soyez avertis, car dans chaque équipe se cache un saboteur. Certaines personnes jouent un double jeu : elles tentent de saboter discrètement les épreuves (par exemple, la course à la taupe, le quiz chronométré, le fromage troué, ...).\n\nEssayez d'avoir toujours un coup d'avance sur la taupe en forgeant des alliances astucieuses et finalement en la démasquant.\nBref, laissez-vous entraîner dans un jeu brillant où la confiance et la trahison n'ont jamais été aussi proches, car vous ne savez jamais à qui vous pouvez faire confiance à 100%.\n\nLes équipes sont constituées sur base d'un questionnaire en ligne que vous aurez rempli une semaine à l'avance. La veille du team building, la taupe reçoit un SMS avec ses instructions.\n";
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
