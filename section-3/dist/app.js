"use strict";
const heroes = [
    {
        id: 1,
        name: "Batman",
        owner: "DC",
    },
    {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
    },
    {
        id: 3,
        name: "Superman",
        owner: "DC",
    },
    {
        id: 4,
        name: "Flash",
        owner: "DC",
    },
    {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
    },
];
const findHeroById = (id) => {
    return heroes.find((hero) => hero.id === id);
};
const hero = findHeroById(6);
// ! null operator - optional chaining
console.log((hero === null || hero === void 0 ? void 0 : hero.name) || "Hero not found");
