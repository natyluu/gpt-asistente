"use client"

import { useState } from "react"
import {
  Copy,
  Check,
  Play,
  TrendingUp,
  Target,
  BarChart3,
  Zap,
  BookOpen,
  Download,
  Globe,
  Calendar,
  DollarSign,
  Activity,
} from "lucide-react"

export function Module4Content() {
  const [activeSection, setActiveSection] = useState("introduccion")
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null)
  const [completedExercises, setCompletedExercises] = useState<string[]>([])

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedPrompt(id)
    setTimeout(() => setCopiedPrompt(null), 2000)
  }

  const toggleExercise = (exerciseId: string) => {
    setCompletedExercises((prev) =>
      prev.includes(exerciseId) ? prev.filter((id) => id !== exerciseId) : [...prev, exerciseId],
    )
  }

  const sections = [
    { id: "introduccion", title: "Análisis Fundamental", icon: BookOpen },
    { id: "noticias", title: "Análisis de Noticias", icon: Globe },
    { id: "calendario", title: "Calendario Económico", icon: Calendar },
    { id: "correlaciones", title: "Correlaciones", icon: Activity },
    { id: "integracion", title: "Integración de Capas", icon: Zap },
  ]

  const exercises = [
    {
      id: "ex1",
      title: "Análisis Pre-NFP",
      difficulty: "Intermedio",
      pair: "USD/JPY",
      description: "Analiza el contexto fundamental antes del NFP y prepara estrategia",
    },
    {
      id: "ex2",
      title: "Decisión BCE",
      difficulty: "Avanzado",
      pair: "EUR/USD",
      description: "Integra análisis técnico con decisión de tipos del BCE",
    },
    {
      id: "ex3",
      title: "Correlación Oro-DXY",
      difficulty: "Avanzado",
      pair: "XAU/USD",
      description: "Aprovecha correlación inversa oro-dólar para setup",
    },
    {
      id: "ex4",
      title: "Risk-On/Risk-Off",
      difficulty: "Experto",
      pair: "AUD/JPY",
      description: "Identifica cambios de sentiment y opera carry trades",
    },
    {
      id: "ex5",
      title: "Setup Multicapa",
      difficulty: "Experto",
      pair: "GBP/USD",
      description: "Combina técnico + fundamental + sentiment en un setup",
    },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "introduccion":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Análisis Fundamental con GPT</h2>
              <p className="text-[#b1a2d6] mb-6 leading-relaxed">
                El análisis fundamental examina los factores económicos, políticos y sociales que afectan el valor de
                las divisas. GPT nos ayuda a procesar y analizar grandes cantidades de información fundamental de manera
                eficiente.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Pilares del Análisis Fundamental</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#8b3bc0] rounded-lg flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Política Monetaria</h4>
                      <p className="text-[#b1a2d6] text-sm">Decisiones de bancos centrales, tipos de interés, QE</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#8b3bc0] rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Datos Económicos</h4>
                      <p className="text-[#b1a2d6] text-sm">PIB, inflación, empleo, balanza comercial</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#8b3bc0] rounded-lg flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Geopolítica</h4>
                      <p className="text-[#b1a2d6] text-sm">Eventos políticos, guerras comerciales, elecciones</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#8b3bc0] rounded-lg flex items-center justify-center">
                      <Activity className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Sentiment</h4>
                      <p className="text-[#b1a2d6] text-sm">Risk-on/risk-off, VIX, flujos de capital</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8b3bc0]/10 to-[#a06be7]/10 border border-[#8b3bc0]/30 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#8b3bc0]" />
                Prompt Base para Análisis Fundamental
              </h3>
              <div className="bg-[#0a0a0a] rounded-lg p-4 relative">
                <button
                  onClick={() =>
                    copyToClipboard(
                      `Actúa como un analista fundamental experto en Forex. 

Analiza el contexto fundamental actual para [PAR] considerando:

1. POLÍTICA MONETARIA:
- Posición actual de bancos centrales relevantes
- Próximas decisiones de tipos de interés
- Diferencial de tipos entre las dos divisas
- Políticas de QE o tightening

2. DATOS ECONÓMICOS RECIENTES:
- Últimos datos de inflación, PIB, empleo
- Sorpresas vs expectativas del mercado
- Tendencia de los indicadores principales
- Próximas publicaciones importantes

3. CONTEXTO GEOPOLÍTICO:
- Eventos políticos relevantes
- Tensiones comerciales o conflictos
- Estabilidad política de los países
- Flujos de capital safe-haven

4. SENTIMENT DEL MERCADO:
- Risk-on vs risk-off actual
- Correlaciones con índices bursátiles
- Posicionamiento de grandes especuladores (COT)
- Flujos institucionales

5. ANÁLISIS DE CORRELACIONES:
- Correlación con commodities relevantes
- Relación con otros pares principales
- Impacto de movimientos en DXY
- Correlaciones cruzadas importantes

6. CONCLUSIÓN FUNDAMENTAL:
- Bias direccional basado en fundamentos
- Catalizadores próximos a vigilar
- Niveles clave desde perspectiva fundamental
- Timeframe recomendado para el análisis

Contexto temporal: [CORTO/MEDIO/LARGO PLAZO]
Próximos eventos: [EVENTOS_IMPORTANTES]

Proporciona un análisis detallado y específico.`,
                      "fundamental-base",
                    )
                  }
                  className="absolute top-2 right-2 p-2 text-[#b1a2d6] hover:text-white transition-colors"
                >
                  {copiedPrompt === "fundamental-base" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
                <pre className="text-[#b1a2d6] text-sm whitespace-pre-wrap pr-10">
                  {`Actúa como un analista fundamental experto en Forex. 

Analiza el contexto fundamental actual para [PAR] considerando:

1. POLÍTICA MONETARIA:
- Posición actual de bancos centrales relevantes
- Próximas decisiones de tipos de interés
- Diferencial de tipos entre las dos divisas
- Políticas de QE o tightening

2. DATOS ECONÓMICOS RECIENTES:
- Últimos datos de inflación, PIB, empleo
- Sorpresas vs expectativas del mercado
- Tendencia de los indicadores principales
- Próximas publicaciones importantes

3. CONTEXTO GEOPOLÍTICO:
- Eventos políticos relevantes
- Tensiones comerciales o conflictos
- Estabilidad política de los países
- Flujos de capital safe-haven

4. SENTIMENT DEL MERCADO:
- Risk-on vs risk-off actual
- Correlaciones con índices bursátiles
- Posicionamiento de grandes especuladores (COT)
- Flujos institucionales

5. ANÁLISIS DE CORRELACIONES:
- Correlación con commodities relevantes
- Relación con otros pares principales
- Impacto de movimientos en DXY
- Correlaciones cruzadas importantes

6. CONCLUSIÓN FUNDAMENTAL:
- Bias direccional basado en fundamentos
- Catalizadores próximos a vigilar
- Niveles clave desde perspectiva fundamental
- Timeframe recomendado para el análisis

Contexto temporal: [CORTO/MEDIO/LARGO PLAZO]
Próximos eventos: [EVENTOS_IMPORTANTES]

Proporciona un análisis detallado y específico.`}
                </pre>
              </div>
            </div>
          </div>
        )

      case "noticias":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Análisis de Noticias con GPT</h2>
              <p className="text-[#b1a2d6] mb-6 leading-relaxed">
                Las noticias económicas mueven los mercados. GPT nos ayuda a analizar rápidamente el impacto potencial
                de noticias y eventos en nuestros trades.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-3">Alto Impacto</h3>
                <ul className="space-y-2 text-[#b1a2d6] text-sm">
                  <li>• Decisiones de tipos de interés</li>
                  <li>• NFP (Non-Farm Payrolls)</li>
                  <li>• Datos de inflación (CPI/PCE)</li>
                  <li>• PIB trimestral</li>
                  <li>• Discursos de banqueros centrales</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-3">Medio Impacto</h3>
                <ul className="space-y-2 text-[#b1a2d6] text-sm">
                  <li>• Datos de empleo (Unemployment)</li>
                  <li>• Ventas minoristas</li>
                  <li>• PMI manufacturero/servicios</li>
                  <li>• Confianza del consumidor</li>
                  <li>• Balanza comercial</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-3">Bajo Impacto</h3>
                <ul className="space-y-2 text-[#b1a2d6] text-sm">
                  <li>• Permisos de construcción</li>
                  <li>• Inventarios de petróleo</li>
                  <li>• Índices de precios al productor</li>
                  <li>• Datos de vivienda</li>
                  <li>• Indicadores regionales</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8b3bc0]/10 to-[#a06be7]/10 border border-[#8b3bc0]/30 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3">Prompt para Análisis de Noticias</h3>
              <div className="bg-[#0a0a0a] rounded-lg p-4 relative">
                <button
                  onClick={() =>
                    copyToClipboard(
                      `Analiza el impacto de la siguiente noticia económica en el trading de Forex:

NOTICIA: [DESCRIPCIÓN_NOTICIA]
PAR AFECTADO: [PAR_PRINCIPAL]
DATO ACTUAL: [VALOR_ACTUAL]
EXPECTATIVA: [VALOR_ESPERADO]
ANTERIOR: [VALOR_ANTERIOR]

1. ANÁLISIS DE IMPACTO:
- ¿Es sorpresa positiva o negativa vs expectativas?
- ¿Qué tan significativa es la desviación?
- ¿Confirma o contradice la tendencia reciente?

2. PARES MÁS AFECTADOS:
- Par principal directamente impactado
- Pares secundarios por correlación
- Timeframes donde será más visible el impacto

3. DIRECCIÓN PROBABLE:
- ¿Fortalece o debilita la divisa base?
- ¿Es bullish o bearish para el par?
- ¿Cuánto movimiento se puede esperar?

4. TIMING DEL IMPACTO:
- Reacción inmediata (primeros 15 min)
- Desarrollo durante la sesión
- Impacto a medio plazo (días/semanas)

5. ESTRATEGIA RECOMENDADA:
- ¿Operar la noticia o evitarla?
- Niveles clave a vigilar post-noticia
- Gestión de riesgo específica
- Confluencias con análisis técnico

6. CONTEXTO ADICIONAL:
- ¿Cómo encaja con el panorama económico general?
- ¿Hay otras noticias relacionadas próximas?
- ¿Afecta las expectativas de política monetaria?

Proporciona un análisis específico y actionable.`,
                      "news-analysis",
                    )
                  }
                  className="absolute top-2 right-2 p-2 text-[#b1a2d6] hover:text-white transition-colors"
                >
                  {copiedPrompt === "news-analysis" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
                <pre className="text-[#b1a2d6] text-sm whitespace-pre-wrap pr-10">
                  {`Analiza el impacto de la siguiente noticia económica en el trading de Forex:

NOTICIA: [DESCRIPCIÓN_NOTICIA]
PAR AFECTADO: [PAR_PRINCIPAL]
DATO ACTUAL: [VALOR_ACTUAL]
EXPECTATIVA: [VALOR_ESPERADO]
ANTERIOR: [VALOR_ANTERIOR]

1. ANÁLISIS DE IMPACTO:
- ¿Es sorpresa positiva o negativa vs expectativas?
- ¿Qué tan significativa es la desviación?
- ¿Confirma o contradice la tendencia reciente?

2. PARES MÁS AFECTADOS:
- Par principal directamente impactado
- Pares secundarios por correlación
- Timeframes donde será más visible el impacto

3. DIRECCIÓN PROBABLE:
- ¿Fortalece o debilita la divisa base?
- ¿Es bullish o bearish para el par?
- ¿Cuánto movimiento se puede esperar?

4. TIMING DEL IMPACTO:
- Reacción inmediata (primeros 15 min)
- Desarrollo durante la sesión
- Impacto a medio plazo (días/semanas)

5. ESTRATEGIA RECOMENDADA:
- ¿Operar la noticia o evitarla?
- Niveles clave a vigilar post-noticia
- Gestión de riesgo específica
- Confluencias con análisis técnico

6. CONTEXTO ADICIONAL:
- ¿Cómo encaja con el panorama económico general?
- ¿Hay otras noticias relacionadas próximas?
- ¿Afecta las expectativas de política monetaria?

Proporciona un análisis específico y actionable.`}
                </pre>
              </div>
            </div>
          </div>
        )

      case "calendario":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Calendario Económico Inteligente</h2>
              <p className="text-[#b1a2d6] mb-6 leading-relaxed">
                El calendario económico es nuestra hoja de ruta. GPT nos ayuda a priorizar eventos, anticipar impactos y
                planificar nuestras estrategias de trading.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Planificación Semanal</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg">
                  <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Lunes - Preparación</h4>
                    <p className="text-[#b1a2d6] text-sm">Revisar eventos de la semana, identificar pares clave</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg">
                  <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Martes-Jueves - Ejecución</h4>
                    <p className="text-[#b1a2d6] text-sm">Operar eventos principales, gestionar posiciones</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg">
                  <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Viernes - NFP y Cierre</h4>
                    <p className="text-[#b1a2d6] text-sm">NFP, cierre de posiciones, análisis semanal</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8b3bc0]/10 to-[#a06be7]/10 border border-[#8b3bc0]/30 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3">Prompt para Planificación Semanal</h3>
              <div className="bg-[#0a0a0a] rounded-lg p-4 relative">
                <button
                  onClick={() =>
                    copyToClipboard(
                      `Analiza el calendario económico de la próxima semana y crea un plan de trading:

SEMANA: [FECHA_INICIO] - [FECHA_FIN]

1. EVENTOS DE ALTO IMPACTO:
- Listar todos los eventos de 3 estrellas (alto impacto)
- Horarios exactos en zona horaria local
- Pares más afectados por cada evento
- Expectativas vs datos anteriores

2. PRIORIZACIÓN DIARIA:
- Lunes: [Eventos y preparación]
- Martes: [Eventos principales]
- Miércoles: [Eventos y seguimiento]
- Jueves: [Eventos importantes]
- Viernes: [NFP y cierre semanal]

3. PARES A VIGILAR:
- Pares principales con mayor volatilidad esperada
- Oportunidades de correlación
- Pares a evitar por alta incertidumbre

4. ESTRATEGIAS POR EVENTO:
- ¿Operar la noticia o evitarla?
- Setups pre-noticia vs post-noticia
- Niveles clave a vigilar
- Gestión de riesgo específica

5. CONFLUENCIAS TÉCNICAS:
- Eventos que coincidan con niveles técnicos importantes
- Zonas de soporte/resistencia clave
- Vencimientos de opciones relevantes

6. PLAN DE CONTINGENCIA:
- ¿Qué hacer si hay sorpresas grandes?
- Gestión de drawdown durante eventos
- Cuándo cerrar posiciones antes de eventos

7. OBJETIVOS SEMANALES:
- Meta de pips/porcentaje
- Máximo drawdown aceptable
- Número máximo de trades

Proporciona un plan detallado y específico para cada día.`,
                      "weekly-plan",
                    )
                  }
                  className="absolute top-2 right-2 p-2 text-[#b1a2d6] hover:text-white transition-colors"
                >
                  {copiedPrompt === "weekly-plan" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
                <pre className="text-[#b1a2d6] text-sm whitespace-pre-wrap pr-10">
                  {`Analiza el calendario económico de la próxima semana y crea un plan de trading:

SEMANA: [FECHA_INICIO] - [FECHA_FIN]

1. EVENTOS DE ALTO IMPACTO:
- Listar todos los eventos de 3 estrellas (alto impacto)
- Horarios exactos en zona horaria local
- Pares más afectados por cada evento
- Expectativas vs datos anteriores

2. PRIORIZACIÓN DIARIA:
- Lunes: [Eventos y preparación]
- Martes: [Eventos principales]
- Miércoles: [Eventos y seguimiento]
- Jueves: [Eventos importantes]
- Viernes: [NFP y cierre semanal]

3. PARES A VIGILAR:
- Pares principales con mayor volatilidad esperada
- Oportunidades de correlación
- Pares a evitar por alta incertidumbre

4. ESTRATEGIAS POR EVENTO:
- ¿Operar la noticia o evitarla?
- Setups pre-noticia vs post-noticia
- Niveles clave a vigilar
- Gestión de riesgo específica

5. CONFLUENCIAS TÉCNICAS:
- Eventos que coincidan con niveles técnicos importantes
- Zonas de soporte/resistencia clave
- Vencimientos de opciones relevantes

6. PLAN DE CONTINGENCIA:
- ¿Qué hacer si hay sorpresas grandes?
- Gestión de drawdown durante eventos
- Cuándo cerrar posiciones antes de eventos

7. OBJETIVOS SEMANALES:
- Meta de pips/porcentaje
- Máximo drawdown aceptable
- Número máximo de trades

Proporciona un plan detallado y específico para cada día.`}
                </pre>
              </div>
            </div>
          </div>
        )

      case "correlaciones":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Análisis de Correlaciones</h2>
              <p className="text-[#b1a2d6] mb-6 leading-relaxed">
                Las correlaciones nos permiten entender cómo se mueven los activos en relación entre sí, creando
                oportunidades de trading y gestión de riesgo más sofisticadas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-500" />
                  Correlaciones Positivas
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-[#0a0a0a] rounded-lg">
                    <span className="text-[#b1a2d6]">EUR/USD vs GBP/USD</span>
                    <span className="text-green-400 font-medium">+0.85</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#0a0a0a] rounded-lg">
                    <span className="text-[#b1a2d6]">AUD/USD vs NZD/USD</span>
                    <span className="text-green-400 font-medium">+0.78</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#0a0a0a] rounded-lg">
                    <span className="text-[#b1a2d6]">USD/CHF vs USD/JPY</span>
                    <span className="text-green-400 font-medium">+0.72</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-red-500" />
                  Correlaciones Negativas
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-[#0a0a0a] rounded-lg">
                    <span className="text-[#b1a2d6]">EUR/USD vs USD/CHF</span>
                    <span className="text-red-400 font-medium">-0.92</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#0a0a0a] rounded-lg">
                    <span className="text-[#b1a2d6]">XAU/USD vs DXY</span>
                    <span className="text-red-400 font-medium">-0.88</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#0a0a0a] rounded-lg">
                    <span className="text-[#b1a2d6]">GBP/USD vs USD/JPY</span>
                    <span className="text-red-400 font-medium">-0.65</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Estrategias de Correlación</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[#0a0a0a] rounded-lg">
                  <div className="w-12 h-12 bg-[#8b3bc0] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-medium mb-2">Hedging</h4>
                  <p className="text-[#b1a2d6] text-sm">Usar correlaciones para reducir riesgo</p>
                </div>
                <div className="text-center p-4 bg-[#0a0a0a] rounded-lg">
                  <div className="w-12 h-12 bg-[#8b3bc0] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-medium mb-2">Confirmación</h4>
                  <p className="text-[#b1a2d6] text-sm">Validar señales con pares correlacionados</p>
                </div>
                <div className="text-center p-4 bg-[#0a0a0a] rounded-lg">
                  <div className="w-12 h-12 bg-[#8b3bc0] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-medium mb-2">Arbitraje</h4>
                  <p className="text-[#b1a2d6] text-sm">Aprovechar divergencias temporales</p>
                </div>
              </div>
            </div>
          </div>
        )

      case "integracion":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Integración de Capas</h2>
              <p className="text-[#b1a2d6] mb-6 leading-relaxed">
                La verdadera maestría viene de integrar múltiples capas de análisis: técnico, fundamental, sentiment y
                correlaciones en una estrategia cohesiva.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Sistema de Capas</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Capa Técnica</h4>
                    <p className="text-[#b1a2d6] text-sm">Análisis de precio, patrones, indicadores, Smart Money</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Capa Fundamental</h4>
                    <p className="text-[#b1a2d6] text-sm">Datos económicos, política monetaria, eventos</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-lg">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Capa de Sentiment</h4>
                    <p className="text-[#b1a2d6] text-sm">Risk-on/risk-off, VIX, posicionamiento COT</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Capa de Correlaciones</h4>
                    <p className="text-[#b1a2d6] text-sm">Relaciones entre activos, confirmaciones cruzadas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8b3bc0]/10 to-[#a06be7]/10 border border-[#8b3bc0]/30 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#8b3bc0]" />
                Prompt Maestro Multicapa
              </h3>
              <div className="bg-[#0a0a0a] rounded-lg p-4 relative">
                <button
                  onClick={() =>
                    copyToClipboard(
                      `Realiza un análisis multicapa completo para [PAR] integrando todas las dimensiones:

🔧 CAPA TÉCNICA:
- Análisis de estructura de mercado (ICT/Smart Money)
- Niveles clave de soporte/resistencia
- Patrones de precio relevantes
- Indicadores técnicos principales
- Timeframe analysis (H4, H1, M15)

📊 CAPA FUNDAMENTAL:
- Contexto económico actual de ambas divisas
- Próximos eventos económicos importantes
- Diferencial de tipos de interés
- Política monetaria de bancos centrales
- Datos económicos recientes y tendencias

💭 CAPA DE SENTIMENT:
- Risk-on vs risk-off actual
- Posicionamiento de grandes especuladores (COT)
- Flujos de capital institucionales
- Correlación con índices bursátiles
- Nivel de volatilidad (VIX)

🔗 CAPA DE CORRELACIONES:
- Correlaciones con otros pares principales
- Relación con commodities relevantes
- Impacto del DXY en el par
- Confirmaciones cruzadas

🎯 SÍNTESIS E INTEGRACIÓN:
- ¿Todas las capas apuntan en la misma dirección?
- ¿Hay conflictos entre análisis técnico y fundamental?
- ¿Qué capa tiene más peso en el contexto actual?
- Nivel de confianza del setup (1-10)

📈 SETUP RECOMENDADO:
- Dirección del trade (Long/Short)
- Punto de entrada específico
- Stop Loss basado en múltiples capas
- Take Profit con objetivos múltiples
- Risk/Reward ratio
- Timeframe recomendado para el trade

⚠️ GESTIÓN DE RIESGO:
- Tamaño de posición recomendado
- Eventos que podrían invalidar el análisis
- Niveles de breakeven y trailing stop
- Plan de salida alternativo

🕐 TIMING:
- Mejor momento para entrada
- Eventos a evitar
- Duración esperada del trade

Contexto actual: [FECHA_ACTUAL]
Sesión: [SESIÓN_TRADING]
Volatilidad del mercado: [ALTA/MEDIA/BAJA]

Proporciona un análisis detallado y una recomendación clara.`,
                      "multicapa-maestro",
                    )
                  }
                  className="absolute top-2 right-2 p-2 text-[#b1a2d6] hover:text-white transition-colors"
                >
                  {copiedPrompt === "multicapa-maestro" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
                <pre className="text-[#b1a2d6] text-sm whitespace-pre-wrap pr-10">
                  {`Realiza un análisis multicapa completo para [PAR] integrando todas las dimensiones:

🔧 CAPA TÉCNICA:
- Análisis de estructura de mercado (ICT/Smart Money)
- Niveles clave de soporte/resistencia
- Patrones de precio relevantes
- Indicadores técnicos principales
- Timeframe analysis (H4, H1, M15)

📊 CAPA FUNDAMENTAL:
- Contexto económico actual de ambas divisas
- Próximos eventos económicos importantes
- Diferencial de tipos de interés
- Política monetaria de bancos centrales
- Datos económicos recientes y tendencias

💭 CAPA DE SENTIMENT:
- Risk-on vs risk-off actual
- Posicionamiento de grandes especuladores (COT)
- Flujos de capital institucionales
- Correlación con índices bursátiles
- Nivel de volatilidad (VIX)

🔗 CAPA DE CORRELACIONES:
- Correlaciones con otros pares principales
- Relación con commodities relevantes
- Impacto del DXY en el par
- Confirmaciones cruzadas

🎯 SÍNTESIS E INTEGRACIÓN:
- ¿Todas las capas apuntan en la misma dirección?
- ¿Hay conflictos entre análisis técnico y fundamental?
- ¿Qué capa tiene más peso en el contexto actual?
- Nivel de confianza del setup (1-10)

📈 SETUP RECOMENDADO:
- Dirección del trade (Long/Short)
- Punto de entrada específico
- Stop Loss basado en múltiples capas
- Take Profit con objetivos múltiples
- Risk/Reward ratio
- Timeframe recomendado para el trade

⚠️ GESTIÓN DE RIESGO:
- Tamaño de posición recomendado
- Eventos que podrían invalidar el análisis
- Niveles de breakeven y trailing stop
- Plan de salida alternativo

🕐 TIMING:
- Mejor momento para entrada
- Eventos a evitar
- Duración esperada del trade

Contexto actual: [FECHA_ACTUAL]
Sesión: [SESIÓN_TRADING]
Volatilidad del mercado: [ALTA/MEDIA/BAJA]

Proporciona un análisis detallado y una recomendación clara.`}
                </pre>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const progressPercentage = (completedExercises.length / exercises.length) * 100

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 sticky top-8">
              <h3 className="text-white font-semibold mb-4">Contenido del Módulo</h3>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? "bg-[#8b3bc0] text-white"
                          : "text-[#b1a2d6] hover:bg-[#2a2a2a] hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{section.title}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-8">{renderContent()}</div>

            {/* Ejercicios Prácticos */}
            <div className="mt-8 bg-[#1a1a1a] border border-[#333] rounded-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Ejercicios Prácticos Multicapa</h2>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-[#2a2a2a] rounded-full h-2 min-w-[200px]">
                    <div
                      className="bg-gradient-to-r from-[#8b3bc0] to-[#a06be7] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <span className="text-[#b1a2d6] text-sm font-medium">
                    {completedExercises.length}/{exercises.length}
                  </span>
                </div>
              </div>

              <div className="grid gap-4">
                {exercises.map((exercise, index) => (
                  <div key={exercise.id} className="bg-[#0a0a0a] border border-[#333] rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <button
                        onClick={() => toggleExercise(exercise.id)}
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                          completedExercises.includes(exercise.id)
                            ? "bg-[#8b3bc0] border-[#8b3bc0]"
                            : "border-[#666] hover:border-[#8b3bc0]"
                        }`}
                      >
                        {completedExercises.includes(exercise.id) && <Check className="w-4 h-4 text-white" />}
                      </button>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-white font-semibold">{exercise.title}</h3>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              exercise.difficulty === "Intermedio"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : exercise.difficulty === "Avanzado"
                                  ? "bg-orange-500/20 text-orange-400"
                                  : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {exercise.difficulty}
                          </span>
                          <span className="px-2 py-1 bg-[#8b3bc0]/20 text-[#8b3bc0] rounded text-xs font-medium">
                            {exercise.pair}
                          </span>
                        </div>
                        <p className="text-[#b1a2d6] text-sm mb-3">{exercise.description}</p>

                        <button className="flex items-center gap-2 text-[#8b3bc0] hover:text-white transition-colors text-sm">
                          <Play className="w-4 h-4" />
                          Iniciar Ejercicio
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {progressPercentage === 100 && (
                <div className="mt-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-4 text-center">
                  <p className="text-green-400 font-semibold">
                    🎉 ¡Felicitaciones! Has completado todos los ejercicios del Módulo 4
                  </p>
                </div>
              )}
            </div>

            {/* Recursos Descargables */}
            <div className="mt-8 bg-gradient-to-r from-[#8b3bc0]/10 to-[#a06be7]/10 border border-[#8b3bc0]/30 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-[#8b3bc0]" />
                Recursos Descargables
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg hover:bg-[#2a2a2a] transition-colors"
                >
                  <div className="w-10 h-10 bg-[#8b3bc0] rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Calendario Económico</p>
                    <p className="text-[#b1a2d6] text-sm">Template para planificación</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg hover:bg-[#2a2a2a] transition-colors"
                >
                  <div className="w-10 h-10 bg-[#8b3bc0] rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Matriz de Correlaciones</p>
                    <p className="text-[#b1a2d6] text-sm">Tabla actualizada de correlaciones</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
