export default class Documento {
  documento!: string;

  constructor(documento: string) {
    this.definir_documento(documento);
  }

  definir_documento(documento: string): void {
    if (documento == "") {
      this.documento = "";
    } else {
      this.documento = this.limpar_numero_de_documento(documento);
    }
  }

  private limpar_numero_de_documento(documento: string): string {
    const caracteres = [".", "/", "-", "_", ":", " ", "cnpj", "cpf"];

    documento = documento.toLowerCase();

    caracteres.forEach((caracter) => {
      documento = documento.replace(caracter, "");
    });

    return documento;
  }
}
