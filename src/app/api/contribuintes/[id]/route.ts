import connectMongoDB from "@/app/api/conexao/utils/utils";

import Contribuintes from "../../conexao/models/models.contribuintes";

import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;

  const resultado = await request.json();

  if (true) {
    console.log(
      "Resultado Atualizado: ================================================"
    );
    console.log("ID obtido: " + id);
    console.log("Nome: " + resultado.nome);
    console.log("cpf: " + resultado.cpf);
    console.log("data_de_nascimento: " + resultado.data_de_nascimento);
    console.log("celular: " + resultado.celular);
    console.log("email: " + resultado.email);
    console.log("endereco: " + resultado.endereco);
    console.log("endereco_num: " + resultado.endereco_num);
    console.log("endereco_cep: " + resultado.endereco_cep);
    console.log("endereco_bairro: " + resultado.endereco_bairro);
    console.log("endereco_cidade: " + resultado.endereco_cidade);
    console.log("endereco_estado: " + resultado.endereco_estado);
    console.log("endereco_pais: " + resultado.endereco_pais);
    console.log("titulo_de_eleitor: " + resultado.titulo_de_eleitor);
    console.log("alteracao_de_endereco: " + resultado.alteracao_de_endereco);

    console.log(
      "====================================================================="
    );
  }

  const {
    nome: nome,
    cpf: cpf,
    data_de_nascimento: data_de_nascimento,
    celular: celular,
    email: email,
    endereco: endereco,
    endereco_num: endereco_num,
    endereco_cep: endereco_cep,
    endereco_bairro: endereco_bairro,
    endereco_cidade: endereco_cidade,
    endereco_estado: endereco_estado,
    endereco_pais: endereco_pais,
    titulo_de_eleitor: titulo_de_eleitor,
    alteracao_de_endereco: alteracao_de_endereco,
  } = resultado;

  console.log("aio");

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
