import "../estilos/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Grant Thornton Brasil</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
