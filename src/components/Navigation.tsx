import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Testimonials", href: "#testimonials" },
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
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-white/10"
          >
            {item.name}
          </a>
        ))}
        <Button variant="hero" size="sm" className="ml-2">
          Book a Call
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
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
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-white/10"
                >
                  {item.name}
                </a>
              ))}
              <Button variant="hero" size="sm" className="mt-2">
                Book a Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
