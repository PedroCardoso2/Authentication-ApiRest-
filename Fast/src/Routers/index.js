import express from "express";
import usuario from "./UsuarioRouter.js";

const routes = (app) => {
    app.route("/").get((req , res) => res.status(200).send("Curso Rodando"));
    
    app.use(express.json(), usuario)
    
}

export default routes;