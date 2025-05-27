"use client"

import { useState } from "react"

export default function StrategiesMainHero() {
  const [activeTab, setActiveTab] = useState("strategies")

  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                🎯 Estrategias Avanzadas
              </span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium">
                ⚡ Simulación en Vivo
              </span>
              <span className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium">📊 Datos Reales</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
                Estrategias Técnicas
              </span>
              <br />
              <span className="text-white">y Simulación de</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Setups Avanzados
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Domina el arte del trading técnico con estrategias probadas, simulación en tiempo real y herramientas
              profesionales. Desde análisis básico hasta setups institucionales avanzados.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-zinc-900 rounded-lg p-2 flex gap-2">
              <button
                onClick={() => setActiveTab("strategies")}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === "strategies"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                📈 Estrategias
              </button>
              <button
                onClick={() => setActiveTab("simulation")}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === "simulation"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                🎮 Simulación
              </button>
              <button
                onClick={() => setActiveTab("tools")}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === "tools"
                    ? "bg-green-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                🛠️ Herramientas
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {activeTab === "strategies" && (
              <>
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-800">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Análisis Multi-Timeframe</h3>
                  <p className="text-gray-400 text-sm">
                    Combina análisis de múltiples temporalidades para identificar la dirección principal del mercado y
                    puntos de entrada precisos.
                  </p>
                </div>
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-800">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Confluencias Técnicas</h3>
                  <p className="text-gray-400 text-sm">
                    Identifica zonas donde convergen múltiples señales técnicas: soportes/resistencias, Fibonacci, y
                    volumen.
                  </p>
                </div>
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-800">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Gestión de Riesgo</h3>
                  <p className="text-gray-400 text-sm">
                    Sistemas adaptativos de stop loss y take profit basados en volatilidad y comportamiento del precio.
                  </p>
                </div>
              </>
            )}

            {activeTab === "simulation" && (
              <>
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-800">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Tiempo Real</h3>
                  <p className="text-gray-400 text-sm">
                    Feeds de datos en vivo de TwelveData para simular condiciones de mercado auténticas y resultados
                    precisos.
                  </p>
                </div>
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-800">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Backtesting Avanzado</h3>
                  <p className="text-gray-400 text-sm">
                    Prueba estrategias contra datos históricos extensos para evaluar rendimiento en diferentes
                    condiciones.
                  </p>
                </div>
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-800">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Métricas Detalladas</h3>
                  <p className="text-gray-400 text-sm">
                    Sharpe Ratio, máximo drawdown, win rate y profit factor para optimizar tus estrategias.
                  </p>
                </div>
              </>
            )}

            {activeTab === "tools" && (
              <>
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-800">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Indicadores Técnicos</h3>
                  <p className="text-gray-400 text-sm">
                    Más de 20 indicadores técnicos: RSI, MACD, Bollinger Bands, Fibonacci, VWAP y muchos más.
                  </p>
                </div>
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-800">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Análisis Visual</h3>
                  <p className="text-gray-400 text-sm">
                    Herramientas de dibujo, patrones automáticos y análisis de velas japonesas con IA.
                  </p>
                </div>
                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 border border-zinc-800">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">IA Integrada</h3>
                  <p className="text-gray-400 text-sm">
                    Análisis automatizado con GPT Forex Pro para identificar oportunidades y validar setups.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              🚀 Comenzar Simulación Gratis
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg transition-all">
              📚 Explorar Estrategias
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">75+</div>
              <p className="text-gray-400 text-sm">Estrategias Validadas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
              <p className="text-gray-400 text-sm">Precisión en Datos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <p className="text-gray-400 text-sm">Simulación Activa</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">15K+</div>
              <p className="text-gray-400 text-sm">Traders Activos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
