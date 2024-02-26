class Usuario{
    static async listarUsuario (req, res) {
        try{ 

        }catch(error){
            res.status(500).json({message: `${error.message} + `})
        }
    }
}