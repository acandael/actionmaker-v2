import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Arrow Tag (Outdoor) is de perfecte combinatie van actie, strategie en samenwerking, en een geweldige vervanging voor paintball! Schiet met zachte moussepijlen en ontdek hoe leuk en spannend deze variatie op boogschieten is. Waan jezelf in de wereld van de Hunger Games en ga de uitdaging aan!</p>";

				const frontmatter = {"title":"Arrow Tag (Outdoor)","description":"Beleef de spanning van de Hunger Games!","image":"outdoor-arrow-tag/outdoor-arrow-tag-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/10a28ab1-6d11-4018-96a5-287dc7650b16","priority":7,"features":["Actief en veilig","Teamwork en plezier","Avontuurlijk"],"gallery":["outdoor-arrow-tag/outdoor-arrow-tag-1.jpg","outdoor-arrow-tag/outdoor-arrow-tag-2.jpg","outdoor-arrow-tag/outdoor-arrow-tag-3.jpg","outdoor-arrow-tag/outdoor-arrow-tag-4.jpg","outdoor-arrow-tag/outdoor-arrow-tag-5.jpg","outdoor-arrow-tag/outdoor-arrow-tag-6.jpg"],"categories":["outdoor","actief"],"duration":"30 minuten - 2 uur","groupSize":"4-100 people","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/outdoor-arrow-tag.md";
				const url = undefined;
				function rawContent() {
					return "\nArrow Tag (Outdoor) is de perfecte combinatie van actie, strategie en samenwerking, en een geweldige vervanging voor paintball! Schiet met zachte moussepijlen en ontdek hoe leuk en spannend deze variatie op boogschieten is. Waan jezelf in de wereld van de Hunger Games en ga de uitdaging aan!\n";
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
