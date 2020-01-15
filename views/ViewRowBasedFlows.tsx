//

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {IMilestoneSection} from '../milestones/milestones';

const useStyles = makeStyles({
	root: {minWidth: 650, borderRadius: 8, border: '1px solid #ddd', background: '#eee'},

	row: {
		cursor: 'pointer', '&:hover': {background: '#e6e6e6'}, display: 'flex',
		padding: 16,
	},
	rowEven: {background: '#fafafa'},
	rowOdd: {background: '#f5f5f5'},

	field: {padding: '4px 8px', textAlign: 'center', lineHeight: '1.5em', maxWidth: '120px', display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center'},
	// make the width of the header fixed.
	fieldHead: {width: '1000px'},
	fieldBody: {borderLeft: '1px solid #eee'},
	fieldBlank: {flex: 1},

	fieldLabel: {color: '#555'},
	fieldValue: {color: '#999'},

	fieldHeaderLabel: {color: '#999'},
	fieldHeaderValue: {fontWeight: 'bold'},
});

interface IProps {
	// Sections with Entries
	sections: IMilestoneSection[];
}


// [ TableFlows | ViewRowBasedFlows ]
export const ViewRowBasedFlows = React.memo(({sections}: IProps) => {
	const cls = useStyles();

	const renderRows = (section: IMilestoneSection, index: number) => (
		<div key={section.name} className={cls.row + ' ' + (index % 2 === 0 ? cls.rowEven : cls.rowOdd)}>
			<div key={section.name} className={cls.field + ' ' + cls.fieldHead}>
				<div>
					<span className={cls.fieldHeaderLabel}>{section.end || section.due || ''}</span>
					{section.end || section.due ? <br/> : undefined}
					<span className={cls.fieldHeaderValue}>{section.name}</span>
				</div>
			</div>
			{section.entries ? section.entries.map((entry) => (
				<div key={entry.name} className={cls.field + ' ' + cls.fieldBody}>
					<div>
						<span className={cls.fieldLabel}>{entry.end || entry.due || ''}</span>
						{(entry.end || entry.due) ? <br/> : undefined}
						<span className={cls.fieldValue}>{entry.name}</span>
					</div>
				</div>
			)) : undefined}
			<div className={cls.field + ' ' + cls.fieldBlank}/>
		</div>
	);

	return (
		<div className={cls.root}>
			{sections.map(renderRows)}
		</div>
	);
});
