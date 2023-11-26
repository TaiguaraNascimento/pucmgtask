import mongoose from "mongoose";

const contribuintesSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      unique: false,
      min: 10,
      max: 60,
    },
    cpf: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 14,
    },
    data_de_nascimento: {
      type: Date,
      required: true,
    },
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
    alteracao_de_endereco: { type: Boolean },
  },
  { timestamps: true }
);

export const Contribuintes =
  mongoose.models.Contribuintes ||
  mongoose.model("Contribuintes", contribuintesSchema);
