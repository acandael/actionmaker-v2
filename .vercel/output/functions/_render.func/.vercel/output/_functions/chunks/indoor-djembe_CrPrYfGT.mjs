import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>L’atelier djembé est une expérience musicale unique qui rassemble les participants autour des rythmes africains. Sous la direction d’un percussionniste professionnel, les équipes apprennent les techniques de base du djembé et créent ensemble une performance musicale impressionnante.</p>\n<p>L’activité commence par une introduction aux différentes techniques de percussion et à l’histoire du djembé. Les participants apprennent progressivement différents rythmes, en commençant par des motifs simples pour évoluer vers des compositions plus complexes.</p>\n<p>Au fil de l’atelier, les équipes travaillent sur leur coordination et leur écoute mutuelle, créant une véritable symphonie collective. Cette activité renforce non seulement l’esprit d’équipe mais permet également de découvrir une nouvelle forme d’expression culturelle.</p>";

				const frontmatter = {"title":"Atelier de Djembé (Indoor)","description":"Faire de la musique en équipe crée une expérience unique et génère un sentiment de groupe positif.","image":"indoor-djembe/indoor-djembe-1.jpg","priority":7,"categories":["workshop"],"duration":"30 minutes - 2 heures","groupSize":"Maximum 250 personnes","availability":"Sur demande","features":["esprit","musique","culture"],"gallery":["indoor-djembe/indoor-djembe-2.jpg","indoor-djembe/indoor-djembe-3.jpg","indoor-djembe/indoor-djembe-4.jpg","indoor-djembe/indoor-djembe-5.jpg","indoor-djembe/indoor-djembe-6.jpg","indoor-djembe/indoor-djembe-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/indoor-djembe.md";
				const url = undefined;
				function rawContent() {
					return "\nL'atelier djembé est une expérience musicale unique qui rassemble les participants autour des rythmes africains. Sous la direction d'un percussionniste professionnel, les équipes apprennent les techniques de base du djembé et créent ensemble une performance musicale impressionnante.\n\nL'activité commence par une introduction aux différentes techniques de percussion et à l'histoire du djembé. Les participants apprennent progressivement différents rythmes, en commençant par des motifs simples pour évoluer vers des compositions plus complexes.\n\nAu fil de l'atelier, les équipes travaillent sur leur coordination et leur écoute mutuelle, créant une véritable symphonie collective. Cette activité renforce non seulement l'esprit d'équipe mais permet également de découvrir une nouvelle forme d'expression culturelle.\n";
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
