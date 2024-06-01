// import { emailTemplate } from "./js-foundation/01-template";
// const { emailTemplate } = require("./js-foundation/01-template");
// require("./js-foundation/02-destructuring");

// console.log(emailTemplate);
// console.log('Hola Mundo desde app.js');

// const { getUserById } = require("./js-foundation/03-callbacks");
const { getUserById } = require("./js-foundation/04-arrow");

const id = 2;

getUserById(id, (error, user) => {
  if (error) {
    return console.log(error);
  }

  console.log(user);
});
