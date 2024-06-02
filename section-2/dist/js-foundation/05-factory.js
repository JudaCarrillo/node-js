"use strict";
// this form is a factory function
// the dependency is injected in the function
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getUUID, getAge, }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
