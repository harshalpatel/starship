import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { NetworkService } from "../../common/network.service";
import { PokemonDto } from "./pokemon.dto";

@Injectable()
export class PokemonRepository {
  private readonly pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private readonly networkService: NetworkService) {}

  async getPokemonInformation(name: string): Promise<PokemonDto> {
    try {
      const response = await this.networkService.get<PokemonDto>(
        `${this.pokemonUrl}${name}`
      );
      return response;
    } catch (e) {
      if (e instanceof HttpException && e.getStatus() === 400) {
        throw new NotFoundException(`${name} - invalid pokemon`);
      }
      throw e;
    }
  }
}
