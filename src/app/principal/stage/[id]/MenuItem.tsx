import { FcBusinessman } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcBearish } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";

import { FcLike } from "react-icons/fc";

import style from "./stage.module.css";

function ImagemComponent(imagem) {
  switch (imagem) {
    case 1:
      return <FcBusinessman size={24} alt="IRPF" />;
    case 2:
      return <FcConferenceCall size={24} alt="IRPF" />;
    case 3:
      return <FcBullish size={24} alt="IRPF" />;
    case 4:
      return <FcBullish size={24} alt="IRPF" />;
    case 5:
      return <FcBearish size={24} alt="IRPF" />;
    case 6:
      return <FcMoneyTransfer size={24} alt="IRPF" />;
    case 7:
      return <FcLike size={24} alt="IRPF" />;
  }
}

export default function MenuItem(props) {
  const acao = props.acao;
  const titulo = props.titulo;
  const imagem = props.imagem;

  return (
    <div className={style.MenuItem} onClick={acao}>
      <div className={style.imagem}>{ImagemComponent(imagem)}</div>
      <div className={style.texto}>{titulo}</div>
    </div>
  );
}
