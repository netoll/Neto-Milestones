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

export const mockRoadmaps = newMilestone('大方向', [
	nextMileEntry('产业化', '2023年', '- 查漏补缺\n- 几个成熟稳定的商业模式'),
	nextMileEntry('商业化', '2022年', '- 商业化止损及盈利'),
	nextMileEntry('正式化', '2021年', '- 建立工作室并探索团队的存在形式\n- 商业模式初步探索'),
	nextMileEntry('起步', '2020年', '- 基本基础设施的搭建\n- 技术的进一步积累\n- 产品的完善及试水\n\t- 应用的基本产品化\n\t- 搭建基本管理后台\n- 产品的方向与未来\n\t- 域名/文档\n\t- 科学的理论\n- 项目与产品起步与探索摸索\n'),
	nextMileEntry('探索', '2019年', '- 技术栈(框架)的摸索与升级\n- 初步细化产品设计\n- 初步确定产品方向\n\t- 闭门造车 vs 行进中摸索\n\t- 确定原有的产品想法，等待下一步的摸索\n'),
	nextMileEntry('尝试', '2018年', '- 挑战自我失败\n\t- 产品开发进度感人\n\t- 各方面均积累不足\n'),
]);
