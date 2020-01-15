'use strict';

type IR = typeof R;

export const R = {
	title: 'Milestones',
};

const R_ZH: IR = {
	// [ 目标管理 | 项目管理 | 倒计时 | 时间轴 | 里程碑 | 甘特图 ]
	title: '里程碑',
};

// Recourse > Bundle
export const RB = {df: R, en: R, zh: R_ZH};
