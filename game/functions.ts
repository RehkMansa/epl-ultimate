// const chooseTeamFormation

import { formations } from '../global/formations';
import { FormationType, TeamType } from '../types';
import { randomNumber } from '../utils/randomNumber';

/* 
    we are going loop through all the teams

    create a new array and formations which is an [array]

    generate players

        based on each for

*/

// const allTeams = ;

const generateTeamFormations = () => {
	const teamFormations = new Set<FormationType>(); // set removes duplicate entries

	while (teamFormations.size < 3) {
		const randomInt = randomNumber(0, formations.length - 1);
		teamFormations.add(formations[randomInt]);
	}

	return [...teamFormations];
};

const generateTeamPlayers = (formationArr: FormationType[]) => {
	const positions = formationArr.reduce((acc, curr) => {
		const newObj = { ...acc };
	}, {});

	return positions;
};

console.log(generateTeamPlayers(generateTeamFormations()));
