"use strict";
// const { v4: uuidv4 } = require("uuid");
const getUUID = () => {
    // return uuidv4();
    return new Date().getTime();
};
module.exports = {
    getUUID,
};