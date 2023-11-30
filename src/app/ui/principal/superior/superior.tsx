"use client";

import styles from "./superior.module.css";
import Link from "next/link";
import Logotipo from "../../visual/logotipo/logotipo";
import LoggedUser from "./loggeduser/loggeduser";
import { redirect } from "next/navigation";

import { useSession, signOut } from "next-auth/react";

export default function Superior() {
  const { data: session }: any = useSession();

  return (
    <>
      <div className={styles.Superior}>
        <div className={styles.Logotipo}>
          <Link href="/">
            <Logotipo />
          </Link>
        </div>

        <div className={styles.Menu}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>

            {!session ? (
              <>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/registro">Cadastar usuário</Link>
                </li>
              </>
            ) : (
              <>
                <li>{session.user?.email}</li>
                <li>
                  <button
                    onClick={() => {
                      signOut();
                      redirect("/login");
                    }}
                  >
                    Sair
                  </button>
                </li>
              </>
            )}
          </ul>
          <div>
            <LoggedUser />
          </div>
        </div>
      </div>
    </>
  );
}
