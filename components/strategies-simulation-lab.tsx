"use client"

import { useState } from "react"

export default function StrategiesSimulationLab() {
  const [selectedStrategy, setSelectedStrategy] = useState("breakout")
  const [isSimulating, setIsSimulating] = useState(false)
  const [simulationResults, setSimulationResults] = useState(null)

  const strategies = [
    {
      id: "breakout",
      name: "Ruptura de Resistencia EUR/USD",
      prompt: `Crea una estrategia completa para EUR/USD en H4. 
Incluye: 1. Análisis técnico con RSI, MACD, EMA 20/50, 2. Dirección de la operación, 3. Punto de entrada exacto, 4. Stop Loss con justificación, 5. Take Profit 1, 2 y 3 con porcentajes, 6. Risk/Reward ratio, 7. Gestión de posición, 8. Condiciones de invalidación`,
      expectedResult: {
        direction: "LONG",
        entry: "1.0875",
        stopLoss: "1.0825",
        tp1: "1.0925",
        tp2: "1.0975",
        tp3: "1.1025",
        riskReward: "1:3.0",
        positionSize: "0.2 lotes",
      },
    },
    {
      id: "pullback",
      name: "Retroceso XAU/USD",
      prompt: `Crea una estrategia completa para XAU/USD en H1. 
Incluye: 1. Análisis técnico con RSI, Fibonacci, VWAP, 2. Dirección de la operación, 3. Punto de entrada exacto, 4. Stop Loss con justificación, 5. Take Profit 1, 2 y 3 con porcentajes, 6. Risk/Reward ratio, 7. Gestión de posición, 8. Condiciones de invalidación`,
      expectedResult: {
        direction: "LONG",
        entry: "2,015.50",
        stopLoss: "2,005.00",
        tp1: "2,030.00",
        tp2: "2,045.00",
        tp3: "2,060.00",
        riskReward: "1:2.8",
        positionSize: "0.1 lotes",
      },
    },
    {
      id: "reversal",
      name: "Reversión BTC/USD",
      prompt: `Crea una estrategia completa para BTC/USD en H4. 
Incluye: 1. Análisis técnico con RSI, MACD divergencia, Bollinger Bands, 2. Dirección de la operación, 3. Punto de entrada exacto, 4. Stop Loss con justificación, 5. Take Profit 1, 2 y 3 con porcentajes, 6. Risk/Reward ratio, 7. Gestión de posición, 8. Condiciones de invalidación`,
      expectedResult: {
        direction: "SHORT",
        entry: "43,250",
        stopLoss: "44,100",
        tp1: "42,400",
        tp2: "41,550",
        tp3: "40,700",
        riskReward: "1:2.5",
        positionSize: "0.05 lotes",
      },
    },
  ]

  const handleSimulate = () => {
    setIsSimulating(true)
    setTimeout(() => {
      setSimulationResults(strategies.find((s) => s.id === selectedStrategy)?.expectedResult)
      setIsSimulating(false)
    }, 3000)
  }

  return (
    <section className="bg-zinc-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              🧪 Laboratorio de <span className="text-purple-400">Simulación</span> de Estrategias
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Practica creando estrategias completas con GPT. Selecciona un escenario, ejecuta el prompt y compara tus
              resultados con la estrategia esperada.
            </p>
          </div>

          <div className="bg-black rounded-xl p-8 border border-zinc-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Panel de Control */}
              <div>
                <h3 className="text-xl font-bold mb-6">🎮 Panel de Control</h3>

                {/* Selección de Estrategia */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">Selecciona un Escenario:</label>
                  <div className="space-y-3">
                    {strategies.map((strategy) => (
                      <button
                        key={strategy.id}
                        onClick={() => setSelectedStrategy(strategy.id)}
                        className={`w-full text-left p-4 rounded-lg transition-all ${
                          selectedStrategy === strategy.id
                            ? "bg-purple-600 text-white border border-purple-500"
                            : "bg-zinc-800 text-gray-300 hover:bg-zinc-700 border border-zinc-700"
                        }`}
                      >
                        <div className="font-medium text-sm">{strategy.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Prompt a Ejecutar */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">Prompt a Ejecutar en GPT:</label>
                  <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
                    <pre className="text-xs text-purple-300 whitespace-pre-wrap">
                      {strategies.find((s) => s.id === selectedStrategy)?.prompt}
                    </pre>
                  </div>
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(strategies.find((s) => s.id === selectedStrategy)?.prompt || "")
                    }
                    className="mt-2 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    📋 Copiar prompt
                  </button>
                </div>

                {/* Botón de Simulación */}
                <button
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 text-white font-bold py-3 rounded-lg transition-all shadow-lg"
                >
                  {isSimulating ? "🔄 Simulando..." : "🚀 Ejecutar Simulación"}
                </button>

                {/* Instrucciones */}
                <div className="mt-6 bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="font-semibold text-blue-300 mb-2">📝 Instrucciones:</h4>
                  <ol className="text-sm text-gray-300 space-y-1">
                    <li>1. Copia el prompt de arriba</li>
                    <li>2. Pégalo en ChatGPT</li>
                    <li>3. Compara tu resultado con la simulación</li>
                    <li>4. Valida los niveles en TradingView</li>
                  </ol>
                </div>
              </div>

              {/* Resultados de Simulación */}
              <div>
                <h3 className="text-xl font-bold mb-6">📊 Resultados Esperados</h3>

                {isSimulating ? (
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <h4 className="text-lg font-semibold mb-2">Procesando Estrategia...</h4>
                      <p className="text-gray-400 text-sm">Analizando mercado y generando niveles</p>
                    </div>
                  </div>
                ) : simulationResults ? (
                  <div className="space-y-4">
                    <div className="bg-zinc-800 rounded-lg p-4">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <span
                          className={`w-3 h-3 rounded-full ${
                            simulationResults.direction === "LONG" ? "bg-green-500" : "bg-red-500"
                          }`}
                        ></span>
                        Dirección: {simulationResults.direction}
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Entrada:</span>
                          <span className="text-white font-medium ml-2">{simulationResults.entry}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Stop Loss:</span>
                          <span className="text-red-400 font-medium ml-2">{simulationResults.stopLoss}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">TP1:</span>
                          <span className="text-green-400 font-medium ml-2">{simulationResults.tp1}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">TP2:</span>
                          <span className="text-green-400 font-medium ml-2">{simulationResults.tp2}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">TP3:</span>
                          <span className="text-green-400 font-medium ml-2">{simulationResults.tp3}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">R/R:</span>
                          <span className="text-purple-400 font-medium ml-2">{simulationResults.riskReward}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-800 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">📏 Gestión de Posición</h4>
                      <p className="text-sm text-gray-300">
                        Tamaño recomendado:{" "}
                        <span className="text-purple-400 font-medium">{simulationResults.positionSize}</span>
                      </p>
                      <p className="text-xs text-gray-400 mt-1">Basado en 1% de riesgo sobre capital de $10,000</p>
                    </div>

                    <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                      <h4 className="font-semibold text-green-300 mb-2">✅ Validación</h4>
                      <p className="text-sm text-gray-300">
                        Ahora valida estos niveles en TradingView y compara con tu resultado de GPT.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
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
                          className="text-gray-400"
                        >
                          <path d="M3 3v18h18" />
                          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Listo para Simular</h4>
                      <p className="text-gray-400 text-sm">
                        Selecciona un escenario y ejecuta la simulación para ver los resultados esperados
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
