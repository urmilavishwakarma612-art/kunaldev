import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "RAHI",
    description: "AI-powered emergency platform that enables victims to report highway incidents in under 20 seconds with GPS auto-location and offline support.",
    tags: ["React", "TypeScript", "Supabase", "Leaflet.js", "PWA"],
    color: "from-red-500/20 to-orange-500/20",
    features: [
      "One-click emergency reporting with voice-to-text",
      "AI severity analysis & real-time volunteer routing",
      "Offline-first PWA with incident queue sync",
    ],
  },
  {
    id: 2,
    title: "CryptoVerse",
    description: "A cryptocurrency tracking platform with live prices, portfolio management, and news aggregation.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "WebSocket"],
    color: "from-blue-500/20 to-cyan-500/20",
    features: [
      "Real-time price updates via WebSocket",
      "Secure authentication with JWT",
      "Optimized for mobile devices",
    ],
  },
  {
    id: 3,
    title: "StartupHub",
    description: "A platform for early-stage entrepreneurs to pitch ideas and connect with investors.",
    tags: ["React", "Supabase", "Stripe", "Tailwind CSS"],
    color: "from-emerald-500/20 to-teal-500/20",
    features: [
      "Integrated payment processing",
      "Built admin panel for content moderation",
      "SEO optimized for organic growth",
    ],
  },
];

export const Projects = () => {
  return (
    <section id="work" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground tracking-widest uppercase">
            Featured Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Curated <span className="font-display italic text-gradient-accent">work</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Project Preview */}
              <div
                className={`relative group ${index % 2 === 1 ? "md:col-start-2" : ""}`}
              >
                <div
                  className={`aspect-video rounded-2xl bg-gradient-to-br ${project.color} p-8 glass overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50" />
                  <div className="relative h-full flex flex-col justify-between">
                    <p className="text-sm text-foreground/80 max-w-md">
                      {project.description}
                    </p>
                    <ArrowUpRight
                      size={32}
                      className="absolute top-4 right-4 text-foreground/60 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-0.5 bg-accent" />
                  <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                </div>

                <p className="text-muted-foreground mb-6">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-accent mt-1">✦</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium glass rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
