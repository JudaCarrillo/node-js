"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonNameById = void 0;
const plugins_1 = require("../plugins/");
const httpClientNoAuth = (0, plugins_1.httpClient)();
// by default return undefined
const getPokemonNameById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = yield httpClientNoAuth.get(url);
    // const response = await fetch(url);
    // const pokemon = await response.json();
    // throw new Error("Pokemon not found");
    return pokemon.name;
    /* return (
      fetch(url)
        // does not return the expected response
        .then((response) => response.json())
        .then(() => {
          throw new Error("Pokemon not found");
        })
        .then((pokemon) => pokemon.name)
    ); */
});
exports.getPokemonNameById = getPokemonNameById;
