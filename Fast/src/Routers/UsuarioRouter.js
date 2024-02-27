import Usuario from "../Controller/Usuario.js";
import express  from "express";


const router = express.Router();

router.get("/", Usuario.listarUsuario);

export default router;

