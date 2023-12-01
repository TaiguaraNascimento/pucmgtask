import styles from "../../ui/principal/principal.module.css";
import Titulo from "@/app/ui/principal/titulos/titulos";

import { fetchDependentes } from "@/app/api/conexao/fetches/fetchDependentes";
import LinkBotao from "@/app/ui/visual/LinkBotao/linkbotao";

export default async function Dependentes() {
  const dependentes = await fetchDependentes();

  return (
    <div>
      <div className={styles.RowContent}>
        <Titulo texto="Dependentes" />
      </div>
      <div className={styles.RowContent}>
        <table className={styles.TabelaDeDados}>
          <thead>
            <tr>
              <td>Nome</td>
              <td>CPF</td>
              <td>Data de Nascimento</td>
              <td>Tipo de Relação</td>
              <td>Ações</td>
            </tr>
          </thead>

          <tbody>
            {dependentes.map((dependente) => (
              <tr key={dependente.id}>
                <td>{dependente.nome}</td>
                <td>{dependente.cpf}</td>
                <td>{dependente.data_de_nascimento}</td>
                <td>{dependente.tipo_de_relacao}</td>

                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.RowContent}>
        <LinkBotao
          href="./dependentes/cadastrar"
          text="Nova solicitação de documentos"
        />
      </div>
    </div>
  );
}
