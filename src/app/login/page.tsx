"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import styles from "../ui/login/login.module.css";
import logotipo_grande from "../../../public/imagens/logotipo_padrão_gt.webp";
import Image from "next/image";
import Superior from "../ui/principal/superior/superior";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");
  // const session = useSession();

  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/principal");
    }
  }, [sessionStatus, router]);

  const validarEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target.usuario.value;
    const senha = e.target.senha.value;

    if (!validarEmail(email)) {
      return alert("Email inválido");
    }

    if (!senha || senha.length < 8) {
      return alert("Senha inválida");
    }

    const resposta = await signIn("credentials", {
      redirect: false,
      email,
      password: senha,
    });

    if (resposta?.error) {
      setError("E-mail ou senha inválidos!");
      if (resposta?.url) {
        router.replace("/login");
      }
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return (
      <>
        {" "}
        <h1>Carregando...</h1>
      </>
    );
  }

  return (
    sessionStatus !== "authenticated" && (
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
              <form onSubmit={handleSubmit}>
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
                  <div className={styles.Erro}>{error && error}</div>
                </div>
                <div className={styles.Row}>
                  <button>Acessar sistema</button>
                </div>
                <div className={styles.Row}>
                  <div className={styles.advice}>
                    <Link href="/registro">ou cadastre um novo usuário</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  );
}
