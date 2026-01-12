export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-accent/20 px-4 py-2 rounded-full mb-6">
          <span className="text-accent font-semibold text-sm">Professional Financial Advisory</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Expert Investment Advisory & Financial Consultancy
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-balance">
          Navigate the markets with confidence. Our team of seasoned advisors provides strategic investment guidance
          tailored to your financial goals.
        </p>

        <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition inline-block">
          Get Started Today
        </button>
      </div>
    </section>
  )
}
