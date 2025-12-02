import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import codexkunalLogo from "@/assets/codexkunal-logo.png";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/kunalvish08" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/kunal-vishwakarma-975b26326/" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/Kunal_Vish_08" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/code_x_kunal_dev/" },
  { name: "Email", icon: Mail, href: "mailto:codexkunal.dev@gmail.com" },
];

const footerLinks = {
  general: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
  ],
  specifics: [
    { name: "Skills", href: "#skills" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
  more: [
    { name: "Blog", href: "#" },
    { name: "Book a Call", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Social */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={codexkunalLogo} 
                alt="CODExKUNAL Logo" 
                className="w-12 h-12 object-contain invert dark:invert-0 transition-all"
                style={{ filter: 'var(--logo-filter, invert(1))' }}
              />
              <span className="text-xl font-bold">
                <span className="text-gradient">CODE</span>x<span className="text-primary">KUNAL</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Building futuristic digital experiences that matter.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-full flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              General
            </h3>
            <ul className="space-y-3">
              {footerLinks.general.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Specifics
            </h3>
            <ul className="space-y-3">
              {footerLinks.specifics.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              More
            </h3>
            <ul className="space-y-3">
              {footerLinks.more.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CODExKUNAL. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with passion & React
          </p>
        </div>
      </div>
    </footer>
  );
};
