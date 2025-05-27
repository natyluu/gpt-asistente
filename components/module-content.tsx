"use client"

export default function ModuleContent() {
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
                    src="https://www.youtube.com/embed/w90_PHj93GM?start=0"
                    title="Módulo 0: Introducción al Curso y al GPT Especializado"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Contenido del Módulo */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Introducción al Curso y al GPT Especializado</h2>
                  <div className="space-y-6 text-gray-300">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">
                        🎯 Comienza aquí: ¿por qué este curso es diferente?
                      </h3>
                      <p className="mb-3">Tú no estás frente a un curso tradicional.</p>
                      <p className="mb-3">
                        Estás por aprender a usar inteligencia artificial aplicada al trading de una manera práctica,
                        estructurada y profesional.
                      </p>
                      <p className="mb-3">Aquí no te voy a llenar de teoría.</p>
                      <p className="mb-3">Te voy a enseñar a operar con GPT como tu copiloto.</p>
                      <p className="mb-3">Tú vas a pensar como trader.</p>
                      <p>Y la IA va a ejecutar contigo el análisis.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">
                        🤖 ¿Qué es el GPT especializado en Finanzas, Trading & Investing?
                      </h3>
                      <p className="mb-3">No estás frente a un chatbot común.</p>
                      <p className="mb-4">Estás frente a un modelo entrenado con lógica financiera.</p>
                      <p className="mb-3 font-semibold text-white">Este GPT:</p>
                      <ul className="space-y-2 ml-6 mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Interpreta activos como BTC, EUR/USD, NAS100, XAU/USD, entre otros.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Comprende velas japonesas, patrones chartistas e indicadores técnicos.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>
                            Usa lógica estructurada para analizar RSI, MACD, VWAP, EMA, Bollinger Bands, Pivotes y más.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>
                            Puede simular análisis institucional: Order Blocks, BOS, FVG, CHoCH, Liquidity Sweeps.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>
                            Responde en segundos con lógica técnica clara, como si fueras tú… pero más rápido.
                          </span>
                        </li>
                      </ul>

                      <h4 className="font-semibold text-white mb-2">¿Qué no hace este GPT?</h4>
                      <p className="mb-2">Este GPT es tu copiloto.</p>
                      <p className="mb-2">Tú le das el contexto.</p>
                      <p className="mb-2">Él te devuelve análisis estructurado.</p>
                      <p>Pero tú sigues siendo el trader.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">🧠 Cómo está estructurado este curso</h3>
                      <p className="mb-3">Este curso está dividido en 6 módulos, cada uno con una misión clara.</p>
                      <p className="mb-3">Vas a aprender haciendo.</p>
                      <p className="mb-3">Vas a escribir prompts reales.</p>
                      <p className="mb-3">Vas a validar análisis en TradingView.</p>
                      <p className="mb-4">Y vas a construir setups completos que podrías usar en tu operativa real.</p>

                      <p className="mb-3 font-semibold text-white">Cada módulo incluye:</p>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">🎥</span>
                          <span>Clases en video</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">📄</span>
                          <span>Prompts listos para copiar y adaptar</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">🧪</span>
                          <span>Retos de práctica</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">📊</span>
                          <span>Casos reales con activos actuales</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">✅</span>
                          <span>Actividades validadas en plataformas como TradingView o MT5</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">⚙️ ¿Qué necesitas para avanzar?</h3>
                      <p className="mb-3">Para sacar el máximo provecho de este curso necesitas:</p>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Una cuenta gratuita de ChatGPT (recomendada versión Plus para plugins).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Acceso a TradingView (gratuito o PRO).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>MetaTrader 5 (o cTrader, NinjaTrader, etc., si válidas setups).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Tiempo para practicar. Aquí no sirve mirar. Aquí se hace.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Curiosidad real por automatizar tu análisis y mejorar tu lógica como trader.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">💡 Tu primer paso práctico</h3>
                      <p className="mb-3">Antes de ir al Módulo 1, quiero que hagas esto:</p>
                      <ol className="space-y-2 ml-6 mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">1.</span>
                          <span>Abre ChatGPT.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">2.</span>
                          <span>Escribe el siguiente prompt:</span>
                        </li>
                      </ol>
                      <div className="bg-zinc-800 rounded-lg p-4 mb-4 border-l-4 border-purple-500">
                        <p className="font-mono text-sm text-purple-300">
                          "Haz un análisis técnico de BTC/USD en 4H usando RSI, MACD y Bollinger Bands."
                        </p>
                      </div>
                      <ol className="space-y-2 ml-6 mb-4" start={3}>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">3.</span>
                          <span>Lee lo que te responde.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">4.</span>
                          <span>Abre TradingView.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">5.</span>
                          <span>Valida si tiene sentido.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">6.</span>
                          <span>Anota lo que entendiste.</span>
                        </li>
                      </ol>
                      <p className="mb-2">Este será tu primer paso.</p>
                      <p>Y desde aquí, empezaremos a construir… setups reales.</p>
                      <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 mt-6">
                        <p className="mb-3">Esto fue solo la base.</p>
                        <p className="mb-4">En el próximo módulo, vas a construir una estrategia completa:</p>
                        <ul className="space-y-2 ml-6 mb-4">
                          <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-1">✓</span>
                            <span>Entrada, salida, TP1, TP2, TP final y Stop Loss.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-1">✓</span>
                            <span>Todo generado por GPT.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-1">✓</span>
                            <span>Y validado por ti.</span>
                          </li>
                        </ul>
                        <p className="mb-3">Ahora que sabes cómo automatizar tu análisis,</p>
                        <p className="mb-3">es momento de pensar como trader,</p>
                        <p className="mb-3">escribir como ingeniero,</p>
                        <p className="mb-3">y ejecutar como institución.</p>
                        <p className="font-semibold text-purple-300">Nos vemos en el Módulo 2.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">🚀 Bienvenida oficial</h3>
                      <p className="mb-3">Este es tu punto de partida.</p>
                      <p className="mb-3">
                        Si alguna vez te sentiste frustrado por no saber interpretar el mercado con claridad…
                      </p>
                      <p className="mb-3">Eso va a cambiar.</p>
                      <p className="mb-4">
                        Porque ahora, con los prompts correctos, vas a estructurar tus análisis con velocidad, precisión
                        y lógica institucional.
                      </p>
                      <p className="mb-3">Prepárate.</p>
                      <p className="mb-3">Nos vemos en el Módulo 1: Fundamentos del Análisis Técnico Automatizado.</p>
                      <p className="mb-2">Activa tu GPT.</p>
                      <p>
                        Y abramos la mente para operar con una herramienta que cambiará tu forma de pensar el trading.
                      </p>
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
                          <h4 className="font-semibold mb-2">Comprensión del GPT Especializado</h4>
                          <p className="text-gray-400 text-sm">
                            Entenderás qué hace único a nuestro GPT Forex Pro y cómo puede transformar tu análisis de
                            mercados.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Configuración Inicial</h4>
                          <p className="text-gray-400 text-sm">
                            Aprenderás a configurar tu entorno de trabajo y acceder al GPT de manera efectiva.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Primeros Prompts</h4>
                          <p className="text-gray-400 text-sm">
                            Realizarás tus primeras consultas estructuradas y verás la potencia del análisis
                            automatizado.
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
                <h3 className="text-lg font-bold mb-4">Recursos Adicionales</h3>
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
                      <h4 className="font-medium text-sm">Guía de Configuración Inicial</h4>
                      <p className="text-gray-400 text-xs">PDF con pasos detallados para comenzar</p>
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
                      <h4 className="font-medium text-sm">Plantillas de Prompts Básicos</h4>
                      <p className="text-gray-400 text-xs">Ejemplos listos para usar en tus primeras consultas</p>
                    </div>
                  </a>
                </div>

                <div className="pt-6 border-t border-zinc-800">
                  <h4 className="font-medium mb-4">Progreso del Curso</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Completado</span>
                      <span>1 de 6 módulos</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "16.6%" }}></div>
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
