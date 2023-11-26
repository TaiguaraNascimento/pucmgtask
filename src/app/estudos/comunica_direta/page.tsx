/* Estudando sobre comunicação entre diversos compontes 

a primeira forma de passar conteúdo é usando props

como funcionam as formas de chamar uma ação


*/

"use client";

import Pai from "./Pai";

export default function direta() {
  function testeFuncao() {
    console.log("Executando ação");
  }

  function showOrigin(button: string) {
    console.log(button);
  }

  return (
    <div>
      <h1>
        <Pai familia="Nascimento" />
      </h1>
      <div>
        <button onClick={testeFuncao}>Testar</button>
        <button
          onClick={function () {
            console.log("Outra forma de exibir");
          }}
        >
          Opção II
        </button>
        <button onClick={() => console.log("terceira forma")}>Testar</button>
        <button onClick={showOrigin("botao 6")}>Testar</button>
      </div>
    </div>
  );
}
