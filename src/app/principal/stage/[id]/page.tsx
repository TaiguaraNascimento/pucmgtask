"use client";

import styles from "../components/components.module.css";

import { usePathname } from "next/navigation";

type Contribuinte = {
  nome?: string;
  cpf?: string;
  data_de_nascimento?: string;
  celular?: string;
  email?: string;
  endereco?: string;
  endereco_num?: string;
  endereco_cep?: string;
  endereco_bairro?: string;
  endereco_cidade?: string;
  endereco_estado?: string;
  endereco_pais?: string;
  titulo_de_eleitor?: string;
  alteracao_de_endereco?: string;
};

function ObterIDPelaURL() {
  const pathname = usePathname();
  const slices = pathname.split("/");
  const quantidade_de_slices = slices.length;
  console.log("encontramos: ", quantidade_de_slices, " slices");
  return slices[quantidade_de_slices - 1];
}

export default function Stage() {
  return (
    <>
      <div className={styles.Forms}>
        <div className={styles.Row}>
          <div className={styles.Campo}>
            <label>Nome do Contribuinte</label>
            <input
              className={styles.InputBox}
              value={"Taiguara Nascimento"}
              type="text"
            />
          </div>
          <div className={styles.Campo}>
            <label>CPF</label>
            <input
              className={styles.InputBox}
              value={"33321464837"}
              type="text"
            />
          </div>
        </div>

        <div className={styles.Row}>
          <div className={styles.Campo}>
            <label>Data de Nascimento</label>
            <input
              className={styles.InputBox}
              value={"13/05/2010"}
              type="text"
            />
          </div>

          <div className={styles.Campo}>
            <label>E-mail</label>
            <input
              className={styles.InputBox}
              value={"taiguara.nascimento@gmail.com"}
              type="text"
            />
          </div>

          <div className={styles.Campo}>
            <label>Celular</label>
            <input
              className={styles.InputBox}
              value={"11970474694"}
              type="text"
            />
          </div>
        </div>

        <div className={styles.Row}>
          <div className={styles.Campo}>
            <label>Endereço</label>
            <input
              className={styles.InputBox}
              value={"rua carlos grotte"}
              type="text"
            />
          </div>

          <div className={styles.Campo}>
            <label>Número</label>
            <input className={styles.InputBox} value={"152"} type="text" />
          </div>

          <div className={styles.Campo}>
            <label>CEP</label>
            <input
              className={styles.InputBox}
              value={"06765460"}
              type="endereco_cep"
            />
          </div>

          <div className={styles.Campo}>
            <label>Bairro</label>
            <input
              className={styles.InputBox}
              value={"jd vila sonia"}
              type="text"
            />
          </div>
        </div>

        <div className={styles.Row}>
          <div className={styles.Campo}>
            <label>Cidade</label>
            <input
              value={"Taboão da Serra"}
              className={styles.InputBox}
              type="text"
            />
          </div>

          <div className={styles.Campo}>
            <label>Estado</label>
            <input className={styles.InputBox} value={"SP"} type="text" />
          </div>

          <div className={styles.Campo}>
            <label>Pais</label>
            <input className={styles.InputBox} value={"Brasil"} type="text" />
          </div>
        </div>
        <div className={styles.Row}>
          <div className={styles.Campo}>
            <label>Titulo de Eleitor</label>
            <input value={"06765460"} type="text" className={styles.InputBox} />
          </div>

          <div className={styles.Campo}>
            <label>Alteação de Endereço</label>
            <input value={""} type="text" className={styles.InputBox} />
          </div>
        </div>
      </div>
    </>
  );
}
