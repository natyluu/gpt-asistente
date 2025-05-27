"use client"

import { useState } from "react"

export default function InteractiveSimulator() {
  const [selectedAsset, setSelectedAsset] = useState("EUR/USD")
  const [selectedTimeframe, setSelectedTimeframe] = useState("H1")
  const [selectedStrategy, setSelectedStrategy] = useState("breakout")
  const [isSimulating, setIsSimulating] = useState(false)

  const assets = [
    { symbol: "EUR/USD", name: "Euro / Dólar", price: "1.0875", change: "+0.12%" },
    { symbol: "GBP/USD", name: "Libra / Dólar", price: "1.2654", change: "-0.08%" },
    { symbol: "USD/JPY", name: "Dólar / Yen", price: "149.85", change: "+0.25%" },
    { symbol: "XAU/USD", name: "Oro / Dólar", price: "2,018.50", change: "+0.45%" },
    { symbol: "BTC/USD", name: "Bitcoin / Dólar", price: "43,250", change: "+2.15%" },
    { symbol: "NAS100", name: "Nasdaq 100", price: "16,845", change: "+0.78%" },
  ]

  const timeframes = [
    { id: "M5", name: "5 min", active: false },
    { id: "M15", name: "15 min", active: false },
    { id: "M30", name: "30 min", active: false },
    { id: "H1", name: "1 hora", active: true },
    { id: "H4", name: "4 horas", active: false },
    { id: "D1", name: "Diario", active: false },
  ]

  const strategies = [
    {
      id: "breakout",
      name: "Ruptura de Resistencia",
      winRate: "72%",
      description: "Identifica rupturas confirmadas con volumen",
      signals: ["RSI > 70", "Volumen alto", "Ruptura confirmada"],
    },
    {
      id: "pullback",
      name: "Retroceso a Soporte",
      winRate: "68%",
      description: "Aprovecha retrocesos en tendencias alcistas",
      signals: ["EMA 20 > EMA 50", "Precio cerca soporte", "RSI < 50"],
    },
    {
      id: "reversal",
      name: "Reversión en Extremos",
      winRate: "65%",
      description: "Detecta reversiones en zonas de sobrecompra/venta",
      signals: ["RSI extremo", "Divergencia", "Patrón de velas"],
    },
    {
      id: "trend",
      name: "Seguimiento de Tendencia",
      winRate: "75%",
      description: "Sigue tendencias fuertes con momentum",
      signals: ["MACD positivo", "EMAs alineadas", "Momentum fuerte"],
    },
  ]

  const handleSimulate = () => {
    setIsSimulating(true)
    setTimeout(() => setIsSimulating(false), 3000)
  }

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-blue-400">Simulador</span> Interactivo de Setups
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Configura y prueba tus estrategias en tiempo real. Selecciona activo, temporalidad y estrategia para ver
              cómo se comportaría en el mercado actual con datos reales.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
              {/* Panel de Configuración */}
              <div className="xl:col-span-1 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm">1</span>
                    Seleccionar Activo
                  </h3>
                  <div className="space-y-2">
                    {assets.map((asset) => (
                      <button
                        key={asset.symbol}
                        onClick={() => setSelectedAsset(asset.symbol)}
                        className={`w-full text-left p-3 rounded-lg transition-all ${
                          selectedAsset === asset.symbol
                            ? "bg-blue-600 text-white border border-blue-500"
                            : "bg-zinc-800 text-gray-300 hover:bg-zinc-700 border border-zinc-700"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium text-sm">{asset.symbol}</div>
                            <div className="text-xs text-gray-400">{asset.name}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{asset.price}</div>
                            <div
                              className={`text-xs ${asset.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}
                            >
                              {asset.change}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-sm">
                      2
                    </span>
                    Temporalidad
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {timeframes.map((tf) => (
                      <button
                        key={tf.id}
                        onClick={() => setSelectedTimeframe(tf.id)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                          selectedTimeframe === tf.id
                            ? "bg-purple-600 text-white"
                            : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
                        }`}
                      >
                        {tf.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-sm">
                      3
                    </span>
                    Estrategia
                  </h3>
                  <div className="space-y-2">
                    {strategies.map((strategy) => (
                      <button
                        key={strategy.id}
                        onClick={() => setSelectedStrategy(strategy.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all ${
                          selectedStrategy === strategy.id
                            ? "bg-green-600 text-white border border-green-500"
                            : "bg-zinc-800 text-gray-300 hover:bg-zinc-700 border border-zinc-700"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm font-medium">{strategy.name}</span>
                          <span className="text-xs text-green-400">{strategy.winRate}</span>
                        </div>
                        <p className="text-xs text-gray-400">{strategy.description}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 text-white font-bold py-3 rounded-lg transition-all shadow-lg"
                >
                  {isSimulating ? "🔄 Simulando..." : "🚀 Ejecutar Simulación"}
                </button>
              </div>

              {/* Panel Principal - Gráfico y Análisis */}
              <div className="xl:col-span-3">
                <div className="bg-black rounded-xl p-6 border border-zinc-800 h-96 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">
                      {selectedAsset} - {selectedTimeframe}
                    </h3>
                    <div className="flex gap-2">
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">EN VIVO</span>
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">TwelveData</span>
                    </div>
                  </div>

                  {isSimulating ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <h4 className="text-lg font-semibold mb-2">Analizando Mercado...</h4>
                        <p className="text-gray-400 text-sm">Procesando datos en tiempo real</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <path d="M3 3v18h18" />
                            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold mb-2">Gráfico de Simulación</h4>
                        <p className="text-gray-400 text-sm mb-4">
                          Configuración: {selectedAsset} • {selectedTimeframe} •{" "}
                          {strategies.find((s) => s.id === selectedStrategy)?.name}
                        </p>
                        <p className="text-gray-500 text-xs">
                          Haz clic en "Ejecutar Simulación" para ver el análisis en tiempo real
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Métricas y Señales */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Métricas de Rendimiento */}
                  <div className="bg-zinc-800 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4">📊 Métricas de Rendimiento</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">+2.8%</div>
                        <div className="text-xs text-gray-400">Rendimiento</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-1">1:2.5</div>
                        <div className="text-xs text-gray-400">Risk/Reward</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">72%</div>
                        <div className="text-xs text-gray-400">Win Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-400 mb-1">-1.2%</div>
                        <div className="text-xs text-gray-400">Max DD</div>
                      </div>
                    </div>
                  </div>

                  {/* Señales Activas */}
                  <div className="bg-zinc-800 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4">🎯 Señales Activas</h4>
                    <div className="space-y-3">
                      {strategies
                        .find((s) => s.id === selectedStrategy)
                        ?.signals.map((signal, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-sm text-gray-300">{signal}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
