import { Atributo } from "caminho/do/arquivo/atributo"; // Substitua o caminho correto
import { RegiaoDoEndereco } from "caminho/do/arquivo/regiaoDoEndereco"; // Substitua o caminho correto
import { FuncoesEspeciais } from "caminho/do/arquivo/funcoesEspeciais"; // Substitua o caminho correto
import { Municipios } from "caminho/do/arquivo/municipios"; // Substitua o caminho correto

class Endereco {
  Localizacao_Do_Endereco: Atributo = new Atributo();
  TipoDeLogradouro: Atributo = new Atributo();
  Logradouro: string = "";
  Numero: string = "";
  Complemento: string = "";
  Bairro: string = "";
  UF?: Atributo = new Atributo();
  NomeDoMunicipio: string = "";
  CEP: string = "";
  Pais: Atributo = new Atributo();
  codigo_postal: string = "";
  nome_da_cidade: string = "";

  constructor(
    localizacao_do_endereco: Atributo,
    tipo_de_logradouro: Atributo,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    uf: Atributo | undefined,
    nomeDoMunicipio: string,
    cep: string,
    pais: Atributo
  ) {
    this.Localizacao_Do_Endereco = localizacao_do_endereco;
    this.TipoDeLogradouro = tipo_de_logradouro;
    this.Logradouro = logradouro;
    this.Numero = numero;
    this.Complemento = complemento;
    this.Bairro = bairro;
    this.UF = uf;

    this.atribuir_nome_da_cidade(nomeDoMunicipio);

    this.atribuir_codigo_postal(cep);

    this.Pais = pais;
  }

  private atribuir_codigo_postal(cep: string): void {
    if (this.Localizacao_Do_Endereco === RegiaoDoEndereco.ENDERECO_NO_BRASIL) {
      this.CEP = FuncoesEspeciais.atribuir_codigo_postal_limpo(cep);
    } else {
      this.codigo_postal = FuncoesEspeciais.atribuir_codigo_postal_limpo(cep);
    }
  }

  private atribuir_nome_da_cidade(nome_da_cidade: string): void {
    if (this.Localizacao_Do_Endereco === RegiaoDoEndereco.ENDERECO_NO_BRASIL) {
      this.NomeDoMunicipio =
        FuncoesEspeciais.RetiraCaracteresEspeciais(nome_da_cidade);
    } else {
      this.nome_da_cidade =
        FuncoesEspeciais.RetiraCaracteresEspeciais(nome_da_cidade);
    }
  }

  obter_codigo_do_municipio(entregar_zerado: boolean = false): string {
    if (this.Localizacao_Do_Endereco === RegiaoDoEndereco.ENDERECO_NO_BRASIL) {
      if (!this.NomeDoMunicipio) {
        return "";
      } else {
        return Municipios.obter_codigo_do_municipio(this.NomeDoMunicipio)
          .Codigo;
      }
    } else {
      return entregar_zerado ? "0000" : "9707";
    }
  }

  obter_tipo_de_logradouro(): string {
    try {
      return this.Localizacao_Do_Endereco ===
        RegiaoDoEndereco.ENDERECO_NO_BRASIL
        ? this.TipoDeLogradouro.Descricao
        : "";
    } catch {
      return "";
    }
  }

  retornar_nome_de_municipio_para_registro(): string {
    return this.Localizacao_Do_Endereco === RegiaoDoEndereco.ENDERECO_NO_BRASIL
      ? FuncoesEspeciais.RetiraCaracteresEspeciais(this.NomeDoMunicipio)
      : "";
  }

  retornar_nome_de_cidade_no_exterior(): string {
    return this.Localizacao_Do_Endereco ===
      RegiaoDoEndereco.ENDERECO_NO_EXTERIOR
      ? FuncoesEspeciais.RetiraCaracteresEspeciais(this.nome_da_cidade)
      : "";
  }

  retornar_nome_de_cidade_um_ou_outro(): string {
    return this.Localizacao_Do_Endereco ===
      RegiaoDoEndereco.ENDERECO_NO_EXTERIOR
      ? FuncoesEspeciais.RetiraCaracteresEspeciais(
          this.retornar_nome_de_cidade_no_exterior()
        )
      : FuncoesEspeciais.RetiraCaracteresEspeciais(
          this.retornar_nome_de_municipio_para_registro()
        );
  }

  obter_cep_no_brasil(entregar_zerado: boolean = true): string {
    const retorno = (): string => (entregar_zerado ? "00000000" : "        ");

    if (this.Localizacao_Do_Endereco === RegiaoDoEndereco.ENDERECO_NO_BRASIL) {
      return this.CEP || retorno();
    } else {
      return retorno();
    }
  }

  obter_codigo_postal_no_brasil_ou_exterior(
    entregar_zerado: boolean = true
  ): string {
    const retorno = (): string => (entregar_zerado ? "00000000" : "        ");

    if (
      this.Localizacao_Do_Endereco === RegiaoDoEndereco.ENDERECO_NO_EXTERIOR
    ) {
      return this.codigo_postal || retorno();
    } else {
      return this.obter_cep_no_brasil(entregar_zerado);
    }
  }

  retornar_UF_do_endereco(): string {
    return this.Localizacao_Do_Endereco === RegiaoDoEndereco.ENDERECO_NO_BRASIL
      ? this.UF?.Codigo || ""
      : "EX";
  }
}
