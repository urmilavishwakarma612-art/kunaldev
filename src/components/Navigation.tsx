import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import codexkunalLogo from "@/assets/codexkunal-logo.png";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <Button variant="hero" size="sm" className="ml-2">
          Book a Call
        </Button>
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
              <Button variant="hero" size="sm" className="mt-2">
                Book a Call
              </Button>
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