import { getPokemonNameById } from "../../src/js-foundation/06-promises";

describe("js-foundation/06-promises.ts", () => {
  it("getPokemonNameById should return a pokemon name", async () => {
    const id = 1;
    const pokemonName = await getPokemonNameById(id);
    expect(pokemonName).toBe("bulbasaur");
  });

  it("getPokemonNameById should return an error if pokemon does not exist", async () => {
    const id = 1000000000000000;

    try {
      const pokemonName = await getPokemonNameById(id);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe("Pokemon not found with id: " + id);
    }
  });
});
