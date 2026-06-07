"use client";

const stats = [
  {
    value: "60%",
    label: "Reduction in HR manual work",
    description: "Automate reporting, reviews, and routine HR tasks",
  },
  {
    value: "94%",
    label: "Attrition prediction accuracy",
    description: "ML model trained on millions of employee data points",
  },
  {
    value: "10K+",
    label: "Employees managed per org",
    description: "Scale from startup to enterprise seamlessly",
  },
  {
    value: "3x",
    label: "Faster performance cycles",
    description: "From review creation to completion in record time",
  },
];

export default function StatsSection() {
  return (
    <section className="relative z-20 bg-background py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-5xl font-normal text-foreground mb-2"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {stat.value}
              </p>
              <p className="text-sm font-medium text-foreground mb-2">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
