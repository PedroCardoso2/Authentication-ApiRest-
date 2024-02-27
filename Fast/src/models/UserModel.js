import mongoose from "mongoose";

const modelUserSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, require: true },
  idade: { type: Number },
  email: { type: String, require: true },
  dataNaci: { type: String, require: true },
  senha: { type: String, require: true },
}, {versionKey: false});

const user = mongoose.model("Usuario", modelUserSchema);

export default user;
