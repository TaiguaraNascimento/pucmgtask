/*

    o uso de hashtags torna o método privado

*/
class Contato {
  #id: string;
  #nome: string;
  #telefone: string;

  constructor(id: string, nome: string, telefone: string) {
    this.#id = id;
    this.#nome = nome;
    this.#telefone = telefone;
  }

  get getId(): string {
    return this.#id;
  }
  get getNome(): string {
    return this.#nome;
  }

  get getContato(): string {
    return this.#telefone;
  }
}
