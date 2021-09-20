import { Request } from "express";
import { Controller, Post, Req } from "@nestjs/common";
import { PokemonService } from "./pokemon.service";

@Controller()
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post("pokemon")
  getPokemon(@Req() req: Request) {
    return this.pokemonService.getPokemonInformation(req.body.pokemon);
  }
}
