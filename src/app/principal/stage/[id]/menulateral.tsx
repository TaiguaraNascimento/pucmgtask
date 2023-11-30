import MenuItem from "./MenuItem";
import style from "./stage.module.css";

export default function MenuLateral() {
  return (
    <div className={style.MenuLateral}>
      <MenuItem titulo="Dados Pessoais" link="/principal/stage/1" imagem={1} />
      <MenuItem titulo="Dependentes" link="/principal/stage/1" imagem={2} />
      <MenuItem
        titulo="Rendimentos tributáveis"
        link="/principal/stage/1"
        imagem={3}
      />
      <MenuItem
        titulo="Rendimentos isentos e não tributáveis"
        link="/principal/stage/1"
        imagem={4}
      />
      <MenuItem
        titulo="Pagamentos efetuados"
        link="/principal/stage/1"
        imagem={5}
      />
      <MenuItem
        titulo="Doações efetuadas"
        link="/principal/stage/1"
        imagem={6}
      />
      <MenuItem titulo="Bens e direitos" link="/principal/stage/1" imagem={2} />
      <MenuItem
        titulo="Dívidas e onus reais"
        link="/principal/stage/1"
        imagem={7}
      />
    </div>
  );
}
