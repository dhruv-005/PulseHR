"use client";

import {
  Brain,
  BarChart3,
  Users,
  Bell,
  Shield,
  Target,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description:
      "Attrition prediction, auto-generated performance scores, AI review suggestions, and skill gap analysis powered by machine learning.",
    items: [
      "Attrition Prediction ML Model",
      "Auto Performance Scoring",
      "AI Review Suggestions",
      "Skill Gap Analysis",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Department-wise heatmaps, productivity trends, salary correlation graphs, and headcount forecasting at your fingertips.",
    items: [
      "Performance Heatmaps",
      "Productivity Trends",
      "Salary vs Performance",
      "Headcount Forecast",
    ],
  },
  {
    icon: Users,
    title: "HR Management",
    description:
      "Complete 360-degree feedback, OKR goal framework, leave management with approval workflows, and onboarding tracking.",
    items: [
      "360° Feedback System",
      "OKR Goal Framework",
      "Leave Management",
      "Onboarding Tracker",
    ],
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Proactive alerts for performance drops, upcoming review dates, budget thresholds, and critical HR events.",
    items: [
      "Performance Drop Alerts",
      "Review Date Reminders",
      "Budget Alerts",
      "Real-time Notifications",
    ],
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description:
      "Granular 5-level RBAC from Super Admin to Employee, ensuring data security and appropriate access at every level.",
    items: [
      "Super Admin Access",
      "HR Manager Dashboard",
      "Department Head View",
      "Employee Self-Service",
    ],
  },
  {
    icon: Target,
    title: "Performance Reviews",
    description:
      "Structured review cycles, KPI tracking, goal alignment, and automated scoring to make performance management objective.",
    items: [
      "Structured Review Cycles",
      "KPI Tracking",
      "Goal Alignment",
      "Automated Scoring",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative z-20 bg-background py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-muted-foreground mb-4 tracking-widest uppercase">
            What We Offer
          </p>
          <h2
            className="text-4xl sm:text-6xl font-normal text-foreground leading-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Everything your HR team{" "}
            <em className="not-italic text-muted-foreground">needs</em>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="glass-card rounded-2xl p-8 group hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
                <h3
                  className="text-xl font-normal text-foreground mb-3"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span className="w-1 h-1 rounded-full bg-foreground/40 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
