import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Jusqu’au milieu du XXe siècle, presque chaque localité avait sa propre forge. Depuis lors, le métier est devenu beaucoup plus rare. La forge mécanique à l’échelle industrielle est encore largement utilisée aujourd’hui.</p>\n<p>De la forge des charrues, des épées et des armures aux bijoux en or et en argent, le métier de forgeron a joué un rôle crucial dans l’histoire mondiale.\nVoulez-vous essayer vous-même le marteau et l’enclume ? Forgez le logo ou le nom de votre entreprise avec vos collègues lors d’une séance de team building active (et chaude) ou créez un cadeau unique avec vos amis et votre famille pour un anniversaire ou un mariage.</p>\n<p>Sous la direction d’un forgeron expérimenté, vous apprendrez les ficelles du métier, puis vous recevrez un tablier, des gants et des lunettes de sécurité pour pouvoir commencer à travailler. Et bien sûr, à la fin, vous pourrez ramener vos créations chez vous.</p>";

				const frontmatter = {"title":"Atelier de Forge","description":"La forge est un métier très ancien qui a produit de nombreux objets dans le passé","image":"kunstsmeden/kunstsmeden-1.jpg","priority":2,"categories":["workshop","actief"],"duration":"2 - 3 heures","groupSize":"20 personnes maximum","availability":"Toute l'année","features":["Forgeron expérimenté","Une création unique à emporter","Lunettes de sécurité"],"gallery":["kunstsmeden/kunstsmeden-2.jpg","kunstsmeden/kunstsmeden-3.jpg","kunstsmeden/kunstsmeden-4.jpg","kunstsmeden/kunstsmeden-5.jpg","kunstsmeden/kunstsmeden-6.jpg","kunstsmeden/kunstsmeden-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/kunstsmeden.md";
				const url = undefined;
				function rawContent() {
					return "\nJusqu'au milieu du XXe siècle, presque chaque localité avait sa propre forge. Depuis lors, le métier est devenu beaucoup plus rare. La forge mécanique à l'échelle industrielle est encore largement utilisée aujourd'hui.\n\nDe la forge des charrues, des épées et des armures aux bijoux en or et en argent, le métier de forgeron a joué un rôle crucial dans l'histoire mondiale.\nVoulez-vous essayer vous-même le marteau et l'enclume ? Forgez le logo ou le nom de votre entreprise avec vos collègues lors d'une séance de team building active (et chaude) ou créez un cadeau unique avec vos amis et votre famille pour un anniversaire ou un mariage.\n\nSous la direction d'un forgeron expérimenté, vous apprendrez les ficelles du métier, puis vous recevrez un tablier, des gants et des lunettes de sécurité pour pouvoir commencer à travailler. Et bien sûr, à la fin, vous pourrez ramener vos créations chez vous.\n";
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
