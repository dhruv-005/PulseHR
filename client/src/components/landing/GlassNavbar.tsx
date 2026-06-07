"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Features", href: "#features" },
  { label: "Analytics", href: "#analytics" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function GlassNavbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="relative z-10 w-full">
      <div className="flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className="text-3xl tracking-tight text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            PulseHR
            <sup className="text-xs align-super ml-0.5">®</sup>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                link.active
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="liquid-glass rounded-full p-2.5 text-foreground hover:scale-[1.03] transition-transform"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Login */}
          <Link
            href="/login"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:block"
          >
            Sign In
          </Link>

          {/* CTA */}
          <Link
            href="/login"
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
