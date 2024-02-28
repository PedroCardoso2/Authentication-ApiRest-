// Importa e configura o pacote dotenv para carregar as variáveis de ambiente do arquivo .env
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

async function conectaDbConnection() {
  mongoose
    .connect(process.env.DB_CONNECTION)
    .then(() => {
      console.log("Conexão MongoDB estabelecida");
    })
    .catch((error) => {
      console.error("Erro ao conectar ao MongoDB:", error.message);
    });

  return mongoose.connection;
}

export default conectaDbConnection;
