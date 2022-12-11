"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumber = void 0;
const randomNumber = (min, max) => {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
};
exports.randomNumber = randomNumber;
