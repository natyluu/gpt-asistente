"use client"

export default function Module1Content() {
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
                    src="https://www.youtube.com/embed/w90_PHj93GM?start=300"
                    title="Módulo 1: Fundamentos del Análisis Técnico Automatizado"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Contenido del Módulo */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Fundamentos del Análisis Técnico Automatizado</h2>
                  <div className="space-y-6 text-gray-300">
                    {/* Introducción */}
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">📌 Tu tiempo vale oro</h3>
                      <p className="mb-3">Y cada minuto que pasas frente a la pantalla es un minuto que no vuelve.</p>
                      <p className="mb-4">
                        Entonces…{" "}
                        <strong className="text-white">
                          ¿Por qué sigues haciendo el análisis técnico como si estuviéramos en 2015?
                        </strong>
                      </p>
                      <p className="mb-3">Tú sabes cuánto tiempo consume:</p>
                      <ul className="space-y-2 ml-6 mb-3">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>abrir gráficos,</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>calcular indicadores,</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>interpretar señales…</span>
                        </li>
                      </ul>
                      <p className="mb-2">Una y otra vez.</p>
                      <p className="mb-2">Todos los días.</p>
                      <p className="mb-4">Con la esperanza de tener claridad.</p>

                      <p className="mb-3">
                        Hoy te voy a enseñar cómo traducir todo ese proceso a un lenguaje que GPT sí puede entender.
                      </p>
                      <p className="mb-3 font-semibold text-purple-300">Y lo más poderoso:</p>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">✓</span>
                          <span>Te va a responder en segundos.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">✓</span>
                          <span>Con setups claros.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">✓</span>
                          <span>Justificados.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">✓</span>
                          <span>Listos para validar.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Voz interna del trader */}
                    <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                      <h3 className="text-xl font-bold mb-3 text-white">🤖 ¿Entro o espero?</h3>
                      <p>
                        Esa voz que no te deja tranquilo puede silenciarse cuando tienes lógica detrás de tus
                        decisiones.
                      </p>
                    </div>

                    {/* Qué puede hacer GPT */}
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">Qué puede hacer GPT</h3>
                      <p className="mb-3">GPT puede analizar un activo usando texto o imágenes.</p>
                      <p className="mb-3">
                        Le das el activo, la temporalidad y los indicadores… Y responde con lógica.
                      </p>
                      <p className="mb-4">Le subes una imagen… Y detecta estructura, velas, patrones y zonas clave.</p>

                      <div className="bg-zinc-900 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-3">Lo que tú ves… él lo calcula</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <p className="text-purple-400">• Sobrecompra</p>
                            <p className="text-purple-400">• Cruces de EMAs</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-purple-400">• Rebotes por volumen</p>
                            <p className="text-purple-400">• Confluencias técnicas</p>
                          </div>
                        </div>
                        <p className="mt-4 text-center font-semibold">
                          <span className="text-white">Tú hablas como trader.</span>
                          <br />
                          <span className="text-purple-400">Y él responde con análisis.</span>
                          <br />
                          <span className="text-gray-400">No con opiniones.</span>
                        </p>
                      </div>
                    </div>

                    {/* Problema común */}
                    <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                      <h3 className="text-xl font-bold mb-3 text-white">¿Tu IA no te entiende? Este es el motivo.</h3>
                      <p className="mb-3">¿Te frustra que tu asistente no entienda lo que necesitas?</p>
                      <p>
                        Nadie te enseñó esto:{" "}
                        <strong className="text-purple-300">🧠 Un buen prompt no se improvisa. Se estructura.</strong>
                      </p>
                    </div>

                    {/* Estructura de un prompt */}
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">Estructura de un prompt</h3>
                      <div className="bg-zinc-800 rounded-lg p-4 mb-4 border-l-4 border-purple-500">
                        <h4 className="font-semibold text-purple-300 mb-3">Fórmula mágica:</h4>
                        <p className="font-mono text-sm text-purple-300">
                          [Acción] + [Activo] + [Temporalidad] + [Indicadores] + [Objetivo]
                        </p>
                      </div>

                      <h4 className="font-semibold text-white mb-3">Ejemplo claro:</h4>
                      <div className="bg-zinc-800 rounded-lg p-4 mb-4 border-l-4 border-purple-500">
                        <p className="font-mono text-sm text-purple-300">
                          "Haz un análisis técnico de BTC/USD en 4H utilizando RSI, MACD y EMA. Quiero saber si hay
                          señales de entrada o salida y cuál es la tendencia general."
                        </p>
                      </div>

                      <h4 className="font-semibold text-white mb-3">Reglas de oro:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <p className="flex items-center gap-2">
                            <span className="text-purple-400">✔️</span>
                            <span>Sé específico.</span>
                          </p>
                          <p className="flex items-center gap-2">
                            <span className="text-purple-400">✔️</span>
                            <span>Define bien la temporalidad.</span>
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="flex items-center gap-2">
                            <span className="text-purple-400">✔️</span>
                            <span>Usa los indicadores adecuados.</span>
                          </p>
                          <p className="flex items-center gap-2">
                            <span className="text-purple-400">✔️</span>
                            <span>Dile exactamente lo que necesitas.</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Indicadores compatibles */}
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">Indicadores compatibles y cómo pedirlos</h3>
                      <div className="space-y-4">
                        <div className="bg-zinc-900 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-400 mb-2">🔸 RSI</h4>
                          <p className="text-sm font-mono bg-zinc-800 p-2 rounded">
                            "Analiza EUR/USD en H1 con RSI. ¿Sobrecomprado o sobrevendido?"
                          </p>
                        </div>
                        <div className="bg-zinc-900 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-400 mb-2">🔸 MACD</h4>
                          <p className="text-sm font-mono bg-zinc-800 p-2 rounded">
                            "¿Hay cruce alcista del MACD en BTC/USD en H4?"
                          </p>
                        </div>
                        <div className="bg-zinc-900 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-400 mb-2">🔸 EMA</h4>
                          <p className="text-sm font-mono bg-zinc-800 p-2 rounded">
                            "¿La EMA 9 cruzó sobre la EMA 21 en XAU/USD en 1H?"
                          </p>
                        </div>
                        <div className="bg-zinc-900 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-400 mb-2">🔸 VWAP</h4>
                          <p className="text-sm font-mono bg-zinc-800 p-2 rounded">
                            "¿Está el precio por encima del VWAP en NAS100 en M15?"
                          </p>
                        </div>
                        <div className="bg-zinc-900 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-400 mb-2">🔸 Bandas de Bollinger</h4>
                          <p className="text-sm font-mono bg-zinc-800 p-2 rounded">
                            "¿BTC/USD en 4H está cerca de una ruptura o rebote?"
                          </p>
                        </div>
                        <div className="bg-zinc-900 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-400 mb-2">🔸 Pivotes</h4>
                          <p className="text-sm font-mono bg-zinc-800 p-2 rounded">
                            "¿Cuáles son los niveles clave de pivote en EUR/USD en H1?"
                          </p>
                        </div>
                        <div className="bg-zinc-900 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-400 mb-2">🔸 Regresión Lineal</h4>
                          <p className="text-sm font-mono bg-zinc-800 p-2 rounded">
                            "¿Qué dirección muestra la regresión en AAPL diario?"
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Análisis visual */}
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">¿Y si le subo un gráfico?</h3>
                      <p className="mb-3">Entonces GPT lo ve. Y te dice:</p>
                      <div className="bg-zinc-900 rounded-lg p-4 mb-4">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>Qué velas destacan</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>Qué patrón está en juego</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>Qué zona institucional está activa</span>
                          </li>
                        </ul>
                      </div>

                      <h4 className="font-semibold text-white mb-3">Prompt visual ejemplo:</h4>
                      <div className="bg-zinc-800 rounded-lg p-4 border-l-4 border-purple-500">
                        <p className="font-mono text-sm text-purple-300">
                          "Aquí tienes el gráfico de BTC/USD en 1H. ¿Qué estructura observas? ¿Qué sugiere para la
                          próxima entrada?"
                        </p>
                      </div>
                    </div>

                    {/* Ejercicio práctico */}
                    <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                      <h3 className="text-xl font-bold mb-3 text-white">⚙️ Ejercicio práctico</h3>
                      <p className="mb-3 font-semibold text-purple-300">Haz esto ahora:</p>
                      <ol className="space-y-3 ml-6 mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1 font-bold">1.</span>
                          <span>Abre ChatGPT.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1 font-bold">2.</span>
                          <span>Escribe:</span>
                        </li>
                      </ol>
                      <div className="bg-zinc-800 rounded-lg p-4 mb-4 border-l-4 border-purple-500">
                        <p className="font-mono text-sm text-purple-300">
                          "Haz un análisis técnico de EUR/USD en 1H usando RSI, MACD y Bollinger Bands. Dame soportes,
                          resistencias y la tendencia actual."
                        </p>
                      </div>
                      <ol className="space-y-3 ml-6" start={3}>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1 font-bold">3.</span>
                          <span>Lee la respuesta.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1 font-bold">4.</span>
                          <span>Abre TradingView.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1 font-bold">5.</span>
                          <span>Valida.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1 font-bold">6.</span>
                          <span>Repite con otros activos.</span>
                        </li>
                      </ol>
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
                      <h4 className="font-medium text-sm">Fórmula de Prompts Técnicos</h4>
                      <p className="text-gray-400 text-xs">Template con la estructura exacta para cada análisis</p>
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
                      <h4 className="font-medium text-sm">Biblioteca de Prompts por Indicador</h4>
                      <p className="text-gray-400 text-xs">7 prompts listos para RSI, MACD, EMA, VWAP, etc.</p>
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
                      <h4 className="font-medium text-sm">Checklist de Validación TradingView</h4>
                      <p className="text-gray-400 text-xs">Pasos exactos para verificar cada respuesta del GPT</p>
                    </div>
                  </a>
                </div>

                <div className="pt-6 border-t border-zinc-800">
                  <h4 className="font-medium mb-4">Progreso del Curso</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Completado</span>
                      <span>2 de 6 módulos</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "33.3%" }}></div>
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
