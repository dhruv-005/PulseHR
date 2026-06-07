"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Brain,
  Target,
  MessageSquare,
  Calendar,
  UserPlus,
  Bell,
  FileText,
  Settings,
  Building2,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navSections = [
  {
    title: "Overview",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "People",
    items: [
      { label: "Employees", href: "/employees", icon: Users },
      { label: "Departments", href: "/departments", icon: Building2 },
      { label: "Onboarding", href: "/onboarding", icon: UserPlus },
    ],
  },
  {
    title: "Performance",
    items: [
      {
        label: "Performance",
        href: "/performance",
        icon: TrendingUp,
      },
      { label: "Goals & OKRs", href: "/performance/goals", icon: Target },
      {
        label: "Reviews",
        href: "/performance/reviews",
        icon: FileText,
      },
      { label: "Feedback 360°", href: "/feedback", icon: MessageSquare },
    ],
  },
  {
    title: "Intelligence",
    items: [
      { label: "AI Insights", href: "/ai-insights", icon: Brain },
      { label: "Analytics", href: "/analytics", icon: BarChart3 },
      { label: "Reports", href: "/reports", icon: FileText },
    ],
  },
  {
    title: "Operations",
    items: [
      { label: "Leave Management", href: "/leave", icon: Calendar },
      { label: "Notifications", href: "/notifications", icon: Bell },
      { label: "Settings", href: "/settings", icon: Settings },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border flex flex-col z-30">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-border">
        <Link href="/dashboard">
          <span
            className="text-2xl tracking-tight text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            PulseHR<sup className="text-xs">®</sup>
          </span>
        </Link>
        <p className="text-xs text-muted-foreground mt-1">
          HR Intelligence Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
        {navSections.map((section) => (
          <div key={section.title}>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 mb-2">
              {section.title}
            </p>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/dashboard" &&
                    pathname.startsWith(item.href));
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "sidebar-link group",
                        isActive && "active"
                      )}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="flex-1">{item.label}</span>
                      {isActive && (
                        <ChevronRight className="w-3 h-3 opacity-50" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Bottom User Info */}
      <div className="px-4 py-4 border-t border-border">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-xs font-medium text-foreground">
            SA
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-foreground truncate">
              Super Admin
            </p>
            <p className="text-xs text-muted-foreground truncate">
              admin@pulseHR.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
