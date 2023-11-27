import Image from "next/image";

import logotipo from "../../../public/imagens/logotipo.png";

export default function Logotipo() {
  const y = 40;
  const x = 148;

  return (
    <>
      <Image src={logotipo} width={x} height={y} alt="Grant Thornton" />
    </>
  );
}
