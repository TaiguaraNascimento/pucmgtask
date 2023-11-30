import Usuario from "../models/models.usuario";
import connectToDB from "../utils/utils";

export const fetchUsuarios = async () => {
  try {
    connectToDB();
    const usuarios = await Usuario.find();
    return usuarios;
  } catch (erro) {
    console.log(erro);
    throw new Error("Não é possível retornar os usuários");
  }
};
