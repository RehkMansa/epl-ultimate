"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formations_1 = require("../global/formations");
const randomNumber_1 = require("../utils/randomNumber");
const generateTeamFormations = () => {
    const teamFormations = new Set(); // set removes duplicate entries
    while (teamFormations.size < 3) {
        const randomInt = (0, randomNumber_1.randomNumber)(0, formations_1.formations.length - 1);
        teamFormations.add(formations_1.formations[randomInt]);
    }
    return [...teamFormations];
};
// const isGreater = (num1: number, num2: number) => (num1 >= num2 ? num1 : num2);
const generateTeamPlayers = (formationArr) => {
    const positions = formationArr.reduce((acc, curr) => {
        const newObj = { ...acc };
        const keys = Object.keys(curr);
        keys.forEach((key) => {
            if (typeof Number(curr[key]) === 'number') {
                if (curr[key] !== 0) {
                    const current = Number(curr[key]) || 0;
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
console.log(generateTeamPlayers(team));
