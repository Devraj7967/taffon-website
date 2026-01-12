export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Taffon Advisory</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Taffon Advisory Consultancy LLP is a leading financial consultancy dedicated to providing expert stock
              market advice and wealth management solutions. With years of market experience, our team specializes in
              identifying investment opportunities and creating tailored strategies for our clients.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We believe in empowering investors with knowledge, providing transparent guidance, and delivering
              consistent results that align with individual financial goals.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Expert Team</h3>
                  <p className="text-muted-foreground">Seasoned financial advisors with deep market expertise</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Personalized Approach</h3>
                  <p className="text-muted-foreground">Customized strategies based on your financial profile</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Transparent Guidance</h3>
                  <p className="text-muted-foreground">Clear communication and ethical advisory practices</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/financial-advisor-office.png" alt="Office" className="rounded-lg" />
            <img src="/team-meeting-discussion-strategy.jpg" alt="Team" className="rounded-lg" />
            <img src="/business-growth-charts-analysis.jpg" alt="Growth" className="rounded-lg" />
            <img src="/financial-planning-consultation.jpg" alt="Planning" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
