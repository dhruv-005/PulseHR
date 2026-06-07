"use client";

import Link from "next/link";

const footerLinks = {
  Product: ["Features", "Analytics", "AI Insights", "Pricing"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  Support: ["Documentation", "API Reference", "Help Center", "Status"],
};

export default function LandingFooter() {
  return (
    <footer className="relative z-20 bg-background border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p
              className="text-2xl text-foreground mb-4"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              PulseHR<sup className="text-xs">®</sup>
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              AI-powered HR analytics platform for enterprise teams. Where
              performance meets intelligence.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-medium text-foreground mb-4 tracking-wider uppercase">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 PulseHR. All rights reserved. Built with ❤️ for HR teams.
          </p>
          <p className="text-xs text-muted-foreground">
            Free & Open Source · MIT License
          </p>
        </div>
      </div>
    </footer>
  );
}
