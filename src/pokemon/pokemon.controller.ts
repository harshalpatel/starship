import { Request, Response } from "express";
import { PokemonService } from "./services/pokemon.service";

async function getPokemonInformation(
  req: Request,
  res: Response
): Promise<any> {
  const service = new PokemonService();
  // TODO: Input validation of body schema
  const pokemon = req.body.pokemon;

  return res.status(200).json(await service.getPokemonInformation(pokemon));
}

export { getPokemonInformation };
