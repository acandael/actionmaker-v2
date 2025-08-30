import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Deze teambuilding is ideaal om de teamgeest te versterken. Als één team muziek maken creëert een unieke ervaring en zorgt voor een positief groepsgevoel. Het laat collega’s inzetten op samenspel en biedt hun een andere manier om met elkaar in communicatie te treden. De groepsdynamiek wordt hierdoor positief beïnvloed. Voorkennis is niet vereist. Dit kan gecombineerd worden met bijvoorbeeld ecopercussie</p>";

				const frontmatter = {"title":"Djembe Workshop (Indoor)","description":"Als één team muziek maken creëert een unieke ervaring en zorgt voor een positief groepsgevoel.","image":"indoor-djembe/indoor-djembe-1.jpg","priority":7,"categories":["workshop"],"duration":"30 minuten - 2 uur","groupSize":"Maximaal 250 personen","availability":"Het hele jaar door","features":["unieke ervaring","positief groepsgevoel","samenspel","communicatie"],"gallery":["indoor-djembe/indoor-djembe-2.jpg","indoor-djembe/indoor-djembe-3.jpg","indoor-djembe/indoor-djembe-4.jpg","indoor-djembe/indoor-djembe-5.jpg","indoor-djembe/indoor-djembe-6.jpg","indoor-djembe/indoor-djembe-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/indoor-djembe.md";
				const url = undefined;
				function rawContent() {
					return "\nDeze teambuilding is ideaal om de teamgeest te versterken. Als één team muziek maken creëert een unieke ervaring en zorgt voor een positief groepsgevoel. Het laat collega’s inzetten op samenspel en biedt hun een andere manier om met elkaar in communicatie te treden. De groepsdynamiek wordt hierdoor positief beïnvloed. Voorkennis is niet vereist. Dit kan gecombineerd worden met bijvoorbeeld ecopercussie\n";
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
