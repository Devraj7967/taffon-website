import { TrendingUp, Target, DollarSign, Shield } from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Stock Market Analysis",
    description: "In-depth market research and stock selection strategies based on fundamental analysis.",
  },
  {
    icon: Target,
    title: "Portfolio Management",
    description: "Customized portfolio construction and rebalancing for optimal returns and risk management.",
  },
  {
    icon: DollarSign,
    title: "Wealth Planning",
    description: "Comprehensive wealth management strategies aligned with your long-term financial objectives.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Strategic asset allocation and hedging techniques to protect your investments.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive financial advisory solutions for informed investors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition">
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
