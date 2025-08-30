import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Les drones deviennent de plus en plus importants dans notre monde moderne. Ils sont utilisés pour diverses applications, comme l’arpentage des terrains, l’inspection des panneaux solaires, le contrôle des foules et même des tentatives de livraison de colis. Mais avez-vous déjà voulu piloter un drone vous-même ?</p>\n<p>Nous travaillons avec des drones professionnels qui sont également utilisés dans diverses applications professionnelles.</p>\n<p>Avec cette activité, découvrez le monde passionnant des drones, guidé par un pilote de drone certifié!</p>";

				const frontmatter = {"title":"Pilotage de Drone","description":"Apprenez, Expérimentez et Découvrez !","image":"dronevliegen/dronevliegen-1.jpg","video-url":"https://iframe.mediadelivery.net/embed/369439/d1ad05d2-54ab-4b52-8e64-2943ff452f8b","priority":3,"features":["Apprenez les bases","Entraînez-vous","Défi d'équipe"],"gallery":["dronevliegen/dronevliegen-2.jpg","dronevliegen/dronevliegen-3.jpg","dronevliegen/dronevliegen-4.jpg","dronevliegen/dronevliegen-5.jpg","dronevliegen/dronevliegen-6.jpg","dronevliegen/dronevliegen-7.jpg"],"categories":["indoor","innovaction"],"duration":"1 - 2.5 heures","groupSize":"8 - 250 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/dronevliegen.md";
				const url = undefined;
				function rawContent() {
					return "\nLes drones deviennent de plus en plus importants dans notre monde moderne. Ils sont utilisés pour diverses applications, comme l'arpentage des terrains, l'inspection des panneaux solaires, le contrôle des foules et même des tentatives de livraison de colis. Mais avez-vous déjà voulu piloter un drone vous-même ?\n\nNous travaillons avec des drones professionnels qui sont également utilisés dans diverses applications professionnelles.\n\nAvec cette activité, découvrez le monde passionnant des drones, guidé par un pilote de drone certifié!\n";
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
