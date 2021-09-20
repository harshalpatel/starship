import { PokemonController } from "./pokemon.controller";
import { PokemonService } from "./pokemon.service";
import { Module } from "@nestjs/common";
import { PokemonRepositoryModule } from "src/respoisitories/pokemon/pokemon.repository.module";
import { CommonModule } from "../common/common.module";

@Module({
  imports: [PokemonRepositoryModule, CommonModule],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
