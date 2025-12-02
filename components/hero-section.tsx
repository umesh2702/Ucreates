"use client"

export function HeroSection() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="relative">
          {/* Floating status indicator */}
          <div className="absolute -top-8 right-0 hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-warm opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-warm"></span>
            </span>
            Open for projects
          </div>

          {/* Main headline area */}
          <div className="space-y-8 max-w-4xl">
            <div className="inline-flex items-center gap-3 text-sm">
              <span className="px-3 py-1 rounded-full border border-accent-warm/30 bg-accent-warm/5 text-accent-warm font-medium">
                ucreates
              </span>
              <span className="text-muted-foreground">Hyderabad, India</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-foreground text-balance">
              I build things for the web
              <span className="block text-muted-foreground">and document the journey.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Umesh here. Data science student by day, indie builder by night. I create websites, ship small products,
              and make tech reels that actually teach something.
            </p>
          </div>

          {/* Action row with stats */}
          <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScroll("#contact")}
                className="px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform"
              >
                Start a project
              </button>
              <button
                onClick={() => handleScroll("#reels")}
                className="px-8 py-4 border border-border rounded-full font-medium text-foreground hover:border-accent-warm hover:text-accent-warm transition-colors"
              >
                Watch reels
              </button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 text-sm">
              <div>
                <div className="text-2xl font-semibold text-foreground">15+</div>
                <div className="text-muted-foreground">Projects shipped</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-foreground">50K+</div>
                <div className="text-muted-foreground">Reel views</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-foreground">2+</div>
                <div className="text-muted-foreground">Years building</div>
              </div>
            </div>
          </div>

          {/* Currently working on strip */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Currently creating
              </span>
              <div className="flex flex-wrap gap-3">
                {["Web experiences", "MVP tools", "Dev reels", "E-commerce starter"].map((item) => (
                  <span key={item} className="px-4 py-2 rounded-full bg-muted text-sm text-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
