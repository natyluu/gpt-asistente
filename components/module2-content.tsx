"use client"

export default function Module2Content() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Video Principal */}
            <div className="lg:col-span-2">
              <div className="bg-zinc-900 rounded-lg overflow-hidden mb-8">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/w90_PHj93GM?start=600"
                    title="Módulo 2: Estrategias Técnicas y Simulación de Setups"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Contenido del Módulo */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Estrategias Técnicas y Simulación de Setups</h2>
                  <div className="space-y-6 text-gray-300">
                    {/* Introducción */}
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">🎯 De análisis a estrategia operativa</h3>
                      <p className="mb-3">Ya sabes cómo hacer que GPT analice el mercado.</p>
                      <p className="mb-3">Ahora vamos a dar el siguiente paso:</p>
                      <p className="mb-4 font-semibold text-purple-300">
                        Convertir ese análisis en una estrategia completa y ejecutable.
                      </p>
                      <p className="mb-3">No más "parece que va a subir".</p>
                      <p className="mb-3">No más "creo que es buen momento".</p>
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

                    {/* Diferencia clave */}
                    <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                      <h3 className="text-xl font-bold mb-3 text-white">
                        💡 La diferencia entre análisis y estrategia
                      </h3>
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

                    {/* Estructura de una estrategia */}
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">🏗️ Anatomía de una estrategia GPT</h3>
                      <p className="mb-4">Cada estrategia que generes tendrá estos componentes:</p>

                      <div className="space-y-4">
                        <div className="bg-zinc-900 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-400 mb-2">1. 🎯 Dirección y Entrada</h4>
                          <p className="text-sm mb-2">Basada en confluencias técnicas:</p>
                          <ul className="text-sm space-y-1 ml-4">
                            <li>• Ruptura de estructura</li>
                            <li>• Retesteo de zona clave</li>
                            <li>• Confirmación de indicadores</li>
                          </ul>
                        </div>

                        <div className="bg-zinc-900 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-400 mb-2">2. 🛡️ Stop Loss</h4>
                          <p className="text-sm mb-2">Calculado según:</p>
                          <ul className="text-sm space-y-1 ml-4">
                            <li>• ATR (Average True Range)</li>
                            <li>• Niveles de invalidación</li>
                            <li>• Gestión de riesgo (1-2% del capital)</li>
                          </ul>
                        </div>

                        <div className="bg-zinc-900 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-400 mb-2">3. 🎯 Take Profits Escalonados</h4>
                          <p className="text-sm mb-2">Múltiples objetivos:</p>
                          <ul className="text-sm space-y-1 ml-4">
                            <li>• TP1: Primer soporte/resistencia (30% posición)</li>
                            <li>• TP2: Extensión Fibonacci (40% posición)</li>
                            <li>• TP3: Objetivo final proyectado (30% posición)</li>
                          </ul>
                        </div>

                        <div className="bg-zinc-900 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-400 mb-2">4. ⚖️ Risk/Reward</h4>
                          <p className="text-sm">Ratio mínimo 1:2, idealmente 1:3 o superior</p>
                        </div>
                      </div>
                    </div>

                    {/* Prompt para estrategias */}
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">📝 Prompt maestro para estrategias</h3>
                      <p className="mb-4">Este es el template que vas a usar para generar estrategias completas:</p>

                      <div className="bg-zinc-800 rounded-lg p-4 mb-4 border-l-4 border-purple-500">
                        <h4 className="font-semibold text-purple-300 mb-3">Template de Estrategia:</h4>
                        <div className="font-mono text-sm text-purple-300 space-y-2">
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
                      <div className="bg-zinc-800 rounded-lg p-4 border-l-4 border-purple-500">
                        <p className="font-mono text-sm text-purple-300">
                          "Crea una estrategia completa para EUR/USD en H4. Incluye: 1. Análisis técnico con RSI, MACD,
                          EMA 20/50, 2. Dirección de la operación, 3. Punto de entrada exacto, 4. Stop Loss con
                          justificación, 5. Take Profit 1, 2 y 3 con porcentajes, 6. Risk/Reward ratio, 7. Gestión de
                          posición, 8. Condiciones de invalidación"
                        </p>
                      </div>
                    </div>

                    {/* Tipos de setups */}
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">🔄 Tipos de setups que puedes generar</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                          <div className="bg-zinc-900 rounded-lg p-4">
                            <h4 className="font-semibold text-green-400 mb-2">📈 Setups Alcistas</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Ruptura de resistencia</li>
                              <li>• Retesteo de soporte</li>
                              <li>• Patrón de reversión</li>
                              <li>• Continuación de tendencia</li>
                            </ul>
                          </div>
                          <div className="bg-zinc-900 rounded-lg p-4">
                            <h4 className="font-semibold text-blue-400 mb-2">⏱️ Scalping</h4>
                            <ul className="text-sm space-y-1">
                              <li>• M5 y M15</li>
                              <li>• TP rápidos (10-20 pips)</li>
                              <li>• SL ajustados</li>
                              <li>• Alta frecuencia</li>
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-zinc-900 rounded-lg p-4">
                            <h4 className="font-semibold text-red-400 mb-2">📉 Setups Bajistas</h4>
                            <ul className="text-sm space-y-1">
                              <li>• Ruptura de soporte</li>
                              <li>• Retesteo de resistencia</li>
                              <li>• Patrón de continuación</li>
                              <li>• Reversión desde máximos</li>
                            </ul>
                          </div>
                          <div className="bg-zinc-900 rounded-lg p-4">
                            <h4 className="font-semibold text-yellow-400 mb-2">📊 Swing Trading</h4>
                            <ul className="text-sm space-y-1">
                              <li>• H4 y Daily</li>
                              <li>• TP amplios (50-200 pips)</li>
                              <li>• SL generosos</li>
                              <li>• Menor frecuencia</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Gestión de riesgo */}
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">⚖️ Gestión de riesgo automatizada</h3>
                      <p className="mb-4">GPT puede calcular automáticamente el tamaño de tu posición:</p>

                      <div className="bg-zinc-900 rounded-lg p-6">
                        <h4 className="font-semibold text-purple-300 mb-3">Prompt para gestión de riesgo:</h4>
                        <div className="bg-zinc-800 rounded-lg p-4 border-l-4 border-purple-500 mb-4">
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
                    </div>

                    {/* Validación de estrategias */}
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">✅ Cómo validar tus estrategias</h3>
                      <p className="mb-4">Antes de ejecutar cualquier estrategia, valida estos puntos:</p>

                      <div className="bg-zinc-900 rounded-lg p-6">
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
                    </div>

                    {/* Casos prácticos */}
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">📊 Casos prácticos de estrategias</h3>
                      <div className="space-y-4">
                        <div className="bg-zinc-900 rounded-lg p-4">
                          <h4 className="font-semibold text-green-400 mb-2">Caso 1: Ruptura alcista EUR/USD</h4>
                          <div className="text-sm space-y-1">
                            <p>
                              <strong>Setup:</strong> Ruptura de resistencia en 1.0950
                            </p>
                            <p>
                              <strong>Entrada:</strong> 1.0955 (confirmación)
                            </p>
                            <p>
                              <strong>SL:</strong> 1.0920 (35 pips)
                            </p>
                            <p>
                              <strong>TP1:</strong> 1.0990 (35 pips) - 30% posición
                            </p>
                            <p>
                              <strong>TP2:</strong> 1.1025 (70 pips) - 40% posición
                            </p>
                            <p>
                              <strong>TP3:</strong> 1.1060 (105 pips) - 30% posición
                            </p>
                            <p>
                              <strong>R/R:</strong> 1:3 promedio
                            </p>
                          </div>
                        </div>

                        <div className="bg-zinc-900 rounded-lg p-4">
                          <h4 className="font-semibold text-red-400 mb-2">Caso 2: Reversión bajista XAU/USD</h4>
                          <div className="text-sm space-y-1">
                            <p>
                              <strong>Setup:</strong> Doble techo en zona de resistencia
                            </p>
                            <p>
                              <strong>Entrada:</strong> 2,010 (ruptura del neckline)
                            </p>
                            <p>
                              <strong>SL:</strong> 2,025 (15 USD)
                            </p>
                            <p>
                              <strong>TP1:</strong> 1,995 (15 USD) - 30% posición
                            </p>
                            <p>
                              <strong>TP2:</strong> 1,980 (30 USD) - 40% posición
                            </p>
                            <p>
                              <strong>TP3:</strong> 1,965 (45 USD) - 30% posición
                            </p>
                            <p>
                              <strong>R/R:</strong> 1:2 promedio
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Ejercicio práctico */}
                    <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                      <h3 className="text-xl font-bold mb-3 text-white">⚙️ Ejercicio: Tu primera estrategia completa</h3>
                      <p className="mb-3 font-semibold text-purple-300">Vamos a crear una estrategia paso a paso:</p>
                      <ol className="space-y-3 ml-6 mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1 font-bold">1.</span>
                          <span>Abre ChatGPT y usa este prompt:</span>
                        </li>
                      </ol>
                      <div className="bg-zinc-800 rounded-lg p-4 mb-4 border-l-4 border-purple-500">
                        <p className="font-mono text-sm text-purple-300">
                          "Crea una estrategia completa para XAU/USD en H1. Incluye: 1. Análisis técnico con RSI, MACD,
                          EMA 9/21, 2. Dirección de la operación, 3. Punto de entrada exacto, 4. Stop Loss con
                          justificación, 5. Take Profit 1, 2 y 3 con porcentajes, 6. Risk/Reward ratio, 7. Gestión de
                          posición, 8. Condiciones de invalidación"
                        </p>
                      </div>
                      <ol className="space-y-3 ml-6 mb-4" start={2}>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1 font-bold">2.</span>
                          <span>Copia la respuesta completa</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1 font-bold">3.</span>
                          <span>Abre TradingView con XAU/USD en H1</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1 font-bold">4.</span>
                          <span>Valida cada nivel propuesto</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1 font-bold">5.</span>
                          <span>Marca entrada, SL y TPs en el gráfico</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1 font-bold">6.</span>
                          <span>Calcula el tamaño de posición para 1% de riesgo</span>
                        </li>
                      </ol>
                      <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 mt-6">
                        <p className="mb-3">¡Felicidades! Acabas de crear tu primera estrategia automatizada.</p>
                        <p className="mb-4">En el próximo módulo, vamos a llevar esto al siguiente nivel:</p>
                        <ul className="space-y-2 ml-6 mb-4">
                          <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-1">✓</span>
                            <span>Análisis institucional con conceptos ICT</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-1">✓</span>
                            <span>Order Blocks, FVG y Liquidity Sweeps</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-1">✓</span>
                            <span>Smart Money Concepts automatizados</span>
                          </li>
                        </ul>
                        <p className="mb-3">Ahora que dominas las estrategias técnicas,</p>
                        <p className="mb-3">es momento de pensar como las instituciones,</p>
                        <p className="mb-3">seguir el dinero inteligente,</p>
                        <p className="mb-3">y anticiparte a los grandes movimientos.</p>
                        <p className="font-semibold text-purple-300">
                          Nos vemos en el Módulo 3: Análisis Institucional con GPT.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Objetivos de Aprendizaje</h3>
                  <div className="bg-zinc-900 rounded-lg p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Construcción de Estrategias Completas</h4>
                          <p className="text-gray-400 text-sm">
                            Aprenderás a generar estrategias operativas con entrada, stop loss y múltiples take profits
                            usando prompts estructurados.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Gestión de Riesgo Automatizada</h4>
                          <p className="text-gray-400 text-sm">
                            Dominarás el cálculo automático de posiciones, risk/reward ratios y niveles de invalidación.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Validación y Ejecución</h4>
                          <p className="text-gray-400 text-sm">
                            Implementarás un sistema de validación para verificar cada estrategia antes de ejecutarla en
                            el mercado real.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-900 rounded-lg p-6 sticky top-8">
                <h3 className="text-lg font-bold mb-4">Recursos para Descargar</h3>
                <div className="space-y-3 mb-8">
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
                  >
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
                      className="text-purple-400"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14,2 14,8 20,8" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-sm">Template de Estrategias Completas</h4>
                      <p className="text-gray-400 text-xs">Prompt maestro para generar setups operativos</p>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
                  >
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
                      className="text-purple-400"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14,2 14,8 20,8" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-sm">Calculadora de Risk/Reward</h4>
                      <p className="text-gray-400 text-xs">Hoja de cálculo para gestión de posiciones</p>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
                  >
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
                      className="text-purple-400"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14,2 14,8 20,8" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-sm">Checklist de Validación</h4>
                      <p className="text-gray-400 text-xs">Lista de verificación para cada estrategia</p>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
                  >
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
                      className="text-purple-400"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14,2 14,8 20,8" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-sm">Biblioteca de Setups</h4>
                      <p className="text-gray-400 text-xs">15 estrategias pre-configuradas por tipo de mercado</p>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
                  >
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
                      className="text-purple-400"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14,2 14,8 20,8" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-sm">Casos Prácticos Resueltos</h4>
                      <p className="text-gray-400 text-xs">10 ejemplos reales con EUR/USD, XAU/USD y BTC</p>
                    </div>
                  </a>
                </div>

                <div className="pt-6 border-t border-zinc-800">
                  <h4 className="font-medium mb-4">Progreso del Curso</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Completado</span>
                      <span>3 de 6 módulos</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "50%" }}></div>
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
