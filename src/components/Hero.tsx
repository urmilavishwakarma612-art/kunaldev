import { Button } from "@/components/ui/button";
import { ArrowRight, Copy } from "lucide-react";
import { toast } from "sonner";
import codexkunalLogo from "@/assets/codexkunal-logo.png";
import kunalProfile from "@/assets/kunal-profile.jpg";

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
      
      {/* Floating orbs */}
      <div className="absolute top-1/3 left-10 w-2 h-2 rounded-full bg-primary animate-float opacity-60" />
      <div className="absolute top-1/2 right-16 w-3 h-3 rounded-full bg-accent animate-float opacity-50" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-primary animate-float opacity-40" style={{ animationDelay: "2s" }} />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Profile Picture with animated border */}
        <div className="relative mx-auto mb-8 animate-fade-in group">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
            {/* Animated gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-spin p-1">
              <div className="w-full h-full rounded-full bg-background" />
            </div>
            {/* Profile image */}
            <div className="absolute inset-2 rounded-full overflow-hidden">
              <img 
                src={kunalProfile} 
                alt="Kunal - Web Developer" 
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl animate-pulse-slow -z-10" />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-in hover:scale-105 transition-transform cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm text-muted-foreground">
            Open for freelance projects
          </span>
          <ArrowRight size={14} className="text-muted-foreground animate-bounce-x" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-delay-1">
          I craft ideas into
          <br />
          <span className="font-display italic text-gradient-accent animate-shimmer">
            futuristic websites
          </span>
        </h1>

        {/* Subtitle with logo */}
        <div className="flex items-center justify-center gap-3 mb-10 animate-fade-in-delay-2">
          <span className="text-lg md:text-xl text-muted-foreground">
            Hello, I'm Kunal
          </span>
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center animate-pulse-slow">
            <img 
              src={codexkunalLogo} 
              alt="CODExKUNAL" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain logo-adaptive animate-spin-slow"
            />
          </div>
          <span className="text-lg md:text-xl text-muted-foreground">
            a Web Developer
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-3">
          <Button variant="hero" size="lg" className="group relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Let's Connect
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          <Button variant="glass" size="lg" onClick={copyEmail} className="group hover:border-primary/50 transition-colors">
            <Copy size={16} className="group-hover:rotate-12 transition-transform" />
            codexkunal.dev@gmail.com
          </Button>
        </div>
      </div>
    </section>
  );
};
