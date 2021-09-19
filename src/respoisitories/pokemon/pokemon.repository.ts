import { NetworkService } from "../../common/network.service";
import { PokemonDto } from "./pokemon.dto";

class PokemonRepository {
  private readonly pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private readonly networkService = new NetworkService()) {}

  async getPokemonInformation(name: string): Promise<PokemonDto> {
    const response = await this.networkService.get<PokemonDto>(
      `${this.pokemonUrl}${name}`
    );
    return response;
  }
}

export { PokemonRepository };
