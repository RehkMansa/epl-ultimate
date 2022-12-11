"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerPosition = exports.reducedPositions = void 0;
exports.reducedPositions = {
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
};
const reducedPositionsStore = {
    defense: ['centerBack', 'fullBack', 'wingBack'],
    midfield: [
        'defensiveMidfielder',
        'centralMidfielder',
        'attackingMidfielder',
    ],
    attack: ['winger', 'striker', 'secondStriker', 'centerForward'],
};
const getPlayerPosition = (position) => exports.reducedPositions[position];
exports.getPlayerPosition = getPlayerPosition;
