import { AllPositionsType, TeamPositions } from '../types';

type ReducedObj = Record<AllPositionsType, TeamPositions>;

const reducedPositions: ReducedObj = {
	centerBack: 'defense',
	fullBack: 'defense',
	wingBack: 'defense',
	defensiveMidfielder: 'midfield',
	centralMidfielder: 'midfield',
	attackingMidfielder: 'midfield',
	winger: 'attacking',
	striker: 'attacking',
	secondStriker: 'attacking',
	centerForward: 'attacking',
} as const;

const reducedPositionsStore = {
	defense: ['centerBack', 'fullBack', 'wingBack'],
	midfield: [
		'defensiveMidfielder',
		'centralMidfielder',
		'attackingMidfielder',
	],
	attack: ['winger', 'striker', 'secondStriker', 'centerForward'],
} as const;

const getPositions = (position: AllPositionsType) => reducedPositions[position];
