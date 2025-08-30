import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Grâce à leur caractère unique, les alpagas sont parfaitement adaptés pour explorer ensemble les différentes façons d’aborder une situation au sein d’une équipe.\nÀ travers de petits exercices, vous en apprendrez davantage sur la confiance, la communication et le leadership dans votre équipe. Vous choisissez le thème que vous souhaitez aborder au sein de votre équipe : la communication, la collaboration et la gestion des conflits, ou simplement le plaisir. Ces animaux sensibles donnent un retour direct sur l’humain et son comportement. Ils ressentent si quelque chose est juste ; votre réaction réelle par rapport à votre sentiment réel.</p>\n<p>Votre alpaga reste-t-il immobile, tire-t-il dans l’autre sens, refuse-t-il de vous suivre ? Ce sont tous des signes que quelque chose ne va pas dans votre communication avec eux. Nous vous donnons des conseils et discutons comment vous pouvez progresser avec votre alpaga. Ce n’est pas une simple ‘promenade’, c’est un véritable exercice d’agilité avec votre animal.</p>";

				const frontmatter = {"title":"Atelier Alpaca","description":"Ces animaux sensibles donnent une rétroaction directe sur l’homme et comment il se comporte","image":"alpacaworkshop/alpacaworkshop-1.jpg","priority":10,"features":["communication","esprit équipe","stratégie"],"gallery":["alpacaworkshop/alpacaworkshop-2.jpg","alpacaworkshop/alpacaworkshop-3.jpg","alpacaworkshop/alpacaworkshop-4.jpg","alpacaworkshop/alpacaworkshop-5.jpg","alpacaworkshop/alpacaworkshop-6.jpg","alpacaworkshop/alpacaworkshop-7.jpg"],"categories":["workshop"],"duration":"2-3 heures","groupSize":"1-15 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/alpacaworkshop.md";
				const url = undefined;
				function rawContent() {
					return "\nGrâce à leur caractère unique, les alpagas sont parfaitement adaptés pour explorer ensemble les différentes façons d'aborder une situation au sein d'une équipe.\nÀ travers de petits exercices, vous en apprendrez davantage sur la confiance, la communication et le leadership dans votre équipe. Vous choisissez le thème que vous souhaitez aborder au sein de votre équipe : la communication, la collaboration et la gestion des conflits, ou simplement le plaisir. Ces animaux sensibles donnent un retour direct sur l'humain et son comportement. Ils ressentent si quelque chose est juste ; votre réaction réelle par rapport à votre sentiment réel.\n\nVotre alpaga reste-t-il immobile, tire-t-il dans l'autre sens, refuse-t-il de vous suivre ? Ce sont tous des signes que quelque chose ne va pas dans votre communication avec eux. Nous vous donnons des conseils et discutons comment vous pouvez progresser avec votre alpaga. Ce n'est pas une simple 'promenade', c'est un véritable exercice d'agilité avec votre animal.\n";
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
