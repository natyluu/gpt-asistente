"use client"

import { useState } from "react"

export default function AICapabilitiesSection() {
  const [activeTab, setActiveTab] = useState<"capabilities" | "howToTalk">("capabilities")

  return (
    <section style={{ background: "#0D0D0D", color: "#fff" }} className="py-20">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center items-center mb-16 border-b pb-4 gap-8"
          style={{ borderColor: "#331659" }}
        >
          <button
            onClick={() => setActiveTab("capabilities")}
            className={`text-sm font-semibold transition-colors pb-2 relative ${
              activeTab === "capabilities"
                ? "text-[#8b3bc0]"
                : "text-[#b1a2d6] hover:text-[#8b3bc0]"
            }`}
            style={
              activeTab === "capabilities"
                ? { borderBottom: "2px solid #8b3bc0" }
                : {}
            }
          >
            Capacidades técnicas de este GPT
          </button>
          <button
            onClick={() => setActiveTab("howToTalk")}
            className={`text-sm font-semibold transition-colors pb-2 relative ${
              activeTab === "howToTalk"
                ? "text-[#8b3bc0]"
                : "text-[#b1a2d6] hover:text-[#8b3bc0]"
            }`}
            style={
              activeTab === "howToTalk"
                ? { borderBottom: "2px solid #8b3bc0" }
                : {}
            }
          >
            ¿Cómo funciona?
          </button>
        </div>

        {/* Content */}
        {activeTab === "capabilities" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Análisis Técnico */}
            <div>
              <div className="flex items-center mb-6">
                <div
                  className="w-5 h-5 rounded-full border flex items-center justify-center mr-3"
                  style={{ borderColor: "#8b3bc0" }}
                >
                  <div className="w-2 h-2 rounded-full"
                    style={{ background: "#8b3bc0" }}
                  ></div>
                </div>
                <span className="text-xs tracking-widest uppercase" style={{ color: "#b1a2d6" }}>
                  Análisis Técnico
                </span>
              </div>
              <p className="leading-relaxed text-sm" style={{ color: "#b1a2d6" }}>
                El análisis técnico se basa en el estudio de precios y volumen a través de indicadores para
                identificar oportunidades de entrada y salida. Nuestra tecnología integra datos de TwelveData en
                tiempo real para ofrecer una visión completa del comportamiento del mercado.
              </p>
            </div>

            {/* Análisis Institucional */}
            <div>
              <div className="flex items-center mb-6">
                <div
                  className="w-5 h-5 rounded-full border flex items-center justify-center mr-3"
                  style={{ borderColor: "#8b3bc0" }}
                >
                  <div className="w-2 h-2 rounded-full"
                    style={{ background: "#8b3bc0" }}
                  ></div>
                </div>
                <span className="text-xs tracking-widest uppercase" style={{ color: "#b1a2d6" }}>
                  Análisis Institucional
                </span>
              </div>
              <p className="leading-relaxed text-sm" style={{ color: "#b1a2d6" }}>
                Aunque no accedemos directamente a herramientas como el Order Book o Footprint Charts, implementamos
                soluciones inteligentes alternativas que simulan estas funciones mediante la estructura del precio,
                volumen y momentum.
              </p>
            </div>

            {/* Análisis Fundamental */}
            <div>
              <div className="flex items-center mb-6">
                <div
                  className="w-5 h-5 rounded-full border flex items-center justify-center mr-3"
                  style={{ borderColor: "#8b3bc0" }}
                >
                  <div className="w-2 h-2 rounded-full"
                    style={{ background: "#8b3bc0" }}
                  ></div>
                </div>
                <span className="text-xs tracking-widest uppercase" style={{ color: "#b1a2d6" }}>
                  Análisis Fundamental
                </span>
              </div>
              <p className="leading-relaxed text-sm" style={{ color: "#b1a2d6" }}>
                El análisis fundamental se enfoca en entender el impacto de noticias, eventos y sentimiento sobre los
                activos financieros. A través del acceso web en tiempo real, analizamos el contexto económico y
                mediático para complementar decisiones técnicas.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Todo lo que analiza */}
            <div>
              <div className="flex items-center mb-6">
                <div
                  className="w-5 h-5 rounded-full border flex items-center justify-center mr-3"
                  style={{ borderColor: "#8b3bc0" }}
                >
                  <div className="w-2 h-2 rounded-full"
                    style={{ background: "#8b3bc0" }}
                  ></div>
                </div>
                <span className="text-xs tracking-widest uppercase" style={{ color: "#b1a2d6" }}>
                  Todo lo que analiza en segundos:
                </span>
              </div>
              <p className="leading-relaxed text-sm" style={{ color: "#b1a2d6" }}>
                RSI (Relative Strength Index)<br />
                MACD (Moving Average Convergence Divergence)<br />
                Bandas de Bollinger<br />
                VWAP<br />
                EMA<br />
                Puntos Pivote<br />
                Regresión Lineal<br />
                Noticias relevantes en tiempo real<br />
                Análisis de sentimiento del mercado<br />
                Soportes y resistencias automáticos
              </p>
            </div>

            {/* ¿Por qué elegir esta IA? */}
            <div>
              <div className="flex items-center mb-6">
                <div
                  className="w-5 h-5 rounded-full border flex items-center justify-center mr-3"
                  style={{ borderColor: "#8b3bc0" }}
                >
                  <div className="w-2 h-2 rounded-full"
                    style={{ background: "#8b3bc0" }}
                  ></div>
                </div>
                <span className="text-xs tracking-widest uppercase" style={{ color: "#b1a2d6" }}>
                  ¿Por qué elegir esta IA?
                </span>
              </div>
              <p className="leading-relaxed text-sm" style={{ color: "#b1a2d6" }}>
                Precisión de nivel institucional, pero accesible a todos<br />
                Adaptabilidad al estilo del trader<br />
                Resultados en segundos<br />
                Ahorro de tiempo y reducción de errores<br />
                Ideal tanto para retail como para profesionales
              </p>
            </div>

            {/* Hecho para traders como tú */}
            <div>
              <div className="flex items-center mb-6">
                <div
                  className="w-5 h-5 rounded-full border flex items-center justify-center mr-3"
                  style={{ borderColor: "#8b3bc0" }}
                >
                  <div className="w-2 h-2 rounded-full"
                    style={{ background: "#8b3bc0" }}
                  ></div>
                </div>
                <span className="text-xs tracking-widest uppercase" style={{ color: "#b1a2d6" }}>
                  Hecho para traders como tú:
                </span>
              </div>
              <p className="leading-relaxed text-sm" style={{ color: "#b1a2d6" }}>
                Traders independientes<br />
                Educadores financieros<br />
                Firmas institucionales<br />
                Plataformas fintech<br />
                Analistas de portafolio
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
