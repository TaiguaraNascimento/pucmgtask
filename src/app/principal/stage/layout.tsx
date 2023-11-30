"use client";

import React from "react";
import { usePathname } from "next/navigation";

import Titulo from "@/app/ui/principal/titulos/titulos";
import MenuLateral from "./components/menulateral";
import style from "./components/components.module.css";

function ObterIDPelaURL() {
  const pathname = usePathname();
  const slices = pathname.split("/");
  const quantidade_de_slices = slices.length;
  console.log("encontramos: ", quantidade_de_slices, " slices");
  return slices[quantidade_de_slices - 1];
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const id = ObterIDPelaURL();

  return (
    <>
      <Titulo texto="Dados para Declaração do IRPF" />

      <div className={style.Codigo}>
        Código do Contribuinte: {ObterIDPelaURL()}
      </div>

      <div className={style.Stage}>
        <div>
          <MenuLateral />
        </div>

        <div>
          <div className={style.Content}>
            {React.cloneElement(children, { id })}
          </div>
        </div>
      </div>
    </>
  );
}
