import { findHeroById } from "./services/hero.service";

const hero = findHeroById(5);
// ! null operator - optional chaining
console.log(hero?.name || "Hero not found");
