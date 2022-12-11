import { AllPositionsType, PlayerAttributes } from '.';
import { reducedPositions } from '../global/reducedPositions';
import { randomInt } from '../utils/randomInt';

const defenseOptions = {
	tackling: randomInt(2, randomInt(2, 5)),
	aggression: randomInt(2, randomInt(2, 5)),
	positioning: randomInt(2, randomInt(2, 5)),
	marking: randomInt(2, randomInt(2, 5)),
	heading: randomInt(2, randomInt(2, 5)),
	pace: randomInt(1, randomInt(1, 4)),
	passing: randomInt(1, randomInt(1, 3)),
	workRate: randomInt(1, randomInt(1, 4)),
	vision: randomInt(1, randomInt(1, 3)),
	shooting: randomInt(1, randomInt(1, 3)),
	dribbling: randomInt(1, randomInt(1, 3)),
	creativity: randomInt(1, randomInt(1, 3)),
};

const midfielderOptions = {
	tackling: randomInt(2, randomInt(2, 3)),
	aggression: randomInt(2, randomInt(2, 5)),
	positioning: randomInt(2, randomInt(2, 5)),
	marking: randomInt(2, randomInt(2, 5)),
	heading: randomInt(2, randomInt(2, 5)),
	pace: randomInt(1, randomInt(1, 4)),
	passing: randomInt(1, randomInt(1, 3)),
	workRate: randomInt(1, randomInt(1, 4)),
	vision: randomInt(1, randomInt(1, 3)),
	shooting: randomInt(1, randomInt(1, 3)),
	dribbling: randomInt(1, randomInt(1, 3)),
	creativity: randomInt(1, randomInt(1, 3)),
};

const attackerOptions = {
	tackling: randomInt(2, randomInt(2, 5)),
	aggression: randomInt(2, randomInt(2, 5)),
	positioning: randomInt(2, randomInt(2, 5)),
	marking: randomInt(2, randomInt(2, 5)),
	heading: randomInt(2, randomInt(2, 5)),
	pace: randomInt(1, randomInt(1, 4)),
	passing: randomInt(1, randomInt(1, 3)),
	workRate: randomInt(1, randomInt(1, 4)),
	vision: randomInt(1, randomInt(1, 3)),
	shooting: randomInt(1, randomInt(1, 3)),
	dribbling: randomInt(1, randomInt(1, 3)),
	creativity: randomInt(1, randomInt(1, 3)),
};

/* 
R = (pace * wPace) + (shooting * wShooting) + (passing * wPassing) + (dribbling * wDribbling) + (tackling * wTackling) + (marking * wMarking) + (heading * wHeading) + (aggression * wAggression) + (positioning * wPositioning) + (vision * wVision) + (creativity * wCreativity) + (workRate * wWorkRate)

In this formula, R is the player's rating, pace, shooting, passing, dribbling, tackling, marking, heading, 
aggression, positioning, vision, creativity, and workRate are the player's attribute values, and wPace, wShooting, 
wPassing, wDribbling, wTackling, wMarking, wHeading, wAggression, wPositioning, wVision, wCreativity, 
and wWorkRate are the corresponding attribute weights.

*/

const playerAttributes = {
	midfielders: {
		pace: 0.1,
		shooting: 0.1,
		passing: 0.2,
		dribbling: 0.1,
		tackling: 0.1,
		marking: 0.1,
		heading: 0.1,
		aggression: 0.1,
		positioning: 0.2,
		vision: 0.1,
		creativity: 0.1,
		workRate: 0.1,
	},
	attackers: {
		pace: 0.2,
		shooting: 0.2,
		passing: 0.1,
		dribbling: 0.2,
		tackling: 0.1,
		marking: 0.1,
		heading: 0.1,
		aggression: 0.1,
		positioning: 0.1,
		vision: 0.1,
		creativity: 0.1,
		workRate: 0.1,
	},
	defenders: {
		pace: 0.13,
		shooting: 0.05,
		passing: 0.1,
		dribbling: 0.07,
		tackling: 0.22,
		marking: 0.25,
		heading: 0.15,
		aggression: 0.1,
		positioning: 0.15,
		vision: 0.08,
		creativity: 0.07,
		workRate: 0.1,
	},
};

type Position = keyof typeof playerAttributes;

const calculateRatings = (initialRating: number, position: Position) => {
	const ratings: PlayerAttributes = {
		aggression: 0,
		creativity: 0,
		dribbling: 0,
		heading: 0,
		marking: 0,
		pace: 0,
		passing: 0,
		positioning: 0,
		shooting: 0,
		tackling: 0,
		vision: 0,
		workRate: 0,
	};

	let rating = initialRating;

	for (const attr in playerAttributes[position]) {
		const avr = rating / 2;
		const thr = rating / 4;

		const attribute = <keyof PlayerAttributes>attr;

		const rand = Math.random() * (avr - thr) + thr;

		const weight = playerAttributes[position][attribute];
		const value = parseFloat((weight * rand).toFixed(2));

		ratings[attribute] = value;

		rating -= value;
	}

	return ratings;
};

const player1 = calculateRatings(200, 'defenders');

/* const splitValue = (value: number, items: number) => {
	const result = [];
	for (let i = 0; i < items; i++) {
		const splitValue = value / items / 10;
		result.push(Math.round(splitValue) * 10);
	}
	return result;

    while (remainingPoints >= initialRating / 2) {
		for (const attr in playerAttributes[position]) {
			const avr = rating / 2;
			const thr = rating / 4;
			const attribute = <keyof PlayerAttributes>attr;
			const weight = playerAttributes[position][attribute];

			const rand = Math.random() * (avr - thr) + thr;
			const value = parseFloat((weight * rand).toFixed(2));
			if (weight >= 0.2) {
				ratings[attribute] += value;
			}

			rating -= value;
			remainingPoints = rating;

			console.log(rating, value, attribute);
		}
	}

};
const value = 100;
const items = 12;
const splitValues = splitValue(value, items);
 */
console.log(player1);
