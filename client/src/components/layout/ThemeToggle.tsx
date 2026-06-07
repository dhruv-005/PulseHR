"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-1 liquid-glass rounded-full p-1">
      <button
        onClick={() => setTheme("light")}
        className={`p-1.5 rounded-full transition-all ${
          theme === "light" ? "bg-foreground/10" : "hover:bg-foreground/5"
        }`}
        aria-label="Light mode"
      >
        <Sun className="w-3.5 h-3.5 text-foreground" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-1.5 rounded-full transition-all ${
          theme === "dark" ? "bg-foreground/10" : "hover:bg-foreground/5"
        }`}
        aria-label="Dark mode"
      >
        <Moon className="w-3.5 h-3.5 text-foreground" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-1.5 rounded-full transition-all ${
          theme === "system" ? "bg-foreground/10" : "hover:bg-foreground/5"
        }`}
        aria-label="System mode"
      >
        <Monitor className="w-3.5 h-3.5 text-foreground" />
      </button>
    </div>
  );
}
