"use strict";
// const chooseTeamFormation
Object.defineProperty(exports, "__esModule", { value: true });
const formations_1 = require("../global/formations");
const randomNumber_1 = require("../utils/randomNumber");
/*
    we are going loop through all the teams

    create a new array and formations which is an [array]

    generate players

        based on each for

*/
// const allTeams = ;
const generateTeamFormations = () => {
    const teamFormations = new Set(); // set removes duplicate entries
    while (teamFormations.size < 3) {
        const randomInt = (0, randomNumber_1.randomNumber)(0, formations_1.formations.length - 1);
        teamFormations.add(formations_1.formations[randomInt]);
    }
    return [...teamFormations];
};
const generateTeamPlayers = (formationArr) => {
    const positions = formationArr.reduce((acc, curr) => {
        const newObj = { ...acc };
    }, {});
    return positions;
};
console.log(generateTeamPlayers(generateTeamFormations()));
