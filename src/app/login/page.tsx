import styles from "../ui/login/login.module.css";
import logotipo_grande from "../../../public/imagens/logotipo_padrão_gt.webp";
import Image from "next/image";
import Superior from "../ui/principal/superior/superior";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className={styles.Top}>
        <Superior />
      </div>
      <div className={styles.LoginContainer}>
        <div className={styles.LoginQuadro}>
          <div className="Logotipo">
            <Image
              src={logotipo_grande}
              alt="Logotipo"
              height={261.3}
              width={500}
            />
          </div>

          <div className={styles.Informacoes}>
            <div className={styles.Row}>
              <div className="Label">Usuário</div>
              <input
                className="Input"
                type="text"
                name="usuario"
                id="usuario"
              />
            </div>
            <div className={styles.Row}>
              <div className="Label">Senha</div>
              <input
                className="Input"
                type="password"
                name="senha"
                id="senha"
              />
            </div>
            <div className={styles.Row}>
              <button>Acessar sistema</button>
            </div>
            <div className={styles.Row}>
              <div className={styles.advice}>
                <Link href="/registro">ou cadastre um novo usuário</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
