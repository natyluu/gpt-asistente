"use client"

import { useState, useEffect } from "react"

export default function BlockchainHero() {
  const [selectedOption, setSelectedOption] = useState<string>("buscar")

  useEffect(() => {
    // Add the Spline Viewer script
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.96/build/spline-viewer.js"
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: "#0D0D0D" }}>
      {/* Spline como fondo */}
      <div className="absolute inset-0 z-0">
        <spline-viewer
          url="https://prod.spline.design/TOFbcbaltP9wyufq/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Overlay para mejorar la legibilidad del texto */}
      <div className="absolute inset-0" style={{ background: "rgba(13,13,13,0.50)" , zIndex: 10 }}></div>

      <div className="relative z-20 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
          <div
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #8b3bc0 0%, #fff 90%)"
            }}
          >
            Es como tener un equipo de analistas profesionales…
          </div>
          <div className="mt-2 text-3xl md:text-4xl lg:text-5xl" style={{ color: "#b1a2d6" }}>
            pero totalmente automático y disponible 24/7.
          </div>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16 mb-12">
          {[
            { value: "buscar", label: "sin emociones" },
            { value: "asegurar", label: "sin adivinar" },
            { value: "crear", label: "datos reales" }
          ].map(option => (
            <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="radio"
                  name="option"
                  className="sr-only"
                  checked={selectedOption === option.value}
                  onChange={() => setSelectedOption(option.value)}
                />
                <div
                  className="w-5 h-5 rounded-full border flex items-center justify-center"
                  style={{
                    borderColor: selectedOption === option.value ? "#8b3bc0" : "#b1a2d6",
                    transition: "border 0.2s"
                  }}
                >
                  {selectedOption === option.value && <div className="w-2 h-2 rounded-full" style={{ background: "#8b3bc0" }}></div>}
                </div>
              </div>
              <span
                className="text-sm uppercase tracking-wider transition-colors"
                style={{
                  color: selectedOption === option.value ? "#8b3bc0" : "#b1a2d6",
                  fontWeight: selectedOption === option.value ? 700 : 400
                }}
              >
                {option.label}
              </span>
            </label>
          ))}
        </div>

        <a
  href="https://chatgpt.com/g/g-Apjq2CgWQ-gpt-forex-pro"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 px-8 py-3 rounded-full flex items-center gap-2 font-semibold mx-auto transition-colors shadow-md"
  style={{
    background: "#8b3bc0",
    color: "#fff",
    display: "inline-flex",
    justifyContent: "center"
  }}
  onMouseOver={e => (e.currentTarget.style.background = "#331659")}
  onMouseOut={e => (e.currentTarget.style.background = "#8b3bc0")}
>
  Usar GPT Forex Pro ahora
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
    </section>
  )
}
