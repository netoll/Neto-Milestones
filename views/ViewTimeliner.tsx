//

import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Stepper, {Orientation} from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import {ViewMarkdown} from 'src/mui-views/docs/ViewMarkdown';
import {IMilestoneBase} from '../milestones/milestones';

const useStyles = makeStyles({
	ctn: {borderRadius: 8},
	label: {fontSize: '1.1em'},
	activeLabel: {color: '#099', fontSize: '1.25em'},
	content: {color: 'gray'},
	activeContent: {color: '#6aa'},
});

interface IProps {
	step?: number;
	entries: IMilestoneBase[];
	orientation?: Orientation;
	desc?: boolean;
	linear?: boolean;
	expand?: boolean;
}

export const ViewTimeliner = React.memo((
	{
		step = 0, entries,
		orientation = 'vertical', desc, expand, linear,
	}: IProps,
) => {
	const cls = useStyles();

	const renderStep = (entry: IMilestoneBase, index: number) => (
		<Step key={entry.name}>
			<StepLabel {...(desc ? {icon: entries.length - index} : undefined)}>
				<div className={clsx(cls.label, {[cls.activeLabel]: index === step})}>
					<span>{entry.end || entry.due || ''} </span>
					<b>{entry.name}</b>
				</div>
			</StepLabel>
			<StepContent {...(expand ? {active: true} : undefined)} className={clsx(cls.content, {[cls.activeContent]: index === step})}>
				<ViewMarkdown md={entry.description || ''}/>
			</StepContent>
		</Step>
	);

	return (
		<Stepper
			className={cls.ctn} orientation={orientation}
			activeStep={step} nonLinear={!linear}
		>
			{entries.map(renderStep)}
		</Stepper>
	);
});
