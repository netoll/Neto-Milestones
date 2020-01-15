//

// Generate concurrent milestones from projects.
import {newMilestone, nextMileSection} from '../milestones/constructors';

const demo = newMilestone('A Demo Milestone', [
	nextMileSection('Pre-Researching and Planning', '2020-01-25', '', undefined,
		''),
	nextMileSection('Project Starting', '2020-02-25', '', undefined,
		'Start of the Project'),
	nextMileSection('Development Preparing', '2020-03-25', '', undefined,
		''),
	nextMileSection('Development Starting', '2020-04-25', '', undefined,
		''),
	nextMileSection('Development Ending', '2020-08-25', '', undefined,
		''),
	nextMileSection('Project Ending', '2020-09-25', '', undefined,
		'End of the Project'),
], '');

export const mock = demo;
