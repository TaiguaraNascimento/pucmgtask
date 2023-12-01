/* eslint-disable import/no-anonymous-default-export */
import connectMongoDB from "@/app/api/conexao/utils/utils";

import Dependentes from "../conexao/models/models.dependentes";

import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    connectMongoDB();

    const dependentes = await Dependentes.find();

    return NextResponse.json({ dependentes }, { status: 200 });
  } catch (error) {
    request.status(400).json({ success: false });
  }
}

export async function POST(request) {
  const { nome, cpf, data_de_nascimento, tipo_de_relacao } =
    await request.json();

  await connectMongoDB();

  await Dependentes.create({
    nome,
    cpf,
    data_de_nascimento,
    tipo_de_relacao,
  });
  return NextResponse.json(
    { message: "Dependente criado com suscesso" },
    { status: 200 }
  );
}
