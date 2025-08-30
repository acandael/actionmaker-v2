import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>VR-Challenges: Samenwerken, Ontdekken en Overwinnen!</p>\n<p>Stap in een wereld vol spanning en avontuur met onze unieke VR-ervaringen. Samenwerken, vertrouwen en precisie zijn de sleutel tot succes. Met verschillende uitdagende opdrachten en leuke spellen is er voor ieder wat wils!\nBomontmanteling: Werk Samen en Ontmantel de Bom</p>\n<p>In deze zenuwslopende opdracht draait alles om teamwork:\nWerk samen onder tijdsdruk en ontmantel zelfs de listigste bommen. Eén verkeerde stap, en alles is verloren. Kunnen jullie het hoofd koel houden en als team slagen?</p>\n<h3 id=\"extra-vr-avonturen\">Extra VR-Avonturen</h3>\n<p>Naast bomontmanteling bieden we nog meer spannende VR-uitdagingen zoals:</p>\n<p>Beat Saber: Toon je ritmegevoel en raak de beats terwijl je obstakels ontwijkt in dit muzikale spel.</p>\n<p>The Plank Experience: Durf jij het aan? Stap op de plank op duizelingwekkende hoogtes en bewijs je moed. Een perfecte oefening in vertrouwen!</p>\n<p>ISS Explorer: Zweef in en buiten het Internationaal Ruimtestation en ontdek de pracht van de ruimte. Een unieke ervaring zonder zwaartekracht.</p>\n<h3 id=\"waarom-deze-activiteit\">Waarom deze activiteit?</h3>\n<p>Deze VR-ervaring is perfect voor teambuilding,of een spannende activiteit met vrienden. Samenwerken, , vertrouwen en plezier staan centraal terwijl je onvergetelijke avonturen beleeft.</p>";

				const frontmatter = {"title":"Virtual Reality","description":"Stap in een wereld vol spanning en avontuur met onze unieke VR-ervaringen","image":"virtual-reality/virtual-reality-1.jpg","priority":4,"categories":["indoor","innovaction"],"duration":"30 - 120 minuten","groupSize":"6 - 100 personen","availability":"Het hele jaar door","features":["teamwork","communicatie","strategie"],"gallery":["virtual-reality/virtual-reality-2.jpg","virtual-reality/virtual-reality-3.jpg","virtual-reality/virtual-reality-4.jpg","virtual-reality/virtual-reality-5.jpg","virtual-reality/virtual-reality-6.jpg","virtual-reality/virtual-reality-7.jpg"]};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/nl/virtual-reality.md";
				const url = undefined;
				function rawContent() {
					return "\nVR-Challenges: Samenwerken, Ontdekken en Overwinnen!\n\nStap in een wereld vol spanning en avontuur met onze unieke VR-ervaringen. Samenwerken, vertrouwen en precisie zijn de sleutel tot succes. Met verschillende uitdagende opdrachten en leuke spellen is er voor ieder wat wils!\nBomontmanteling: Werk Samen en Ontmantel de Bom\n\nIn deze zenuwslopende opdracht draait alles om teamwork:\nWerk samen onder tijdsdruk en ontmantel zelfs de listigste bommen. Eén verkeerde stap, en alles is verloren. Kunnen jullie het hoofd koel houden en als team slagen?\n\n### Extra VR-Avonturen\n\nNaast bomontmanteling bieden we nog meer spannende VR-uitdagingen zoals:\n\nBeat Saber: Toon je ritmegevoel en raak de beats terwijl je obstakels ontwijkt in dit muzikale spel.\n\nThe Plank Experience: Durf jij het aan? Stap op de plank op duizelingwekkende hoogtes en bewijs je moed. Een perfecte oefening in vertrouwen!\n\nISS Explorer: Zweef in en buiten het Internationaal Ruimtestation en ontdek de pracht van de ruimte. Een unieke ervaring zonder zwaartekracht.\n\n### Waarom deze activiteit?\n\nDeze VR-ervaring is perfect voor teambuilding,of een spannende activiteit met vrienden. Samenwerken, , vertrouwen en plezier staan centraal terwijl je onvergetelijke avonturen beleeft.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"extra-vr-avonturen","text":"Extra VR-Avonturen"},{"depth":3,"slug":"waarom-deze-activiteit","text":"Waarom deze activiteit?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
