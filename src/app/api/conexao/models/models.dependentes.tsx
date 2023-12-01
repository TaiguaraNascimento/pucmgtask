import mongoose from "mongoose";

const { Schema } = mongoose;

const dependentesSchema = new Schema(
  {
    nome: { type: String },
    cpf: { type: String },
    data_de_nascimento: { type: String },
    tipo_de_relacao: { type: String },
  },

  { timestamps: true }
);

export default mongoose.models.dependentes ||
  mongoose.model("Dependentes", dependentesSchema);
