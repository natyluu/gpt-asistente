"use client"

import FeaturesGrid from "./features-grid"

export default function PartnersSection() {
  return (
    <section style={{ background: "#0D0D0D", color: "#fff" }} className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p
            className="font-medium uppercase tracking-wider text-sm"
            style={{ color: "#ffffff" }}
          >
            RESPUESTAS INSTANTÁNEAS A PREGUNTAS COMPLEJAS DE FOREX
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-8">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Analiza tu activo
            <br />
            <span className="text-[#b1a2d6]">con nuestro asistente GPT Forex Pro</span>
          </h3>
          <p className="text-[#b1a2d6] text-lg max-w-2xl mx-auto">
            Construido sobre tecnología de OpenAI, nuestro asistente inteligente analiza datos técnicos, fundamentales e
            institucionales en tiempo real para ofrecer respuestas inmediatas a tus preguntas más complejas.
          </p>
        </div>

<div className="flex justify-center mb-16">
  <a
    href="https://chatgpt.com/g/g-Apjq2CgWQ-gpt-forex-pro"
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-colors hover:bg-[#331659]"
    style={{
      background: "#8b3bc0",
      color: "#fff",
      boxShadow: "0 4px 24px 0 #8b3bc033",
      textDecoration: "none"
    }}
  >
    PROBAR GPT FOREX PRO
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
      className="lucide lucide-arrow-right"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  </a>
</div>


        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col items-center mb-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-2 overflow-hidden"
              style={{ background: "#fff" }}
            >
              <img src="/images/xentris-logo-clean.png" alt="Xentris Logo" className="w-12 h-12 object-contain" />
            </div>
            <h4 className="text-xl font-bold mb-1">GPT Forex Pro 📊</h4>
          <a
  href="https://xentris.tech"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm"
  style={{ color: "#b1a2d6", textDecoration: "underline" }}
>
  Por xentris.tech
</a>

            <p className="text-center text-sm mt-2" style={{ color: "#b1a2d6" }}>
              Finance Trading & Investing: Forex, Stocks, Crypto highlights its technical, fundamental, and sentiment
              analysis capabilities, along with its integration with the TwelveData API.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {[
              "Crea una strategy USD COP 1-hour timeframe.",
              "trading strategy XAU/USD 1-hour timeframe.",
              "How are the U.S. markets today?",
              "BTC/USD Intervals: H4, H1, M15 API: TwelveData..."
            ].map((text, i) => (
              <div
                key={i}
                className="rounded-lg p-4 cursor-pointer transition-colors"
                style={{
                  background: "#1b123F",
                  border: "1px solid #331659"
                }}
              >
                <p className="text-sm text-[#e0d7f7]">{text}</p>
              </div>
            ))}
          </div>

          <div className="relative">
            <div
              className="rounded-full p-4 flex items-center"
              style={{ background: "#1b123F", border: "1px solid #331659" }}
            >
              <button className="text-[#8b3bc0] mr-2 hover:opacity-70">
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
                  className="lucide lucide-plus"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </button>
              <div className="flex-1 text-[#b1a2d6] truncate px-2">
                Analiza técnicamente XAU/USD en temporalidad diaria usando RSI, MACD, Bandas de Bollinger, EMA, VWAP y
                Puntos Pivote. Identifica la tendencia, niveles clave y propone una idea de trading con entrada, TP y
                SL.
              </div>
              <button className="text-[#8b3bc0] ml-2 hover:opacity-70">
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
                  className="lucide lucide-mic"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" x2="12" y1="19" y2="22" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <FeaturesGrid />
      </div>
    </section>
  )
}
