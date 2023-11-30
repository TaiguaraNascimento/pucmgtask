"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../ui/login/login.module.css";
import Link from "next/link";
import Image from "next/image";
import logotipo_grande from "../../../public/imagens/logotipo_padrão_gt.webp";
import { set } from "mongoose";

export default function Registro() {
  const [error, setError] = useState("");
  const router = useRouter();

  const validarEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target.usuario.value; //diff
    const senha = e.target.senha.value; //diff

    if (!validarEmail(email)) {
      return alert("Email inválido");
    }

    if (!senha || senha.length < 8) {
      return alert("Senha inválida");
    }

    try {
      const response = await fetch("/api/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      if (response.status === 400) {
        setError("Email já cadastrado");
      } else if (response.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Erro ao registrar usuário");
      console.log(email, senha);
    }
  };

  return (
    <>
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
                <div className="Label">Registrar Novo Usuário</div>
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
                <button>Registrar Novo Usuário</button>
              </div>
              <div className={styles.Row}>
                <div className={styles.advice}>
                  <Link href="/login">
                    ou faça login com uma conta existente
                  </Link>
                </div>
                <div className={styles.Erro}>{error && error}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
