import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, Instagram, MessageCircle, Video, FileText } from "lucide-react";
import codexkunalLogo from "@/assets/codexkunal-logo.png";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

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
    url: "https://calendly.com/codexkunal-dev/30min",
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

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBookOptions, setShowBookOptions] = useState(false);

  const handleOption = (option: typeof contactOptions[0]) => {
    if (option.action === "scroll-contact") {
      setShowBookOptions(false);
      setIsMobileMenuOpen(false);
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else if (option.url) {
      window.open(option.url, "_blank", "noopener,noreferrer");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? "top-2" : "top-6"
      }`}
    >
      {/* Desktop Navigation */}
      <div className={`hidden md:flex items-center gap-1 glass-nav rounded-full px-2 py-2 ${isScrolled ? 'glass-nav-scrolled' : ''}`}>
        <a href="#home" className="flex items-center gap-2 px-3">
          <img 
            src={codexkunalLogo} 
            alt="CODExKUNAL" 
            className="w-7 h-7 object-contain logo-adaptive"
          />
        </a>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="nav-link-glow px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full"
          >
            {item.name}
          </a>
        ))}
        <div className="relative">
          <Button 
            variant="hero" 
            size="sm" 
            className="ml-2"
            onClick={() => setShowBookOptions(!showBookOptions)}
          >
            Book a Call
          </Button>
          {showBookOptions && (
            <div className="absolute top-full right-0 mt-2 w-64 z-50 glass-strong rounded-xl p-3 border border-border/50 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-muted-foreground">Choose an option</span>
                <button
                  onClick={() => setShowBookOptions(false)}
                  className="p-1 hover:bg-background/50 rounded-full transition-colors"
                >
                  <X className="h-3 w-3 text-muted-foreground" />
                </button>
              </div>
              <div className="space-y-1">
                {contactOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => handleOption(option)}
                    className="w-full flex items-center gap-2 p-2 rounded-lg bg-background/30 hover:bg-background/50 border border-border/30 hover:border-primary/50 transition-all group text-left"
                  >
                    <div className={`p-1.5 rounded-lg bg-gradient-to-br ${option.color}`}>
                      <option.icon className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {option.name}
                      </span>
                      {option.note && (
                        <p className="text-[10px] text-muted-foreground">{option.note}</p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <ThemeToggle />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-2">
        <a href="#home" className="glass-nav p-2 rounded-full">
          <img 
            src={codexkunalLogo} 
            alt="CODExKUNAL" 
            className="w-7 h-7 object-contain logo-adaptive"
          />
        </a>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`glass-nav p-3 rounded-full ${isScrolled ? 'glass-nav-scrolled' : ''}`}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 glass-nav glass-nav-scrolled rounded-2xl p-4 min-w-[200px] animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="nav-link-glow px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg"
                >
                  {item.name}
                </a>
              ))}
              <div className="relative">
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="mt-2 w-full"
                  onClick={() => setShowBookOptions(!showBookOptions)}
                >
                  Book a Call
                </Button>
                {showBookOptions && (
                  <div className="mt-2 w-full glass-strong rounded-xl p-3 border border-border/50 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="space-y-1">
                      {contactOptions.map((option) => (
                        <button
                          key={option.name}
                          onClick={() => handleOption(option)}
                          className="w-full flex items-center gap-2 p-2 rounded-lg bg-background/30 hover:bg-background/50 border border-border/30 hover:border-primary/50 transition-all group text-left"
                        >
                          <div className={`p-1.5 rounded-lg bg-gradient-to-br ${option.color}`}>
                            <option.icon className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {option.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-center mt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};