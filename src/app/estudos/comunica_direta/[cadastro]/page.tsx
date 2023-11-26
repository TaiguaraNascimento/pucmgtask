/*
vamos estudar a forma de capturar dados da url
dinamic routers use square brackets
*/

// see this https://www.youtube.com/watch?v=UP8s2_8jxIQ
// seet https://www.youtube.com/watch?v=1n7slbDB1bQ
//import { useRouter } from "next/router";

type Params = {
  params: {
    cadastro: string;
    idade: string;
  };
};

export default function direta({ params: { cadastro, idade } }: Params) {
  // const router = useRouter();
  // const rota = router.query.cadastro;

  return (
    <div>
      <h1>Capturando dados da rota</h1>
      <p>Na url vemos a rota dinamica {cadastro} sendo exibida!!!!</p>
      <p>Idade: {idade} </p>
    </div>
  );
}
