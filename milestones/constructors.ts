//

import {IMilestone, IMilestoneBase, IMilestoneEntry, IMilestoneSection} from './milestones';

export const newMilestone = (name: string, sections: IMilestoneSection[], description?: string): IMilestone => ({
	name, sections, description,
});

// Define a new historical milestone.
export const newMileBase = (name: string, end: string, description?: string): IMilestoneBase =>
	({name, description, end});
// Plan a coming future milestone.
export const nextMileBase = (name: string, due: string, description?: string): IMilestoneBase =>
	({name, description, due});

export const newMileSection = (name: string, end: string, total: string, entries?: IMilestoneEntry[], description?: string): IMilestoneSection => ({
	...newMileBase(name, end, description),
	entries, total,
});
export const nextMileSection = (name: string, startOrDueTime: string, total: string, entries?: IMilestoneEntry[], description?: string): IMilestoneSection => ({
	...nextMileBase(name, startOrDueTime, description),
	entries, total,
});

export const newMileEntry = (name: string, end: string, description?: string): IMilestoneEntry => ({
	...newMileBase(name, end, description),
});
export const nextMileEntry = (name: string, due: string, description?: string): IMilestoneEntry => ({
	...nextMileBase(name, due, description),
});
