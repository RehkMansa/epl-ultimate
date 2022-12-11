import { formations } from '../global/formations';
import { getPlayerPosition } from '../global/reducedPositions';
import {
	AllPositionsType,
	FormationKeys,
	FormationType,
	TeamPositions,
} from '../types';
import { randomNumber } from '../utils/randomNumber';

const generateTeamFormations = () => {
	const teamFormations = new Set<FormationType>(); // set removes duplicate entries

	while (teamFormations.size < 3) {
		const randomInt = randomNumber(0, formations.length - 1);
		teamFormations.add(formations[randomInt]);
	}

	return [...teamFormations];
};

// const isGreater = (num1: number, num2: number) => (num1 >= num2 ? num1 : num2);

const generateTeamPlayers = (formationArr: FormationType[]) => {
	const positions = formationArr.reduce((acc, curr) => {
		const newObj = { ...acc };

		const keys = <FormationKeys[]>Object.keys(curr);

		keys.forEach((key) => {
			if (typeof curr[key] === 'number') {
				if (curr[key] !== 0) {
					const current = Number(curr[key]) || 0; // provides a fallback as zero, this is for typescript not me

					if (newObj[key] !== undefined) {
						const average = Math.max(current, newObj[key]);
						newObj[key] = average;
					} else {
						newObj[key] = current;
					}
				}
			}
		});

		return newObj;
	}, <Record<FormationKeys, number>>{});

	return positions;
};

const team = generateTeamFormations();

const positions: Record<AllPositionsType, number> = generateTeamPlayers(team);

const getTeamPositions = (positions: Record<AllPositionsType, number>) => {
	console.log(positions);
	const counter: Record<TeamPositions, number> = {
		attacking: 0,
		defense: 0,
		midfield: 0,
	};

	let total = 0;

	for (const key in positions) {
		const role = <AllPositionsType>key;
		const position = getPlayerPosition(role);

		total += positions[role];

		counter[position] += positions[role];
	}

	return { ...counter, total }; // reduces the positions to a single object;
};

const summedPositions = getTeamPositions(positions);

console.log(summedPositions);

/* 
	WE HAVE DIFFERENT POSITIONS
		

*/
