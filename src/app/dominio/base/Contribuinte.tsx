import Telefone from "./Telefone";
import Pessoa from "./Pessoa";
import Endereco from "./Endereco";
import Documento from "caminho/do/arquivo/documento"; // Substitua o caminho correto
import RegiaoDoEndereco from "caminho/do/arquivo/regiaoDoEndereco"; // Substitua o caminho correto

class Contribuinte extends Pessoa {
  Celular?: Telefone;
  Telefone?: Telefone;
  Email: string = "";
  Endereco?: Endereco = new Endereco();
  Conjuge?: Pessoa;

  natureza_da_ocupacao: string;
  ocupacao_principal: string;
  titulo_de_eleitor: string;

  documento_de_procurador_no_exterior: Documento;
  codigo_da_embaixada: string;

  constructor(nome: string, cPF: string, dataDeNascimento?: string) {
    super(nome, cPF, dataDeNascimento);
  }

  adicionar_conjuge(conjuge?: Pessoa): void {
    console.log(919);
    this.Conjuge = conjuge;
  }

  adicionar_conjuge_por_nome_e_cpf(nome: string, cPF: string): void {
    this.Conjuge = new Pessoa(nome, cPF, null);
  }

  obter_o_titulo_de_eleitor(): string {
    return this.Titulo_de_Eleitor || "";
  }

  possui_conjuge(): string {
    return this.Conjuge?.Nome && this.Conjuge.CPF ? "S" : "N";
  }

  adicionar_email(email: string): void {
    this.Email = email;
  }

  obter_endereco_de_email(): string {
    return this.Email || " ";
  }

  adicionar_telefone(DDD_Telefone: string, telefone: string): void {
    this.Telefone = new Telefone(DDD_Telefone, telefone);
  }

  adicionar_celular(DDD_Telefone: string, telefone: string): void {
    try {
      if (
        this.Endereco.Localizacao_Do_Endereco ===
        RegiaoDoEndereco.ENDERECO_NO_BRASIL
      ) {
        this.Celular = new Telefone(DDD_Telefone, telefone);
      }
      // else - nothing
    } catch (error) {
      // nothing
    }
  }

  adicionar_endereco(endereco: Endereco): void {
    this.Endereco = endereco;
  }

  documento_do_conjuge(): string {
    return this.Conjuge?.CPF.documento || "00000000000";
  }

  obter_natureza_da_ocupacao(): string {
    return this.Natureza_da_Ocupacao || "00";
  }

  atribuir_dados_complementares_de_contribuinte_no_exterior(
    documento_de_procurador_no_exterior: string,
    codigo_da_embaixada: string
  ): void {
    this.documento_de_procurador_no_exterior = new Documento(
      documento_de_procurador_no_exterior
    );
    this.codigo_da_embaixada = codigo_da_embaixada;
  }

  obter_codigo_da_embaixada(): string {
    try {
      return this.Endereco.Localizacao_Do_Endereco ===
        RegiaoDoEndereco.ENDERECO_NO_BRASIL
        ? "   "
        : this.codigo_da_embaixada;
    } catch (error) {
      return "   ";
    }
  }

  obter_documento_procurador_residente_no_brasil(): string {
    try {
      return this.Endereco.Localizacao_Do_Endereco ===
        RegiaoDoEndereco.ENDERECO_NO_BRASIL
        ? "           "
        : this.documento_de_procurador_no_exterior.documento || "           ";
    } catch (error) {
      return "           ";
    }
  }
}
