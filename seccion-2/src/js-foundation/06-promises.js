// by default return undefined
const getPokemonById = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  return (
    fetch(url)
      // does not return the expected response
      .then((response) => response.json())
      .then(() => {
        throw new Error("Pokemon not found");
      })
      .then((pokemon) => pokemon.name)
  );
};

module.exports = getPokemonById;
