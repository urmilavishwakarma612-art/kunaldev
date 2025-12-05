import { ProjectsCarousel } from "./ProjectsCarousel";
import rahiImg from "@/assets/rahi.png";
import codeCommunityImg from "@/assets/code-community.png";
import suvarnaKitchensImg from "@/assets/suvarna-kitchens.png";

const projects = [
  {
    id: 1,
    title: "RAHI",
    description: "AI-powered emergency platform that enables victims to report highway incidents in under 20 seconds with GPS auto-location and offline support.",
    problemStatement: "Every year, thousands of highway accident victims lose their lives due to delayed emergency response. Traditional emergency systems require lengthy calls, manual location sharing, and lack coordination between responders.",
    solution: "RAHI provides a one-tap emergency reporting system with automatic GPS location, voice-to-text incident description, and AI-powered severity analysis that instantly routes the nearest available volunteers to the scene.",
    tags: ["React", "TypeScript", "Supabase", "Leaflet.js", "PWA"],
    color: "from-red-500/20 to-orange-500/20",
    features: [
      "One-click emergency reporting with voice-to-text",
      "AI severity analysis & real-time volunteer routing",
      "Offline-first PWA with incident queue sync",
      "Real-time location tracking with Leaflet.js",
      "Multi-language support for accessibility",
    ],
    image: rahiImg,
    liveUrl: "https://rahi-rescue.vercel.app",
    githubUrl: "https://github.com/urmilavishwakarma612-art/rahi-guardian",
  },
  {
    id: 2,
    title: "CodeCommunity",
    description: "Gamified DSA & development platform combining Striver's A2Z Sheet, community forums, streaks, XP badges & leaderboards in one place.",
    problemStatement: "DSA learners struggle with consistency and motivation. Existing platforms lack gamification elements and community support, leading to high dropout rates among aspiring developers.",
    solution: "CodeCommunity transforms DSA practice into an engaging experience with streaks, XP points, leaderboards, and community forums. It combines Striver's proven A2Z roadmap with social learning features.",
    tags: ["React", "TypeScript", "Supabase", "Zustand", "ShadCN"],
    color: "from-purple-500/20 to-indigo-500/20",
    features: [
      "DSA progress tracker with 531 problems",
      "Streak system, XP & leaderboards for motivation",
      "Community forum & searchable question bank",
      "Personal profile with achievement badges",
      "Topic-wise problem filtering and tracking",
    ],
    image: codeCommunityImg,
    liveUrl: "https://codexkunal.vercel.app",
    githubUrl: "https://github.com/kunalvish08/2856e4ef-b87a-47d8-8597-1832e26085ab",
  },
  {
    id: 3,
    title: "Developer Portfolio",
    description: "A premium, futuristic portfolio with stunning animations, interactive star field background, and seamless user experience.",
    problemStatement: "Most developer portfolios look generic and fail to stand out. They lack personality, interactive elements, and the premium feel that attracts high-value clients.",
    solution: "This portfolio features a custom space-themed design with interactive star fields, 3D card effects, parallax scrolling, and smooth animations that create a memorable, immersive experience.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-cyan-500/20 to-blue-500/20",
    features: [
      "Interactive star field with parallax effects",
      "Scroll-responsive infinite skill marquee",
      "Dark space theme with electric accents",
      "3D tilt card effects on project cards",
      "Responsive design with mobile-first approach",
    ],
  },
  {
    id: 4,
    title: "Suvarna Kitchens",
    description: "A premium restaurant website featuring an elegant dark theme with categorized menu sections for breakfast, lunch, dinner, snacks, desserts, soups, salads, and smoothies.",
    problemStatement: "Small restaurants struggle to showcase their menu effectively online. Generic templates don't capture the essence of their culinary offerings or brand identity.",
    solution: "A custom-designed website with 8 organized menu categories, beautiful food imagery, and an elegant dark theme that reflects the restaurant's premium positioning and improves customer engagement.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    color: "from-amber-500/20 to-red-500/20",
    features: [
      "8 menu categories with beautiful food imagery",
      "Featured recipes showcase with elegant card design",
      "Chef's tips section & contact integration",
      "Mobile-responsive menu navigation",
      "Optimized images for fast loading",
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
