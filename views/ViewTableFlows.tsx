//

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table, {Size} from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {IMilestoneSection} from '../milestones/milestones';

const useStyles = makeStyles({
	ctn: {borderRadius: 8},
	ctnTable: {position: 'relative'},
	// The border should share a same radius with the table root.
	ctnBorder: {position: 'absolute', top: '0', bottom: '0', right: '0', left: '0', border: '1px solid #ddd', borderRadius: '6px 6px 0 0', pointerEvents: 'none'},
	root: {minWidth: 650, borderRadius: '6px', background: '#eee'},
	row: {cursor: 'pointer', '&:hover': {background: '#e6e6e6'}},
	rowEven: {background: '#fafafa'},
	rowOdd: {background: '#f5f5f5'},
});

interface ITableBorder {
	no?: boolean;
	border?: string;
	radius?: string;
}

interface IProps {
	step?: number;
	// Sections with Entries
	sections: IMilestoneSection[];
	notSelectable?: boolean;
	selectedEntryId?: string;
	// Table Configures/Options
	// align?: IAlign,
	// defaultValue?: IReactNode,
	// padding?: IPadding
	size?: Size;
	// x ~~Give a empty border to enable the table border.~~
	// √ Give a empty border to disable the default table border.
	border?: ITableBorder;
}


// [ TableFlows | ViewRowBasedFlows ]
export const ViewTableFlows= React.memo((
	{
		// entries, columns,
		sections,
		size, //labels, values,
		// align, defaultValue = '', padding,
		border,
	}: IProps,
) => {
	const cls = useStyles();

	const renderRows = (section: IMilestoneSection, index: number) => (
		<TableRow key={section.name} className={cls.row + ' ' + (index % 2 === 0 ? cls.rowEven : cls.rowOdd)}>
			<TableCell key={section.name} align={'center'} padding={undefined}>
				<span>{section.end || section.due || ''}</span>
				{section.end || section.due ? <br/> : undefined}
				<b>{section.name}</b>
			</TableCell>
			{section.entries ? section.entries.map((entry) => (
				<TableCell key={entry.name} align={'center'} padding={undefined}>
					<span>{entry.end || entry.due || ''}</span>
					{(entry.end || entry.due) ? <br/> : undefined}
					<span>{entry.name}</span>
				</TableCell>
			)) : undefined}
		</TableRow>
	);

	/*{mode == 'table' ? (
				<TableHead>
					<TableRow>
						{sections.map(section => (
							<TableCell key={section.name} align={'center'} padding={undefined}>
								<span>{section.end || section.due || ''}</span>
								{section.end || section.due ? <br/> : undefined}
								<b>{section.name}</b>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
			) : undefined}*/
	const renderTable = () => (
		// @see https://material-ui.com/components/tables/
		<Table className={cls.root} size={size}>
			<TableBody>
				{sections.map(renderRows)}
			</TableBody>
		</Table>
	);

	// Disable the default border explicitly.
	if (border && border.no) {return renderTable();}
	// Give a empty border to disable the default table border.
	if (border && !border.border && !border.radius) {return renderTable();}
	return (
		<div className={cls.ctnTable}>
			{renderTable()}
			<div className={cls.ctnBorder} style={border ? {
				...(border.border ? {border: border.border} : undefined),
				...(border.radius ? {borderRadius: border.radius} : undefined),
			} : undefined}/>
		</div>
	);
});
