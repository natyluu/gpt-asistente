"use client"

import { useState } from "react"

export default function TechnicalAnalysisTools() {
  const [activeCategory, setActiveCategory] = useState("trend")

  const toolCategories = {
    trend: {
      name: "Tendencia",
      icon: "📈",
      color: "blue",
      tools: [
        {
          name: "EMA (9, 21, 50)",
          description: "Medias móviles exponenciales para identificar tendencias",
          usage: "95%",
        },
        { name: "MACD", description: "Convergencia y divergencia de medias móviles", usage: "88%" },
        { name: "ADX", description: "Índice direccional promedio para fuerza de tendencia", usage: "72%" },
        { name: "Parabolic SAR", description: "Sistema de parada y reversión parabólico", usage: "65%" },
      ],
    },
    momentum: {
      name: "Momentum",
      icon: "⚡",
      color: "purple",
      tools: [
        { name: "RSI", description: "Índice de fuerza relativa para sobrecompra/venta", usage: "92%" },
        { name: "Stochastic", description: "Oscilador estocástico para momentum", usage: "78%" },
        { name: "Williams %R", description: "Oscilador de Williams para extremos", usage: "68%" },
        { name: "CCI", description: "Índice de canal de commodities", usage: "55%" },
      ],
    },
    volume: {
      name: "Volumen",
      icon: "📊",
      color: "green",
      tools: [
        { name: "VWAP", description: "Precio promedio ponderado por volumen", usage: "85%" },
        { name: "OBV", description: "Volumen en balance para confirmar tendencias", usage: "70%" },
        { name: "Volume Profile", description: "Perfil de volumen por niveles de precio", usage: "75%" },
        { name: "A/D Line", description: "Línea de acumulación/distribución", usage: "60%" },
      ],
    },
    support: {
      name: "Soporte/Resistencia",
      icon: "🎯",
      color: "yellow",
      tools: [
        { name: "Fibonacci", description: "Retrocesos y extensiones de Fibonacci", usage: "90%" },
        { name: "Pivot Points", description: "Puntos pivote para niveles clave", usage: "82%" },
        { name: "Bollinger Bands", description: "Bandas de Bollinger para volatilidad", usage: "87%" },
        { name: "Support/Resistance", description: "Niveles horizontales de soporte y resistencia", usage: "95%" },
      ],
    },
  }

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 border-blue-500 text-blue-400",
      purple: "from-purple-500 to-purple-600 border-purple-500 text-purple-400",
      green: "from-green-500 to-green-600 border-green-500 text-green-400",
      yellow: "from-yellow-500 to-yellow-600 border-yellow-500 text-yellow-400",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="bg-zinc-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Herramientas de <span className="text-purple-400">Análisis Técnico</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Más de 20 indicadores técnicos profesionales integrados. Desde análisis de tendencias hasta momentum y
              volumen, todas las herramientas que necesitas en un solo lugar.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(toolCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${getColorClasses(category.color).split(" ")[0]} ${getColorClasses(category.color).split(" ")[1]} text-white shadow-lg`
                    : "bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {toolCategories[activeCategory as keyof typeof toolCategories].tools.map((tool, index) => (
              <div
                key={index}
                className="bg-black rounded-xl p-6 border border-zinc-800 hover:border-zinc-600 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{tool.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-gray-400">Uso:</div>
                    <div
                      className={`text-sm font-semibold ${getColorClasses(toolCategories[activeCategory as keyof typeof toolCategories].color).split(" ")[3]}`}
                    >
                      {tool.usage}
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4">{tool.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${getColorClasses(toolCategories[activeCategory as keyof typeof toolCategories].color).split(" ")[0]} ${getColorClasses(toolCategories[activeCategory as keyof typeof toolCategories].color).split(" ")[1]}`}
                    ></div>
                    <span className="text-xs text-gray-500">Disponible</span>
                  </div>
                  <button
                    className={`px-4 py-2 rounded-lg border ${getColorClasses(toolCategories[activeCategory as keyof typeof toolCategories].color).split(" ")[2]} ${getColorClasses(toolCategories[activeCategory as keyof typeof toolCategories].color).split(" ")[3]} hover:bg-zinc-800 transition-colors text-sm font-medium`}
                  >
                    Usar Ahora
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Integration Info */}
          <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">🤖 Integración con GPT Forex Pro</h3>
              <p className="text-gray-400 mb-6 max-w-3xl mx-auto">
                Todos estos indicadores están integrados con nuestro GPT Forex Pro. Simplemente describe tu análisis en
                lenguaje natural y la IA aplicará automáticamente las herramientas apropiadas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Probar GPT Forex Pro
                </button>
                <button className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 font-medium py-3 px-6 rounded-lg transition-colors">
                  Ver Ejemplos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
