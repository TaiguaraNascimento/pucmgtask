import Usuario from "@/app/api/conexao/models/models.usuario";

import connectMongoDB from "@/app/api/conexao/utils";

import argon2 from "argon2";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { email, senha } = await request.json();

  await connectMongoDB();

  const usuarioExistente = await Usuario.findOne({ email });

  if (usuarioExistente) {
    return new NextResponse("Usuário já existe", { status: 400 });
  }

  const senhaEncriptada = await argon2.hash(senha);

  const novoUsuario = new Usuario({
    email,
    password: senhaEncriptada,
  });

  try {
    await novoUsuario.save();
    return new NextResponse("Usuário criado com sucesso", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 400 });
  }
};
