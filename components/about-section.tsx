const journey = [
  { year: "2022", event: "Started learning web development" },
  { year: "2023", event: "Built first client projects & event websites" },
  { year: "2024", event: "Launched ucreates identity & started reels" },
  { year: "2025", event: "Scaling to products & e-commerce" },
]

const tools = ["Next.js", "React", "TypeScript", "Tailwind", "Figma", "Supabase", "Vercel", "After Effects"]

const values = [
  {
    title: "Clear copy > buzzwords",
    description: "If you can't explain it simply, you don't understand it well enough.",
  },
  { title: "Performance matters", description: "Sites should work great on mid-range phones, not just MacBook Pros." },
  { title: "Process > polish", description: "Showing the journey is more valuable than just the final result." },
  { title: "Tech should feel human", description: "Making technical concepts approachable, one reel at a time." },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Main intro - spans 7 cols */}
          <div className="lg:col-span-7 p-8 md:p-12 rounded-3xl border border-border bg-card">
            <span className="text-sm font-medium text-accent-warm uppercase tracking-wider mb-6 block">About</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">Hey, I'm Umesh.</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Data science student at GITAM Hyderabad, but I spend most of my time building for the web. I've worked
                on event platforms, community websites, tech workshops, and promotional campaigns.
              </p>
              <p>
                ucreates is my creative identity — a small studio where I combine development, design thinking, product
                building, and content creation. It's where I ship things publicly and learn out loud.
              </p>
              <p>
                When I'm not coding, you'll find me experimenting with IoT projects, making reels, or figuring out how
                to make complex tech feel simple.
              </p>
            </div>
          </div>

          {/* Journey timeline - spans 5 cols */}
          <div className="lg:col-span-5 p-8 rounded-3xl border border-border bg-card">
            <h3 className="text-lg font-semibold text-foreground mb-6">The journey so far</h3>
            <div className="space-y-4">
              {journey.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent-warm" />
                    {index !== journey.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-6">
                    <span className="text-sm font-mono text-accent-warm">{item.year}</span>
                    <p className="text-foreground">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools - spans 5 cols */}
          <div className="lg:col-span-5 p-8 rounded-3xl border border-border bg-card">
            <h3 className="text-lg font-semibold text-foreground mb-6">Tools I use daily</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Values - spans 7 cols */}
          <div className="lg:col-span-7 p-8 md:p-12 rounded-3xl border border-border bg-card">
            <h3 className="text-lg font-semibold text-foreground mb-6">Things I believe in</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent-warm/10 flex items-center justify-center text-xs font-mono text-accent-warm">
                      {index + 1}
                    </span>
                    <h4 className="font-medium text-foreground">{value.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-9">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
