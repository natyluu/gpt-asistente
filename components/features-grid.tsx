"use client"

export default function FeaturesGrid() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8b3bc0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="6" height="14" x="4" y="5" rx="2" />
          <rect width="6" height="10" x="14" y="9" rx="2" />
          <path d="M22 19h-8" />
          <path d="M2 19h8" />
          <path d="M12 5v14" />
        </svg>
      ),
      title: "Análisis con IA",
      description:
        "Nuestros algoritmos analizan patrones de precio, volumen y momentum utilizando indicadores como RSI, MACD y Bollinger Bands para identificar oportunidades de trading con alta probabilidad de éxito.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8b3bc0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      ),
      title: "Sentimiento de Mercado",
      description:
        "Integramos datos económicos, noticias y eventos del mercado en tiempo real para proporcionar un contexto completo que complementa el análisis técnico y mejora la precisión de nuestras predicciones.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8b3bc0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: "Señales comerciales",
      description:
        "Calculamos automáticamente niveles óptimos de stop loss y take profit basados en la volatilidad del mercado y puntos pivote clave, ayudándote a proteger tu capital y maximizar tus ganancias.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8b3bc0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: "Nuestra Tecnología",
      description:
        "Te invito a experimentar un análisis técnico de alto nivel, impulsado por el modelo GPT-4.0 estándar y alimentado con datos en tiempo casi real gracias a la API de TwelveData. Todo en un entorno diseñado para brindarte decisiones de trading precisas, rápidas y confiables.",
    },
  ];

  return (
    <section style={{ background: "#0D0D0D", color: "#fff" }} className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="pt-8 rounded-xl transition-all"
              style={{
                borderTop: "2px solid #8b3bc0",
                background: "#1b123F",
                boxShadow: "0 2px 16px 0 #33165944",
                minHeight: "390px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <div
                className="w-12 h-12 rounded-md flex items-center justify-center mb-6"
                style={{
                  border: "2px solid #8b3bc0",
                  background: "#33165922"
                }}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-[#b1a2d6] text-center px-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
