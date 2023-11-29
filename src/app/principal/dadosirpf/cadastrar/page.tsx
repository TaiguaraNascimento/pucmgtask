"use client";

import styles from "../../../ui/estilos/forms.module.css";
import Titulo from "@/app/ui/principal/titulos/titulos";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Cadastrar() {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [data_de_nascimento, setdata_de_nascimento] = useState("");
  const [email, setemail] = useState("");
  const [celular, setcelular] = useState("");
  const [endereco, set_endereco] = useState("");
  const [endereco_num, set_endereco_num] = useState("");
  const [endereco_cep, set_endereco_cep] = useState("");
  const [endereco_bairro, set_endereco_bairro] = useState("");
  const [endereco_cidade, set_endereco_cidade] = useState("");
  const [endereco_estado, set_endereco_estado] = useState("");
  const [endereco_pais, set_endereco_pais] = useState("");
  const [titulo_de_eleitor, set_titulo_de_eleitor] = useState("");
  const [alteracao_de_endereco, set_alteracao_de_endereco] = useState("");

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
            email,
            celular,
            endereco,
            endereco_num,
            endereco_cep,
            endereco_bairro,
            endereco_cidade,
            endereco_estado,
            endereco_pais,
            titulo_de_eleitor,
            alteracao_de_endereco,
          }),
        });

        if (res.ok) {
          router.push("/principal/dadosirpf");
        } else {
          throw new Error("O cadastro do usuário não funcionou");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Titulo texto="Cadastro de Contribuintes" />

      <form onSubmit={handleSubmit}>
        <div className={styles.Forms}>
          <div className={styles.Row}>
            <div className={styles.Campo}>
              <label>Nome do Contribuinte</label>
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
              <label>E-mail</label>
              <input
                className={styles.InputBox}
                onChange={(e) => setemail(e.target.value)}
                value={email}
                type="text"
                placeholder="email"
              />
            </div>
            <div className={styles.Campo}>
              <label>Celular</label>
              <input
                className={styles.InputBox}
                onChange={(e) => setcelular(e.target.value)}
                value={celular}
                type="text"
                placeholder="celular"
              />
            </div>
          </div>

          <div className={styles.Row}>
            <div className={styles.Campo}>
              <label>Endereço</label>
              <input
                className={styles.InputBox}
                onChange={(e) => set_endereco(e.target.value)}
                value={endereco}
                type="text"
                placeholder="endereco"
              />
            </div>

            <div className={styles.Campo}>
              <label>Número</label>
              <input
                className={styles.InputBox}
                onChange={(e) => set_endereco_num(e.target.value)}
                value={endereco_num}
                type="text"
                placeholder="endereco_num"
              />
            </div>

            <div className={styles.Campo}>
              <label>CEP</label>
              <input
                className={styles.InputBox}
                onChange={(e) => set_endereco_cep(e.target.value)}
                value={endereco_cep}
                type="endereco_cep"
                placeholder="email"
              />
            </div>

            <div className={styles.Campo}>
              <label>Bairro</label>
              <input
                className={styles.InputBox}
                onChange={(e) => set_endereco_bairro(e.target.value)}
                value={endereco_bairro}
                type="text"
                placeholder="endereco_bairro"
              />
            </div>
          </div>

          <div className={styles.Row}>
            <div className={styles.Campo}>
              <label>Cidade</label>
              <input
                onChange={(e) => set_endereco_cidade(e.target.value)}
                value={endereco_cidade}
                className={styles.InputBox}
                type="text"
                placeholder="endereco_cidade"
              />
            </div>

            <div className={styles.Campo}>
              <label>Estado</label>
              <input
                onChange={(e) => set_endereco_estado(e.target.value)}
                className={styles.InputBox}
                value={endereco_estado}
                type="text"
                placeholder="endereco_estado"
              />
            </div>

            <div className={styles.Campo}>
              <label>Pais</label>
              <input
                onChange={(e) => set_endereco_pais(e.target.value)}
                className={styles.InputBox}
                value={endereco_pais}
                type="text"
                placeholder="endereco_pais"
              />
            </div>
          </div>
          <div className={styles.Row}>
            <div className={styles.Campo}>
              <label>Titulo de Eleitor</label>
              <input
                onChange={(e) => set_titulo_de_eleitor(e.target.value)}
                value={titulo_de_eleitor}
                type="text"
                className={styles.InputBox}
                placeholder="titulo_de_eleitor"
              />
            </div>

            <div className={styles.Campo}>
              <label>Alteação de Endereço</label>
              <input
                onChange={(e) => set_alteracao_de_endereco(e.target.value)}
                value={alteracao_de_endereco}
                type="text"
                className={styles.InputBox}
                placeholder="alteracao_de_endereco"
              />
            </div>
          </div>
          <div className={styles.Row}>
            <div className={styles.Campo}>
              <button className={styles.Button} type="submit">
                Cadastrar Contribuinte
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
