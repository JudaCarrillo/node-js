// console.log(process.env);

const { SHELL, HOMEBREW_PREFIX } = process.env;

// console.table({ SHELL, HOMEBREW_PREFIX });

export const characters = ["Flash", "Superman", "Green Lantern", "Batman"];
// const batman = characters[2]
const [, , batman] = characters;
// console.log(batman);
