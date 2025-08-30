import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Van opdrachten waarbij goed luisteren essentieel is tot taken waarbij teamleden elkaar moeten coachen.</p>\n<p>Deze teambuilding kan op maat worden samengesteld, rekening houdend met het beschikbare budget en de locatie.\nIndien gewenst kunnen we coaching-sessies aanbieden.</p>\n<p>Als extra toevoeging bieden we inzichtelijke evaluaties aan, waarbij uitleg wordt gegeven over wat wel of niet goed ging tijdens de opdrachten. Indien gewenst kunnen we zelfs coaching sessies aanbieden, waarin dieper wordt ingegaan op de teamdynamiek en hoe deze verder kan worden verbeterd.</p>";

				const frontmatter = {"title":"TeamBooster","description":"Waar activiteiten zijn ontworpen om het team te stimuleren en waar samenwerking de sleutel is tot succes.","image":"teambooster/teambooster-1.jpg","priority":18,"isGame":true,"features":["Communicatie","Creativiteit","Coaching in optie","Samenwerking"],"gallery":["teambooster/teambooster-2.jpg","teambooster/teambooster-3.jpg","teambooster/teambooster-4.jpg","teambooster/teambooster-5.jpg","teambooster/teambooster-6.jpg","teambooster/teambooster-7.jpg"],"categories":["outdoor"],"duration":"2 - 5 uur","groupSize":"8 - 1000 personen","availability":"Op aanvraag"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/teambooster.md";
				const url = undefined;
				function rawContent() {
					return "\nVan opdrachten waarbij goed luisteren essentieel is tot taken waarbij teamleden elkaar moeten coachen.\n\nDeze teambuilding kan op maat worden samengesteld, rekening houdend met het beschikbare budget en de locatie.\nIndien gewenst kunnen we coaching-sessies aanbieden.\n\nAls extra toevoeging bieden we inzichtelijke evaluaties aan, waarbij uitleg wordt gegeven over wat wel of niet goed ging tijdens de opdrachten. Indien gewenst kunnen we zelfs coaching sessies aanbieden, waarin dieper wordt ingegaan op de teamdynamiek en hoe deze verder kan worden verbeterd.\n";
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
