"use client";

import {
  UserPlus,
  FileText,
  Star,
  AlertTriangle,
  Calendar,
  MessageSquare,
} from "lucide-react";

const activities = [
  {
    type: "employee_added",
    message: "New employee Ravi Kumar joined Engineering team",
    time: "5 minutes ago",
    icon: UserPlus,
    color: "text-green-400",
  },
  {
    type: "review_completed",
    message: "Performance review completed for Priya Sharma",
    time: "1 hour ago",
    icon: FileText,
    color: "text-blue-400",
  },
  {
    type: "goal_achieved",
    message: "Sales team achieved Q4 OKR target — 102%",
    time: "2 hours ago",
    icon: Star,
    color: "text-yellow-400",
  },
  {
    type: "attrition_alert",
    message: "High attrition risk detected for 3 employees in DevOps",
    time: "3 hours ago",
    icon: AlertTriangle,
    color: "text-red-400",
  },
  {
    type: "leave_approved",
    message: "Leave request approved for Anjali Rao — 5 days",
    time: "5 hours ago",
    icon: Calendar,
    color: "text-purple-400",
  },
  {
    type: "feedback_submitted",
    message: "360° feedback submitted by Engineering department",
    time: "Yesterday",
    icon: MessageSquare,
    color: "text-cyan-400",
  },
];

export default function RecentActivity() {
  return (
    <div className="glass-card rounded-2xl p-6">
      <h2
        className="text-lg font-normal text-foreground mb-6"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Recent Activity
      </h2>
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={index} className="flex items-start gap-4">
              <div
                className={`w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0 mt-0.5 ${activity.color}`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground leading-relaxed">
                  {activity.message}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
