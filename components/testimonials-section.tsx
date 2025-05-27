"use client"

import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Rodríguez",
      position: "Trader Profesional",
      quote:
        "El análisis técnico de Xentris ha transformado mi enfoque de trading. Ahora puedo identificar patrones y tendencias que antes pasaba por alto, lo que ha mejorado significativamente mi tasa de éxito.",
      image: "/images/testimonial-1.png",
      imageQuery: "professional man in suit black and white portrait",
    },
    {
      name: "María González",
      position: "Analista de Mercados",
      quote:
        "La capacidad de Xentris para procesar datos en tiempo real y ofrecer análisis institucional sin emociones me ha dado una ventaja competitiva. Es como tener un equipo de analistas trabajando 24/7.",
      image: "/images/testimonial-2.png",
      imageQuery: "professional woman financial analyst black and white portrait",
    },
    {
      name: "Alejandro Torres",
      position: "Gestor de Fondos",
      quote:
        "La precisión del análisis fundamental de Xentris es impresionante. Me ha permitido anticipar movimientos del mercado basados en datos reales, no en conjeturas o rumores. Una herramienta indispensable.",
      image: "/images/testimonial-3.png",
      imageQuery: "mature fund manager man black and white portrait",
    },
  ];

  return (
    <section style={{ background: "#0D0D0D", color: "#fff" }} className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16">
            <span style={{ color: "#8b3bc0" }}>Traders profesionales</span>
            <br />
            confían en <span style={{ color: "#b1a2d6" }}>nuestra tecnología</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl p-8 transition-shadow"
                style={{
                  background: "#1b123F",
                  border: "1.5px solid #331659",
                  boxShadow: "0 4px 32px 0 #33165922",
                }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className="relative w-16 h-16 rounded-full overflow-hidden mr-4"
                    style={{
                      border: "2.5px solid #8b3bc0",
                      background: "#fff"
                    }}
                  >
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover grayscale"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">{testimonial.name}</h3>
                    <p className="text-sm" style={{ color: "#b1a2d6" }}>
                      {testimonial.position}
                    </p>
                  </div>
                </div>

                <p className="leading-relaxed text-sm" style={{ color: "#e0d7f7" }}>
                  "{testimonial.quote}"
                </p>

                <div className="mt-6 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#8b3bc0"
                      stroke="#8b3bc0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p
              className="text-lg max-w-2xl mx-auto mb-8"
              style={{ color: "#b1a2d6" }}
            >
              Únete a miles de traders que ya están aprovechando el poder del análisis impulsado por IA para tomar
              decisiones más precisas y rentables.
            </p>
   <a
  href="https://chatgpt.com/g/g-Apjq2CgWQ-gpt-forex-pro"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3 rounded-full flex items-center gap-2 font-semibold mx-auto transition-colors"
  style={{
    background: "#8b3bc0",
    color: "#fff",
    boxShadow: "0 2px 12px 0 #8b3bc044",
    display: "inline-flex",
    justifyContent: "center"
  }}
  onMouseOver={e => (e.currentTarget.style.background = "#331659")}
  onMouseOut={e => (e.currentTarget.style.background = "#8b3bc0")}
>
  Comenzar ahora
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
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
</a>

          </div>
        </div>
      </div>
    </section>
  );
}
