"use client"

import { useState } from "react"

export default function Module2StrategiesContent() {
  const [activeSection, setActiveSection] = useState("introduction")

  const sections = [
    { id: "introduction", title: "Introducción", icon: "🎯" },
    { id: "prompt-master", title: "Prompt Maestro", icon: "🧠" },
    { id: "strategy-types", title: "Tipos de Estrategias", icon: "📊" },
    { id: "risk-management", title: "Gestión de Riesgo", icon: "⚖️" },
    { id: "validation", title: "Validación", icon: "✅" },
  ]

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-900 rounded-lg p-6 sticky top-8">
                <h3 className="text-lg font-bold mb-4">Contenido de la Lección</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all flex items-center gap-3 ${
                        activeSection === section.id
                          ? "bg-purple-600 text-white"
                          : "text-gray-400 hover:text-white hover:bg-zinc-800"
                      }`}
                    >
                      <span className="text-lg">{section.icon}</span>
                      <span className="text-sm font-medium">{section.title}</span>
                    </button>
                  ))}
                </nav>

                {/* Progress */}
                <div className="mt-8 pt-6 border-t border-zinc-800">
                  <h4 className="font-medium mb-4">Progreso del Módulo 2</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Completado</span>
                      <span>60%</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-zinc-900 rounded-lg p-8">
                {/* Video Player */}
                <div className="bg-black rounded-lg overflow-hidden mb-8">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/w90_PHj93GM?start=900"
                      title="Módulo 2: Estrategias Técnicas y Simulación de Setups"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Content Sections */}
                {activeSection === "introduction" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-4">🎯 De Análisis a Estrategia Operativa</h2>
                    <div className="space-y-4 text-gray-300">
                      <p>Ya sabes cómo hacer que GPT analice el mercado.</p>
                      <p>Ahora vamos a dar el siguiente paso:</p>
                      <p className="font-semibold text-purple-300">
                        Convertir ese análisis en una estrategia completa y ejecutable.
                      </p>

                      <div className="bg-zinc-800 rounded-lg p-6 my-6">
                        <h3 className="text-xl font-bold mb-3 text-white">💡 La diferencia clave</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-red-400 mb-2">❌ Análisis básico:</h4>
                            <p className="text-sm">"BTC está en sobrecompra, podría bajar"</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-400 mb-2">✅ Estrategia completa:</h4>
                            <p className="text-sm">
                              "Short BTC en 42,500, SL 43,200, TP1 41,800, TP2 41,000, TP3 40,200"
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="mb-4">Desde hoy, vas a tener:</p>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">✓</span>
                          <span>Punto de entrada exacto</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">✓</span>
                          <span>Stop Loss calculado</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">✓</span>
                          <span>Take Profit 1, 2 y final</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">✓</span>
                          <span>Gestión de riesgo automática</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">✓</span>
                          <span>Justificación técnica de cada nivel</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeSection === "prompt-master" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-4">🧠 Prompt Maestro para Estrategias</h2>
                    <div className="space-y-4 text-gray-300">
                      <p>Este es el template que vas a usar para generar estrategias completas:</p>

                      <div className="bg-zinc-800 rounded-lg p-6 border-l-4 border-purple-500">
                        <h4 className="font-semibold text-purple-300 mb-3">Template de Estrategia Completa:</h4>
                        <div className="font-mono text-sm text-purple-300 space-y-2 bg-black p-4 rounded">
                          <p>"Crea una estrategia completa para [ACTIVO] en [TEMPORALIDAD].</p>
                          <p>Incluye:</p>
                          <p>1. Análisis técnico con [INDICADORES]</p>
                          <p>2. Dirección de la operación (Long/Short)</p>
                          <p>3. Punto de entrada exacto</p>
                          <p>4. Stop Loss con justificación</p>
                          <p>5. Take Profit 1, 2 y 3 con porcentajes</p>
                          <p>6. Risk/Reward ratio</p>
                          <p>7. Gestión de posición</p>
                          <p>8. Condiciones de invalidación"</p>
                        </div>
                      </div>

                      <h4 className="font-semibold text-white mb-3">Ejemplo práctico:</h4>
                      <div className="bg-zinc-800 rounded-lg p-4 border-l-4 border-green-500">
                        <p className="font-mono text-sm text-green-300">
                          "Crea una estrategia completa para EUR/USD en H4. Incluye: 1. Análisis técnico con RSI, MACD,
                          EMA 20/50, 2. Dirección de la operación, 3. Punto de entrada exacto, 4. Stop Loss con
                          justificación, 5. Take Profit 1, 2 y 3 con porcentajes, 6. Risk/Reward ratio, 7. Gestión de
                          posición, 8. Condiciones de invalidación"
                        </p>
                      </div>

                      <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-500/30">
                        <h4 className="font-semibold text-blue-300 mb-3">💡 Tip Profesional:</h4>
                        <p className="text-sm">
                          Siempre especifica el activo, temporalidad e indicadores. Cuanto más específico seas, más
                          precisa será la estrategia que genere GPT.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "strategy-types" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-4">📊 Tipos de Setups que Puedes Generar</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-zinc-800 rounded-lg p-4">
                          <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                            📈 Setups Alcistas
                          </h4>
                          <ul className="text-sm space-y-1">
                            <li>• Ruptura de resistencia</li>
                            <li>• Retesteo de soporte</li>
                            <li>• Patrón de reversión</li>
                            <li>• Continuación de tendencia</li>
                          </ul>
                        </div>
                        <div className="bg-zinc-800 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                            ⏱️ Scalping (M5-M15)
                          </h4>
                          <ul className="text-sm space-y-1">
                            <li>• TP rápidos (10-20 pips)</li>
                            <li>• SL ajustados</li>
                            <li>• Alta frecuencia</li>
                            <li>• Confluencias técnicas</li>
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-zinc-800 rounded-lg p-4">
                          <h4 className="font-semibold text-red-400 mb-2 flex items-center gap-2">
                            📉 Setups Bajistas
                          </h4>
                          <ul className="text-sm space-y-1">
                            <li>• Ruptura de soporte</li>
                            <li>• Retesteo de resistencia</li>
                            <li>• Patrón de continuación</li>
                            <li>• Reversión desde máximos</li>
                          </ul>
                        </div>
                        <div className="bg-zinc-800 rounded-lg p-4">
                          <h4 className="font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                            📊 Swing Trading (H4-D1)
                          </h4>
                          <ul className="text-sm space-y-1">
                            <li>• TP amplios (50-200 pips)</li>
                            <li>• SL generosos</li>
                            <li>• Menor frecuencia</li>
                            <li>• Análisis fundamental</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "risk-management" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-4">⚖️ Gestión de Riesgo Automatizada</h2>
                    <div className="space-y-4 text-gray-300">
                      <p>GPT puede calcular automáticamente el tamaño de tu posición:</p>

                      <div className="bg-zinc-800 rounded-lg p-6">
                        <h4 className="font-semibold text-purple-300 mb-3">Prompt para gestión de riesgo:</h4>
                        <div className="bg-black rounded-lg p-4 border-l-4 border-purple-500 mb-4">
                          <p className="font-mono text-sm text-purple-300">
                            "Calcula el tamaño de posición para EUR/USD. Capital: $10,000. Riesgo: 1%. Entrada: 1.0850.
                            Stop Loss: 1.0800. ¿Cuántos lotes debo usar?"
                          </p>
                        </div>
                        <p className="text-sm text-gray-400">
                          GPT calculará automáticamente que necesitas 2 lotes estándar para arriesgar exactamente $100
                          (1% de $10,000) con 50 pips de stop loss.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-zinc-800 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-green-400 mb-2">1-2%</div>
                          <div className="text-xs text-gray-400">Riesgo por operación</div>
                        </div>
                        <div className="bg-zinc-800 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-blue-400 mb-2">1:2.5</div>
                          <div className="text-xs text-gray-400">Risk/Reward mínimo</div>
                        </div>
                        <div className="bg-zinc-800 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-purple-400 mb-2">3 TPs</div>
                          <div className="text-xs text-gray-400">Tomas de ganancia</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === "validation" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-4">✅ Cómo Validar tus Estrategias</h2>
                    <div className="space-y-4 text-gray-300">
                      <p>Antes de ejecutar cualquier estrategia, valida estos puntos:</p>

                      <div className="bg-zinc-800 rounded-lg p-6">
                        <h4 className="font-semibold text-white mb-3">Checklist de Validación:</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" />
                            <span className="text-sm">¿El Risk/Reward es mínimo 1:2?</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" />
                            <span className="text-sm">¿Los niveles coinciden en TradingView?</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" />
                            <span className="text-sm">¿Hay confluencia de al menos 2 indicadores?</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" />
                            <span className="text-sm">¿El SL está en zona lógica de invalidación?</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" />
                            <span className="text-sm">¿Los TP están en niveles técnicos relevantes?</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" />
                            <span className="text-sm">¿El tamaño de posición respeta tu gestión de riesgo?</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-900/20 rounded-lg p-6 border border-green-500/30">
                        <h4 className="font-semibold text-green-300 mb-3">🎯 Regla de Oro:</h4>
                        <p className="text-sm">
                          Si no puedes validar al menos 4 de estos 6 puntos, no ejecutes la estrategia. Es mejor esperar
                          una mejor oportunidad que arriesgar capital en setups dudosos.
                        </p>
                      </div>
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
