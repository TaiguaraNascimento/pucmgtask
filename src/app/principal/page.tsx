import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Titulo from "../ui/principal/titulos/titulos";

import Image from "next/image";
import pucmg from "../../../public/imagens/logotipo_puc.jpg";

import styles from "../ui/principal/principal.module.css";

export default async function Principal() {
  const session = getServerSession();

  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <Titulo texto="Home: Projeto de conclusão de curso" />

      <div className={styles.conteudorow}>
        <div className={styles.espaco1}>
          <p>
            Página do projeto de conclusão de curso da Pós graduação em
            Engenharia de Software da PUC-MG.
          </p>
          <p>
            <b>Aluno:</b> Taiguara Pires do Nascimento
          </p>
          <h3>Tecnologias adotadas:</h3>

          <table className={styles.tabelabasica}>
            <thead>
              <tr>
                <td>Aspecto</td>
                <td>Tecnologias</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={5}>Front-end</td>
                <td>HTML/CSS</td>
              </tr>
              <tr>
                <td>NextJs</td>
              </tr>
              <tr>
                <td>JavaScript</td>
              </tr>
              <tr>
                <td>Typescript</td>
              </tr>
              <tr>
                <td>SCSS (pré processador)</td>
              </tr>

              <tr>
                <td rowSpan={5}>Back-end</td>
                <td>NodeJs</td>
              </tr>
              <tr>
                <td>NextJs</td>
              </tr>

              <tr>
                <td>Mongoose</td>
              </tr>

              <tr>
                <td>Next-Auth</td>
              </tr>
              <tr>
                <td>Argon2 Encrypter</td>
              </tr>

              <tr>
                <td>Banco de Dados</td>

                <td>MongoDB (atlas/cloud)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.espaco2}>
          <Image
            src={pucmg}
            alt="Logotipo da PUC-Mg"
            height={300}
            width={340}
          />
        </div>
      </div>
    </>
  );
}
