/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
import next, { Metadata } from "next";

import { getServerSession } from "next-auth";
import SessionProvider from "../app/api/conexao/utils/SessionProvider";

import "../app/global.css";

export const metadata: Metadata = {
  title: "Grant Thornton Brasil - GMS",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="pt-br">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Nunito"
      ></link>
      <head></head>
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
