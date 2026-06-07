"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: string;
  color: "blue" | "green" | "red" | "yellow";
}

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-400",
  green: "bg-green-500/10 text-green-400",
  red: "bg-red-500/10 text-red-400",
  yellow: "bg-yellow-500/10 text-yellow-400",
};

const iconMap: Record<string, string> = {
  blue: "👥",
  green: "📈",
  red: "⚠️",
  yellow: "⭐",
};

export default function StatsCard({
  title,
  value,
  change,
  trend,
  color,
}: StatsCardProps) {
  return (
    <div className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-200">
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${colorMap[color]}`}
        >
          {iconMap[color]}
        </div>
        <div
          className={`flex items-center gap-1 text-xs ${
            trend === "up" ? "text-green-400" : "text-red-400"
          }`}
        >
          {trend === "up" ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
        </div>
      </div>
      <p
        className="text-3xl font-normal text-foreground mb-1"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        {value}
      </p>
      <p className="text-xs font-medium text-foreground mb-1">{title}</p>
      <p className="text-xs text-muted-foreground">{change}</p>
    </div>
  );
}
