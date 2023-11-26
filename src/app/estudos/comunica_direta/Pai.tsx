import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <h1>Família {props.familia}</h1>
      <Filho nome="Taiguara" familia={props.familia} idade="37" />
      <Filho nome="Tania" familia={props.familia} idade="65" />
      <Filho nome="Rosival" familia={props.familia} idade="63" />
      <Filho nome="Toquinho" familia={props.familia} idade="12" />
    </div>
  );
}
