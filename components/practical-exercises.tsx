"use client"

import { useState } from "react"

export default function PracticalExercises() {
  const [completedExercises, setCompletedExercises] = useState<number[]>([])

  const exercises = [
    {
      id: 1,
      title: "Tu Primera Estrategia Completa",
      difficulty: "Principiante",
      time: "10 min",
      description: "Crea una estrategia completa para XAU/USD usando el prompt maestro",
      instructions: [
        "Abre ChatGPT y usa el prompt maestro para XAU/USD en H1",
        "Incluye RSI, MACD y EMA 9/21 en tu análisis",
        "Copia la respuesta completa",
        "Abre TradingView con XAU/USD en H1",
        "Valida cada nivel propuesto",
        "Marca entrada, SL y TPs en el gráfico",
      ],
      prompt: `Crea una estrategia completa para XAU/USD en H1. Incluye: 1. Análisis técnico con RSI, MACD, EMA 9/21, 2. Dirección de la operación, 3. Punto de entrada exacto, 4. Stop Loss con justificación, 5. Take Profit 1, 2 y 3 con porcentajes, 6. Risk/Reward ratio, 7. Gestión de posición, 8. Condiciones de invalidación`,
      validation: [
        "¿El Risk/Reward es mínimo 1:2?",
        "¿Los niveles coinciden en TradingView?",
        "¿Hay confluencia de indicadores?",
        "¿El SL está bien justificado?",
      ],
    },
    {
      id: 2,
      title: "Gestión de Riesgo Automática",
      difficulty: "Intermedio",
      time: "8 min",
      description: "Calcula el tamaño de posición óptimo usando GPT",
      instructions: [
        "Usa la estrategia del ejercicio anterior",
        "Calcula posición para capital de $5,000",
        "Aplica riesgo del 1.5%",
        "Verifica el cálculo manualmente",
        "Ajusta si es necesario",
      ],
      prompt: `Calcula el tamaño de posición para XAU/USD. Capital: $5,000. Riesgo: 1.5%. Entrada: [TU_ENTRADA]. Stop Loss: [TU_SL]. ¿Cuántos lotes debo usar? Explica el cálculo paso a paso.`,
      validation: [
        "¿El riesgo es exactamente 1.5% del capital?",
        "¿El cálculo está bien explicado?",
        "¿El tamaño es realista para tu broker?",
      ],
    },
    {
      id: 3,
      title: "Estrategia de Scalping",
      difficulty: "Avanzado",
      time: "15 min",
      description: "Crea una estrategia de scalping para EUR/USD en M15",
      instructions: [
        "Enfócate en confluencias técnicas",
        "Usa VWAP, RSI y Bollinger Bands",
        "Objetivos de 10-15 pips",
        "SL máximo de 8 pips",
        "Valida en tiempo real",
      ],
      prompt: `Crea una estrategia de scalping para EUR/USD en M15. Incluye: 1. Análisis con VWAP, RSI, Bollinger Bands, 2. Entrada precisa en confluencia, 3. SL máximo 8 pips, 4. TP1 y TP2 entre 10-15 pips, 5. Condiciones de entrada muy específicas, 6. Gestión rápida de posición`,
      validation: [
        "¿Los TPs están entre 10-15 pips?",
        "¿El SL es máximo 8 pips?",
        "¿Hay confluencia clara?",
        "¿Es ejecutable en tiempo real?",
      ],
    },
    {
      id: 4,
      title: "Análisis Multi-Timeframe",
      difficulty: "Avanzado",
      time: "20 min",
      description: "Combina análisis de H4, H1 y M15 para una estrategia integral",
      instructions: [
        "Analiza tendencia en H4",
        "Busca entrada en H1",
        "Confirma en M15",
        "Crea estrategia coherente",
        "Valida en los 3 timeframes",
      ],
      prompt: `Crea una estrategia multi-timeframe para GBP/USD. 1. Analiza tendencia en H4 con EMA 50/200, 2. Busca setup en H1 con RSI y MACD, 3. Confirma entrada en M15 con VWAP, 4. Unifica todo en una estrategia coherente con niveles específicos`,
      validation: [
        "¿Los timeframes están alineados?",
        "¿La tendencia es coherente?",
        "¿La entrada tiene triple confirmación?",
        "¿Los niveles son realistas?",
      ],
    },
    {
      id: 5,
      title: "Estrategia Personalizada",
      difficulty: "Experto",
      time: "25 min",
      description: "Crea tu propia estrategia única combinando todo lo aprendido",
      instructions: [
        "Elige tu activo favorito",
        "Selecciona tu timeframe preferido",
        "Combina tus indicadores favoritos",
        "Aplica tu estilo de trading",
        "Documenta todo el proceso",
      ],
      prompt: `Personaliza este prompt según tu estilo: "Crea una estrategia para [TU_ACTIVO] en [TU_TIMEFRAME] usando [TUS_INDICADORES]. Adapta la gestión de riesgo a mi perfil [CONSERVADOR/MODERADO/AGRESIVO] y optimiza para [TU_OBJETIVO]"`,
      validation: [
        "¿Refleja tu estilo personal?",
        "¿Es realista para tu capital?",
        "¿Puedes ejecutarla consistentemente?",
        "¿Está bien documentada?",
      ],
    },
  ]

  const toggleExercise = (exerciseId: number) => {
    setCompletedExercises((prev) =>
      prev.includes(exerciseId) ? prev.filter((id) => id !== exerciseId) : [...prev, exerciseId],
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Principiante":
        return "bg-green-600"
      case "Intermedio":
        return "bg-yellow-600"
      case "Avanzado":
        return "bg-orange-600"
      case "Experto":
        return "bg-red-600"
      default:
        return "bg-gray-600"
    }
  }

  const completionPercentage = (completedExercises.length / exercises.length) * 100

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              💪 Ejercicios <span className="text-purple-400">Prácticos</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              5 ejercicios progresivos para dominar la creación de estrategias con GPT. Desde tu primera estrategia
              hasta setups personalizados avanzados.
            </p>

            {/* Progress Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="flex justify-between text-sm mb-2">
                <span>Progreso</span>
                <span>{completedExercises.length}/5 completados</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {exercises.map((exercise) => (
              <div
                key={exercise.id}
                className={`bg-zinc-900 rounded-xl border transition-all ${
                  completedExercises.includes(exercise.id) ? "border-green-500" : "border-zinc-800"
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleExercise(exercise.id)}
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            completedExercises.includes(exercise.id)
                              ? "bg-green-500 border-green-500"
                              : "border-gray-400 hover:border-green-400"
                          }`}
                        >
                          {completedExercises.includes(exercise.id) && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-white"
                            >
                              <polyline points="20,6 9,17 4,12" />
                            </svg>
                          )}
                        </button>
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                          {exercise.id}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{exercise.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{exercise.description}</p>
                        <div className="flex items-center gap-4">
                          <span
                            className={`${getDifficultyColor(exercise.difficulty)} text-white px-2 py-1 rounded text-xs font-medium`}
                          >
                            {exercise.difficulty}
                          </span>
                          <span className="text-gray-500 text-xs">⏱️ {exercise.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Instructions */}
                    <div>
                      <h4 className="font-semibold mb-3 text-purple-300">📝 Instrucciones:</h4>
                      <ol className="space-y-2">
                        {exercise.instructions.map((instruction, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-purple-400 font-medium">{index + 1}.</span>
                            <span>{instruction}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Prompt and Validation */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-blue-300">🤖 Prompt a usar:</h4>
                        <div className="bg-black rounded-lg p-3 border border-zinc-700">
                          <pre className="text-xs text-blue-300 whitespace-pre-wrap">{exercise.prompt}</pre>
                        </div>
                        <button
                          onClick={() => navigator.clipboard.writeText(exercise.prompt)}
                          className="mt-2 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          📋 Copiar prompt
                        </button>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-green-300">✅ Validación:</h4>
                        <ul className="space-y-1">
                          {exercise.validation.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                              <span className="text-green-400">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Completion Message */}
          {completedExercises.length === exercises.length && (
            <div className="mt-12 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-2xl p-8 border border-green-500/20 text-center">
              <h3 className="text-2xl font-bold mb-4">🎉 ¡Felicidades!</h3>
              <p className="text-gray-300 mb-6">
                Has completado todos los ejercicios del Módulo 2. Ahora dominas la creación de estrategias completas con
                GPT.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg">
                Continuar al Módulo 3
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
