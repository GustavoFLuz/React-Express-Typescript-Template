import { config } from "dotenv";
import app from "./App.js";
config();

const { SERVER_PORT = 3000 } = process.env;

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on Port:${SERVER_PORT}`)
});

