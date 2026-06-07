"use client";

import Link from "next/link";
import { AlertTriangle, ChevronRight } from "lucide-react";

const riskEmployees = [
  {
    name: "Arjun Patel",
    role: "Senior Developer",
    risk: 87,
    level: "high",
  },
  {
    name: "Priya Singh",
    role: "UX Designer",
    risk: 74,
    level: "high",
  },
  {
    name: "Rohit Kumar",
    role: "Data Analyst",
    risk: 62,
    level: "medium",
  },
  {
    name: "Sneha Verma",
    role: "PM",
    risk: 58,
    level: "medium",
  },
];

const riskColor = {
  high: "text-red-400 bg-red-500/10",
  medium: "text-yellow-400 bg-yellow-500/10",
  low: "text-green-400 bg-green-500/10",
};

export default function AttritionRiskWidget() {
  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <h2
            className="text-lg font-normal text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Attrition Risk
          </h2>
        </div>
        <Link
          href="/ai-insights/attrition"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          View all →
        </Link>
      </div>

      <div className="space-y-3">
        {riskEmployees.map((emp) => (
          <div
            key={emp.name}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-xs font-medium text-foreground flex-shrink-0">
              {emp.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-foreground truncate">
                {emp.name}
              </p>
              <p className="text-[10px] text-muted-foreground">{emp.role}</p>
            </div>
            <div
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                riskColor[emp.level as keyof typeof riskColor]
              }`}
            >
              {emp.risk}%
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/ai-insights/attrition"
        className="flex items-center justify-center gap-1 mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        View full report
        <ChevronRight className="w-3 h-3" />
      </Link>
    </div>
  );
}
