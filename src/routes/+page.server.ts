import { skills,languages } from './skills.json';
import { highlights } from './highlights/highlights.json'
// import { links } from '#lib/assets/Links.js'


export function load() {
	return {
		skills: skills.map((skill) => ({
			title: skill.title,
			skills: skill.skills
		})),
		languages: languages.map((language) => ({
			language: language.language,
			level: language.level
		})),
		highlights: highlights.map((highlight) =>
			highlight as App.Highlight
		),
	};
}
