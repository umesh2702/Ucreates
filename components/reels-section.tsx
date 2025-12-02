const reels = [
  { tag: "web dev", title: "Responsive navbar in 60 seconds", views: "12K" },
  { tag: "story", title: "Building the Indian flag with code", views: "8.5K" },
  { tag: "tutorial", title: "Password strength + JWT login flow", views: "6.2K" },
  { tag: "experiment", title: "Roadmap to web dev without the fluff", views: "15K" },
  { tag: "behind scenes", title: "How I built my portfolio in a weekend", views: "4.1K" },
  { tag: "tips", title: "5 VS Code shortcuts you're not using", views: "9.8K" },
]

export function ReelsSection() {
  return (
    <section id="reels" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-sm font-medium text-accent-warm uppercase tracking-wider mb-4 block">Content Lab</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Reels for builders,
            <br className="hidden md:block" /> not just scrollers.
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I post reels about web dev, projects, and experiments. Think of it as a public lab where I test ideas and
              share what I learn — raw, unfiltered, useful.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform self-start"
            >
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
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              Follow @ucreates
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reels.map((reel, index) => (
            <div
              key={index}
              className="group relative aspect-[9/16] rounded-2xl border border-border bg-card overflow-hidden cursor-pointer"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/10 via-muted to-muted/50" />

              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full text-foreground">
                    {reel.tag}
                  </span>
                  <span className="px-2 py-1 text-xs text-muted-foreground bg-background/80 backdrop-blur-sm rounded-full">
                    {reel.views} views
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground leading-snug">{reel.title}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-foreground ml-1"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
