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
  const [direction, setDirection] = useState<"left" | "right">("left");
  const lastScrollY = useRef(0);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const position1 = useRef(0);
  const position2 = useRef(-400);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setDirection("left");
      } else if (currentScrollY < lastScrollY.current) {
        setDirection("right");
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const speed = 1;
    const cardWidth = 96; // 80px card + 16px gap
    const totalWidth = skills.length * cardWidth;

    const animate = () => {
      if (direction === "left") {
        position1.current -= speed;
        position2.current += speed;
      } else {
        position1.current += speed;
        position2.current -= speed;
      }

      // Reset positions for infinite loop
      if (position1.current <= -totalWidth) {
        position1.current = 0;
      } else if (position1.current >= 0) {
        position1.current = -totalWidth;
      }

      if (position2.current >= 0) {
        position2.current = -totalWidth;
      } else if (position2.current <= -totalWidth) {
        position2.current = 0;
      }

      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${position1.current}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${position2.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [direction]);

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="relative py-32 px-4 overflow-hidden">
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
        {/* Row 1 */}
        <div className="relative overflow-hidden">
          <div ref={row1Ref} className="flex gap-4 will-change-transform">
            {duplicatedSkills.map((skill, index) => (
              <SkillCard key={`row1-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Row 2 - opposite direction */}
        <div className="relative overflow-hidden">
          <div ref={row2Ref} className="flex gap-4 will-change-transform">
            {duplicatedSkills.map((skill, index) => (
              <SkillCard key={`row2-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
