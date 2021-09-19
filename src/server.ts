import express from "express";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
