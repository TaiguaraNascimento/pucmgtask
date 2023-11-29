import LinkBotao from "@/app/ui/visual/LinkBotao/linkbotao";
import { fetchContribuintes } from "../../api/conexao/fetches/fetch.contribuintes";
import styles from "../../ui/principal/principal.module.css";
import Titulo from "@/app/ui/principal/titulos/titulos";
import RemoveBtn from "./deletar/deletar";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

export default async function DadosIRPF() {
  const contribuintes = await fetchContribuintes();

  return (
    <div>
      <div className={styles.RowContent}>
        <Titulo texto="Cadastro de Contribuintes" />
      </div>
      <div className={styles.RowContent}>
        <table className={styles.TabelaDeDados}>
          <thead>
            <tr>
              <td>Nome</td>
              <td>CPF</td>
              <td>Data de Nascimento</td>
              <td>Email</td>
              <td>Cidade</td>
              <td>Estado</td>
              <td>País</td>
              <td>Ações</td>
            </tr>
          </thead>
          <tbody>
            {contribuintes.map((contribuinte) => (
              <tr key={contribuinte.id}>
                <td>{contribuinte.nome}</td>
                <td>{contribuinte.cpf}</td>
                <td>{contribuinte.data_de_nascimento}</td>
                <td>{contribuinte.email}</td>
                <td>{contribuinte.endereco_cidade}</td>
                <td>{contribuinte.endereco_estado}</td>
                <td>{contribuinte.endereco_pais}</td>
                <td>
                  <RemoveBtn id={contribuinte._id} />
                  <Link href={`/principal/dadosirpf/${contribuinte.id}/edit`}>
                    <HiPencilAlt size={24} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.RowContent}>
        <LinkBotao
          href="./dadosirpf/cadastrar"
          text="Cadastrar Contribuintes"
        />
      </div>
    </div>
  );
}
