import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
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

        <Button variant="hero" size="lg" className="mt-8 group">
          Get In Touch
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Button>

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
