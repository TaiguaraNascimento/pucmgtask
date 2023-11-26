import Header from "@/componentes/estrutura/Header";
import Stage from "@/componentes/estrutura/Stage";
import Content from "@/componentes/estrutura/Content";
import LeftMenu from "@/componentes/leftmenu/LeftMenu";
import AreaDeTrabalho from "@/componentes/estrutura/Desktop";

export default function Exportar() {
  return (
    <>
      <Stage>
        <Header />
        <Content>
          <LeftMenu />
          <AreaDeTrabalho />
        </Content>
      </Stage>
    </>
  );
}
