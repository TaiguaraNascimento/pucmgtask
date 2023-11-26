import MenuItem from "./MenuItem";

import styles from "./LeftMenu.module.css";

export default function LeftMenu() {
  return (
    <>
      <div className={styles.menu_lateral}>
        <div className="titulo_menu">Opções</div>
        <MenuItem link="" item="Lista de Solicitação de Documentos" />
        <MenuItem link="" item="Estatísticas de Entrega de Documentos" />
        <MenuItem link="" item="Dados para Declaração de IRPF" />
        <MenuItem link="exportar" item="Exportar papéis de trabalho" />
        <MenuItem link="" item="Pontos de Revisão do Projeto" />
        <MenuItem link="" item="Exportar arquivo IRPF" />
        <MenuItem link="" item="Autoria" />
      </div>
    </>
  );
}
