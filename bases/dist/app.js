"use strict";
// 1.
// console.log('Hola Mundo desde app.js');
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = void 0;
// 2.
// const { emailTemplate } = require("./js-foundation/01-template");
// console.log(emailTemplate);
// 3.
// require("./js-foundation/02-destructuring");
// 4.
// const { getUserById } = require("./js-foundation/03-callbacks");
// ! 5. callback - arrow function
/* const { getUserById } = require("./js-foundation/04-arrow");

const id = 2;

getUserById(id, (error, user) => {
  if (error) {
    return console.log(error);
  }

  console.log(user);
});
 */
// ! 6. factory function - dependency injection - adapter pattern
// const { getUUID, getAge } = require("./plugins");
// const { buildMakePerson } = require("./js-foundation/05-factory");
// in this way we can inject the dependencies
// const makePerson = buildMakePerson({ getUUID, getAge });
// const obj = { name: "Juda", birthdate: "2006-01-08" };
// const juda = makePerson(obj);
// console.log({ juda });
// ! 7. promises
// const getPokemonNameById = require("./js-foundation/06-promises");
// getPokemonNameById('a')
//   .then((pokemon) => console.log({ pokemon }))
//   .catch((error) => console.error({ error }))
//   .finally(() => console.log("Pokemon request finished"));
// token de acceso
// ! 8. logger
const plugins_1 = require("./plugins");
const logger = (0, plugins_1.buildLogger)("app.js");
logger.log("Hello world");
logger.error("This is an error");
exports.name = "Juda";
console.log(`Hello ${exports.name}!`);
