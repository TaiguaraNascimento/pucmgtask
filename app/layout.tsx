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
      <head></head>
      <body>{children}</body>
    </html>
  );
}
