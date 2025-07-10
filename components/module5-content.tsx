"use client"

import { useState } from "react"
import {
  Copy,
  Check,
  Play,
  TrendingUp,
  Target,
  BarChart3,
  BookOpen,
  Download,
  Settings,
  Bot,
  Bell,
  Award,
  Rocket,
  Code,
} from "lucide-react"

export function Module5Content() {
  const [activeSection, setActiveSection] = useState("introduccion")
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null)
  const [completedTasks, setCompletedTasks] = useState<string[]>([])

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedPrompt(id)
    setTimeout(() => setCopiedPrompt(null), 2000)
  }

  const toggleTask = (taskId: string) => {
    setCompletedTasks((prev) => (prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]))
  }

  const sections = [
    { id: "introduccion", title: "Proyecto Final", icon: BookOpen },
    { id: "sistema", title: "Sistema Integrado", icon: Settings },
    { id: "automatizacion", title: "Automatización", icon: Bot },
    { id: "alertas", title: "Alertas y Notificaciones", icon: Bell },
    { id: "implementacion", title: "Implementación", icon: Code },
  ]

  const projectTasks = [
    {
      id: "task1",
      title: "Diseño del Sistema",
      difficulty: "Intermedio",
      description: "Define la arquitectura de tu sistema de trading automatizado",
      deliverable: "Diagrama de flujo del sistema",
    },
    {
      id: "task2",
      title: "Prompts Maestros",
      difficulty: "Avanzado",
      description: "Crea tus prompts personalizados para cada tipo de análisis",
      deliverable: "Biblioteca de prompts optimizados",
    },
    {
      id: "task3",
      title: "Integración de Capas",
      difficulty: "Avanzado",
      description: "Combina análisis técnico, fundamental y sentiment",
      deliverable: "Sistema de scoring multicapa",
    },
    {
      id: "task4",
      title: "Gestión de Riesgo",
      difficulty: "Experto",
      description: "Implementa reglas automatizadas de gestión de riesgo",
      deliverable: "Calculadora de posición automática",
    },
    {
      id: "task5",
      title: "Sistema de Alertas",
      difficulty: "Experto",
      description: "Configura alertas automáticas para oportunidades",
      deliverable: "Bot de notificaciones funcional",
    },
    {
      id: "task6",
      title: "Backtesting y Optimización",
      difficulty: "Maestro",
      description: "Prueba y optimiza tu sistema con datos históricos",
      deliverable: "Reporte de rendimiento completo",
    },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "introduccion":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Proyecto Final: Tu Sistema de Trading Completo</h2>
              <p className="text-[#b1a2d6] mb-6 leading-relaxed">
                Es hora de integrar todo lo aprendido en un sistema de trading profesional. Crearás tu propio asistente
                de trading que combine análisis técnico, fundamental, Smart Money y automatización usando GPT.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Componentes del Sistema Final</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#8b3bc0] rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Análisis Multicapa</h4>
                      <p className="text-[#b1a2d6] text-sm">Técnico + Fundamental + Smart Money + Sentiment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#8b3bc0] rounded-lg flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Automatización</h4>
                      <p className="text-[#b1a2d6] text-sm">Análisis automático y generación de señales</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#8b3bc0] rounded-lg flex items-center justify-center">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Gestión de Riesgo</h4>
                      <p className="text-[#b1a2d6] text-sm">Cálculo automático de posiciones y stops</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#8b3bc0] rounded-lg flex items-center justify-center">
                      <Bell className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Sistema de Alertas</h4>
                      <p className="text-[#b1a2d6] text-sm">Notificaciones automáticas de oportunidades</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#8b3bc0] rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Métricas de Rendimiento</h4>
                      <p className="text-[#b1a2d6] text-sm">Seguimiento automático de resultados</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#8b3bc0] rounded-lg flex items-center justify-center">
                      <Settings className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Personalización</h4>
                      <p className="text-[#b1a2d6] text-sm">Adaptado a tu estilo y preferencias</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8b3bc0]/10 to-[#a06be7]/10 border border-[#8b3bc0]/30 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-[#8b3bc0]" />
                Objetivos del Proyecto
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-[#b1a2d6]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">✓</span>
                    Sistema que analice automáticamente múltiples pares
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">✓</span>
                    Integración de todas las metodologías aprendidas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">✓</span>
                    Alertas automáticas de oportunidades de alta probabilidad
                  </li>
                </ul>
                <ul className="space-y-2 text-[#b1a2d6]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">✓</span>
                    Gestión de riesgo automatizada y personalizable
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">✓</span>
                    Dashboard de seguimiento de rendimiento
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b3bc0] mt-1">✓</span>
                    Sistema escalable y mejorable continuamente
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )

      case "sistema":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Sistema Integrado de Trading</h2>
              <p className="text-[#b1a2d6] mb-6 leading-relaxed">
                Tu sistema debe integrar todos los componentes aprendidos en una solución cohesiva que pueda analizar
                mercados y generar señales de trading de alta calidad.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Arquitectura del Sistema</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-lg">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Módulo de Análisis Técnico</h4>
                    <p className="text-[#b1a2d6] text-sm">Smart Money, ICT, patrones, indicadores</p>
                  </div>
                  <div className="text-blue-400 font-bold">25%</div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-lg">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Módulo Fundamental</h4>
                    <p className="text-[#b1a2d6] text-sm">Noticias, calendario económico, correlaciones</p>
                  </div>
                  <div className="text-green-400 font-bold">25%</div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-lg">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Módulo de Gestión de Riesgo</h4>
                    <p className="text-[#b1a2d6] text-sm">Cálculo de posiciones, stops, objetivos</p>
                  </div>
                  <div className="text-purple-400 font-bold">25%</div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-lg">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Módulo de Automatización</h4>
                    <p className="text-[#b1a2d6] text-sm">Ejecución, alertas, seguimiento</p>
                  </div>
                  <div className="text-orange-400 font-bold">25%</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8b3bc0]/10 to-[#a06be7]/10 border border-[#8b3bc0]/30 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3">Prompt para Sistema Maestro</h3>
              <div className="bg-[#0a0a0a] rounded-lg p-4 relative">
                <button
                  onClick={() =>
                    copyToClipboard(
                      `Eres mi asistente de trading personal especializado en Forex. Tu función es analizar mercados y generar señales de trading de alta probabilidad.

CONFIGURACIÓN DEL SISTEMA:
- Pares a analizar: [LISTA_PARES]
- Timeframes principales: H4, H1, M15
- Estilo de trading: [SCALPING/SWING/POSITION]
- Tolerancia al riesgo: [CONSERVADOR/MODERADO/AGRESIVO]
- Capital disponible: [MONTO]

PROCESO DE ANÁLISIS:

1. ANÁLISIS TÉCNICO (Smart Money + ICT):
   - Estructura de mercado actual
   - Order Blocks y Fair Value Gaps
   - Niveles de liquidez
   - Confluencias técnicas

2. ANÁLISIS FUNDAMENTAL:
   - Próximos eventos económicos (próximas 24h)
   - Contexto de política monetaria
   - Sentiment del mercado actual
   - Correlaciones relevantes

3. GESTIÓN DE RIESGO:
   - Cálculo de tamaño de posición (2% de riesgo máximo)
   - Niveles de Stop Loss basados en estructura
   - Objetivos múltiples (1:2, 1:3 mínimo)
   - Condiciones de invalidación

4. SCORING DEL SETUP:
   - Técnico: /10 puntos
   - Fundamental: /10 puntos
   - Gestión de riesgo: /10 puntos
   - TOTAL: /30 puntos (mínimo 24 para operar)

5. RECOMENDACIÓN FINAL:
   - OPERAR/NO OPERAR
   - Par recomendado
   - Dirección (Long/Short)
   - Entrada específica
   - Stop Loss
   - Take Profit (múltiples niveles)
   - Timeframe del trade
   - Justificación completa

FORMATO DE SALIDA:
🎯 SEÑAL DE TRADING
Par: [PAR]
Dirección: [LONG/SHORT]
Entrada: [PRECIO]
Stop Loss: [PRECIO] ([X] pips)
TP1: [PRECIO] ([X] pips - 1:2)
TP2: [PRECIO] ([X] pips - 1:3)
Tamaño: [LOTES] ([X]% del capital)
Score: [X]/30

📊 JUSTIFICACIÓN:
[Análisis detallado de por qué este setup cumple todos los criterios]

⚠️ GESTIÓN:
[Instrucciones específicas para gestionar el trade]

Analiza ahora los mercados y proporciona tu recomendación.`,
                      "sistema-maestro",
                    )
                  }
                  className="absolute top-2 right-2 p-2 text-[#b1a2d6] hover:text-white transition-colors"
                >
                  {copiedPrompt === "sistema-maestro" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
                <pre className="text-[#b1a2d6] text-sm whitespace-pre-wrap pr-10">
                  {`Eres mi asistente de trading personal especializado en Forex. Tu función es analizar mercados y generar señales de trading de alta probabilidad.

CONFIGURACIÓN DEL SISTEMA:
- Pares a analizar: [LISTA_PARES]
- Timeframes principales: H4, H1, M15
- Estilo de trading: [SCALPING/SWING/POSITION]
- Tolerancia al riesgo: [CONSERVADOR/MODERADO/AGRESIVO]
- Capital disponible: [MONTO]

PROCESO DE ANÁLISIS:

1. ANÁLISIS TÉCNICO (Smart Money + ICT):
   - Estructura de mercado actual
   - Order Blocks y Fair Value Gaps
   - Niveles de liquidez
   - Confluencias técnicas

2. ANÁLISIS FUNDAMENTAL:
   - Próximos eventos económicos (próximas 24h)
   - Contexto de política monetaria
   - Sentiment del mercado actual
   - Correlaciones relevantes

3. GESTIÓN DE RIESGO:
   - Cálculo de tamaño de posición (2% de riesgo máximo)
   - Niveles de Stop Loss basados en estructura
   - Objetivos múltiples (1:2, 1:3 mínimo)
   - Condiciones de invalidación

4. SCORING DEL SETUP:
   - Técnico: /10 puntos
   - Fundamental: /10 puntos
   - Gestión de riesgo: /10 puntos
   - TOTAL: /30 puntos (mínimo 24 para operar)

5. RECOMENDACIÓN FINAL:
   - OPERAR/NO OPERAR
   - Par recomendado
   - Dirección (Long/Short)
   - Entrada específica
   - Stop Loss
   - Take Profit (múltiples niveles)
   - Timeframe del trade
   - Justificación completa

FORMATO DE SALIDA:
🎯 SEÑAL DE TRADING
Par: [PAR]
Dirección: [LONG/SHORT]
Entrada: [PRECIO]
Stop Loss: [PRECIO] ([X] pips)
TP1: [PRECIO] ([X] pips - 1:2)
TP2: [PRECIO] ([X] pips - 1:3)
Tamaño: [LOTES] ([X]% del capital)
Score: [X]/30

📊 JUSTIFICACIÓN:
[Análisis detallado de por qué este setup cumple todos los criterios]

⚠️ GESTIÓN:
[Instrucciones específicas para gestionar el trade]

Analiza ahora los mercados y proporciona tu recomendación.`}
                </pre>
              </div>
            </div>
          </div>
        )

      case "automatizacion":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Automatización del Sistema</h2>
              <p className="text-[#b1a2d6] mb-6 leading-relaxed">
                La automatización te permite escalar tu trading y mantener consistencia. Aprende a crear flujos de
                trabajo automatizados que funcionen 24/7.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-3">Análisis Automático</h3>
                <ul className="space-y-2 text-[#b1a2d6] text-sm">
                  <li>Escaneo de múltiples pares</li>
                  <li>Análisis técnico automatizado</li>
                  <li>Evaluación de noticias</li>
                  <li>Scoring de oportunidades</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-3">Alertas Inteligentes</h3>
                <ul className="space-y-2 text-[#b1a2d6] text-sm">
                  <li>Notificaciones por Telegram/Discord</li>
                  <li>Filtros de calidad</li>
                  <li>Alertas de gestión</li>
                  <li>Resúmenes diarios</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-3">Gestión Automática</h3>
                <ul className="space-y-2 text-[#b1a2d6] text-sm">
                  <li>Cálculo de posiciones</li>
                  <li>Ajuste de stops</li>
                  <li>Toma de beneficios parciales</li>
                  <li>Registro de trades</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8b3bc0]/10 to-[#a06be7]/10 border border-[#8b3bc0]/30 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3">Herramientas de Automatización</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-medium mb-3">Plataformas Recomendadas</h4>
                  <ul className="space-y-2 text-[#b1a2d6] text-sm">
                    <li>Zapier: Automatización sin código</li>
                    <li>Make (Integromat): Flujos complejos</li>
                    <li>Python: Scripts personalizados</li>
                    <li>TradingView: Alertas y webhooks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-3">APIs Útiles</h4>
                  <ul className="space-y-2 text-[#b1a2d6] text-sm">
                    <li>OpenAI API: Para análisis con GPT</li>
                    <li>Telegram Bot API: Notificaciones</li>
                    <li>Alpha Vantage: Datos de mercado</li>
                    <li>Economic Calendar API: Eventos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )

      case "alertas":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Sistema de Alertas y Notificaciones</h2>
              <p className="text-[#b1a2d6] mb-6 leading-relaxed">
                Un sistema de alertas efectivo te mantiene informado de oportunidades sin necesidad de estar pegado a
                las pantallas todo el día.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Tipos de Alertas</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                    <Bell className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Alertas de Alta Prioridad</h4>
                    <p className="text-[#b1a2d6] text-sm">Setups con score &gt;27/30, confluencias múltiples</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <Bell className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Alertas de Gestión</h4>
                    <p className="text-[#b1a2d6] text-sm">Breakeven, trailing stops, toma de beneficios</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Bell className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Alertas de Noticias</h4>
                    <p className="text-[#b1a2d6] text-sm">Eventos de alto impacto, sorpresas económicas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8b3bc0]/10 to-[#a06be7]/10 border border-[#8b3bc0]/30 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3">Prompt para Bot de Alertas</h3>
              <div className="bg-[#0a0a0a] rounded-lg p-4 relative">
                <button
                  onClick={() =>
                    copyToClipboard(
                      `Eres mi bot de alertas de trading. Tu función es monitorear mercados y enviarme notificaciones cuando encuentres oportunidades de alta calidad.

CONFIGURACIÓN DE ALERTAS:
- Pares a monitorear: [LISTA_PARES]
- Score mínimo para alerta: 24/30
- Horarios activos: [HORARIOS]
- Canales de notificación: [TELEGRAM/DISCORD/EMAIL]

FORMATO DE ALERTA:

🚨 ALERTA DE TRADING - [PRIORIDAD]

📊 SETUP DETECTADO:
Par: [PAR]
Timeframe: [TF]
Dirección: [LONG/SHORT]
Score: [X]/30

🎯 NIVELES:
Entrada: [PRECIO]
Stop Loss: [PRECIO] ([X] pips)
Take Profit: [PRECIO] ([X] pips - 1:[X])

📈 ANÁLISIS RÁPIDO:
Técnico: [RESUMEN_TÉCNICO]
Fundamental: [CONTEXTO_FUNDAMENTAL]
Confluencias: [CONFLUENCIAS_PRINCIPALES]

⏰ TIMING:
Válido hasta: [TIEMPO]
Mejor entrada: [CONDICIONES]

🔔 PRIORIDAD:
🔴 ALTA (27-30/30): Alerta inmediata
🟡 MEDIA (24-26/30): Alerta normal
🟢 BAJA (&lt;24/30): Solo resumen diario

INSTRUCCIONES ADICIONALES:
- Envía máximo 3 alertas de alta prioridad por día
- Incluye siempre gestión de riesgo
- Confirma confluencias antes de enviar
- Evita alertas durante noticias de alto impacto
- Envía resumen diario a las 18:00 GMT

Monitorea ahora los mercados y envía alertas según los criterios establecidos.`,
                      "bot-alertas",
                    )
                  }
                  className="absolute top-2 right-2 p-2 text-[#b1a2d6] hover:text-white transition-colors"
                >
                  {copiedPrompt === "bot-alertas" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
                <pre className="text-[#b1a2d6] text-sm whitespace-pre-wrap pr-10">
                  {`Eres mi bot de alertas de trading. Tu función es monitorear mercados y enviarme notificaciones cuando encuentres oportunidades de alta calidad.

CONFIGURACIÓN DE ALERTAS:
- Pares a monitorear: [LISTA_PARES]
- Score mínimo para alerta: 24/30
- Horarios activos: [HORARIOS]
- Canales de notificación: [TELEGRAM/DISCORD/EMAIL]

FORMATO DE ALERTA:

🚨 ALERTA DE TRADING - [PRIORIDAD]

📊 SETUP DETECTADO:
Par: [PAR]
Timeframe: [TF]
Dirección: [LONG/SHORT]
Score: [X]/30

🎯 NIVELES:
Entrada: [PRECIO]
Stop Loss: [PRECIO] ([X] pips)
Take Profit: [PRECIO] ([X] pips - 1:[X])

📈 ANÁLISIS RÁPIDO:
Técnico: [RESUMEN_TÉCNICO]
Fundamental: [CONTEXTO_FUNDAMENTAL]
Confluencias: [CONFLUENCIAS_PRINCIPALES]

⏰ TIMING:
Válido hasta: [TIEMPO]
Mejor entrada: [CONDICIONES]

🔔 PRIORIDAD:
🔴 ALTA (27-30/30): Alerta inmediata
🟡 MEDIA (24-26/30): Alerta normal
🟢 BAJA (&lt;24/30): Solo resumen diario

INSTRUCCIONES ADICIONALES:
- Envía máximo 3 alertas de alta prioridad por día
- Incluye siempre gestión de riesgo
- Confirma confluencias antes de enviar
- Evita alertas durante noticias de alto impacto
- Envía resumen diario a las 18:00 GMT

Monitorea ahora los mercados y envía alertas según los criterios establecidos.`}
                </pre>
              </div>
            </div>
          </div>
        )

      case "implementacion":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Implementación y Puesta en Marcha</h2>
              <p className="text-[#b1a2d6] mb-6 leading-relaxed">
                Guía paso a paso para implementar tu sistema de trading completo y comenzar a operarlo de manera
                profesional.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Fases de Implementación</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-[#0a0a0a] rounded-lg">
                  <div className="w-8 h-8 bg-[#8b3bc0] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Fase de Desarrollo (Semana 1-2)</h4>
                    <ul className="space-y-1 text-[#b1a2d6] text-sm">
                      <li>Crear y personalizar todos los prompts</li>
                      <li>Configurar herramientas de automatización</li>
                      <li>Establecer sistema de alertas</li>
                      <li>Crear dashboard de seguimiento</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#0a0a0a] rounded-lg">
                  <div className="w-8 h-8 bg-[#8b3bc0] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Fase de Pruebas (Semana 3-4)</h4>
                    <ul className="space-y-1 text-[#b1a2d6] text-sm">
                      <li>Backtesting con datos históricos</li>
                      <li>Paper trading durante 2 semanas</li>
                      <li>Ajustes y optimizaciones</li>
                      <li>Validación de alertas</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#0a0a0a] rounded-lg">
                  <div className="w-8 h-8 bg-[#8b3bc0] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Fase de Lanzamiento (Semana 5-6)</h4>
                    <ul className="space-y-1 text-[#b1a2d6] text-sm">
                      <li>Comenzar con capital reducido (25%)</li>
                      <li>Monitoreo intensivo de resultados</li>
                      <li>Ajustes en tiempo real</li>
                      <li>Documentación de mejoras</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#0a0a0a] rounded-lg">
                  <div className="w-8 h-8 bg-[#8b3bc0] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Fase de Escalado (Mes 2+)</h4>
                    <ul className="space-y-1 text-[#b1a2d6] text-sm">
                      <li>Incrementar capital gradualmente</li>
                      <li>Añadir nuevos pares y estrategias</li>
                      <li>Optimización continua</li>
                      <li>Análisis de rendimiento mensual</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#8b3bc0]" />
                  Métricas de Éxito
                </h3>
                <ul className="space-y-2 text-[#b1a2d6] text-sm">
                  <li>Win Rate: &gt;60%</li>
                  <li>Risk/Reward: &gt;1:2 promedio</li>
                  <li>Drawdown máximo: &lt;10%</li>
                  <li>Rentabilidad mensual: 5-15%</li>
                  <li>Sharpe Ratio: &gt;1.5</li>
                  <li>Consistency: 80% meses positivos</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#8b3bc0]" />
                  KPIs a Monitorear
                </h3>
                <ul className="space-y-2 text-[#b1a2d6] text-sm">
                  <li>Número de señales diarias</li>
                  <li>Calidad promedio de setups</li>
                  <li>Tiempo de respuesta a alertas</li>
                  <li>Precisión de análisis fundamental</li>
                  <li>Efectividad de gestión de riesgo</li>
                  <li>Satisfacción con el sistema</li>
                </ul>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const progressPercentage = (completedTasks.length / projectTasks.length) * 100

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 sticky top-8">
              <h3 className="text-white font-semibold mb-4">Contenido del Proyecto</h3>
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

            {/* Tareas del Proyecto */}
            <div className="mt-8 bg-[#1a1a1a] border border-[#333] rounded-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Tareas del Proyecto Final</h2>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-[#2a2a2a] rounded-full h-2 min-w-[200px]">
                    <div
                      className="bg-gradient-to-r from-[#8b3bc0] to-[#a06be7] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <span className="text-[#b1a2d6] text-sm font-medium">
                    {completedTasks.length}/{projectTasks.length}
                  </span>
                </div>
              </div>

              <div className="grid gap-4">
                {projectTasks.map((task, index) => (
                  <div key={task.id} className="bg-[#0a0a0a] border border-[#333] rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <button
                        onClick={() => toggleTask(task.id)}
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                          completedTasks.includes(task.id)
                            ? "bg-[#8b3bc0] border-[#8b3bc0]"
                            : "border-[#666] hover:border-[#8b3bc0]"
                        }`}
                      >
                        {completedTasks.includes(task.id) && <Check className="w-4 h-4 text-white" />}
                      </button>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-white font-semibold">{task.title}</h3>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              task.difficulty === "Intermedio"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : task.difficulty === "Avanzado"
                                  ? "bg-orange-500/20 text-orange-400"
                                  : task.difficulty === "Experto"
                                    ? "bg-red-500/20 text-red-400"
                                    : "bg-purple-500/20 text-purple-400"
                            }`}
                          >
                            {task.difficulty}
                          </span>
                        </div>
                        <p className="text-[#b1a2d6] text-sm mb-2">{task.description}</p>
                        <p className="text-[#8b3bc0] text-sm font-medium mb-3">Entregable: {task.deliverable}</p>

                        <button className="flex items-center gap-2 text-[#8b3bc0] hover:text-white transition-colors text-sm">
                          <Play className="w-4 h-4" />
                          Comenzar Tarea
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {progressPercentage === 100 && (
                <div className="mt-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Award className="w-8 h-8 text-green-400" />
                    <h3 className="text-green-400 font-bold text-xl">¡Proyecto Completado!</h3>
                  </div>
                  <p className="text-green-400 mb-4">🎉 ¡Felicitaciones! Has completado el GPT Forex Pro Avanzado</p>
                  <p className="text-[#b1a2d6] text-sm">
                    Ahora tienes un sistema de trading completo y automatizado. ¡Es hora de ponerlo en práctica y
                    comenzar a generar resultados!
                  </p>
                </div>
              )}
            </div>

            {/* Recursos Finales */}
            <div className="mt-8 bg-gradient-to-r from-[#8b3bc0]/10 to-[#a06be7]/10 border border-[#8b3bc0]/30 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-[#8b3bc0]" />
                Recursos del Proyecto Final
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
                    <p className="text-white font-medium">Sistema Completo</p>
                    <p className="text-[#b1a2d6] text-sm">Todos los prompts y configuraciones</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg hover:bg-[#2a2a2a] transition-colors"
                >
                  <div className="w-10 h-10 bg-[#8b3bc0] rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Certificado</p>
                    <p className="text-[#b1a2d6] text-sm">Certificado de finalización</p>
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
