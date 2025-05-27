"use client"

export default function PerformanceMetrics() {
  const metrics = [
    {
      title: "Rendimiento General",
      value: "+127.8%",
      change: "+12.3%",
      period: "Últimos 12 meses",
      color: "green",
      icon: "📈",
    },
    {
      title: "Win Rate Promedio",
      value: "73.2%",
      change: "+2.1%",
      period: "Todas las estrategias",
      color: "blue",
      icon: "🎯",
    },
    {
      title: "Sharpe Ratio",
      value: "2.84",
      change: "+0.15",
      period: "Ajustado por riesgo",
      color: "purple",
      icon: "⚖️",
    },
    {
      title: "Máximo Drawdown",
      value: "-8.2%",
      change: "-1.1%",
      period: "Peor escenario",
      color: "red",
      icon: "📉",
    },
  ]

  const monthlyReturns = [
    { month: "Ene", return: 8.2 },
    { month: "Feb", return: -2.1 },
    { month: "Mar", return: 12.5 },
    { month: "Abr", return: 6.8 },
    { month: "May", return: 15.3 },
    { month: "Jun", return: -4.2 },
    { month: "Jul", return: 9.7 },
    { month: "Ago", return: 11.2 },
    { month: "Sep", return: -1.8 },
    { month: "Oct", return: 14.6 },
    { month: "Nov", return: 7.9 },
    { month: "Dic", return: 10.1 },
  ]

  const topStrategies = [
    { name: "Golden Cross Breakout", return: "+18.7%", trades: 45, winRate: "78%" },
    { name: "Bollinger Band Squeeze", return: "+16.2%", trades: 23, winRate: "76%" },
    { name: "MACD Divergence Hunter", return: "+14.9%", trades: 38, winRate: "74%" },
    { name: "Fibonacci Retracement", return: "+12.3%", trades: 67, winRate: "72%" },
    { name: "Support Resistance", return: "+11.8%", trades: 52, winRate: "69%" },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      green: "from-green-500 to-emerald-500 text-green-400",
      blue: "from-blue-500 to-cyan-500 text-blue-400",
      purple: "from-purple-500 to-violet-500 text-purple-400",
      red: "from-red-500 to-pink-500 text-red-400",
    }
    return colors[color as keyof typeof colors] || colors.green
  }

  return (
    <section className="bg-zinc-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Métricas de <span className="text-purple-400">Rendimiento</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Resultados reales de nuestras estrategias basados en backtesting extensivo y trading en vivo.
              Transparencia total en cada métrica de rendimiento.
            </p>
          </div>

          {/* Main Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-black rounded-xl p-6 border border-zinc-800 hover:border-zinc-600 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getColorClasses(metric.color).split(" ")[0]} ${getColorClasses(metric.color).split(" ")[1]} flex items-center justify-center text-xl`}
                  >
                    {metric.icon}
                  </div>
                  <span
                    className={`text-sm font-medium ${metric.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}
                  >
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{metric.title}</h3>
                <div className={`text-3xl font-bold mb-2 ${getColorClasses(metric.color).split(" ")[2]}`}>
                  {metric.value}
                </div>
                <p className="text-gray-500 text-sm">{metric.period}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Monthly Returns Chart */}
            <div className="bg-black rounded-xl p-6 border border-zinc-800">
              <h3 className="text-xl font-bold mb-6">📊 Retornos Mensuales 2024</h3>
              <div className="space-y-3">
                {monthlyReturns.map((data, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm w-8">{data.month}</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-zinc-800 rounded-full h-2 relative overflow-hidden">
                        <div
                          className={`h-full rounded-full ${data.return > 0 ? "bg-green-500" : "bg-red-500"}`}
                          style={{ width: `${Math.abs(data.return) * 5}%` }}
                        ></div>
                      </div>
                    </div>
                    <span
                      className={`text-sm font-medium w-12 text-right ${
                        data.return > 0 ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {data.return > 0 ? "+" : ""}
                      {data.return}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Performing Strategies */}
            <div className="bg-black rounded-xl p-6 border border-zinc-800">
              <h3 className="text-xl font-bold mb-6">🏆 Top 5 Estrategias 2024</h3>
              <div className="space-y-4">
                {topStrategies.map((strategy, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{strategy.name}</h4>
                        <p className="text-gray-400 text-xs">
                          {strategy.trades} trades • {strategy.winRate} win rate
                        </p>
                      </div>
                    </div>
                    <div className="text-green-400 font-bold text-sm">{strategy.return}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Risk Metrics */}
          <div className="mt-12 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">⚠️ Gestión de Riesgo</h3>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Todas nuestras estrategias implementan estrictos controles de riesgo. Nunca arriesgamos más del 2% del
                capital por operación y mantenemos un drawdown máximo del 10%.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2%</div>
                <div className="text-gray-400 text-sm">Riesgo máximo por trade</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">10%</div>
                <div className="text-gray-400 text-sm">Drawdown máximo permitido</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">1:2.5</div>
                <div className="text-gray-400 text-sm">Risk/Reward mínimo</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              🚀 Comenzar a Operar con Estas Métricas
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
