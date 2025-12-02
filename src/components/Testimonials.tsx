const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Founder • TechStart Inc",
    content:
      "Kunal delivered an exceptional website that exceeded our expectations. His attention to detail and ability to translate our vision into reality was remarkable. The site loads blazingly fast and converts visitors like never before.",
    title: "Exceptional Work and Communication",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Product Manager • InnovateCo",
    content:
      "Working with Kunal was a seamless experience. His JavaScript and React skills are through the roof. He delivered a complex dashboard ahead of schedule, and the code quality was impeccable. Highly recommended!",
    title: "Outstanding Technical Skills",
  },
  {
    id: 3,
    name: "Michael Roberts",
    role: "CEO • Digital Ventures",
    content:
      "Kunal is not just a developer; he's a true partner. He took our vague ideas and transformed them into a stunning, functional website. His proactive approach and problem-solving abilities make him invaluable.",
    title: "A True Development Partner",
  },
  {
    id: 4,
    name: "Emily Parker",
    role: "Marketing Director • GrowthLab",
    content:
      "The website Kunal built for us has significantly improved our online presence. His understanding of SEO and performance optimization helped us climb the rankings. Professional, reliable, and incredibly talented.",
    title: "SEO & Performance Expert",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Word on the street{" "}
            <span className="font-display italic text-gradient-accent">about me</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="font-semibold text-lg mb-4 group-hover:text-gradient transition-all">
                {testimonial.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center text-sm font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
