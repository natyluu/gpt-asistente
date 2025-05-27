"use client"

import { useState } from "react"

export default function SetupSimulator() {
  const [selectedAsset, setSelectedAsset] = useState("EUR/USD")
  const [selectedTimeframe, setSelectedTimeframe] = useState("H1")
  const [selectedStrategy, setSelectedStrategy] = useState("breakout")

  const assets = ["EUR/USD", "GBP/USD", "USD/JPY", "XAU/USD", "BTC/USD", "NAS100"]
  const timeframes = ["M5", "M15", "M30", "H1", "H4", "D1"]
  const strategies = [
    { id: "breakout", name: "Ruptura de Resistencia", winRate: "72%" },
    { id: "pullback", name: "Retroceso a Soporte", winRate: "68%" },
    { id: "reversal", name: "Reversión en Extremos", winRate: "65%" },
    { id: "trend", name: "Seguimiento de Tendencia", winRate: "75%" },
  ]

  return (
    <section className="bg-zinc-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-purple-400">Simulador</span> de Setups en Vivo
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Configura y prueba tus estrategias en tiempo real. Selecciona el activo, temporalidad y estrategia para
              ver cómo se comportaría en el mercado actual.
            </p>
          </div>

          <div className="bg-black rounded-lg p-8 border border-zinc-800">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Configuración */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-3">Activo</label>
                  <select
                    value={selectedAsset}
                    onChange={(e) => setSelectedAsset(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                  >
                    {assets.map((asset) => (
                      <option key={asset} value={asset}>
                        {asset}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Temporalidad</label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeframes.map((tf) => (
                      <button
                        key={tf}
                        onClick={() => setSelectedTimeframe(tf)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                          selectedTimeframe === tf
                            ? "bg-purple-600 text-white"
                            : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
                        }`}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Estrategia</label>
                  <div className="space-y-2">
                    {strategies.map((strategy) => (
                      <button
                        key={strategy.id}
                        onClick={() => setSelectedStrategy(strategy.id)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          selectedStrategy === strategy.id
                            ? "bg-purple-600 text-white"
                            : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{strategy.name}</span>
                          <span className="text-xs text-green-400">{strategy.winRate}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition-colors">
                  Ejecutar Simulación
                </button>
              </div>

              {/* Gráfico Simulado */}
              <div className="lg:col-span-2">
                <div className="bg-zinc-800 rounded-lg p-6 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
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
                    <h3 className="text-lg font-semibold mb-2">Gráfico de Simulación</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {selectedAsset} - {selectedTimeframe}
                    </p>
                    <p className="text-gray-500 text-xs">
                      Haz clic en "Ejecutar Simulación" para ver el análisis en tiempo real
                    </p>
                  </div>
                </div>

                {/* Métricas de la Simulación */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-zinc-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">+2.3%</div>
                    <div className="text-xs text-gray-400">Rendimiento</div>
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">1:2.5</div>
                    <div className="text-xs text-gray-400">Risk/Reward</div>
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">72%</div>
                    <div className="text-xs text-gray-400">Win Rate</div>
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">-1.2%</div>
                    <div className="text-xs text-gray-400">Max DD</div>
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
