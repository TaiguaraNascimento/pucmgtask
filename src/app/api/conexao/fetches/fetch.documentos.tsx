import Documentos from "../models/models.documentos";
import connectToDB from "../utils/utils";

export const fetchDocumentos = async () => {
  try {
    connectToDB();
    const documentos = await Documentos.find();
    return documentos;
  } catch (erro) {
    console.log(erro);
    throw new Error("Não é possível retornar os documentos");
  }
};
