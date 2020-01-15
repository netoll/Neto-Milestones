//

import React from 'react';
import {LayoutAppHeader} from 'src/mui-views/app/LayoutAppHeader';
import {useLocalizedResourcesFromContext} from 'src/mui-lib/hooks/useLanguage';
import {mock} from '../assets/mock';
import {toMarkdown} from '../milestones/to-md';
import {ViewTimeliner} from '../views/ViewTimeliner';
import {ViewRowBasedFlows} from '../views/ViewRowBasedFlows';
import {ViewTableFlows} from '../views/ViewTableFlows';
import {RB} from './resources';
import {useStyles} from './styles';

interface IProps {}

interface IState {}

export const AppHome = React.memo<IProps>(() => {
	const cls = useStyles();
	const R = useLocalizedResourcesFromContext(RB);

	const renderPageBody = () => (
		<div className={cls.page}>

			<div style={{height: 16}}/>
			<ViewTimeliner step={Math.floor(mock.sections.length / 2)} entries={mock.sections}/>
			<div style={{height: 16}}/>
			<ViewRowBasedFlows sections={mock.sections}/>
			<div style={{height: 16}}/>
			<ViewTableFlows sections={mock.sections}/>
			<div style={{height: 16}}/>

			<div style={{height: 16}}/>

			<div>
				{JSON.stringify(mock)}
			</div>
			<pre>
				<code>{toMarkdown(mock)}</code>
			</pre>

			<div style={{height: 120}}/>
		</div>
	);

	return (
		<LayoutAppHeader
			title={R.title}
			body={renderPageBody()}
		/>
	);
});
