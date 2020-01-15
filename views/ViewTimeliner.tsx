//

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import {IMilestoneBase} from '../milestones/milestones';

const useStyles = makeStyles({
	ctn: {borderRadius: 8},
});

interface IProps {
	step?: number;
	entries: IMilestoneBase[];
}

export const ViewTimeliner = React.memo(({step = 0, entries}: IProps) => {
	const cls = useStyles();

	const renderStep = (entry: IMilestoneBase) => (
		<Step key={entry.name}>
			<StepLabel>
				<span>{entry.end || entry.due || ''} </span>
				<b>{entry.name}</b>
			</StepLabel>
			<StepContent>
				<Typography>{entry.description}</Typography>
			</StepContent>
		</Step>
	);

	return (
		<Stepper
			className={cls.ctn} orientation="vertical"
			activeStep={step}
		>
			{entries.map(renderStep)}
		</Stepper>
	);
});
