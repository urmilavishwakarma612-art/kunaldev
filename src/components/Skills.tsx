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

export const Skills = () => {
  return (
    <section id="skills" className="relative py-32 px-4">
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

        {/* Skills Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative aspect-square glass rounded-xl flex flex-col items-center justify-center p-2 hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-2xl mb-1">{skill.icon}</span>
              <span className="text-xs text-muted-foreground text-center group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
