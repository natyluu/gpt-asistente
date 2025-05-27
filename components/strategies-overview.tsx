"use client"

export default function StrategiesOverview() {
  const strategyTypes = [
    {
      title: "Scalping",
      timeframe: "M1 - M15",
      description: "Operaciones rápidas aprovechando micro-movimientos del mercado",
      winRate: "78%",
      avgReturn: "+0.8%",
      riskReward: "1:1.5",
      color: "from-red-500 to-pink-500",
      icon: "⚡",
      features: ["Ejecución rápida", "Alta frecuencia", "Spreads bajos", "Scalabilidad"],
    },
    {
      title: "Day Trading",
      timeframe: "M15 - H4",
      description: "Estrategias intradiarias con análisis técnico profundo",
      winRate: "72%",
      avgReturn: "+2.1%",
      riskReward: "1:2.5",
      color: "from-blue-500 to-cyan-500",
      icon: "📈",
      features: ["Análisis técnico", "Gestión activa", "Sin overnight", "Flexibilidad"],
    },
    {
      title: "Swing Trading",
      timeframe: "H4 - D1",
      description: "Captura movimientos de mediano plazo con menor frecuencia",
      winRate: "68%",
      avgReturn: "+4.2%",
      riskReward: "1:3.5",
      color: "from-green-500 to-emerald-500",
      icon: "🎯",
      features: ["Menos estrés", "Análisis profundo", "Tendencias claras", "Paciencia"],
    },
    {
      title: "Position Trading",
      timeframe: "D1 - W1",
      description: "Inversiones a largo plazo siguiendo tendencias principales",
      winRate: "65%",
      avgReturn: "+8.5%",
      riskReward: "1:5.0",
      color: "from-purple-500 to-violet-500",
      icon: "🏔️",
      features: ["Largo plazo", "Fundamentales", "Menos operaciones", "Compounding"],
    },
  ]

  return (
    <section className="bg-zinc-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Tipos de <span className="text-purple-400">Estrategias</span> Disponibles
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Desde scalping de alta frecuencia hasta position trading a largo plazo. Cada estrategia está optimizada
              para diferentes perfiles de riesgo y objetivos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategyTypes.map((strategy, index) => (
              <div
                key={index}
                className="bg-black rounded-xl p-6 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${strategy.color} flex items-center justify-center text-2xl mb-4`}
                >
                  {strategy.icon}
                </div>

                <h3 className="text-xl font-bold mb-2">{strategy.title}</h3>
                <p className="text-purple-400 text-sm font-medium mb-3">{strategy.timeframe}</p>
                <p className="text-gray-400 text-sm mb-6">{strategy.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Win Rate:</span>
                    <span className="text-green-400 font-semibold">{strategy.winRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Retorno Avg:</span>
                    <span className="text-blue-400 font-semibold">{strategy.avgReturn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Risk/Reward:</span>
                    <span className="text-purple-400 font-semibold">{strategy.riskReward}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {strategy.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-400 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full mt-6 bg-gradient-to-r ${strategy.color} text-white font-medium py-2 rounded-lg hover:opacity-90 transition-opacity`}
                >
                  Explorar {strategy.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
