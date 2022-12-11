"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRatings = void 0;
const playerAttributes = {
    midfield: {
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
    attacking: {
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
    defense: {
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
const calculateRatings = (initial, position) => {
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
    let rating = initial;
    for (const attr in playerAttributes[position]) {
        const avr = rating / 2;
        const thr = rating / 4;
        const attribute = attr;
        const rand = Math.random() * (avr - thr) + thr;
        const weight = playerAttributes[position][attribute];
        const value = parseFloat((weight * rand).toFixed(2));
        ratings[attribute] = value;
        rating -= value;
    }
    return ratings;
};
exports.calculateRatings = calculateRatings;
const player1 = (0, exports.calculateRatings)(1, 'defense');
console.log(player1);
