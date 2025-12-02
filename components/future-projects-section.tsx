const projects = [
  {
    status: "Building",
    statusColor: "bg-green-500",
    tag: "E-commerce",
    name: "ucreates.store",
    description:
      "A minimal e-commerce starter for small Indian brands and creators. Not just another product grid — focused on storytelling, content blocks for reels, and tutorials that help customers connect with products.",
    progress: 65,
  },
  {
    status: "Exploring",
    statusColor: "bg-yellow-500",
    tag: "Community",
    name: "Project Ripple",
    description:
      "What if ideas could ripple outward? A concept around how people share, support, and build on each other's work. Part community, part tool, part playground. Being designed in public through prototypes and reels.",
    progress: 25,
  },
  {
    status: "Active",
    statusColor: "bg-accent-warm",
    tag: "Experiments",
    name: "ucreates labs",
    description:
      "Small tools, UI kits, and utilities that start as personal needs and evolve into shared products. Includes IoT dashboards, RF visual tools, and design system components. Always shipping something new.",
    progress: 80,
  },
]

export function FutureProjectsSection() {
  return (
    <section id="future" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-sm font-medium text-accent-warm uppercase tracking-wider mb-4 block">Roadmap</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
              What I'm building next
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed lg:text-right">
            Ideas in motion. Some close to launch, some still taking shape. Building in public, one commit at a time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl border border-border bg-card hover:border-accent-warm/50 transition-all duration-300 flex flex-col"
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${project.statusColor}`} />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {project.status}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">{project.tag}</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent-warm transition-colors mb-4">
                {project.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-1">{project.description}</p>

              {/* Progress bar */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">{project.progress}%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent-warm rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
