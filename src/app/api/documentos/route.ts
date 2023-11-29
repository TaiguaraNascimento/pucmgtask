/* eslint-disable import/no-anonymous-default-export */
import connectMongoDB from "@/app/api/conexao/utils";

import Documento from "../conexao/models/models.documentos";

import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    console.log("xxxxxxxxxxxx");
    connectMongoDB();

    const documentos = await Documento.find();

    return NextResponse.json({ documentos }, { status: 200 });
  } catch (error) {
    request.status(400).json({ success: false });
  }
}

export async function POST(request) {
  try {
    const {
      data_da_solicitacao,
      titular,
      area,
      descricao,
      empresa,
      deadling,
      prioridade,
      data_da_entrega,
      classificacao,
      status,
      comentarios,
    } = await request.json();

    await connectMongoDB();

    await Documento.create({
      data_da_solicitacao,
      titular,
      area,
      descricao,
      empresa,
      deadling,
      prioridade,
      data_da_entrega,
      classificacao,
      status,
      comentarios,
    });
    return NextResponse.json(
      { message: "Documento criado com suscesso" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
