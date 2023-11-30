"use client";

import MenuItem from "./menuitem/menuitem";
import HeaderMenu from "./headermenu/headermenu";

export default function Sidebar() {
  return (
    <div>
      <HeaderMenu />
      <MenuItem link="dadosirpf" item="Dados para Declaração de IRPF" />

      <MenuItem link="documentos" item="Lista de Solicitação de Documentos" />

      <MenuItem
        link="estatisticas"
        item="Estatísticas de Entrega de Documentos"
      />
      <MenuItem link="exportar" item="Exportar arquivo IRPF" />
      <MenuItem link="download" item="Exportar papéis de trabalho" na={true} />
      <MenuItem
        link="pontosrevisao"
        item="Pontos de Revisão do Projeto"
        na={true}
      />
    </div>
  );
}
