import { Router } from "express";
import { getPokemonInformation } from "../pokemon/pokemon.controller";

const pokemonRouter = () => {
  const router = Router();

  router.post("/pokemon", getPokemonInformation);

  return router;
};

export { pokemonRouter };
