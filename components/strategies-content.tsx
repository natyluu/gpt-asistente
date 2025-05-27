"use client"

export default function StrategiesContent() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Estrategias Técnicas */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-purple-400">Estrategias</span> Técnicas Avanzadas
              </h2>
              <p className="text-gray-400 mb-8">
                Desarrolla y perfecciona estrategias de trading basadas en análisis técnico profundo, utilizando
                indicadores, patrones y confluencias para maximizar tus probabilidades de éxito.
              </p>

              <div className="space-y-6">
                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm">
                      1
                    </span>
                    Análisis Multi-Timeframe
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Combina análisis de múltiples temporalidades para identificar la dirección principal del mercado y
                    puntos de entrada precisos.
                  </p>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm">
                      2
                    </span>
                    Confluencias Técnicas
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Identifica zonas donde convergen múltiples señales técnicas: soportes/resistencias, retrocesos de
                    Fibonacci, y niveles de volumen.
                  </p>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm">
                      3
                    </span>
                    Gestión de Riesgo Dinámica
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Implementa sistemas de stop loss y take profit adaptativos basados en la volatilidad del mercado y
                    el comportamiento del precio.
                  </p>
                </div>
              </div>
            </div>

            {/* Simulación de Setups */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-blue-400">Simulación</span> de Setups
              </h2>
              <p className="text-gray-400 mb-8">
                Valida tus estrategias en un entorno de simulación realista antes de implementarlas en el mercado real.
                Reduce riesgos y aumenta tu confianza.
              </p>

              <div className="space-y-6">
                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm">1</span>
                    Datos en Tiempo Real
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Utiliza feeds de datos reales de TwelveData para simular condiciones de mercado auténticas y obtener
                    resultados precisos.
                  </p>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm">2</span>
                    Backtesting Avanzado
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Prueba tus estrategias contra datos históricos extensos para evaluar su rendimiento en diferentes
                    condiciones de mercado.
                  </p>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm">3</span>
                    Métricas de Rendimiento
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Analiza métricas detalladas como Sharpe Ratio, máximo drawdown, win rate y profit factor para
                    optimizar tus estrategias.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Herramientas Disponibles */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">Herramientas de Análisis Disponibles</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "RSI",
                "MACD",
                "Bollinger Bands",
                "EMA/SMA",
                "VWAP",
                "Fibonacci",
                "Pivotes",
                "ATR",
                "Stochastic",
                "Williams %R",
                "CCI",
                "Momentum",
              ].map((tool, index) => (
                <div key={index} className="bg-zinc-900 rounded-lg p-4 text-center hover:bg-zinc-800 transition-colors">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                  <h3 className="font-semibold text-sm">{tool}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
