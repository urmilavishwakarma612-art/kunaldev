import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "GraphQL", icon: "◈" },
  { name: "Git", icon: "📂" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Figma", icon: "🎨" },
  { name: "Framer Motion", icon: "🎬" },
  { name: "REST APIs", icon: "🔗" },
  { name: "Redux", icon: "🔄" },
  { name: "Prisma", icon: "△" },
];

const SkillCard = ({ skill }: { skill: { name: string; icon: string } }) => (
  <div className="flex-shrink-0 group relative w-20 h-20 glass rounded-xl flex flex-col items-center justify-center p-2 hover:border-primary/50 transition-all duration-300 cursor-pointer">
    <span className="text-2xl mb-1">{skill.icon}</span>
    <span className="text-xs text-muted-foreground text-center group-hover:text-foreground transition-colors">
      {skill.name}
    </span>
  </div>
);

export const Skills = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate offset based on scroll position
  const row1Offset = -scrollY * 0.3;
  const row2Offset = scrollY * 0.3;

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" ref={sectionRef} className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground tracking-widest uppercase">
            My Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            The Secret <span className="font-display italic text-gradient-accent">Sauce</span>
          </h2>
        </div>
      </div>

      {/* Scrolling Skills Rows */}
      <div className="space-y-6">
        {/* Row 1 - moves left on scroll down */}
        <div className="relative">
          <div
            className="flex gap-4 transition-transform duration-100 ease-out"
            style={{ transform: `translateX(${row1Offset}px)` }}
          >
            {duplicatedSkills.map((skill, index) => (
              <SkillCard key={`row1-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Row 2 - moves right on scroll down */}
        <div className="relative">
          <div
            className="flex gap-4 transition-transform duration-100 ease-out"
            style={{ transform: `translateX(${row2Offset - 400}px)` }}
          >
            {duplicatedSkills.map((skill, index) => (
              <SkillCard key={`row2-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
