import { Module } from "@nestjs/common";
import { CommonModule } from "../../common/common.module";
import { PokemonRepository } from "./pokemon.repository";

@Module({
  imports: [CommonModule],
  providers: [PokemonRepository],
  exports: [PokemonRepository],
})
export class PokemonRepositoryModule {}
