import { Check, Zap, Star, Crown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Basic",
    price: "₹5,000",
    icon: Zap,
    description: "Perfect for personal projects & landing pages",
    features: [
      "Single-page website",
      "AI-designed modern frontend",
      "Mobile responsive",
      "Simple contact form",
      "Optional login/signup",
      "Free hosting (Vercel/Netlify)",
      "1–2 days delivery",
      "2 revisions",
    ],
    popular: false,
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderGradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Standard",
    price: "₹10,000",
    icon: Star,
    description: "Ideal for businesses & professionals",
    features: [
      "3–4 pages (Home, About, Projects, Contact)",
      "Frontend + Backend",
      "Login/Signup functionality",
      "Integration of free APIs",
      "Smooth animations",
      "Performance optimized",
      "Deployment + custom domain",
      "Delivery 3–4 days",
      "4 revisions",
    ],
    popular: true,
    gradient: "from-primary/20 to-accent/20",
    borderGradient: "from-primary to-accent",
  },
  {
    name: "Premium",
    price: "₹18,000–₹25,000",
    icon: Crown,
    description: "Complete solution for large-scale projects",
    features: [
      "5+ pages website",
      "Fully functional frontend + backend",
      "Login/Signup + authentication",
      "Multiple free APIs integration",
      "CMS support (optional)",
      "Full branding (fonts, colors, layout, animations)",
      "Deployment + SSL + analytics",
      "7 days support",
      "Delivery 5–7 days",
    ],
    popular: false,
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGradient: "from-purple-500 to-pink-500",
  },
];

export const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const handleBookCall = () => {
    window.open("https://calendly.com/codexkunal-dev/30min", "_blank");
  };

  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Choose Your Plan</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Premium full-stack web development packages designed to bring your vision to life
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative group transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full p-[1px] rounded-2xl bg-gradient-to-br ${pkg.borderGradient} ${
                  pkg.popular ? "scale-105 md:scale-110" : ""
                }`}
              >
                <div
                  className={`h-full rounded-2xl bg-card/95 backdrop-blur-xl p-8 flex flex-col ${
                    pkg.popular ? "pt-10" : ""
                  }`}
                >
                  {/* Icon & Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center`}
                    >
                      <pkg.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {pkg.name}
                      </h3>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-3xl md:text-4xl font-bold text-gradient">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6">
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={handleBookCall}
                    className={`w-full ${
                      pkg.popular
                        ? "bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground"
                        : "glass border border-border/50 hover:bg-primary/10 text-foreground"
                    }`}
                  >
                    Book a Call
                  </Button>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pkg.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`}
              />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          All prices are negotiable based on project requirements. Let's discuss your needs!
        </p>
      </div>
    </section>
  );
};
