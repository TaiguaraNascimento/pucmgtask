export default class Telefone {
  DDDI: string;
  Contato: string;

  constructor(DDD: string, contato: string) {
    this.DDDI = DDD;
    this.Contato = contato;
  }

  obter_dddi(): string {
    try {
      return this.DDDI || "";
    } catch (error) {
      return "";
    }
  }

  obter_contato(): string {
    try {
      return (
        this.Contato.replace("-", "").replace("(", "").replace(")", "") || ""
      );
    } catch (error) {
      return "";
    }
  }
}
