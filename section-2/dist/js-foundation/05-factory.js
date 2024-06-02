"use strict";
// this form is a factory function
// the dependency is injected in the function
const buildMakePerson = ({ getUUID, getAge }) => {
    return (buildPerson = ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate),
        };
    });
};
module.exports = {
    buildMakePerson,
};
