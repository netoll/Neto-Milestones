//

// Generate concurrent milestones from projects.
import {newMilestone, nextMileEntry, nextMileSection} from '../milestones/constructors';

const demo = newMilestone('A Demo Milestone', [
	nextMileSection('Pre-Researching and Planning', '2020-01-25', '', [
		nextMileEntry('Start', '2020-01-29'),
		nextMileEntry('End', '2020-02-26'),
	], ''),
	nextMileSection('Project Starting', '2020-02-25', '', [
		nextMileEntry('A', '2020-02-25'),
		nextMileEntry('Start', '2020-02-29'),
		nextMileEntry('End', '2020-03-26'),
		nextMileEntry('C', '2020-03-29'),
	], 'Start of the Project'),
	nextMileSection('Development Preparing', '2020-03-25', '', [
		nextMileEntry('A', '2020-03-25'),
		nextMileEntry('Start', '2020-03-29'),
		nextMileEntry('B', '2020-04-05'),
		nextMileEntry('End', '2020-04-26'),
		nextMileEntry('C', '2020-04-29'),
	], ''),
	nextMileSection('Development Starting', '2020-04-25', '', [
		nextMileEntry('A', '2020-04-25'),
		nextMileEntry('Start', '2020-04-29'),
		nextMileEntry('B', '2020-06-05'),
		nextMileEntry('End', '2020-07-26'),
		nextMileEntry('C', '2020-08-29'),
	], ''),
	nextMileSection('Development Ending', '2020-08-25', '', [
		nextMileEntry('Start', '2020-08-29'),
		nextMileEntry('B', '2020-09-05'),
		nextMileEntry('End', '2020-09-26'),
	], ''),
	nextMileSection('Project Ending', '2020-09-25', '', [
		nextMileEntry('Start', '2020-10-29'),
		nextMileEntry('B', '2020-12-05'),
		nextMileEntry('End', '2020-12-26'),
		nextMileEntry('C', '2020-12-29'),
	], 'End of the Project'),
], '');

export const mock = demo;
