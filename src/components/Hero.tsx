import { Button } from "@/components/ui/button";
import { ArrowRight, Copy } from "lucide-react";
import { toast } from "sonner";
import codexkunalLogo from "@/assets/codexkunal-logo.png";

export const Hero = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("codexkunal.dev@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      {/* Horizon glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="px-2 py-0.5 bg-primary rounded-full text-xs font-medium text-primary-foreground">
            Available
          </span>
          <span className="text-sm text-muted-foreground">
            Open for freelance projects
          </span>
          <ArrowRight size={14} className="text-muted-foreground" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-delay-1">
          I craft ideas into
          <br />
          <span className="font-display italic text-gradient-accent">
            futuristic websites
          </span>
        </h1>

        {/* Subtitle with avatar */}
        <div className="flex items-center justify-center gap-3 mb-10 animate-fade-in-delay-2">
          <span className="text-lg md:text-xl text-muted-foreground">
            Hello, I'm Kunal
          </span>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
              <img 
                src={codexkunalLogo} 
                alt="CODExKUNAL" 
                className="w-8 h-8 object-contain logo-adaptive"
              />
            </div>
          </div>
          <span className="text-lg md:text-xl text-muted-foreground">
            a Web Developer
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-3">
          <Button variant="hero" size="lg" className="group">
            Let's Connect
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="glass" size="lg" onClick={copyEmail} className="group">
            <Copy size={16} />
            codexkunal.dev@gmail.com
          </Button>
        </div>
      </div>
    </section>
  );
};
