import express from "express";
import conectaDbConnection from "./Db/DbConnection.js";
import routes from "./Routers/index.js";

const conexao = await conectaDbConnection();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");
})


const app = express();  
routes(app);

export default app;


