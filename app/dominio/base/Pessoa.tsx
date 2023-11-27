import Documento from "./Documento";

export default class Pessoa {
  nome: string;
  cpf: Documento;
  data_de_nascimento: string;

  constructor(nome: string, cpf: string, data_de_nascimento: string) {
    this.nome = nome;
    this.cpf = new Documento(cpf);
    this.data_de_nascimento = data_de_nascimento;
  }

  obter_data_de_nascimento(): string {
    return this.data_de_nascimento || "";
  }

  obter_data_de_nascimento_zerada(): string {
    return this.data_de_nascimento || "00000000";
  }
}
