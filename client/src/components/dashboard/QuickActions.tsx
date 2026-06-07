"use client";

import Link from "next/link";
import {
  UserPlus,
  FileText,
  Brain,
  Calendar,
  MessageSquare,
  Download,
} from "lucide-react";

const actions = [
  {
    label: "Add Employee",
    href: "/employees/new",
    icon: UserPlus,
    description: "Onboard new team member",
  },
  {
    label: "New Review",
    href: "/performance/reviews",
    icon: FileText,
    description: "Start performance review",
  },
  {
    label: "AI Insights",
    href: "/ai-insights",
    icon: Brain,
    description: "View attrition risks",
  },
  {
    label: "Approve Leave",
    href: "/leave/requests",
    icon: Calendar,
    description: "Pending requests (3)",
  },
  {
    label: "Feedback",
    href: "/feedback",
    icon: MessageSquare,
    description: "360° feedback rounds",
  },
  {
    label: "Export Report",
    href: "/reports",
    icon: Download,
    description: "PDF or Excel export",
  },
];

export default function QuickActions() {
  return (
    <div className="glass-card rounded-2xl p-6">
      <h2
        className="text-lg font-normal text-foreground mb-4"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.label}
              href={action.href}
              className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-accent transition-colors text-center group"
            >
              <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                <Icon className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-xs font-medium text-foreground">
                {action.label}
              </span>
              <span className="text-[10px] text-muted-foreground hidden sm:block">
                {action.description}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
