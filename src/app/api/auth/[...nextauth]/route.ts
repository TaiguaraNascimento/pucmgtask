import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/GitHub";
import CredentialsProvider from "next-auth/providers/credentials";
import argon2 from "argon2";
import Usuario from "@/app/api/conexao/models/models.usuario";
import connectMongoDB from "@/app/api/conexao/utils/utils";

export const authOptions: any = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        await connectMongoDB();
        try {
          const usuario = await Usuario.findOne({ email: credentials.email });
          if (usuario) {
            const isPasswordCorrect = await argon2.verify(
              usuario.password,
              credentials.password
            );
            if (isPasswordCorrect) {
              return usuario;
            }
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }: { user: AuthUser; account: Account }) {
      if (account?.provider == "credentials") {
        return true;
      }
      if (account?.provider == "github") {
        await connectMongoDB();
        try {
          const existingUsuario = await Usuario.findOne({ email: user.email });
          if (!existingUsuario) {
            const newUsuario = new Usuario({
              email: user.email,
            });

            await newUsuario.save();
            return true;
          }
          return true;
        } catch (err) {
          console.log("Erro salvando usuário", err);
          return false;
        }
      }
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
