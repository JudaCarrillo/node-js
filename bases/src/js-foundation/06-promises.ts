import { httpClient } from "../plugins/";

const httpClientNoAuth = httpClient();

// by default return undefined
export const getPokemonNameById = async (
  id: number | string
): Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await httpClientNoAuth.get(url);
    return pokemon.name;
  } catch (error) {
    throw "Pokemon not found with id: " + id;
  }

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
