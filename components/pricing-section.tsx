"use client"

export default function PricingSection() {
  // Lista de features, idénticas para ambos planes
  const features = [
    "Análisis técnico, fundamental e institucional",
    "Consultas ilimitadas",
    "Todos los indicadores disponibles",
    "Datos en tiempo real (TwelveData API)",
    "Señales de trading personalizadas",
    "Análisis de sentimiento de mercado",
    "Soporte prioritario 24/7",
    "Estrategias adaptadas a tu perfil",
  ];

  // Definición de los planes
  const plans = [
    {
      name: "Prueba Gratis",
      price: "$0",
      period: "por 5 días",
      description: "Acceso completo a todas las funciones durante 5 días.",
      features,
      buttonText: "Probar Gratis 5 Días",
      buttonStyle: "border border-[#8b3bc0] text-white hover:bg-[#8b3bc0] hover:text-white",
      popular: false,
    },
    {
      name: "Pro",
      price: "$30",
      period: "por mes",
      description: "Acceso completo ilimitado a todas las funciones.",
      features,
      buttonText: "Suscribirse Ahora",
      buttonStyle: "text-white",
      popular: true,
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "#0D0D0D", color: "#fff" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Elige tu <span style={{ color: '#8b3bc0' }}>plan</span>
          </h2>
          <p className="text-[#b1a2d6] text-lg max-w-2xl mx-auto">
            Disfruta acceso completo sin límites durante 5 días. Si te gusta, continúa con todas las funciones en el plan Pro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-8 border transition-all duration-300 hover:scale-105"
              style={{
                borderColor: plan.popular ? '#8b3bc0' : '#331659',
                background: plan.popular
                  ? `linear-gradient(to bottom, #331659 0%, #1b123F 60%, #0D0D0D 100%)`
                  : `linear-gradient(to bottom, #1b123F 0%, #0D0D0D 100%)`
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span
                    className="text-white px-4 py-2 rounded-full text-sm font-medium"
                    style={{ backgroundColor: '#8b3bc0' }}
                  >
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-[#b1a2d6] ml-2">{plan.period}</span>
                </div>
                <p className="text-[#b1a2d6] text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
                      style={{ color: '#8b3bc0' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#e0d7f7]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${plan.buttonStyle}`}
                style={
                  plan.popular
                    ? { backgroundColor: '#8b3bc0', borderColor: '#8b3bc0' }
                    : undefined
                }
                onMouseEnter={plan.popular ? (e) => {
                  e.currentTarget.style.backgroundColor = '#331659'
                } : undefined}
                onMouseLeave={plan.popular ? (e) => {
                  e.currentTarget.style.backgroundColor = '#8b3bc0'
                } : undefined}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-[#b1a2d6] text-sm">
            Disfruta todas las funciones sin restricciones durante 5 días.<br />
            Luego, podrás suscribirte para seguir accediendo a todo.
          </p>
        </div>
      </div>
    </section>
  );
}
