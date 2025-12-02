"use client"

const projects = [
  {
    title: "Evento Platform",
    category: "Web Experience",
    description: "Event management platform for college tech fests. Registration, scheduling, and live updates.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    image: "/tech-event-website-dark-theme.jpg",
    link: "#",
  },
  {
    title: "DevPath Dashboard",
    category: "Product / MVP",
    description: "Learning roadmap tracker for developers. Visual progress, resource links, and community goals.",
    tech: ["React", "Firebase", "Chart.js"],
    image: "/developer-dashboard-dark-theme.jpg",
    link: "#",
  },
  {
    title: "LocalCart Starter",
    category: "E-commerce",
    description: "Minimal storefront template for small Indian brands. Built for storytelling, not just products.",
    tech: ["Next.js", "Stripe", "Sanity"],
    image: "/minimal-ecommerce-website-dark-theme.jpg",
    link: "#",
  },
  {
    title: "RF Signal Visualizer",
    category: "IoT Tool",
    description: "Real-time RF signal visualization tool for hobbyist projects. Data processing and clean UI.",
    tech: ["Python", "React", "WebSocket"],
    image: "/signal-visualization-dashboard-dark-theme.jpg",
    link: "#",
  },
]

export function WorkSection() {
  return (
    <section id="work" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-medium text-accent-warm uppercase tracking-wider mb-4 block">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">Things I've shipped</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md lg:text-right">
            A mix of client work and personal experiments. Each one taught me something new.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden rounded-2xl border border-border ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="aspect-[3/2] bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className={`space-y-4 ${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                <span className="text-sm text-accent-warm font-medium">{project.category}</span>
                <h3 className="text-3xl font-semibold text-foreground group-hover:text-accent-warm transition-colors">
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">{project.description}</p>
                <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
