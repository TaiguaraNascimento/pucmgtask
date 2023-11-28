import Contribuintes from "./models";
import connectToDB from "../utils/utils";

export const fetchContribuintes = async () => {
  try {
    connectToDB();
    const contribuintes = await Contribuintes.find();
    return contribuintes;
  } catch (erro) {
    console.log(erro);
    throw new Error("Inferno ta dando erro");
  }
};
