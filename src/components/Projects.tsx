import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import rahiImg from "@/assets/rahi.png";
import codeCommunityImg from "@/assets/code-community.png";

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
    image: rahiImg,
    liveUrl: "https://rahi-rescue.vercel.app",
    githubUrl: "https://github.com/urmilavishwakarma612-art/rahi-guardian",
  },
  {
    id: 2,
    title: "CodeCommunity",
    description: "Gamified DSA & development platform combining Striver's A2Z Sheet, community forums, streaks, XP badges & leaderboards in one place.",
    tags: ["React", "TypeScript", "Supabase", "Zustand", "ShadCN"],
    color: "from-purple-500/20 to-indigo-500/20",
    features: [
      "DSA progress tracker with 531 problems",
      "Streak system, XP & leaderboards for motivation",
      "Community forum & searchable question bank",
    ],
    image: codeCommunityImg,
    liveUrl: "https://codexkunal.vercel.app",
    githubUrl: "https://github.com/kunalvish08/2856e4ef-b87a-47d8-8597-1832e26085ab",
  },
  {
    id: 3,
    title: "Developer Portfolio",
    description: "A premium, futuristic portfolio with stunning animations, interactive star field background, and seamless user experience.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-cyan-500/20 to-blue-500/20",
    features: [
      "Interactive star field with parallax effects",
      "Scroll-responsive infinite skill marquee",
      "Dark space theme with electric accents",
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
                <a
                  href={project.liveUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div
                    className={`aspect-video rounded-2xl bg-gradient-to-br ${project.color} glass overflow-hidden relative`}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="p-8 h-full flex flex-col justify-between">
                        <p className="text-sm text-foreground/80 max-w-md">
                          {project.description}
                        </p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <ArrowUpRight
                      size={32}
                      className="absolute top-4 right-4 text-foreground/60 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </div>
                </a>
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

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium glass rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
