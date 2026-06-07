"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative z-20 bg-background py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground mb-6 tracking-widest uppercase">
          Ready to Transform HR?
        </p>
        <h2
          className="text-4xl sm:text-6xl md:text-7xl font-normal text-foreground leading-[0.95] tracking-tight mb-8"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Start your{" "}
          <em className="not-italic text-muted-foreground">
            intelligent journey
          </em>{" "}
          today.
        </h2>
        <p className="text-muted-foreground text-base max-w-xl mx-auto mb-12 leading-relaxed">
          Join hundreds of enterprise HR teams using PulseHR to build
          data-driven, fair, and efficient workplaces.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/login"
            className="liquid-glass rounded-full px-12 py-4 text-base text-foreground hover:scale-[1.03] transition-transform"
          >
            Get Started Free
          </Link>
          <Link
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View All Features →
          </Link>
        </div>
      </div>
    </section>
  );
}
