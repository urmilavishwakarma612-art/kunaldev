import { Navigation } from "@/components/Navigation";
import { StarField } from "@/components/StarField";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarField />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
