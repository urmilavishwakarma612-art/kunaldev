import { ProjectsCarousel } from "./ProjectsCarousel";
import rahiImg from "@/assets/rahi.png";
import codeCommunityImg from "@/assets/code-community.png";
import suvarnaKitchensImg from "@/assets/suvarna-kitchens.png";

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
  {
    id: 4,
    title: "Suvarna Kitchens",
    description: "A premium restaurant website featuring an elegant dark theme with categorized menu sections for breakfast, lunch, dinner, snacks, desserts, soups, salads, and smoothies.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    color: "from-amber-500/20 to-red-500/20",
    features: [
      "8 menu categories with beautiful food imagery",
      "Featured recipes showcase with elegant card design",
      "Chef's tips section & contact integration",
    ],
    image: suvarnaKitchensImg,
    liveUrl: "https://kunalresto.ccbp.tech",
  },
];

export const Projects = () => {
  return (
    <section id="work" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground tracking-widest uppercase">
            Featured Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Curated <span className="font-display italic text-gradient-accent">work</span>
          </h2>
        </div>

        {/* Projects Carousel */}
        <ProjectsCarousel 
          projects={projects} 
          speed={40} 
          gap={24} 
          cardWidth={380} 
        />
      </div>
    </section>
  );
};
