export type TeamType = {
	team: string;
	attacking: number;
	defense: number;
	midfield: number;
	wealth: number;
};

export type Positions =
	| 'rightMidfielder'
	| 'defensiveMidfielder'
	| 'attackingMidfielder'
	| 'fullBack'
	| 'formation'
	| 'centerBack'
	| 'centralMidfielder'
	| 'centerForward'
	| 'leftMidfielder';

export type FormationType = {
	name: string;
	formation: string;
	centerBack: number;
	fullBack: number;
	wingBack: number;
	defensiveMidfielder: number;
	centralMidfielder: number;
	attackingMidfielder: number;
	winger: number;
	striker: number;
	secondStriker: number;
	centerForward: number;
};

export type LeagueType = TeamType[];
