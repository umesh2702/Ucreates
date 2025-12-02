const services = [
  {
    number: "01",
    label: "Web Experiences",
    title: "Websites that convert, not just exist",
    description:
      "Portfolio sites, landing pages, event platforms, and community hubs. Every site is responsive, lightning-fast, and designed with intention.",
    highlights: ["Next.js & React", "Mobile-first", "SEO optimized"],
  },
  {
    number: "02",
    label: "Products & MVPs",
    title: "From napkin sketch to live product",
    description:
      "Small tools, dashboards, and first versions of your SaaS idea. Built lean so you can validate fast and iterate based on real feedback.",
    highlights: ["Rapid prototyping", "Database setup", "User auth ready"],
  },
  {
    number: "03",
    label: "Content & Reels",
    title: "Launch assets that actually explain",
    description:
      "Short-form videos and micro-pages that introduce your project to the world. Content that connects with builders, not just scrollers.",
    highlights: ["Script to screen", "Dev tutorials", "Product launches"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-sm font-medium text-accent-warm uppercase tracking-wider mb-4 block">
              What I ship
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
              Three things, done well.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed lg:text-right">
            No bloated packages or vague deliverables. Just focused work that moves your project forward.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`group relative p-8 md:p-12 rounded-3xl border border-border bg-card hover:bg-muted/30 transition-all duration-500 ${
                index === 1 ? "lg:ml-12" : index === 2 ? "lg:ml-24" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                {/* Number */}
                <div className="text-6xl md:text-8xl font-bold text-muted/50 group-hover:text-accent-warm/30 transition-colors leading-none">
                  {service.number}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <span className="text-sm text-muted-foreground font-medium">{service.label}</span>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground group-hover:text-accent-warm transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{service.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {service.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs font-medium rounded-full border border-border text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
