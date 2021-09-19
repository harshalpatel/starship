import { Router } from "express";
import { createUser } from "../pokemon/pokemon.controller";

const pokemonRouter = () => {
  const router = Router();

  router.post("/pokemon", createUser);

  return router;
};

export { pokemonRouter };
