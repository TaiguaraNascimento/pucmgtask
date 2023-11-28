import { NextResponse } from "next/server";

import {
  criarNovoContribuinte,
  deletarContribuinte,
  getAllContribuintes,
} from "../../../../prisma/contribuinte";

export async function POST(request) {
  try {
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

    const novo_contribuinte = await criarNovoContribuinte(
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
      alteracao_de_endereco
    );

    console.log("Método POST requisitado");

    return NextResponse.json(
      { message: "Contribuinte criado" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Erro na requisição POST");
  }
}

/*
export async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST":

      case "GET":
        const contribuintes = await getAllContribuintes();
        console.log("Método GET requisitado");
        return res.status(200).json(contribuintes);

      case "PUT":
        console.log("PUT");
        break;

      case "DELETE":
        const { id } = req.query;

        await deletarContribuinte(id);

        console.log("Método DELETE requisitado");
        return res.status(200).json({ message: "Contribuinte deletado" });
    }
  } catch (error) {
    console.log("Erro na API de dados", error);
  }
}
*/
