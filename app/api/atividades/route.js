import { atividades } from "@/data/atividades"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const escola = searchParams.get("escola")

  const resultado = escola
    ? atividades.filter((a) =>
        a.escola.toLowerCase().includes(escola.toLowerCase())
      )
    : atividades

  return Response.json({
    total: resultado.length,
    atividades: resultado,
  })
}
