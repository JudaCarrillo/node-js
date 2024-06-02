"use strict";
// const getAgePlugin = require("get-age");
const getAge = (birthdate) => {
    if (!birthdate) {
        return new Error("Birthdate is required");
    }
    // return getAgePlugin(birthdate);
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
module.exports = {
    getAge,
};
