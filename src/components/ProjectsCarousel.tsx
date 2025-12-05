import { useState, useRef, useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  problemStatement?: string;
  solution?: string;
  tags: string[];
  color: string;
  features: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
  speed?: number;
  gap?: number;
  cardWidth?: number;
}

// 3D Tilt Card Component
const TiltCard = ({
  project,
  onSelect,
  cardWidth,
}: {
  project: Project;
  onSelect: () => void;
  cardWidth: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Motion values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform mouse position to rotation
  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);

  // Spring for smooth movement
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="flex-shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-2xl"
      style={{
        width: cardWidth,
        perspective: 1000,
        transformStyle: "preserve-3d",
        rotateX: prefersReducedMotion ? 0 : springRotateX,
        rotateY: prefersReducedMotion ? 0 : springRotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
      onKeyDown={(e) => e.key === "Enter" && onSelect()}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title} project details`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.color} glass overflow-hidden relative group`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="p-6 h-full flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
            <p className="text-sm text-foreground/70 text-center line-clamp-3">
              {project.description}
            </p>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-bold text-foreground mb-1">{project.title}</h3>
            <div className="flex flex-wrap gap-1">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-medium bg-accent/20 text-accent rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Click indicator */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-xs text-foreground">→</span>
        </div>
      </div>
    </motion.div>
  );
};

// Project Preview Modal
const ProjectModal = ({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass border-border/50">
        {/* Header with Title */}
        <DialogHeader className="pb-4 border-b border-border/30">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {project.description}
          </DialogDescription>
        </DialogHeader>


        {/* Content Section */}
        <div className="space-y-6 mt-6">
          {/* Quick Links */}
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button asChild size="lg" className="gap-2">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  View Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              </Button>
            )}
          </div>

          {/* Problem & Solution Grid */}
          {(project.problemStatement || project.solution) && (
            <div className="grid md:grid-cols-2 gap-4">
              {project.problemStatement && (
                <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20 space-y-2">
                  <h4 className="text-xs font-semibold text-destructive uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    Problem Statement
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>
              )}
              {project.solution && (
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-2">
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Solution
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-px bg-accent" />
              Key Features
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.features.map((feature, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/30 transition-colors"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground/80 leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-px bg-accent" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-accent/10 to-primary/10 text-foreground border border-accent/20 rounded-full hover:border-accent/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Main Carousel Component
export const ProjectsCarousel = ({
  projects,
  speed = 30,
  gap = 24,
  cardWidth = 350,
}: ProjectsCarouselProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Duplicate projects for seamless loop
  const duplicatedProjects = [...projects, ...projects];
  const totalWidth = duplicatedProjects.length * (cardWidth + gap);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setIsPaused(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setIsPaused(false);
  };

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!containerRef.current || isModalOpen) return;
    
    const scrollAmount = cardWidth + gap;
    if (e.key === "ArrowLeft") {
      containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (e.key === "ArrowRight") {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, [cardWidth, gap, isModalOpen]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Left Navigation Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg hover:scale-110"
        aria-label="Previous project"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg hover:scale-110"
        aria-label="Next project"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Carousel Container */}
      <motion.div
        ref={containerRef}
        className="flex cursor-grab active:cursor-grabbing overflow-x-auto scrollbar-hide"
        style={{ gap }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => !isModalOpen && setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => !isModalOpen && setIsPaused(false)}
        drag="x"
        dragConstraints={{ left: -totalWidth / 2, right: 0 }}
        dragElastic={0.1}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        animate={
          isPaused || isDragging
            ? {}
            : {
                x: [-totalWidth / 2, 0],
              }
        }
        transition={
          isPaused || isDragging
            ? {}
            : {
                x: {
                  duration: speed,
                  repeat: Infinity,
                  ease: "linear",
                },
              }
        }
      >
        {duplicatedProjects.map((project, index) => (
          <TiltCard
            key={`${project.id}-${index}`}
            project={project}
            onSelect={() => !isDragging && handleProjectSelect(project)}
            cardWidth={cardWidth}
          />
        ))}
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />

      {/* Instructions */}
      <p className="text-center text-xs text-muted-foreground mt-4 opacity-60">
        Use arrows to navigate • Click to view details • Drag to scroll
      </p>
    </div>
  );
};

export default ProjectsCarousel;
