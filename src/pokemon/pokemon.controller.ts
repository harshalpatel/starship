import { Body, Controller, Post } from "@nestjs/common";
import { PokemonService } from "./pokemon.service";
import { IsNotEmpty } from "class-validator";

export class PokemonBodyDto {
  @IsNotEmpty()
  pokemon: [string];
}

@Controller()
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post("pokemon")
  getPokemon(@Body() requestBody: PokemonBodyDto) {
    return this.pokemonService.getPokemonInformation(requestBody.pokemon);
  }
}
