"use strict";
// console.log(process.env);
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
const { SHELL, HOMEBREW_PREFIX } = process.env;
// console.table({ SHELL, HOMEBREW_PREFIX });
exports.characters = ["Flash", "Superman", "Green Lantern", "Batman"];
// const batman = characters[2]
const [, , batman] = exports.characters;
// console.log(batman);
