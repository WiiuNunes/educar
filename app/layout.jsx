import "./globals.css"

export const metadata = {
  title: "Projeto Educar - Aprendizado Sustentável",
  description:
    "Plataforma educacional voltada para sustentabilidade e consumo consciente nas escolas de Recife/PE. ODS 04 e ODS 12.",
  keywords: ["educação", "sustentabilidade", "ODS", "Recife", "escola"],
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🎓</text></svg>',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
