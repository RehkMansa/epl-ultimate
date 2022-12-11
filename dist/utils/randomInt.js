"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomInt = void 0;
const randomInt = (min, max) => {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
};
exports.randomInt = randomInt;
