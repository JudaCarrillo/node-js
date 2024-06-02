const { httpClient } = require("../plugins/http-client.plugin");

const httpClientNoAuth = httpClient();

// by default return undefined
const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await httpClientNoAuth.get(url);

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
};

module.exports = getPokemonById;
