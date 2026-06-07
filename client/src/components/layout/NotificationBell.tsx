"use client";

import { useState } from "react";
import { Bell } from "lucide-react";

const mockNotifications = [
  {
    id: 1,
    title: "Performance Alert",
    message: "John Doe performance dropped 2 months straight",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    title: "Review Due",
    message: "Q4 performance review due in 3 days",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    title: "Leave Request",
    message: "Sarah Chen requested 5 days leave",
    time: "3 hours ago",
    unread: false,
  },
];

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const unreadCount = mockNotifications.filter((n) => n.unread).length;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative w-9 h-9 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
        aria-label="Notifications"
      >
        <Bell className="w-4 h-4 text-foreground" />
        {unreadCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-medium">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-12 w-80 glass-card rounded-2xl border border-border shadow-xl z-50">
          <div className="px-4 py-3 border-b border-border flex items-center justify-between">
            <p className="text-sm font-medium text-foreground">
              Notifications
            </p>
            <button
              onClick={() => setOpen(false)}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Close
            </button>
          </div>
          <div className="divide-y divide-border max-h-80 overflow-y-auto">
            {mockNotifications.map((n) => (
              <div
                key={n.id}
                className={`px-4 py-3 hover:bg-accent transition-colors cursor-pointer ${
                  n.unread ? "bg-accent/30" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  {n.unread && (
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 flex-shrink-0" />
                  )}
                  <div className={n.unread ? "" : "pl-4"}>
                    <p className="text-xs font-medium text-foreground">
                      {n.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {n.message}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-1">
                      {n.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
