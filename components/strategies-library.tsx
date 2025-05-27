"use client"

import { useState } from "react"

export default function StrategiesLibrary() {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")

  const strategies = [
    {
      id: 1,
      name: "Golden Cross Breakout",
      category: "trend",
      difficulty: "intermediate",
      timeframe: "H4-D1",
      winRate: "78%",
      avgReturn: "+3.2%",
      riskReward: "1:2.8",
      description: "Estrategia basada en el cruce alcista de EMA 50 sobre EMA 200 con confirmación de volumen.",
      assets: ["EUR/USD", "GBP/USD", "XAU/USD"],
      signals: ["EMA 50 > EMA 200", "Volumen alto", "RSI > 50"],
      backtest: { trades: 156, profitable: 122, period: "2 años" },
      tags: ["Tendencia", "Momentum", "Volumen"],
    },
    {
      id: 2,
      name: "Fibonacci Retracement Scalp",
      category: "scalping",
      difficulty: "advanced",
      timeframe: "M5-M15",
      winRate: "72%",
      avgReturn: "+0.8%",
      riskReward: "1:1.5",
      description: "Scalping en retrocesos de Fibonacci 61.8% con confirmación de RSI divergencia.",
      assets: ["EUR/USD", "GBP/USD", "USD/JPY"],
      signals: ["Retroceso 61.8%", "RSI divergencia", "Volumen confirmación"],
      backtest: { trades: 892, profitable: 642, period: "6 meses" },
      tags: ["Scalping", "Fibonacci", "Divergencia"],
    },
    {
      id: 3,
      name: "Support Resistance Bounce",
      category: "swing",
      difficulty: "beginner",
      timeframe: "H1-H4",
      winRate: "69%",
      avgReturn: "+2.1%",
      riskReward: "1:2.2",
      description: "Rebotes en niveles de soporte/resistencia clave con confirmación de velas de reversión.",
      assets: ["USD/JPY", "AUD/USD", "NAS100"],
      signals: ["Nivel S/R tocado", "Vela martillo", "RSI oversold"],
      backtest: { trades: 234, profitable: 161, period: "1 año" },
      tags: ["Soporte", "Resistencia", "Reversión"],
    },
    {
      id: 4,
      name: "MACD Divergence Hunter",
      category: "momentum",
      difficulty: "intermediate",
      timeframe: "H1-H4",
      winRate: "74%",
      avgReturn: "+2.9%",
      riskReward: "1:2.5",
      description: "Identifica divergencias MACD en extremos del mercado para capturas de reversión.",
      assets: ["BTC/USD", "XAU/USD", "EUR/GBP"],
      signals: ["MACD divergencia", "Precio en extremo", "RSI confirmación"],
      backtest: { trades: 187, profitable: 138, period: "18 meses" },
      tags: ["MACD", "Divergencia", "Reversión"],
    },
    {
      id: 5,
      name: "Bollinger Band Squeeze",
      category: "volatility",
      difficulty: "advanced",
      timeframe: "H4-D1",
      winRate: "76%",
      avgReturn: "+4.1%",
      riskReward: "1:3.2",
      description: "Aprovecha expansiones de volatilidad después de compresiones en Bollinger Bands.",
      assets: ["GBP/JPY", "EUR/CHF", "XAU/USD"],
      signals: ["BB squeeze", "Volumen expansión", "ATR aumento"],
      backtest: { trades: 98, profitable: 74, period: "2 años" },
      tags: ["Volatilidad", "Bollinger", "Expansión"],
    },
    {
      id: 6,
      name: "Morning Star Reversal",
      category: "pattern",
      difficulty: "beginner",
      timeframe: "H4-D1",
      timeframe: "H4-D1",
      winRate: "71%",
      avgReturn: "+2.7%",
      riskReward: "1:2.4",
      description: "Patrón de velas Morning Star en niveles de soporte con confirmación de indicadores.",
      assets: ["USD/CAD", "AUD/NZD", "EUR/USD"],
      signals: ["Morning Star", "Nivel soporte", "RSI oversold"],
      backtest: { trades: 145, profitable: 103, period: "1.5 años" },
      tags: ["Patrones", "Velas", "Reversión"],
    },
  ]

  const filters = [
    { id: "all", name: "Todas", count: strategies.length },
    { id: "trend", name: "Tendencia", count: strategies.filter((s) => s.category === "trend").length },
    { id: "scalping", name: "Scalping", count: strategies.filter((s) => s.category === "scalping").length },
    { id: "swing", name: "Swing", count: strategies.filter((s) => s.category === "swing").length },
    { id: "momentum", name: "Momentum", count: strategies.filter((s) => s.category === "momentum").length },
    { id: "volatility", name: "Volatilidad", count: strategies.filter((s) => s.category === "volatility").length },
    { id: "pattern", name: "Patrones", count: strategies.filter((s) => s.category === "pattern").length },
  ]

  const difficulties = [
    { id: "all", name: "Todos los niveles" },
    { id: "beginner", name: "Principiante" },
    { id: "intermediate", name: "Intermedio" },
    { id: "advanced", name: "Avanzado" },
  ]

  const filteredStrategies = strategies.filter((strategy) => {
    const categoryMatch = selectedFilter === "all" || strategy.category === selectedFilter
    const difficultyMatch = selectedDifficulty === "all" || strategy.difficulty === selectedDifficulty
    return categoryMatch && difficultyMatch
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-600"
      case "intermediate":
        return "bg-yellow-600"
      case "advanced":
        return "bg-red-600"
      default:
        return "bg-gray-600"
    }
  }

  const getDifficultyName = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "Principiante"
      case "intermediate":
        return "Intermedio"
      case "advanced":
        return "Avanzado"
      default:
        return difficulty
    }
  }

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Biblioteca de <span className="text-purple-400">Estrategias</span> Probadas
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Más de 75 estrategias validadas con backtesting real. Cada estrategia incluye métricas detalladas,
              configuración completa y resultados históricos verificados.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Category Filters */}
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-400 mb-3">Categorías</h3>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedFilter === filter.id
                        ? "bg-purple-600 text-white"
                        : "bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white"
                    }`}
                  >
                    {filter.name} ({filter.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="lg:w-64">
              <h3 className="text-sm font-medium text-gray-400 mb-3">Dificultad</h3>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty.id} value={difficulty.id}>
                    {difficulty.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Strategies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredStrategies.map((strategy) => (
              <div
                key={strategy.id}
                className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-purple-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold">{strategy.name}</h3>
                  <span
                    className={`${getDifficultyColor(strategy.difficulty)} text-white px-2 py-1 rounded text-xs font-medium`}
                  >
                    {getDifficultyName(strategy.difficulty)}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">{strategy.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{strategy.winRate}</div>
                    <div className="text-xs text-gray-500">Win Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">{strategy.avgReturn}</div>
                    <div className="text-xs text-gray-500">Retorno Avg</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400">{strategy.riskReward}</div>
                    <div className="text-xs text-gray-500">R/R</div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Timeframe:</span>
                    <span className="text-white font-medium">{strategy.timeframe}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Backtesting:</span>
                    <span className="text-white font-medium">{strategy.backtest.trades} trades</span>
                  </div>
                </div>

                {/* Assets */}
                <div className="mb-4">
                  <span className="text-gray-500 text-sm block mb-2">Activos:</span>
                  <div className="flex flex-wrap gap-1">
                    {strategy.assets.map((asset, index) => (
                      <span key={index} className="bg-zinc-800 text-gray-300 px-2 py-1 rounded text-xs font-medium">
                        {asset}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Signals */}
                <div className="mb-6">
                  <span className="text-gray-500 text-sm block mb-2">Señales clave:</span>
                  <div className="space-y-1">
                    {strategy.signals.slice(0, 2).map((signal, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span className="text-gray-400 text-xs">{signal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                    Ver Detalles
                  </button>
                  <button className="flex-1 border border-zinc-700 text-gray-300 hover:bg-zinc-800 font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                    Simular
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-lg">
              Cargar Más Estrategias
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
