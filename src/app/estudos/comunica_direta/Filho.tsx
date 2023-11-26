import Link from "next/link";

export default function Filho(props) {
  const linkTemp = `http://localhost:3000/comunica_direta/${props.nome}?idade=${props.idade}`;

  return (
    <>
      <div>
        <a href={linkTemp}>
          <span>{props.nome} </span>
          <span>{props.familia}</span>
          <span>Idade: {props.idade}</span>
        </a>
      </div>
    </>
  );
}
