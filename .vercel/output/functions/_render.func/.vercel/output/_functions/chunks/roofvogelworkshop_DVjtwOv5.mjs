import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Vivez l’émotion de vous retrouver face à face avec les maîtres des airs. Après la démonstration, nous vous préparons à faire voler vous-même différents rapaces et nous vous apprenons le leurrage et le nœud ancestral de fauconnerie. Pour clôturer l’événement, nous vous présentons nos oiseaux et nos tours les plus impressionnants.</p>";

				const frontmatter = {"title":"Atelier Rapaces","description":"Vivez l'émotion de vous retrouver face à face avec les maîtres des airs.","image":"roofvogelworkshop/roofvogelworkshop-1.jpg","priority":6,"categories":["workshop"],"duration":"45 minutes - 3 hours","groupSize":"Maximum 200 personnes","availability":"Tout l'année","features":["esprit équipe","nature","éducatif"],"gallery":["roofvogelworkshop/roofvogelworkshop-2.jpg","roofvogelworkshop/roofvogelworkshop-3.jpg","roofvogelworkshop/roofvogelworkshop-4.jpg","roofvogelworkshop/roofvogelworkshop-5.jpg","roofvogelworkshop/roofvogelworkshop-6.jpg","roofvogelworkshop/roofvogelworkshop-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/roofvogelworkshop.md";
				const url = undefined;
				function rawContent() {
					return "\nVivez l'émotion de vous retrouver face à face avec les maîtres des airs. Après la démonstration, nous vous préparons à faire voler vous-même différents rapaces et nous vous apprenons le leurrage et le nœud ancestral de fauconnerie. Pour clôturer l'événement, nous vous présentons nos oiseaux et nos tours les plus impressionnants.\n";
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
