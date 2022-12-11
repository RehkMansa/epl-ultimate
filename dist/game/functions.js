"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formations_1 = require("../global/formations");
const reducedPositions_1 = require("../global/reducedPositions");
const omor_1 = require("../types/omor");
const randomInt_1 = require("../utils/randomInt");
const generateTeamFormations = () => {
    const teamFormations = new Set(); // set removes duplicate entries
    while (teamFormations.size < 3) {
        const num = (0, randomInt_1.randomInt)(0, formations_1.formations.length - 1);
        teamFormations.add(formations_1.formations[num]);
    }
    return [...teamFormations];
};
// const isGreater = (num1: number, num2: number) => (num1 >= num2 ? num1 : num2);
const generateTeamPlayers = (formationArr) => {
    const positions = formationArr.reduce((acc, curr) => {
        const newObj = { ...acc };
        const keys = Object.keys(curr);
        keys.forEach((key) => {
            if (typeof curr[key] === 'number') {
                if (curr[key] !== 0) {
                    const current = Number(curr[key]) || 0; // provides a fallback as zero, this is for typescript not me
                    if (newObj[key] !== undefined) {
                        const average = Math.max(current, newObj[key]);
                        newObj[key] = average;
                    }
                    else {
                        newObj[key] = current;
                    }
                }
            }
        });
        return newObj;
    }, {});
    return positions;
};
const team = generateTeamFormations();
const positions = generateTeamPlayers(team);
const getTeamPositions = (positions) => {
    console.time('create player');
    const counter = {
        attacking: 0,
        defense: 0,
        midfield: 0,
    };
    const players = [];
    let total = 0;
    for (const key in positions) {
        const role = key;
        const position = (0, reducedPositions_1.getPlayerPosition)(role);
        const player = (0, omor_1.calculateRatings)((0, randomInt_1.randomInt)(150, 200), position);
        players.push(player);
        total += positions[role];
        counter[position] += positions[role];
    }
    console.timeEnd('create player');
    return { ...counter, total }; // reduces the positions to a single object;
};
const summedPositions = getTeamPositions(positions);
console.log(summedPositions);
