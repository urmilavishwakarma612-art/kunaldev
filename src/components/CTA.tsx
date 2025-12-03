import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, MessageCircle, Video, FileText, X } from "lucide-react";

const contactOptions = [
  {
    name: "DM on Instagram",
    url: "https://instagram.com/code_x_kunal_dev",
    icon: Instagram,
    color: "from-pink-500 to-purple-500",
  },
  {
    name: "DM on WhatsApp",
    url: "https://wa.me/917985177849",
    icon: MessageCircle,
    color: "from-green-500 to-green-600",
  },
  {
    name: "Schedule a Meet",
    url: "https://calendly.com",
    icon: Video,
    color: "from-blue-500 to-cyan-500",
    note: "Google Meet / Zoom",
  },
  {
    name: "Fill a Form",
    icon: FileText,
    color: "from-primary to-accent",
    action: "scroll-contact",
  },
];

export const CTA = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOption = (option: typeof contactOptions[0]) => {
    if (option.action === "scroll-contact") {
      setShowOptions(false);
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else if (option.url) {
      window.open(option.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated badge */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-2 border-primary animate-spin-slow flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path
                    id="circle"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="text-[10px] fill-primary uppercase tracking-widest">
                  <textPath href="#circle">
                    • OPEN TO WORK • OPEN TO WORK{" "}
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl">✦</span>
            </div>
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
          From Concept to <span className="font-black">Creation</span>
          <br />
          Let's Make It <span className="font-black text-gradient-accent">Happen!</span>
        </h2>

        <div className="relative inline-block mt-8">
          <Button 
            variant="hero" 
            size="lg" 
            className="group"
            onClick={() => setShowOptions(!showOptions)}
          >
            Book a Call
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Button>

          {/* Options Dropdown */}
          {showOptions && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 z-50 glass-strong rounded-xl p-4 border border-border/50 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-muted-foreground">Choose an option</span>
                <button
                  onClick={() => setShowOptions(false)}
                  className="p-1 hover:bg-background/50 rounded-full transition-colors"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="space-y-2">
                {contactOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => handleOption(option)}
                    className="w-full flex items-center gap-3 p-3 rounded-lg bg-background/30 hover:bg-background/50 border border-border/30 hover:border-primary/50 transition-all group text-left"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${option.color}`}>
                      <option.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {option.name}
                      </span>
                      {option.note && (
                        <p className="text-xs text-muted-foreground">{option.note}</p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-12">
          <p className="text-lg font-medium mb-2">
            I'm available for full-time roles & freelance projects.
          </p>
          <p className="text-muted-foreground">
            I thrive on crafting dynamic web applications, and
            <br />
            delivering seamless user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};
