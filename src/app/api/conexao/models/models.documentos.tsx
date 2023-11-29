import mongoose from "mongoose";

const documentosSchema = new mongoose.Schema(
  {
    data_da_solicitacao: { type: String, required: false },
    titular: { type: String, required: false },
    area: { type: String, required: false },
    descricao: { type: String, required: false },
    empresa: { type: String, required: false },
    deadling: { type: String, required: false },
    prioridade: { type: String, required: false },
    data_da_entrega: { type: String, required: false },
    classificacao: { type: String, required: false },
    status: { type: String, required: false },
    comentarios: { type: String, required: false },
  },
  { timestamps: true }
);

const Documentos =
  mongoose.models.Documento || mongoose.model("Documento", documentosSchema);

export default Documentos;
