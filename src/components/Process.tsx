import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Sparkles, RefreshCw, Rocket, HandshakeIcon } from "lucide-react";

const steps = [
  {
    day: "Day 1",
    time: "Morning",
    icon: Phone,
    title: "Discovery Call",
    subtitle: "Requirement Mapping",
    description: "15-20 min call to understand your vision, design style, functionality needs, target audience, and brand identity.",
    deliverables: ["Idea clarity", "Structure outline", "Design direction locked"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    day: "Day 1-2",
    time: "Development",
    icon: Sparkles,
    title: "AI-Powered Design",
    subtitle: "3D + Full Development",
    description: "Building premium UI/UX with 3D interactions using cutting-edge AI tools and modern frameworks.",
    deliverables: ["Live preview link", "Real-time updates", "3D components"],
    color: "from-blue-500 to-purple-500",
  },
  {
    day: "Day 2",
    time: "Evening",
    icon: RefreshCw,
    title: "Revisions",
    subtitle: "Final Polishing",
    description: "Content adjustments, animation tuning, color corrections, and SEO optimization with same-day turnaround.",
    deliverables: ["Unlimited revisions", "Animation tuning", "SEO basics"],
    color: "from-purple-500 to-pink-500",
  },
  {
    day: "Day 3",
    time: "Morning",
    icon: Rocket,
    title: "Deployment",
    subtitle: "Custom Domain Setup",
    description: "Full deployment with custom domain mapping, DNS setup, SSL certificate, and speed optimization.",
    deliverables: ["Live website", "Custom domain", "Secure hosting"],
    color: "from-pink-500 to-red-500",
  },
  {
    day: "Day 3",
    time: "Evening",
    icon: HandshakeIcon,
    title: "Handover",
    subtitle: "Training + 7 Days Support",
    description: "Admin access, tutorial video, backup, and 7 days of free assistance for any small fixes.",
    deliverables: ["Full control", "Video guide", "Ongoing support"],
    color: "from-red-500 to-orange-500",
  },
];

export const Process = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="process" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            My Process
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Idea to Delivery</span> in 72 Hours
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AI-powered premium web design + 3D experience + full deployment with custom domain
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/50 transform md:-translate-x-1/2" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`relative flex items-center mb-12 md:mb-16 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } transition-all duration-700`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-20">
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-primary/30`}>
                    <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </div>
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                  <div className="glass p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
                    {/* Day badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-bold`}>
                        {step.day}
                      </span>
                      <span className="text-muted-foreground text-sm">{step.time}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1 group-hover:text-gradient transition-all duration-300">
                      {step.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">{step.subtitle}</p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((item, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                        >
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
            <Rocket className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">Ready to launch your project in 72 hours?</span>
          </div>
        </div>
      </div>
    </section>
  );
};
