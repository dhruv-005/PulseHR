import StatsCard from "@/components/dashboard/StatsCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import AttritionRiskWidget from "@/components/dashboard/AttritionRiskWidget";
import UpcomingReviews from "@/components/dashboard/UpcomingReviews";
import PerformanceSummary from "@/components/dashboard/PerformanceSummary";
import QuickActions from "@/components/dashboard/QuickActions";

const stats = [
  {
    title: "Total Employees",
    value: "2,847",
    change: "+12 this month",
    trend: "up" as const,
    icon: "users",
    color: "blue" as const,
  },
  {
    title: "Avg Performance Score",
    value: "78.4",
    change: "+2.3 from last quarter",
    trend: "up" as const,
    icon: "trending",
    color: "green" as const,
  },
  {
    title: "Attrition Risk",
    value: "143",
    change: "High risk employees",
    trend: "down" as const,
    icon: "alert",
    color: "red" as const,
  },
  {
    title: "Goals Completed",
    value: "89%",
    change: "+5% from last month",
    trend: "up" as const,
    icon: "star",
    color: "yellow" as const,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1
          className="text-3xl font-normal text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Dashboard
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Welcome back. Here&apos;s what&apos;s happening across your
          organization.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <QuickActions />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <PerformanceSummary />
          <RecentActivity />
        </div>
        <div className="space-y-6">
          <AttritionRiskWidget />
          <UpcomingReviews />
        </div>
      </div>
    </div>
  );
}
