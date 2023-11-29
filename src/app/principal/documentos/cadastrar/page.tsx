"use client";

import styles from "@/app/ui/estilos/forms.module.css";
import Titulo from "@/app/ui/principal/titulos/titulos";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ComboboxContribuintes from "@/app/ui/principal/fields/ComboboxContribuintes";

export default function Documentos() {
  const [data_de_solicitacao, setdata_de_solicitacao] = useState("");
  const [titular, settitular] = useState("");
  const [area, setarea] = useState("");
  const [descricao, setdescricao] = useState("");
  const [empresa, setempresa] = useState("");
  const [deadling, setdeadling] = useState("");
  const [prioridade, setprioridade] = useState("");
  const [data_da_entrega, setdata_da_entrega] = useState("");
  const [classificacao, setclassificacao] = useState("");
  const [status, setstatus] = useState("");
  const [comentarios, setcomentarios] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !nome ||
      !cpf ||
      !data_de_nascimento ||
      !email ||
      !celular ||
      !endereco ||
      !endereco_num ||
      !endereco_cep ||
      !endereco_bairro ||
      !endereco_cidade ||
      !endereco_estado ||
      !endereco_pais ||
      !titulo_de_eleitor ||
      !alteracao_de_endereco
    ) {
      alert("Os campos são obrigatórios");
    } else {
      try {
        const res = await fetch("/api/documentos", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            data_de_solicitacao,
            titular,
            area,
            descricao,
            empresa,
            deadling,
            prioridade,
            data_da_entrega,
            classificacao,
            status,
            comentarios,
          }),
        });

        if (res.ok) {
          router.push("/principal/documentos");
        } else {
          throw new Error("Erro ao cadastrar os dados");
        }
      } catch (error) {
        console.log("Erro ao enviar dados para cadastro de documento!", error);
      }
    }
  };

  return (
    <div>
      <Titulo texto="Realizar nova solicitação de documentos" />

      <form onSubmit={handleSubmit}>
        <div className={styles.Forms}>
          <div className={styles.Row}>
            <div className={styles.Campo}>
              <label>Data de Solicitação</label>
              <input
                className={styles.InputBox}
                onChange={(e) => setdata_de_solicitacao(e.target.value)}
                value={data_de_solicitacao}
                type="text"
                placeholder="data_de_solicitacao"
              />
            </div>
            <div className={styles.Campo}>
              <label>Titular</label>

              <ComboboxContribuintes
                onChange={(e) => settitular(e.target.value)}
                classname={styles.InputBox}
                variavel={titular}
              />
            </div>
          </div>

          <div className={styles.Row}>
            <div className={styles.Campo}>
              <label>Area</label>
              <input
                className={styles.InputBox}
                onChange={(e) => setarea(e.target.value)}
                value={area}
                type="text"
                placeholder="area"
              />
            </div>
            <div className={styles.Campo}>
              <label>Descrição</label>
              <input
                className={styles.InputBox}
                onChange={(e) => setdescricao(e.target.value)}
                value={descricao}
                type="text"
                placeholder="descricao"
              />
            </div>

            <div className={styles.Campo}>
              <label>Empresa</label>
              <input
                className={styles.InputBox}
                onChange={(e) => setempresa(e.target.value)}
                value={empresa}
                type="text"
                placeholder="empresa"
              />
            </div>
          </div>

          <div className={styles.Row}>
            <div className={styles.Campo}>
              <label>Deadline</label>

              <input
                className={styles.InputBox}
                onChange={(e) => setdeadling(e.target.value)}
                value={deadling}
                type="text"
                placeholder="deadling"
              />
            </div>
            <div className={styles.Campo}>
              <label>Prioridade</label>
              <input
                className={styles.InputBox}
                onChange={(e) => setprioridade(e.target.value)}
                value={prioridade}
                type="text"
                placeholder="prioridade"
              />
            </div>
            <div className={styles.Campo}>
              <label>Data da Entrega</label>

              <input
                className={styles.InputBox}
                onChange={(e) => setdata_da_entrega(e.target.value)}
                value={data_da_entrega}
                type="text"
                placeholder="data_da_entrega"
              />
            </div>
          </div>

          <div className={styles.Row}>
            <div className={styles.Campo}>
              <label>Classificação</label>
              <input
                className={styles.InputBox}
                onChange={(e) => setclassificacao(e.target.value)}
                value={classificacao}
                type="text"
                placeholder="classificacao"
              />
            </div>
            <div className={styles.Campo}>
              <label>Status</label>

              <input
                className={styles.InputBox}
                onChange={(e) => setstatus(e.target.value)}
                value={status}
                type="text"
                placeholder="status"
              />
            </div>

            <div className={styles.Campo}>
              <label>Comentários</label>

              <input
                className={styles.InputBox}
                onChange={(e) => setcomentarios(e.target.value)}
                value={comentarios}
                type="text"
                placeholder="comentarios"
              />
            </div>
          </div>

          <div className={styles.Row}>
            <div className={styles.Campo}>
              <button className={styles.Button} type="submit">
                Cadastrar Documento
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
