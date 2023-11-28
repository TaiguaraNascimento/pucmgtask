"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../../ui/estilos/forms.module.css";
import Titulo from "@/app/ui/principal/titulos/titulos";

export default function EditarContribuinte({
  id,
  nome,
  cpf,
  data_de_nascimento,
  celular,
  email,
  endereco,
  endereco_num,
  endereco_cep,
  endereco_bairro,
  endereco_cidade,
  endereco_estado,
  endereco_pais,
  titulo_de_eleitor,
  alteracao_de_endereco,
}) {
  const [new_id, set_id] = useState(id);
  const [new_nome, set_nome] = useState(nome);
  const [new_cpf, set_cpf] = useState(cpf);
  const [new_data_de_nascimento, set_data_de_nascimento] =
    useState(data_de_nascimento);
  const [new_celular, set_celular] = useState(celular);
  const [new_email, set_email] = useState(email);
  const [new_endereco, set_endereco] = useState(endereco);
  const [new_endereco_num, set_endereco_num] = useState(endereco_num);
  const [new_endereco_cep, set_endereco_cep] = useState(endereco_cep);
  const [new_endereco_bairro, set_endereco_bairro] = useState(endereco_bairro);
  const [new_endereco_cidade, set_endereco_cidade] = useState(endereco_cidade);
  const [new_endereco_estado, set_endereco_estado] = useState(endereco_estado);
  const [new_endereco_pais, set_endereco_pais] = useState(endereco_pais);
  const [new_titulo_de_eleitor, set_titulo_de_eleitor] =
    useState(titulo_de_eleitor);
  const [new_alteracao_de_endereco, set_alteracao_de_endereco] = useState(
    alteracao_de_endereco
  );

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (true) {
      console.log("COMPONENTE:");
      console.log(
        "Dados do COntribuinte: ========================================================"
      );

      console.log(nome + new_nome);

      console.log(
        "==============================================================================="
      );
    }

    try {
      const res = await fetch(`http://localhost:3000/api/contribuintes/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          new_nome,
          new_cpf,
          new_data_de_nascimento,
          new_celular,
          new_email,
          new_endereco,
          new_endereco_num,
          new_endereco_cep,
          new_endereco_bairro,
          new_endereco_cidade,
          new_endereco_estado,
          new_endereco_pais,
          new_titulo_de_eleitor,
          new_alteracao_de_endereco,
        }),
      });

      if (!res.ok) {
        throw new Error("Não foi possível atualizar o contribuinte");
      }

      console.log("Chega aqui");
      router.refresh();
      router.push("/principal/dadosirpf");
      // router.push(`/app/contribuintes/${id}`);
    } catch (error) {
      console.log("Erro aqui!" + error);
    }
  };

  /*

<div className={styles.Row}>
  <div className={styles.Campo}>
    {nome} / {new_nome}
  </div>
</div>

*/

  return (
    <div>
      <Titulo texto="Atualizar Cadastro de Contribuintes" />

      <form onSubmit={handleSubmit}>
        <div className={styles.Forms}>
          <div className={styles.Row}>
            <div className={styles.Campo}>
              <label>Nome do Contribuinte</label>
              <input
                className={styles.InputBox}
                onChange={(e) => set_nome(e.target.value)}
                value={new_nome}
                type="text"
                placeholder={new_nome}
              />
            </div>
            <div className={styles.Campo}>
              <label>CPF</label>
              <input
                className={styles.InputBox}
                onChange={(e) => set_cpf(e.target.value)}
                value={new_cpf}
                type="text"
                placeholder={new_cpf}
              />
            </div>
          </div>

          <div className={styles.Row}>
            <div className={styles.Campo}>
              <label>Data de Nascimento</label>
              <input
                className={styles.InputBox}
                onChange={(e) => set_data_de_nascimento(e.target.value)}
                value={new_data_de_nascimento}
                type="text"
                placeholder={new_data_de_nascimento}
              />
            </div>

            <div className={styles.Campo}>
              <label>E-mail</label>
              <input
                className={styles.InputBox}
                onChange={(e) => set_email(e.target.value)}
                value={new_email}
                type="text"
                placeholder={new_email}
              />
            </div>

            <div className={styles.Campo}>
              <label>Celular</label>
              <input
                className={styles.InputBox}
                onChange={(e) => set_celular(e.target.value)}
                value={new_celular}
                type="text"
                placeholder={new_celular}
              />
            </div>
          </div>

          <div className={styles.Row}>
            <div className={styles.Campo}>
              <label>Endereço</label>
              <input
                className={styles.InputBox}
                onChange={(e) => set_endereco(e.target.value)}
                value={new_endereco}
                type="text"
                placeholder={new_endereco}
              />
            </div>

            <div className={styles.Campo}>
              <label>Número</label>
              <input
                className={styles.InputBox}
                onChange={(e) => set_endereco_num(e.target.value)}
                value={new_endereco_num}
                type="text"
                placeholder={new_endereco_num}
              />
            </div>

            <div className={styles.Campo}>
              <label>CEP</label>
              <input
                className={styles.InputBox}
                onChange={(e) => set_endereco_cep(e.target.value)}
                value={new_endereco_cep}
                type="endereco_cep"
                placeholder={new_endereco_cep}
              />
            </div>

            <div className={styles.Campo}>
              <label>Bairro</label>
              <input
                className={styles.InputBox}
                onChange={(e) => set_endereco_bairro(e.target.value)}
                value={new_endereco_bairro}
                type="text"
                placeholder={new_endereco_bairro}
              />
            </div>
          </div>

          <div className={styles.Row}>
            <div className={styles.Campo}>
              <label>Cidade</label>
              <input
                onChange={(e) => set_endereco_cidade(e.target.value)}
                value={new_endereco_cidade}
                className={styles.InputBox}
                type="text"
                placeholder={new_endereco_cidade}
              />
            </div>

            <div className={styles.Campo}>
              <label>Estado</label>
              <input
                onChange={(e) => set_endereco_estado(e.target.value)}
                className={styles.InputBox}
                value={new_endereco_estado}
                type="text"
                placeholder={new_endereco_estado}
              />
            </div>

            <div className={styles.Campo}>
              <label>Pais</label>
              <input
                onChange={(e) => set_endereco_pais(e.target.value)}
                className={styles.InputBox}
                value={new_endereco_pais}
                type="text"
                placeholder={new_endereco_pais}
              />
            </div>
          </div>
          <div className={styles.Row}>
            <div className={styles.Campo}>
              <label>Titulo de Eleitor</label>
              <input
                onChange={(e) => set_titulo_de_eleitor(e.target.value)}
                value={new_titulo_de_eleitor}
                type="text"
                className={styles.InputBox}
                placeholder={new_titulo_de_eleitor}
              />
            </div>

            <div className={styles.Campo}>
              <label>Alteação de Endereço</label>
              <input
                onChange={(e) => set_alteracao_de_endereco(e.target.value)}
                value={new_alteracao_de_endereco}
                type="text"
                className={styles.InputBox}
                placeholder={new_alteracao_de_endereco}
              />
            </div>
          </div>
          <div className={styles.Row}>
            <div className={styles.Campo}>
              <button className={styles.Button} type="submit">
                Atualizar Contribuinte!
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
