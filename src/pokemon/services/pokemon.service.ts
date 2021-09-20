import { PokemonRepository } from "../../respoisitories/pokemon/pokemon.repository";
import { PokemonInformationModel } from "../pokemon.model";
import { PokemonDto } from "../../respoisitories/pokemon/pokemon.dto";

class PokemonService {
  constructor(private readonly pokemeonRepo = new PokemonRepository()) {}

  async getPokemonInformation(pokemons: [string]): Promise<any> {
    const dtoArray: PokemonDto[] = [];

    // API requires pokemon to be lowercase and we dedupe to reduce api calls
    const cleanPokemonArray = [...new Set(pokemons)].map((uniquePokmen) =>
      uniquePokmen.toLocaleLowerCase()
    );

    await Promise.all(
      cleanPokemonArray.map(async (cleanPokemon) => {
        try {
          const pokemonInformation =
            await this.pokemeonRepo.getPokemonInformation(cleanPokemon);

          dtoArray.push(pokemonInformation);
        } catch (e) {
          throw new Error(e);
        }
      })
    );

    return new PokemonInformationModel(dtoArray);
  }
}
export { PokemonService };
