"use client";

import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

const reviews = [
  {
    employee: "Anjali Rao",
    role: "Engineering Lead",
    dueDate: "Dec 15",
    daysLeft: 3,
    urgency: "urgent",
  },
  {
    employee: "Dev Sharma",
    role: "Product Manager",
    dueDate: "Dec 18",
    daysLeft: 6,
    urgency: "soon",
  },
  {
    employee: "Meera Nair",
    role: "Data Scientist",
    dueDate: "Dec 22",
    daysLeft: 10,
    urgency: "normal",
  },
];

const urgencyColor = {
  urgent: "text-red-400",
  soon: "text-yellow-400",
  normal: "text-muted-foreground",
};

export default function UpcomingReviews() {
  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-foreground" />
          <h2
            className="text-lg font-normal text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Upcoming Reviews
          </h2>
        </div>
        <Link
          href="/performance/reviews"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          View all →
        </Link>
      </div>

      <div className="space-y-3">
        {reviews.map((review) => (
          <div
            key={review.employee}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-xs font-medium text-foreground flex-shrink-0">
              {review.employee
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-foreground truncate">
                {review.employee}
              </p>
              <p className="text-[10px] text-muted-foreground">{review.role}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p
                className={`text-xs font-medium ${
                  urgencyColor[review.urgency as keyof typeof urgencyColor]
                }`}
              >
                {review.dueDate}
              </p>
              <div className="flex items-center gap-0.5 justify-end">
                <Clock className="w-2.5 h-2.5 text-muted-foreground" />
                <p className="text-[10px] text-muted-foreground">
                  {review.daysLeft}d left
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
