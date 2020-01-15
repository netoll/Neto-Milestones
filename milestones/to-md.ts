//

import {IMilestone, IMilestoneSection} from './milestones';

const mdSection = (section: IMilestoneSection): string => {
	let md = `- ${section.end || section.due || ''} **${section.name}** ${section.description}`;
	if (section.entries && section.entries.length > 0) {
		md += '\n';
		md += section.entries.map(entry => `\t- ${entry.end || entry.due || ''} ${entry.name} ${entry.description ? '*' + entry.description + '*' : ''}`).join('\n');
	}
	return md;
};

const md = (ms: IMilestone): string => {
	let md = `\n## ${ms.name}\n\n`;
	return md + ms.sections.map(mdSection).join('\n');
};

export const toMarkdown = md;
