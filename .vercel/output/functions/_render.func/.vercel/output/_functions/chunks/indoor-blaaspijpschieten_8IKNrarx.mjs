import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Blowgun shooting (Indoor) is very popular. It is an exciting and challenging activity for all age groups. A brief history of blowgun shooting will be given. This is followed by exercises and a competition with blowguns in 3 different lengths.</p>\n<p>Take up the challenge and discover who has the most powerful breath and the best shot. An activity full of suspense, challenges and above all lots of fun!</p>";

				const frontmatter = {"title":"Blowgun Shooting (Indoor)","description":"Indoor blowgun shooting is very popular. An exciting and challenging activity for all age groups.","image":"indoor-blaaspijpschieten/indoor-blaaspijpschieten-1.jpg","features":["Competition","Sport","Relaxation"],"gallery":["indoor-blaaspijpschieten/indoor-blaaspijpschieten-2.jpg","indoor-blaaspijpschieten/indoor-blaaspijpschieten-3.jpg","indoor-blaaspijpschieten/indoor-blaaspijpschieten-4.jpg","indoor-blaaspijpschieten/indoor-blaaspijpschieten-5.jpg","indoor-blaaspijpschieten/indoor-blaaspijpschieten-6.jpg","indoor-blaaspijpschieten/indoor-blaaspijpschieten-7.jpg"],"categories":["indoor"],"duration":"30 minutes - 2 hours","groupSize":"4 - 200 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/indoor-blaaspijpschieten.md";
				const url = undefined;
				function rawContent() {
					return "\nBlowgun shooting (Indoor) is very popular. It is an exciting and challenging activity for all age groups. A brief history of blowgun shooting will be given. This is followed by exercises and a competition with blowguns in 3 different lengths.\n\nTake up the challenge and discover who has the most powerful breath and the best shot. An activity full of suspense, challenges and above all lots of fun!\n";
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
