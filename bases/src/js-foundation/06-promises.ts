import { httpClient } from "../plugins/";

const httpClientNoAuth = httpClient();

// by default return undefined
export const getPokemonNameById = async (
  id: number | string
): Promise<string> => {
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
