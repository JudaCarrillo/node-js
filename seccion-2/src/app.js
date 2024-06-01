// 1.
// console.log('Hola Mundo desde app.js');

// 2.
// const { emailTemplate } = require("./js-foundation/01-template");
// console.log(emailTemplate);

// 3.
// require("./js-foundation/02-destructuring");

// 4.
// const { getUserById } = require("./js-foundation/03-callbacks");

// 5.
/* const { getUserById } = require("./js-foundation/04-arrow");

const id = 2;

getUserById(id, (error, user) => {
  if (error) {
    return console.log(error);
  }

  console.log(user);
});
 */

// 6.
const { getUUID, getAge } = require("./plugins");
const { buildMakePerson } = require("./js-foundation/05-factory");

// in this way we can inject the dependencies
const makePerson = buildMakePerson({ getUUID, getAge });
const obj = { name: "Juda", birthdate: "2006-01-08" };
const juda = makePerson(obj);
console.log({ juda });
