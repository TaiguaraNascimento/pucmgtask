import { Metadata } from "next";

import "../app/global.css";

export const metadata: Metadata = {
  title: "Grant Thornton Brasil - GMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Nunito"
      ></link>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
