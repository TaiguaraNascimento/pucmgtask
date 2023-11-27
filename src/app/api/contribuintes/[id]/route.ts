import connectMongoDB from "@/app/api/conexao/utils";

import Contribuintes from "../../conexao/models";

import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    new_nome: nome,
    new_cpf: cpf,
    new_data_de_nascimento: data_de_nascimento,
    new_celular: celular,
    new_email: email,
    new_endereco: endereco,
    new_endereco_num: endereco_num,
    new_endereco_cep: endereco_cep,
    new_endereco_bairro: endereco_bairro,
    new_endereco_cidade: endereco_cidade,
    new_endereco_estado: endereco_estado,
    new_endereco_pais: endereco_pais,
    new_titulo_de_eleitor: titulo_de_eleitor,
    new_alteracao_de_endereco: alteracao_de_endereco,
  } = await request.json();
  await connectMongoDB();
  await Contribuintes.findByIdAndUpdate(id, {
    nome,
    cpf,
    data_de_nascimento,
    celular,
    email,
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
  return NextResponse.json(
    { message: "Contribuinte atualizado" },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const contribuintes = await Contribuintes.findOne({ _id: id });
  return NextResponse.json({ contribuintes }, { status: 200 });
}
