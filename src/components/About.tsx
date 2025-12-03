import kunalAbout from "@/assets/kunal-about.png";

export const About = () => {
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm text-muted-foreground tracking-widest uppercase">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Turning Vision Into{" "}
              <span className="font-display italic text-gradient-accent">Reality</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm Kunal, a passionate web developer specializing in creating futuristic, 
              high-performance websites that captivate users and drive results. With expertise 
              in modern technologies like React, Next.js, and TypeScript, I transform complex 
              ideas into elegant digital solutions.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My approach combines clean code architecture with stunning visual design, 
              ensuring every project not only looks incredible but performs exceptionally. 
              I'm committed to staying at the forefront of web development trends and 
              delivering experiences that exceed expectations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Element */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-border/50 animate-pulse-slow" />
              <div className="absolute inset-4 rounded-full border border-primary/20 animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
              <div className="absolute inset-8 rounded-full border border-accent/20 animate-pulse-slow" style={{ animationDelay: "1s" }} />
              
              {/* Center content - Profile Image */}
              <div className="absolute inset-16 rounded-full overflow-hidden animate-pulse-slow">
                <img 
                  src={kunalAbout} 
                  alt="Kunal - Web Developer" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute top-8 right-8 px-3 py-1.5 glass rounded-full text-xs animate-float">
                React Expert
              </div>
              <div className="absolute bottom-16 left-4 px-3 py-1.5 glass rounded-full text-xs animate-float" style={{ animationDelay: "1s" }}>
                UI/UX Focused
              </div>
              <div className="absolute top-1/2 right-0 px-3 py-1.5 glass rounded-full text-xs animate-float" style={{ animationDelay: "2s" }}>
                Performance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
