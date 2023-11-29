import connectMongoDB from "@/app/api/conexao/utils";

import Contribuintes from "../conexao/models/models.contribuintes";

import { NextResponse } from "next/server";

export async function POST(request) {
  const {
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
  } = await request.json();
  await connectMongoDB();
  await Contribuintes.create({
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
  });
  return NextResponse.json({ message: "Contribuinte criado" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const contribuintes = await Contribuintes.find();
  return NextResponse.json({ contribuintes });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Contribuintes.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Contribuinte excluido" },
    { status: 200 }
  );
}
