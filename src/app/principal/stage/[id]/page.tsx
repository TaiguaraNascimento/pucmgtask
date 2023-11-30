import Titulo from "@/app/ui/principal/titulos/titulos";
import Content from "./content";
import MenuLateral from "./menulateral";
import style from "./stage.module.css";

export default function Stage() {
  return (
    <>
      <Titulo texto="Dados para Declaração do IRPF" />
      <div className={style.Stage}>
        <div>
          <MenuLateral />
        </div>

        <div>
          <Content />
        </div>
      </div>
    </>
  );
}
