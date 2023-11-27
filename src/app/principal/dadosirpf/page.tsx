import { fetchContribuintes } from "@/app/api/conexao/data";
import styles from "../../ui/principal/principal.module.css";
import Titulo from "@/app/ui/principal/titulos/titulos";

export default async function DadosIRPF() {
  return (
    <div>
      <Titulo texto="Cadastro de Contribuintes" />

      <table className={styles.TabelaDeDados}>
        <thead>
          <tr>
            <td>Nome</td>
            <td>CPF</td>
            <td>Data de Nascimento</td>
            <td>Celular</td>
            <td>Email</td>
            <td>Endereço</td>
            <td>Número</td>
            <td>CEP</td>
            <td>Bairro</td>
            <td>Cidade</td>
            <td>Estado</td>
            <td>País</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nome</td>
            <td>CPF</td>
            <td>Data de Nascimento</td>
            <td>Celular</td>
            <td>Email</td>
            <td>Endereço</td>
            <td>Número</td>
            <td>CEP</td>
            <td>Bairro</td>
            <td>Cidade</td>
            <td>Estado</td>
            <td>País</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
