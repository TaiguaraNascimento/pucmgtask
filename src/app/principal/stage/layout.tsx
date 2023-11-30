"use client";

import { usePathname } from "next/navigation";

import Titulo from "@/app/ui/principal/titulos/titulos";
import MenuLateral from "./components/MenuLateral";
import style from "../components/stage.module.css";

function ObterIDPelaURL() {
  const pathname = usePathname();

  const slices = pathname.split("/");
  const quantidade_de_slices = slices.length;
  console.log("encontramos: ", quantidade_de_slices, " slices");
  return slices[quantidade_de_slices - 1];
}

export default function StageLayout(props) {
  const id = ObterIDPelaURL();

  return (
    <>
      <Titulo texto="Dados para Declaração do IRPF" />

      <div>Código do Contribuinte: {ObterIDPelaURL()}</div>

      <div className={style.Stage}>
        <div>
          <MenuLateral />
        </div>

        <div>{children}</div>
      </div>
    </>
  );
}
