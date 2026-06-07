"use client";

const testimonials = [
  {
    quote:
      "PulseHR transformed how we manage 15,000+ employees. The attrition prediction alone saved us $2M in hiring costs last year.",
    author: "Priya Sharma",
    role: "VP Human Resources",
    company: "TCS Digital",
    initials: "PS",
  },
  {
    quote:
      "The AI-generated performance reviews are incredibly accurate. Our HR team now spends 60% less time on manual reporting.",
    author: "Rahul Mehta",
    role: "Head of People Operations",
    company: "Infosys BPM",
    initials: "RM",
  },
  {
    quote:
      "OKR tracking and 360-degree feedback in one platform. The analytics dashboard gives us insights we never had before.",
    author: "Sarah Chen",
    role: "Chief People Officer",
    company: "Accenture India",
    initials: "SC",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative z-20 bg-background py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm text-muted-foreground mb-4 tracking-widest uppercase">
            Trusted By Leaders
          </p>
          <h2
            className="text-4xl sm:text-6xl font-normal text-foreground leading-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            What HR leaders{" "}
            <em className="not-italic text-muted-foreground">say</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="glass-card rounded-2xl p-8">
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-xs font-medium text-foreground">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {t.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
