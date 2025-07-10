"use client"

import { useState } from "react"
import { Copy, Check, Play, TrendingUp, Target, BarChart3, Zap, BookOpen, Download } from "lucide-react"

export function Module3Content() {
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
    { id: "introduccion", title: "Introducción Smart Money", icon: BookOpen },
    { id: "order-blocks", title: "Order Blocks & FVG", icon: BarChart3 },
    { id: "market-structure", title: "Market Structure", icon: TrendingUp },
    { id: "liquidity", title: "Liquidity Analysis", icon: Target },
    { id: "prompts-ict", title: "Prompts ICT 2022", icon: Zap },
  ]

  const exercises = [
    {
      id: "ex1",
      title: "Identificar Order Blocks",
      difficulty: "Intermedio",
      pair: "EUR/USD",
      description: "Identifica Order Blocks válidos en EUR/USD usando metodología ICT",
    },
    {
      id: "ex2",
      title: "Fair Value Gaps",
      difficulty: "Intermedio",
      pair: "GBP/USD",
      description: "Localiza y valida FVGs en estructura de mercado alcista",
    },
    {
      id: "ex3",
      title: "Change of Character",
      difficulty: "Avanzado",
      pair: "XAU/USD",
      description: "Identifica CHoCH y cambios en Market Structure",
    },
    {
      id: "ex4",
      title: "Liquidity Sweeps",
      difficulty: "Avanzado",
      pair: "NAS100",
      description: "Analiza barridos de liquidez en índices",
    },
    {
      id: "ex5",
      title: "Setup Completo ICT",
      difficulty: "Experto",
      pair: "BTC/USD",
      description: "Crea setup completo combinando todos los conceptos ICT",
    },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "introduccion":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Introducción al Smart Money</h2>
              <p className="text-[#b1a2d6] mb-6 leading-relaxed">
                El análisis Smart Money se basa en entender cómo operan las instituciones financieras y cómo podemos
                seguir sus movimientos para obtener ventaja en el mercado.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Conceptos Fundamentales ICT 2022</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8b3bc0] rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-medium">Order Blocks</h4>
                      <p className="text-[#b1a2d6] text-sm">Zonas donde instituciones colocaron órdenes grandes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8b3bc0] rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-medium">Fair Value Gaps</h4>
                      <p className="text-[#b1a2d6] text-sm">Ineficiencias de precio que tienden a rellenarse</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8b3bc0] rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-medium">Market Structure</h4>
                      <p className="text-[#b1a2d6] text-sm">Análisis de Higher Highs/Lower Lows y cambios</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8b3bc0] rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-medium">Liquidity</h4>
                      <p className="text-[#b1a2d6] text-sm">Identificación y targeting de pools de liquidez</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8b3bc0]/10 to-[#a06be7]/10 border border-[#8b3bc0]/30 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#8b3bc0]" />
                Prompt Base para Smart Money
              </h3>
              <div className="bg-[#0a0a0a] rounded-lg p-4 relative">
                <button
                  onClick={() =>
                    copyToClipboard(
                      `Actúa como un analista experto en Smart Money e ICT 2022. 

Analiza el par [PAR] en timeframe [TF] y proporciona:

1. MARKET STRUCTURE:
- Identificar trend actual (alcista/bajista/lateral)
- Localizar Higher Highs/Higher Lows o Lower Highs/Lower Lows
- Detectar posibles Change of Character (CHoCH)

2. ORDER BLOCKS:
- Identificar Order Blocks válidos (últimas velas antes de movimiento fuerte)
- Clasificar como bullish/bearish Order Blocks
- Evaluar calidad y probabilidad de reacción

3. FAIR VALUE GAPS (FVG):
- Localizar FVGs no rellenados
- Determinar si son válidos según contexto
- Priorizar por proximidad y confluencias

4. LIQUIDITY ANALYSIS:
- Identificar Equal Highs/Equal Lows
- Localizar Stop Loss probables (retail)
- Determinar dirección probable de barrido

5. SETUP RECOMENDADO:
- Punto de entrada específico
- Stop Loss basado en estructura
- Take Profit en próximo objetivo de liquidez
- Risk/Reward ratio

Contexto actual del mercado: [CONTEXTO]
Sesión de trading: [SESIÓN]

Sé específico con niveles de precio y justifica cada análisis.`,
                      "smart-money-base",
                    )
                  }
                  className="absolute top-2 right-2 p-2 text-[#b1a2d6] hover:text-white transition-colors"
                >
                  {copiedPrompt === "smart-money-base" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
                <pre className="text-[#b1a2d6] text-sm whitespace-pre-wrap pr-10">
                  {`Actúa como un analista experto en Smart Money e ICT 2022. 

Analiza el par [PAR] en timeframe [TF] y proporciona:

1. MARKET STRUCTURE:
- Identificar trend actual (alcista/bajista/lateral)
- Localizar Higher Highs/Higher Lows o Lower Highs/Lower Lows
- Detectar posibles Change of Character (CHoCH)

2. ORDER BLOCKS:
- Identificar Order Blocks válidos (últimas velas antes de movimiento fuerte)
- Clasificar como bullish/bearish Order Blocks
- Evaluar calidad y probabilidad de reacción

3. FAIR VALUE GAPS (FVG):
- Localizar FVGs no rellenados
- Determinar si son válidos según contexto
- Priorizar por proximidad y confluencias

4. LIQUIDITY ANALYSIS:
- Identificar Equal Highs/Equal Lows
- Localizar Stop Loss probables (retail)
- Determinar dirección probable de barrido

5. SETUP RECOMENDADO:
- Punto de entrada específico
- Stop Loss basado en estructura
- Take Profit en próximo objetivo de liquidez
- Risk/Reward ratio

Contexto actual del mercado: [CONTEXTO]
Sesión de trading: [SESIÓN]

Sé específico con niveles de precio y justifica cada análisis.`}
                </pre>
              </div>
            </div>
          </div>
        )

      case "order-blocks":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Order Blocks y Fair Value Gaps</h2>
              <p className="text-[#b1a2d6] mb-6 leading-relaxed">
                Los Order Blocks representan zonas donde las instituciones han colocado órdenes grandes, mientras que
                los FVGs son ineficiencias que el mercado tiende a corregir.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#8b3bc0]" />
                  Order Blocks Válidos
                </h3>
                <ul className="space-y-3 text-[#b1a2d6]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">✓</span>
                    Última vela antes de movimiento impulsivo fuerte
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">✓</span>
                    Debe tener cuerpo significativo (no doji)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">✓</span>
                    No debe haber sido testeado previamente
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">✓</span>
                    Confluencia con niveles de estructura
                  </li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#8b3bc0]" />
                  Fair Value Gaps
                </h3>
                <ul className="space-y-3 text-[#b1a2d6]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">✓</span>
                    Gap entre high de vela 1 y low de vela 3
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">✓</span>
                    Vela del medio no debe tocar el gap
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">✓</span>
                    Mayor probabilidad en movimientos impulsivos
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">✓</span>
                    Se rellenan en 70-80% de los casos
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8b3bc0]/10 to-[#a06be7]/10 border border-[#8b3bc0]/30 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3">Prompt para Order Blocks</h3>
              <div className="bg-[#0a0a0a] rounded-lg p-4 relative">
                <button
                  onClick={() =>
                    copyToClipboard(
                      `Analiza el gráfico de [PAR] en [TIMEFRAME] e identifica Order Blocks válidos:

1. IDENTIFICACIÓN:
- Localiza las últimas velas antes de movimientos impulsivos fuertes
- Verifica que tengan cuerpo significativo (no doji o spinning tops)
- Confirma que no hayan sido testeadas previamente

2. CLASIFICACIÓN:
- Bullish Order Block: Última vela alcista antes de caída fuerte
- Bearish Order Block: Última vela bajista antes de subida fuerte
- Evalúa la calidad basada en el contexto de mercado

3. CONFLUENCIAS:
- Verifica si coincide con niveles de soporte/resistencia
- Busca confluencia con FVGs cercanos
- Evalúa proximidad a niveles de liquidez

4. PROBABILIDAD DE REACCIÓN:
- Alta: OB en zona de estructura + confluencias
- Media: OB aislado pero en contexto favorable  
- Baja: OB en contra de estructura principal

5. NIVELES ESPECÍFICOS:
- Precio exacto del Order Block (high/low de la vela)
- Zona de entrada recomendada
- Stop Loss sugerido
- Objetivos probables

Proporciona coordenadas exactas y justifica cada Order Block identificado.`,
                      "order-blocks",
                    )
                  }
                  className="absolute top-2 right-2 p-2 text-[#b1a2d6] hover:text-white transition-colors"
                >
                  {copiedPrompt === "order-blocks" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
                <pre className="text-[#b1a2d6] text-sm whitespace-pre-wrap pr-10">
                  {`Analiza el gráfico de [PAR] en [TIMEFRAME] e identifica Order Blocks válidos:

1. IDENTIFICACIÓN:
- Localiza las últimas velas antes de movimientos impulsivos fuertes
- Verifica que tengan cuerpo significativo (no doji o spinning tops)
- Confirma que no hayan sido testeadas previamente

2. CLASIFICACIÓN:
- Bullish Order Block: Última vela alcista antes de caída fuerte
- Bearish Order Block: Última vela bajista antes de subida fuerte
- Evalúa la calidad basada en el contexto de mercado

3. CONFLUENCIAS:
- Verifica si coincide con niveles de soporte/resistencia
- Busca confluencia con FVGs cercanos
- Evalúa proximidad a niveles de liquidez

4. PROBABILIDAD DE REACCIÓN:
- Alta: OB en zona de estructura + confluencias
- Media: OB aislado pero en contexto favorable  
- Baja: OB en contra de estructura principal

5. NIVELES ESPECÍFICOS:
- Precio exacto del Order Block (high/low de la vela)
- Zona de entrada recomendada
- Stop Loss sugerido
- Objetivos probables

Proporciona coordenadas exactas y justifica cada Order Block identificado.`}
                </pre>
              </div>
            </div>
          </div>
        )

      case "market-structure":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Market Structure Analysis</h2>
              <p className="text-[#b1a2d6] mb-6 leading-relaxed">
                El análisis de estructura de mercado es fundamental para entender la dirección institucional y
                identificar cambios de tendencia antes que el retail.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Conceptos Clave de Estructura</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-medium mb-2">Bullish Structure</h4>
                  <p className="text-[#b1a2d6] text-sm">Higher Highs + Higher Lows</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-white rotate-180" />
                  </div>
                  <h4 className="text-white font-medium mb-2">Bearish Structure</h4>
                  <p className="text-[#b1a2d6] text-sm">Lower Highs + Lower Lows</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#8b3bc0] to-[#a06be7] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-medium mb-2">CHoCH</h4>
                  <p className="text-[#b1a2d6] text-sm">Change of Character</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4">Identificar CHoCH</h3>
                <ul className="space-y-3 text-[#b1a2d6]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">1.</span>
                    Estructura alcista rompe último Higher Low
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">2.</span>
                    Estructura bajista rompe último Lower High
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">3.</span>
                    Confirmación con cierre de vela
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">4.</span>
                    Buscar retesteo de zona rota
                  </li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4">Break of Structure (BOS)</h3>
                <ul className="space-y-3 text-[#b1a2d6]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">1.</span>
                    Continuación de tendencia existente
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">2.</span>
                    Rompe último swing high/low
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">3.</span>
                    Confirma fortaleza de tendencia
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">4.</span>
                    Oportunidad de continuación
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )

      case "liquidity":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Liquidity Analysis</h2>
              <p className="text-[#b1a2d6] mb-6 leading-relaxed">
                La liquidez es el combustible del mercado. Las instituciones necesitan liquidez para ejecutar sus
                órdenes grandes, y nosotros podemos anticipar sus movimientos.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Tipos de Liquidez</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[#8b3bc0] font-medium mb-3">Buy Side Liquidity</h4>
                  <ul className="space-y-2 text-[#b1a2d6] text-sm">
                    <li>• Equal Highs (stops de shorts)</li>
                    <li>• Resistance levels obvios</li>
                    <li>• Previous Day High (PDH)</li>
                    <li>• Weekly/Monthly Highs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#8b3bc0] font-medium mb-3">Sell Side Liquidity</h4>
                  <ul className="space-y-2 text-[#b1a2d6] text-sm">
                    <li>• Equal Lows (stops de longs)</li>
                    <li>• Support levels obvios</li>
                    <li>• Previous Day Low (PDL)</li>
                    <li>• Weekly/Monthly Lows</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8b3bc0]/10 to-[#a06be7]/10 border border-[#8b3bc0]/30 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3">Prompt para Liquidity Analysis</h3>
              <div className="bg-[#0a0a0a] rounded-lg p-4 relative">
                <button
                  onClick={() =>
                    copyToClipboard(
                      `Analiza la liquidez en [PAR] timeframe [TF] siguiendo metodología ICT:

1. IDENTIFICAR POOLS DE LIQUIDEZ:
- Buy Side Liquidity: Equal Highs, resistencias obvias, PDH/PWH/PMH
- Sell Side Liquidity: Equal Lows, soportes obvios, PDL/PWL/PML
- Marcar niveles específicos con precios exactos

2. PRIORIZAR POR PROXIMIDAD:
- Liquidez más cercana al precio actual
- Evaluar cuál es más probable de ser barrida primero
- Considerar contexto de sesión (Asia/London/NY)

3. ANALIZAR CONFLUENCIAS:
- Liquidez + Order Blocks
- Liquidez + Fair Value Gaps  
- Liquidez + niveles de estructura

4. DETERMINAR DIRECCIÓN PROBABLE:
- ¿Hacia qué liquidez es más probable que vaya el precio?
- ¿Hay setup para operar el barrido?
- ¿Es liquidity grab o continuación?

5. SETUP RECOMENDADO:
- Entrada: Después del barrido de liquidez
- Stop: Más allá de la liquidez barrida
- Target: Próximo pool de liquidez opuesto
- Risk/Reward esperado

Sesión actual: [SESIÓN]
Contexto de mercado: [CONTEXTO]

Sé específico con niveles de precio y probabilidades.`,
                      "liquidity",
                    )
                  }
                  className="absolute top-2 right-2 p-2 text-[#b1a2d6] hover:text-white transition-colors"
                >
                  {copiedPrompt === "liquidity" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
                <pre className="text-[#b1a2d6] text-sm whitespace-pre-wrap pr-10">
                  {`Analiza la liquidez en [PAR] timeframe [TF] siguiendo metodología ICT:

1. IDENTIFICAR POOLS DE LIQUIDEZ:
- Buy Side Liquidity: Equal Highs, resistencias obvias, PDH/PWH/PMH
- Sell Side Liquidity: Equal Lows, soportes obvios, PDL/PWL/PML
- Marcar niveles específicos con precios exactos

2. PRIORIZAR POR PROXIMIDAD:
- Liquidez más cercana al precio actual
- Evaluar cuál es más probable de ser barrida primero
- Considerar contexto de sesión (Asia/London/NY)

3. ANALIZAR CONFLUENCIAS:
- Liquidez + Order Blocks
- Liquidez + Fair Value Gaps  
- Liquidez + niveles de estructura

4. DETERMINAR DIRECCIÓN PROBABLE:
- ¿Hacia qué liquidez es más probable que vaya el precio?
- ¿Hay setup para operar el barrido?
- ¿Es liquidity grab o continuación?

5. SETUP RECOMENDADO:
- Entrada: Después del barrido de liquidez
- Stop: Más allá de la liquidez barrida
- Target: Próximo pool de liquidez opuesto
- Risk/Reward esperado

Sesión actual: [SESIÓN]
Contexto de mercado: [CONTEXTO]

Sé específico con niveles de precio y probabilidades.`}
                </pre>
              </div>
            </div>
          </div>
        )

      case "prompts-ict":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Prompts Especializados ICT 2022</h2>
              <p className="text-[#b1a2d6] mb-6 leading-relaxed">
                Colección de prompts avanzados para implementar la metodología ICT 2022 de forma sistemática y obtener
                análisis institucionales precisos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#8b3bc0]/10 to-[#a06be7]/10 border border-[#8b3bc0]/30 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#8b3bc0]" />
                  Prompt Maestro ICT Completo
                </h3>
                <div className="bg-[#0a0a0a] rounded-lg p-4 relative">
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `Eres un analista experto en ICT 2022 y Smart Money Concepts. Analiza [PAR] en [TIMEFRAME]:

🏗️ MARKET STRUCTURE:
- Identifica trend actual y cambios de carácter (CHoCH)
- Localiza Break of Structure (BOS) recientes
- Determina si estamos en acumulación, manipulación o distribución

📦 ORDER BLOCKS:
- Identifica Order Blocks válidos (última vela antes de impulso)
- Clasifica como bullish/bearish y evalúa calidad
- Verifica que no hayan sido testeados previamente

⚡ FAIR VALUE GAPS:
- Localiza FVGs no rellenados en contexto de impulso
- Prioriza por proximidad y confluencias
- Determina probabilidad de relleno

💧 LIQUIDITY ANALYSIS:
- Identifica Equal Highs/Lows (pools de liquidez)
- Determina dirección probable de barrido
- Evalúa si es liquidity grab o continuación

🎯 CONFLUENCIAS:
- Busca zonas donde coincidan múltiples conceptos
- Order Blocks + FVG + Liquidity = setup de alta probabilidad
- Evalúa contexto de sesión (Asia/London/NY)

📊 SETUP RECOMENDADO:
- Entrada específica con justificación
- Stop Loss basado en estructura
- Take Profit en próximo objetivo de liquidez
- Risk/Reward ratio mínimo 1:2

🕐 TIMING:
- Mejor momento para entrada
- Sesión más favorable
- Confluencia con noticias importantes

Contexto: [CONTEXTO_MERCADO]
Sesión: [SESIÓN_ACTUAL]
Bias: [ALCISTA/BAJISTA/NEUTRAL]

Proporciona niveles exactos y justifica cada decisión con conceptos ICT.`,
                        "ict-maestro",
                      )
                    }
                    className="absolute top-2 right-2 p-2 text-[#b1a2d6] hover:text-white transition-colors"
                  >
                    {copiedPrompt === "ict-maestro" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <pre className="text-[#b1a2d6] text-sm whitespace-pre-wrap pr-10">
                    {`Eres un analista experto en ICT 2022 y Smart Money Concepts. Analiza [PAR] en [TIMEFRAME]:

🏗️ MARKET STRUCTURE:
- Identifica trend actual y cambios de carácter (CHoCH)
- Localiza Break of Structure (BOS) recientes
- Determina si estamos en acumulación, manipulación o distribución

📦 ORDER BLOCKS:
- Identifica Order Blocks válidos (última vela antes de impulso)
- Clasifica como bullish/bearish y evalúa calidad
- Verifica que no hayan sido testeados previamente

⚡ FAIR VALUE GAPS:
- Localiza FVGs no rellenados en contexto de impulso
- Prioriza por proximidad y confluencias
- Determina probabilidad de relleno

💧 LIQUIDITY ANALYSIS:
- Identifica Equal Highs/Lows (pools de liquidez)
- Determina dirección probable de barrido
- Evalúa si es liquidity grab o continuación

🎯 CONFLUENCIAS:
- Busca zonas donde coincidan múltiples conceptos
- Order Blocks + FVG + Liquidity = setup de alta probabilidad
- Evalúa contexto de sesión (Asia/London/NY)

📊 SETUP RECOMENDADO:
- Entrada específica con justificación
- Stop Loss basado en estructura
- Take Profit en próximo objetivo de liquidez
- Risk/Reward ratio mínimo 1:2

🕐 TIMING:
- Mejor momento para entrada
- Sesión más favorable
- Confluencia con noticias importantes

Contexto: [CONTEXTO_MERCADO]
Sesión: [SESIÓN_ACTUAL]
Bias: [ALCISTA/BAJISTA/NEUTRAL]

Proporciona niveles exactos y justifica cada decisión con conceptos ICT.`}
                  </pre>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-3">Prompt para Scalping ICT</h3>
                  <div className="bg-[#0a0a0a] rounded-lg p-4 relative">
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `Análisis ICT para scalping en [PAR] M5/M15:

1. BIAS DIRECCIONAL (H4/H1):
- ¿Cuál es el bias institucional?
- ¿Hay CHoCH reciente?

2. ENTRY TRIGGER (M15/M5):
- Order Block más cercano
- FVG en dirección del bias
- Liquidity grab + reversal

3. CONFLUENCIAS M5:
- OB + FVG + Liquidity
- Retesteo de estructura rota
- Rechazo en zona institucional

4. GESTIÓN:
- Entrada: En zona de confluencia
- Stop: 10-15 pips máximo
- Target: 15-30 pips (1:2 mínimo)
- Breakeven: +10 pips

5. TIMING:
- Evitar noticias de alto impacto
- Mejor en London/NY overlap
- Confirmar con price action

Sesión: [SESIÓN]
Volatilidad: [ALTA/MEDIA/BAJA]`,
                          "scalping-ict",
                        )
                      }
                      className="absolute top-2 right-2 p-2 text-[#b1a2d6] hover:text-white transition-colors"
                    >
                      {copiedPrompt === "scalping-ict" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <pre className="text-[#b1a2d6] text-xs whitespace-pre-wrap pr-10">
                      {`Análisis ICT para scalping en [PAR] M5/M15:

1. BIAS DIRECCIONAL (H4/H1):
- ¿Cuál es el bias institucional?
- ¿Hay CHoCH reciente?

2. ENTRY TRIGGER (M15/M5):
- Order Block más cercano
- FVG en dirección del bias
- Liquidity grab + reversal

3. CONFLUENCIAS M5:
- OB + FVG + Liquidity
- Retesteo de estructura rota
- Rechazo en zona institucional

4. GESTIÓN:
- Entrada: En zona de confluencia
- Stop: 10-15 pips máximo
- Target: 15-30 pips (1:2 mínimo)
- Breakeven: +10 pips

5. TIMING:
- Evitar noticias de alto impacto
- Mejor en London/NY overlap
- Confirmar con price action

Sesión: [SESIÓN]
Volatilidad: [ALTA/MEDIA/BAJA]`}
                    </pre>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-3">Prompt para Swing ICT</h3>
                  <div className="bg-[#0a0a0a] rounded-lg p-4 relative">
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `Análisis ICT para swing trading en [PAR] H4/D1:

1. ESTRUCTURA MAYOR (D1/W1):
- Trend principal
- Niveles de liquidez semanales/mensuales
- Zonas de acumulación/distribución

2. SETUP H4:
- Order Blocks de alta calidad
- FVGs en timeframes mayores
- CHoCH confirmado

3. CONFLUENCIAS:
- OB + Estructura + Liquidez
- Retesteo de niveles importantes
- Confluencia con análisis fundamental

4. GESTIÓN SWING:
- Entrada: Zona de confluencia H4
- Stop: Más allá de estructura
- Target: Próximo nivel de liquidez mayor
- Hold: 3-10 días típicamente

5. CONFIRMACIONES:
- Price action en zona
- Volumen institucional
- Contexto de sesión

Contexto fundamental: [CONTEXTO]
Eventos próximos: [EVENTOS]`,
                          "swing-ict",
                        )
                      }
                      className="absolute top-2 right-2 p-2 text-[#b1a2d6] hover:text-white transition-colors"
                    >
                      {copiedPrompt === "swing-ict" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <pre className="text-[#b1a2d6] text-xs whitespace-pre-wrap pr-10">
                      {`Análisis ICT para swing trading en [PAR] H4/D1:

1. ESTRUCTURA MAYOR (D1/W1):
- Trend principal
- Niveles de liquidez semanales/mensuales
- Zonas de acumulación/distribución

2. SETUP H4:
- Order Blocks de alta calidad
- FVGs en timeframes mayores
- CHoCH confirmado

3. CONFLUENCIAS:
- OB + Estructura + Liquidez
- Retesteo de niveles importantes
- Confluencia con análisis fundamental

4. GESTIÓN SWING:
- Entrada: Zona de confluencia H4
- Stop: Más allá de estructura
- Target: Próximo nivel de liquidez mayor
- Hold: 3-10 días típicamente

5. CONFIRMACIONES:
- Price action en zona
- Volumen institucional
- Contexto de sesión

Contexto fundamental: [CONTEXTO]
Eventos próximos: [EVENTOS]`}
                    </pre>
                  </div>
                </div>
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
                <h2 className="text-2xl font-bold text-white">Ejercicios Prácticos ICT</h2>
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
                    🎉 ¡Felicitaciones! Has completado todos los ejercicios del Módulo 3
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
                    <p className="text-white font-medium">Checklist ICT 2022</p>
                    <p className="text-[#b1a2d6] text-sm">PDF con todos los conceptos</p>
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
                    <p className="text-white font-medium">Templates de Prompts</p>
                    <p className="text-[#b1a2d6] text-sm">Colección completa de prompts</p>
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
