"use client"

export default function StrategiesGrid() {
  const strategies = [
    {
      name: "Ruptura de Resistencia",
      description: "Estrategia basada en rupturas confirmadas de niveles de resistencia clave con volumen.",
      winRate: "72%",
      avgReturn: "+2.8%",
      riskReward: "1:2.5",
      timeframe: "H1-H4",
      difficulty: "Intermedio",
      assets: ["EUR/USD", "GBP/USD", "XAU/USD"],
    },
    {
      name: "Retroceso a Soporte",
      description: "Aprovecha los retrocesos a niveles de soporte en tendencias alcistas establecidas.",
      winRate: "68%",
      avgReturn: "+2.1%",
      riskReward: "1:2.2",
      timeframe: "H4-D1",
      difficulty: "Principiante",
      assets: ["USD/JPY", "AUD/USD", "NAS100"],
    },
    {
      name: "Reversión en Extremos",
      description: "Identifica reversiones en zonas de sobrecompra/sobreventa usando RSI y divergencias.",
      winRate: "65%",
      avgReturn: "+3.2%",
      riskReward: "1:3.0",
      timeframe: "H1-H4",
      difficulty: "Avanzado",
      assets: ["BTC/USD", "XAU/USD", "EUR/GBP"],
    },
    {
      name: "Seguimiento de Tendencia",
      description: "Estrategia de momentum que sigue tendencias fuertes con confirmación de múltiples indicadores.",
      winRate: "75%",
      avgReturn: "+2.5%",
      riskReward: "1:2.8",
      timeframe: "H4-D1",
      difficulty: "Intermedio",
      assets: ["USD/CAD", "GBP/JPY", "SPX500"],
    },
    {
      name: "Scalping de Confluencias",
      description: "Operaciones rápidas en zonas de confluencia técnica con alta probabilidad.",
      winRate: "78%",
      avgReturn: "+1.5%",
      riskReward: "1:1.8",
      timeframe: "M5-M15",
      difficulty: "Avanzado",
      assets: ["EUR/USD", "GBP/USD", "USD/JPY"],
    },
    {
      name: "Swing en Rangos",
      description: "Aprovecha los movimientos dentro de rangos laterales bien definidos.",
      winRate: "70%",
      avgReturn: "+2.0%",
      riskReward: "1:2.0",
      timeframe: "H4-D1",
      difficulty: "Principiante",
      assets: ["AUD/NZD", "EUR/CHF", "USD/CAD"],
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Principiante":
        return "bg-green-600"
      case "Intermedio":
        return "bg-yellow-600"
      case "Avanzado":
        return "bg-red-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Biblioteca de Estrategias Probadas</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explora nuestra colección de estrategias técnicas validadas con datos históricos y métricas de rendimiento
              reales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-purple-600 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold">{strategy.name}</h3>
                  <span
                    className={`${getDifficultyColor(strategy.difficulty)} text-white px-2 py-1 rounded text-xs font-medium`}
                  >
                    {strategy.difficulty}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-6">{strategy.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Win Rate:</span>
                    <span className="text-green-400 font-semibold">{strategy.winRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Retorno Promedio:</span>
                    <span className="text-purple-400 font-semibold">{strategy.avgReturn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Risk/Reward:</span>
                    <span className="text-blue-400 font-semibold">{strategy.riskReward}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Timeframe:</span>
                    <span className="text-white font-semibold">{strategy.timeframe}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-gray-500 text-sm block mb-2">Activos Recomendados:</span>
                  <div className="flex flex-wrap gap-2">
                    {strategy.assets.map((asset, assetIndex) => (
                      <span
                        key={assetIndex}
                        className="bg-zinc-800 text-gray-300 px-2 py-1 rounded text-xs font-medium"
                      >
                        {asset}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                    Simular
                  </button>
                  <button className="flex-1 border border-zinc-700 text-gray-300 hover:bg-zinc-800 font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Ver Todas las Estrategias
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
