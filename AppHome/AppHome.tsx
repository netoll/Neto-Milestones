//

import React from 'react';
import {LayoutAppHeader} from 'src/mui-views/app/LayoutAppHeader';
import {useLocalizedResourcesFromContext} from 'src/mui-lib/hooks/useLanguage';
import {mock} from '../assets/mock';
import {toMarkdown} from '../milestones/to-md';
import {RB} from './resources';
import {useStyles} from './styles';

interface IProps {}

interface IState {}

export const AppHome = React.memo<IProps>(() => {
	const cls = useStyles();
	const R = useLocalizedResourcesFromContext(RB);

	const renderPageBody = () => (
		<div className={cls.page}>
			<div>
				{JSON.stringify(mock)}
			</div>
			<pre>
				<code>{toMarkdown(mock)}</code>
			</pre>
		</div>
	);

	return (
		<LayoutAppHeader
			title={R.title}
			body={renderPageBody()}
		/>
	);
});
