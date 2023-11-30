import styles from "../../ui/principal/principal.module.css";
import Titulo from "@/app/ui/principal/titulos/titulos";
import { fetchDocumentos } from "@/app/api/conexao/fetches/fetch.documentos";
import LinkBotao from "@/app/ui/visual/LinkBotao/linkbotao";

export default async function Documentos() {
  const documentos = await fetchDocumentos();

  return (
    <div>
      <div className={styles.RowContent}>
        <Titulo texto="Solicitação de documentos" />
      </div>
      <div className={styles.RowContent}>
        <table className={styles.TabelaDeDados}>
          <thead>
            <tr>
              <td>Data de Solicitação</td>
              <td>Titular</td>
              <td>Area</td>
              <td>Descrição</td>
              <td>Empresa</td>
              <td>Deadline</td>
              <td>Prioridade</td>
              <td>Data da Entrega</td>
              <td>Classificação</td>
              <td>Status</td>
              <td>Comentários</td>
              <td>Ações</td>
            </tr>
          </thead>

          <tbody>
            {documentos.map((documento) => (
              <tr key={documento.id}>
                <td>{documento.data_da_solicitacao}</td>
                <td>{documento.titular}</td>
                <td>{documento.area}</td>
                <td>{documento.descricao}</td>
                <td>{documento.empresa}</td>
                <td>{documento.deadling}</td>
                <td>{documento.prioridade}</td>
                <td>{documento.data_da_entrega}</td>
                <td>{documento.classificacao}</td>
                <td>{documento.status}</td>
                <td>{documento.comentarios}</td>

                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.RowContent}>
        <LinkBotao
          href="./documentos/cadastrar"
          text="Nova solicitação de documentos"
        />
      </div>
    </div>
  );
}
