"use client";
import { useRouter } from "next/navigation";

import Superior from "./ui/principal/superior/superior";

import styles from "./ui/estilos/entrada.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className={styles.Whole}>
        <section className={styles.wrapper}>
          <div className={styles.video_wrap}>
            <video
              src="/video/video.mp4"
              autoPlay
              loop
              muted
              className={styles.video}
            />
          </div>

          <div className={styles.overlay}></div>
          <div className={styles.landing_text}>
            <div className={styles.Aviso}>
              <h1>Projeto de Conclusão de Curso da PUC MG</h1>
              <h2>Taiguara Pires do Nascimento</h2>
              <p>
                A ferramenta tem como objetivo facilitar o trabalho das equipes
                tributárias da Grant Thornton Brasil no processo de elaboração
                do IRPF de pessoas com patrimônio complexo e relevante.
              </p>
              <button
                onClick={() => router.push("/login")}
                className={styles.btn}
              >
                Acessar o sistema
              </button>
            </div>
          </div>

          <div className={styles.superior}>
            <Superior />
          </div>
        </section>
      </div>
    </>
  );
}
