"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { dept: "Engineering", score: 82, target: 80 },
  { dept: "Product", score: 78, target: 80 },
  { dept: "Sales", score: 91, target: 85 },
  { dept: "HR", score: 75, target: 80 },
  { dept: "Finance", score: 88, target: 80 },
  { dept: "Design", score: 84, target: 80 },
];

export default function PerformanceSummary() {
  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2
          className="text-lg font-normal text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Department Performance
        </h2>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-foreground/60 inline-block" />
            Score
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-foreground/20 inline-block" />
            Target
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barGap={4}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--border))"
            vertical={false}
          />
          <XAxis
            dataKey="dept"
            tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
            axisLine={false}
            tickLine={false}
            domain={[0, 100]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              fontSize: "12px",
              color: "hsl(var(--foreground))",
            }}
          />
          <Bar
            dataKey="score"
            fill="hsl(var(--foreground))"
            radius={[4, 4, 0, 0]}
            opacity={0.8}
          />
          <Bar
            dataKey="target"
            fill="hsl(var(--foreground))"
            radius={[4, 4, 0, 0]}
            opacity={0.2}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
