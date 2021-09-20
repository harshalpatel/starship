import { PokemonRepository } from "../respoisitories/pokemon/pokemon.repository";
import { PokemonInformationModel } from "./pokemon.model";
import { PokemonDto } from "../respoisitories/pokemon/pokemon.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PokemonService {
  constructor(private readonly pokemeonRepo: PokemonRepository) {}

  async getPokemonInformation(pokemons: [string]) {
    const dtoArray: PokemonDto[] = [];

    // API requires pokemon to be lowercase and we dedupe to reduce api calls
    const cleanPokemonArray = [...new Set(pokemons)].map((uniquePokmen) =>
      uniquePokmen.toLocaleLowerCase()
    );

    await Promise.all(
      cleanPokemonArray.map(async (cleanPokemon) => {
        const pokemonInformation =
          await this.pokemeonRepo.getPokemonInformation(cleanPokemon);

        dtoArray.push(pokemonInformation);
      })
    );

    return new PokemonInformationModel(dtoArray);
  }
}
