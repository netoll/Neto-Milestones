//

export interface IMilestone extends IMilestoneBase {
	sections: IMilestoneSection[];
	children?: IMilestone[];
}

export interface IMilestoneSection extends IMilestoneBase {
	entries?: IMilestoneEntry[];
}

export interface IMilestoneEntry extends IMilestoneBase {

}

export interface IMilestoneBase {
	name: string;
	description?: string;

	// The expected due time.
	due?: string;
	// The expected duration.
	total?: string;
	// The real time committed.
	end?: string;
	// The real time spent.
	duration?: string;
}
