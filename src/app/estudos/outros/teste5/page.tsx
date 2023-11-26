import Titulo from "../estudos/components/Titulo";

export default function teste2() {
  return (
    <Titulo
      atributo1="Colocar primeiro atributo"
      atributo2="Segundo atributo"
      validar={true}
    />

    // É possível passar parametros que não string ou objetos colocando eles entre chaves.
  );
}
