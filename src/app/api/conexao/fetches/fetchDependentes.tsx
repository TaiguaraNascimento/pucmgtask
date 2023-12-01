import Dependentes from "../models/models.dependentes";
import connectToDB from "../utils/utils";

export const fetchDependentes = async () => {
  try {
    connectToDB();
    const dependentes = await Dependentes.find();
    return dependentes;
  } catch (erro) {
    console.log(erro);
    throw new Error("Não é possível retornar os dependentes");
  }
};
