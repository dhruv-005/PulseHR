"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-40 py-[90px]">
      {/* Badge */}
      <div className="liquid-glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8 animate-fade-rise">
        AI-Powered HR Platform for Enterprise Teams
      </div>

      {/* Main Heading */}
      <h1
        className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground animate-fade-rise"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Where{" "}
        <em className="not-italic text-muted-foreground">performance</em> meets{" "}
        <em className="not-italic text-muted-foreground">intelligence.</em>
      </h1>

      {/* Subtext */}
      <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
        We&apos;re building intelligent tools for HR teams at scale. Predict
        attrition, automate performance reviews, and unlock deep workforce
        insights — all powered by AI.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 animate-fade-rise-delay-2">
        <Link
          href="/login"
          className="liquid-glass rounded-full px-14 py-5 text-base text-foreground hover:scale-[1.03] transition-transform cursor-pointer"
        >
          Begin Journey
        </Link>
        <Link
          href="#features"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
        >
          Explore Features
        </Link>
      </div>

      {/* Stats Row */}
      <div className="flex flex-wrap items-center justify-center gap-8 mt-20 animate-fade-rise-delay-2">
        {[
          { value: "10K+", label: "Employees Managed" },
          { value: "94%", label: "Attrition Accuracy" },
          { value: "60%", label: "Time Saved in HR" },
          { value: "5", label: "Role-Based Access Levels" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p
              className="text-3xl font-normal text-foreground"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {stat.value}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
