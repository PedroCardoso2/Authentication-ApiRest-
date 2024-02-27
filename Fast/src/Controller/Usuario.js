import user from "../models/UserModel.js"

class Usuario{
    static async listarUsuario (req, res) {
        try{ 
            const listaUsuarios = await user.find({});
            res.status(200).json(listaUsuarios);
        }catch(error){
            res.status(500).json({message: `${error.message} + `})
        }
    }
}


export default Usuario;