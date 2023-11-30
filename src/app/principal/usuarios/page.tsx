import styles from "../../ui/principal/principal.module.css";
import Titulo from "@/app/ui/principal/titulos/titulos";

import { fetchUsuarios } from "@/app/api/conexao/fetches/fetch.usuarios";

import LinkBotao from "@/app/ui/visual/LinkBotao/linkbotao";

export default async function Usuarios() {
  const usuarios = await fetchUsuarios();

  return (
    <div>
      <div className={styles.RowContent}>
        <Titulo texto="Usuários Cadastrados" />
      </div>
      <div className={styles.RowContent}>
        <table className={styles.TabelaDeDados}>
          <thead>
            <tr>
              <td>Usuário</td>
              <td>Senha</td>
            </tr>
          </thead>

          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.email}</td>
                <td>*********************************</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
