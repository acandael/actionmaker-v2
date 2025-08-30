import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Plongez dans l’ambiance du football avec une série d’activités uniques (ex : bowling football, fléchettes football, mini babyfoot, quiz football, …) spécialement conçues pour l’événement footballistique de l’année.</p>\n<p>Que vous soyez un fervent supporter de football ou simplement à la recherche de plaisir et de compétition, ces activités promettent une expérience inoubliable remplie d’enthousiasme footballistique. Participez, marquez des buts et profitez de l’excitation du Championnat d’Europe de football d’une manière totalement nouvelle!</p>";

				const frontmatter = {"title":"Folie du Football (Indoor)","description":"Vivez le football d'une manière totalement nouvelle avec notre activité spécialement développée","image":"indoor-voetbalmanie/indoor-voetbalmanie-1.jpg","priority":21,"isGame":true,"features":["Bowling football","Tir de précision","Fléchettes football","Quiz football","Mini Babyfoot","Le Secret du Moine"],"gallery":["indoor-voetbalmanie/indoor-voetbalmanie-2.jpg","indoor-voetbalmanie/indoor-voetbalmanie-3.jpg","indoor-voetbalmanie/indoor-voetbalmanie-4.jpg"],"categories":["indoor"],"duration":"2-3 heures","groupSize":"8-50 personnes","availability":"Sur demande"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/indoor-voetbalmanie.md";
				const url = undefined;
				function rawContent() {
					return "\nPlongez dans l'ambiance du football avec une série d'activités uniques (ex : bowling football, fléchettes football, mini babyfoot, quiz football, ...) spécialement conçues pour l'événement footballistique de l'année.\n\nQue vous soyez un fervent supporter de football ou simplement à la recherche de plaisir et de compétition, ces activités promettent une expérience inoubliable remplie d'enthousiasme footballistique. Participez, marquez des buts et profitez de l'excitation du Championnat d'Europe de football d'une manière totalement nouvelle!\n";
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
