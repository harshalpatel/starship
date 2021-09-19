import express from "express";
import helmet from "helmet";
import { pokemonRouter } from "./router/pokemon.route";
const app = express();

app.use(helmet());
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use("/", pokemonRouter());
