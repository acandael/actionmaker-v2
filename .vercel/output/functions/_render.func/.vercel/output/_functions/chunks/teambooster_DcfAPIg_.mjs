import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Des missions où l’écoute attentive est essentielle aux tâches où les membres de l’équipe doivent se coacher mutuellement.</p>\n<p>Ce team building peut être personnalisé en tenant compte du budget disponible et du lieu.\nSi vous le souhaitez, nous pouvons proposer des séances de coaching.</p>\n<p>En complément, nous proposons des évaluations perspicaces, avec des explications sur ce qui a bien ou mal fonctionné pendant les exercices. Si désiré, nous pouvons même offrir des séances de coaching approfondies, explorant davantage la dynamique d’équipe et comment l’améliorer.</p>";

				const frontmatter = {"title":"TeamBooster","description":"Des activités conçues pour stimuler l'équipe où la collaboration est la clé du succès.","image":"teambooster/teambooster-1.jpg","priority":18,"isGame":true,"features":["Communication","Créativité","Coaching en option","Collaboration"],"gallery":["teambooster/teambooster-2.jpg","teambooster/teambooster-3.jpg","teambooster/teambooster-4.jpg","teambooster/teambooster-5.jpg","teambooster/teambooster-6.jpg","teambooster/teambooster-7.jpg"],"categories":["outdoor"],"duration":"2 - 5 heures","groupSize":"8 - 1000 personnes","availability":"Tout l'année"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/teambooster.md";
				const url = undefined;
				function rawContent() {
					return "\nDes missions où l'écoute attentive est essentielle aux tâches où les membres de l'équipe doivent se coacher mutuellement.\n\nCe team building peut être personnalisé en tenant compte du budget disponible et du lieu.\nSi vous le souhaitez, nous pouvons proposer des séances de coaching.\n\nEn complément, nous proposons des évaluations perspicaces, avec des explications sur ce qui a bien ou mal fonctionné pendant les exercices. Si désiré, nous pouvons même offrir des séances de coaching approfondies, explorant davantage la dynamique d'équipe et comment l'améliorer.\n";
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
