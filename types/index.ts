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

export type FormationKeys = keyof FormationType;

export type AllPositionsType = Exclude<FormationKeys, 'name' | 'formation'>;

export type TeamPositions = Exclude<keyof TeamType, 'team' | 'wealth'>;

export type LeagueType = TeamType[];

export type Player = {
	firstName: string;
	lastName: string;
	age: number;
	position: AllPositionsType;
	defensiveAttributes: [];
};

export type PlayerAttributes = {
	pace: number;
	shooting: number;
	passing: number;
	dribbling: number;
	tackling: number;
	marking: number;
	heading: number;
	aggression: number;
	positioning: number;
	vision: number;
	creativity: number;
	workRate: number;
};
