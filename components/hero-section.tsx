"use client"

import SplineComponent from "./spline-component"

export default function HeroSection() {
  return (
    <main
      className="container mx-auto px-4 py-16 md:py-24 pb-8 md:pb-12 flex flex-col md:flex-row items-center"
      style={{ background: "#0D0D0D" }}
    >
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Asistente
          <br />
          <span style={{ color: "#8b3bc0" }}>
            Inteligente
          </span>
          <br />
          de Análisis <span className="text-[#b1a2d6]">Forex</span>
        </h1>
        <p className="text-[#b1a2d6] max-w-md">
          Decisiones claras en segundos, con datos en tiempo real.
        </p>
        <div className="space-y-4 pt-4">
          <p className="text-lg text-white">
            Nuestra tecnología analiza el mercado en segundos,
            <br />
            se adapta a tu estilo de trading
            <span className="text-[#b1a2d6]">
              {" "}
              y entrega estrategias listas para ejecutar,
            </span>
          </p>
          <p className="text-[#b1a2d6]">sin emoción y con precisión.</p>
        </div>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0 relative flex items-center justify-center">
        <div className="relative z-10 w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden" style={{ background: "#1b123F" }}>
          <SplineComponent />
        </div>
        <div
          className="absolute inset-0 rounded-full blur-3xl -z-10"
          style={{
            background: "radial-gradient(circle, #8b3bc0 0%, #331659 60%, transparent 100%)"
          }}
        ></div>
      </div>
    </main>
  );
}
