import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Grâce aux lumières et à la console associée au fusil/pistolet, vous savez où vous avez touché la cible. La console affiche votre schéma de tir de manière à ce que vous puissiez facilement l’ajuster. C’est une expérience très amusante pour les adultes comme pour les enfants. Le tir au biathlon infrarouge et au pistolet de sport est également totalement sûr et écologique, et peut se pratiquer aussi bien à l’intérieur qu’à l’extérieur.</p>\n<p>Cette activité est idéale pour le team building, les membres de l’équipe qui ne tirent pas peuvent “coacher” leurs coéquipiers à l’aide de la console. Après l’entraînement, nous organisons une compétition pour trouver le champion.</p>";

				const frontmatter = {"title":"Carabine laser et pistolet de sport (Indoor)","description":"Le carabine laser et pistolet de sport se pratique avec des carabines de biathlon modifiées pour tirer sur une cible de biathlon","image":"indoor-laser-karabijn/indoor-laser-karabijn-1.jpg","priority":5,"categories":["indoor"],"duration":"30 minutes - 2 heures","groupSize":"2 - 200","availability":"Toute l'année","features":["relaxation","dynamique de groupe","coaching"],"gallery":["indoor-laser-karabijn/indoor-laser-karabijn-2.jpg","indoor-laser-karabijn/indoor-laser-karabijn-3.jpg","indoor-laser-karabijn/indoor-laser-karabijn-4.jpg","indoor-laser-karabijn/indoor-laser-karabijn-5.jpg","indoor-laser-karabijn/indoor-laser-karabijn-6.jpg","indoor-laser-karabijn/indoor-laser-karabijn-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/fr/indoor-laser-karabijn.md";
				const url = undefined;
				function rawContent() {
					return "\nGrâce aux lumières et à la console associée au fusil/pistolet, vous savez où vous avez touché la cible. La console affiche votre schéma de tir de manière à ce que vous puissiez facilement l'ajuster. C'est une expérience très amusante pour les adultes comme pour les enfants. Le tir au biathlon infrarouge et au pistolet de sport est également totalement sûr et écologique, et peut se pratiquer aussi bien à l'intérieur qu'à l'extérieur.\n\nCette activité est idéale pour le team building, les membres de l'équipe qui ne tirent pas peuvent \"coacher\" leurs coéquipiers à l'aide de la console. Après l'entraînement, nous organisons une compétition pour trouver le champion.\n";
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
