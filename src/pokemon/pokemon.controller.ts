import { Request, Response } from "express";
import { PokemonService } from "./services/pokemon.service";

async function getPokemonInformation(
  req: Request,
  res: Response
): Promise<any> {
  const service = new PokemonService();

  try {
    const pokemonInformation = await service.getPokemonInformation(
      req.body.pokemon
    );
    return res.status(200).json(pokemonInformation);
  } catch (e) {
    return res.status(500).json(e);
  }
}

export { getPokemonInformation };
