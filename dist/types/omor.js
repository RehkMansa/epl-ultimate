"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomInt_1 = require("../utils/randomInt");
const defenseOptions = {
    tackling: (0, randomInt_1.randomInt)(2, (0, randomInt_1.randomInt)(2, 5)),
    aggression: (0, randomInt_1.randomInt)(2, (0, randomInt_1.randomInt)(2, 5)),
    positioning: (0, randomInt_1.randomInt)(2, (0, randomInt_1.randomInt)(2, 5)),
    marking: (0, randomInt_1.randomInt)(2, (0, randomInt_1.randomInt)(2, 5)),
    heading: (0, randomInt_1.randomInt)(2, (0, randomInt_1.randomInt)(2, 5)),
    pace: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 4)),
    passing: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 3)),
    workRate: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 4)),
    vision: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 3)),
    shooting: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 3)),
    dribbling: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 3)),
    creativity: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 3)),
};
const midfielderOptions = {
    tackling: (0, randomInt_1.randomInt)(2, (0, randomInt_1.randomInt)(2, 3)),
    aggression: (0, randomInt_1.randomInt)(2, (0, randomInt_1.randomInt)(2, 5)),
    positioning: (0, randomInt_1.randomInt)(2, (0, randomInt_1.randomInt)(2, 5)),
    marking: (0, randomInt_1.randomInt)(2, (0, randomInt_1.randomInt)(2, 5)),
    heading: (0, randomInt_1.randomInt)(2, (0, randomInt_1.randomInt)(2, 5)),
    pace: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 4)),
    passing: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 3)),
    workRate: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 4)),
    vision: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 3)),
    shooting: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 3)),
    dribbling: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 3)),
    creativity: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 3)),
};
const attackerOptions = {
    tackling: (0, randomInt_1.randomInt)(2, (0, randomInt_1.randomInt)(2, 5)),
    aggression: (0, randomInt_1.randomInt)(2, (0, randomInt_1.randomInt)(2, 5)),
    positioning: (0, randomInt_1.randomInt)(2, (0, randomInt_1.randomInt)(2, 5)),
    marking: (0, randomInt_1.randomInt)(2, (0, randomInt_1.randomInt)(2, 5)),
    heading: (0, randomInt_1.randomInt)(2, (0, randomInt_1.randomInt)(2, 5)),
    pace: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 4)),
    passing: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 3)),
    workRate: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 4)),
    vision: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 3)),
    shooting: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 3)),
    dribbling: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 3)),
    creativity: (0, randomInt_1.randomInt)(1, (0, randomInt_1.randomInt)(1, 3)),
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
        pace: 0.1,
        shooting: 0.1,
        passing: 0.1,
        dribbling: 0.1,
        tackling: 0.2,
        marking: 0.2,
        heading: 0.2,
        aggression: 0.1,
        positioning: 0.1,
        vision: 0.1,
        creativity: 0.1,
        workRate: 0.1,
    },
};
const calculateRatings = (rating, position) => {
    const ratings = {
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
    for (const attr in playerAttributes[position]) {
        const attribute = attr;
        ratings[attribute] = playerAttributes[position][attribute] * rating;
    }
    return ratings;
};
const player1 = calculateRatings(120, 'attackers');
console.log(player1);
