"use client";

import styles from "../../../ui/estilos/forms.module.css";
import Titulo from "@/app/ui/principal/titulos/titulos";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Cadastrar() {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [data_de_nascimento, setdata_de_nascimento] = useState("");
  const [relacao, setrelacao] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !cpf || !data_de_nascimento || !relacao) {
      alert("Os campos são obrigatórios");
    } else {
      try {
        //const res = await fetch("http://localhost:3000/api/contribuintes", {

        const res = await fetch("/api/contribuintes", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            nome,
            cpf,
            data_de_nascimento,
            relacao,
          }),
        });

        if (res.ok) {
          router.push("/principal/dependentes");
        } else {
          throw new Error("O cadastro de dependentes não funcionou");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Titulo texto="Cadastro de Dependentes" />

      <form onSubmit={handleSubmit}>
        <div className={styles.Forms}>
          <div className={styles.Row}>
            <div className={styles.Campo}>
              <label>Nome do Dependente</label>
              <input
                className={styles.InputBox}
                onChange={(e) => setNome(e.target.value)}
                value={nome}
                type="text"
                placeholder="nome"
              />
            </div>
            <div className={styles.Campo}>
              <label>CPF</label>
              <input
                className={styles.InputBox}
                onChange={(e) => setCPF(e.target.value)}
                value={cpf}
                type="text"
                placeholder="cpf"
              />
            </div>
          </div>

          <div className={styles.Row}>
            <div className={styles.Campo}>
              <label>Data de Nascimento</label>
              <input
                className={styles.InputBox}
                onChange={(e) => setdata_de_nascimento(e.target.value)}
                value={data_de_nascimento}
                type="text"
                placeholder="data_de_nascimento"
              />
            </div>

            <div className={styles.Campo}>
              <label>Tipo de Relação</label>
              <input
                className={styles.InputBox}
                onChange={(e) => setrelacao(e.target.value)}
                value={relacao}
                type="text"
                placeholder="celular"
              />
            </div>
          </div>

          <div className={styles.Row}>
            <div className={styles.Campo}>
              <button className={styles.Button} type="submit">
                Cadastrar Dependente
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
