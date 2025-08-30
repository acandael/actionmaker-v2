import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, f as renderTemplate } from './astro/server_D1OCFpJj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Welcome to Groupo Universalis, the ultimate team building adventure where groups come together to become the most universal group! Inspired by the TV show Homo Universalis, we challenge teams to demonstrate their versatility and collaboration skills in a series of playful activities.</p>\n<p>In Groupo Universalis, everything revolves around discovering and utilizing everyone’s unique talents. Each team member is encouraged to let their skills shine, whether it’s creativity, problem-solving ability, physical strength, or strategic insight.</p>\n<p>From challenging puzzles to exciting team challenges, every component of Groupo Universalis is designed to celebrate and strengthen the diversity within the group. It’s not just about winning, but also about building mutual bonds, fostering trust, and enhancing team spirit.</p>";

				const frontmatter = {"title":"Groupo Universalis","description":"Inspired by the TV show Homo Universalis","image":"groupo-universalis/groupo-universalis-1.jpg","priority":14,"isGame":true,"features":["activities for everyone's talents","collaboration and creativity","many short and powerful games"],"gallery":["groupo-universalis/groupo-universalis-2.jpg","groupo-universalis/groupo-universalis-3.jpg","groupo-universalis/groupo-universalis-4.jpg","groupo-universalis/groupo-universalis-5.jpg","groupo-universalis/groupo-universalis-6.jpg","groupo-universalis/groupo-universalis-7.jpg"],"categories":["indoor"],"duration":"2 - 3 hours","groupSize":"8 - 1000 people","availability":"On request"};
				const file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/content/activities/en/groupo-universalis.md";
				const url = undefined;
				function rawContent() {
					return "\nWelcome to Groupo Universalis, the ultimate team building adventure where groups come together to become the most universal group! Inspired by the TV show Homo Universalis, we challenge teams to demonstrate their versatility and collaboration skills in a series of playful activities.\n\nIn Groupo Universalis, everything revolves around discovering and utilizing everyone's unique talents. Each team member is encouraged to let their skills shine, whether it's creativity, problem-solving ability, physical strength, or strategic insight.\n\nFrom challenging puzzles to exciting team challenges, every component of Groupo Universalis is designed to celebrate and strengthen the diversity within the group. It's not just about winning, but also about building mutual bonds, fostering trust, and enhancing team spirit.\n";
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
