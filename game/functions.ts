import { formations } from '../global/formations';
import { getPlayerPosition } from '../global/reducedPositions';
import {
	AllPositionsType,
	FormationKeys,
	FormationType,
	PlayerAttributes,
	TeamPositions,
} from '../types';
import { calculateRatings } from '../types/omor';
import { randomInt } from '../utils/randomInt';

const generateTeamFormations = () => {
	const teamFormations = new Set<FormationType>(); // set removes duplicate entries

	while (teamFormations.size < 3) {
		const num = randomInt(0, formations.length - 1);
		teamFormations.add(formations[num]);
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
	console.time('create player');
	const counter: Record<TeamPositions, number> = {
		attacking: 0,
		defense: 0,
		midfield: 0,
	};

	const players = <PlayerAttributes[]>[];

	let total = 0;

	for (const key in positions) {
		const role = <AllPositionsType>key;
		const position = getPlayerPosition(role);

		total += positions[role];

		counter[position] += positions[role];
	}

	for (const key in counter) {
		const role = <TeamPositions>key;

		for (let i = 0; i < counter[role]; i++) {
			const player = calculateRatings(randomInt(150, 200), role);

			players.push(player);
		}
	}

	console.log(players.length, total);

	console.timeEnd('create player');

	return { ...counter, total, players }; // reduces the positions to a single object;
};

const summedPositions = getTeamPositions(positions);

// console.log(summedPositions);
