import Titulo from "@/app/ui/principal/titulos/titulos";
import Image from "next/image";
import logopuc from "../../../../public/imagens/logotipo_puc.jpg";

export default function PontosRevisao() {
  return (
    <>
      <Titulo texto="Pontos de Revisão" />
      <p>
        {" "}
        Essa função não será implementada para este projeto de conclusão de
        curso.
      </p>

      <Image src={logopuc} alt="Logotipo da PUC-Mg" height={300} width={340} />
    </>
  );
}
