import mongoose, { Schema } from "mongoose";

const contribuinteSchema = new Schema(
  {
    nome: { type: String },
    cpf: { type: String },
    data_de_nascimento: { type: String },
    celular: { type: String },
    email: { type: String },
    endereco: { type: String },
    endereco_num: { type: String },
    endereco_cep: { type: String },
    endereco_bairro: { type: String },
    endereco_cidade: { type: String },
    endereco_estado: { type: String },
    endereco_pais: { type: String },
    titulo_de_eleitor: { type: String },
    alteracao_de_endereco: { type: String },
  },
  { timestamps: true }
);

const Contribuintes =
  mongoose.models.Contribuinte ||
  mongoose.model("Contribuinte", contribuinteSchema);

export default Contribuintes;
