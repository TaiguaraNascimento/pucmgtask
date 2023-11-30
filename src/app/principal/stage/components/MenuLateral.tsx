"use client";

import MenuItem from "./MenuItem";
import style from "./components.module.css";

export default function MenuLateral(prpos) {
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
        anotacao={true}
      />
      <MenuItem
        titulo="Doações efetuadas"
        link="/principal/stage/1"
        imagem={6}
        anotacao={true}
      />
      <MenuItem
        anotacao={true}
        titulo="Bens e direitos"
        link="/principal/stage/1"
        imagem={2}
      />
      <MenuItem
        titulo="Dívidas e onus reais"
        link="/principal/stage/1"
        imagem={7}
        anotacao={true}
      />
    </div>
  );
}
