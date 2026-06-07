export type ReviewStatus =
  | "pending"
  | "in_progress"
  | "completed"
  | "approved";
export type GoalStatus =
  | "on_track"
  | "at_risk"
  | "behind"
  | "completed"
  | "cancelled";
export type ReviewPeriod = "monthly" | "quarterly" | "annual" | "probation";

export interface PerformanceReview {
  _id: string;
  employeeId: string;
  reviewerId: string;
  period: ReviewPeriod;
  periodStart: string;
  periodEnd: string;
  status: ReviewStatus;
  scores: {
    technical: number;
    communication: number;
    teamwork: number;
    leadership?: number;
    innovation?: number;
  };
  overallScore: number;
  strengths: string[];
  improvements: string[];
  comments: string;
  aiSuggestion?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Goal {
  _id: string;
  employeeId: string;
  title: string;
  description: string;
  category: "individual" | "team" | "department" | "company";
  status: GoalStatus;
  progress: number;
  startDate: string;
  dueDate: string;
  keyResults: {
    description: string;
    target: number;
    current: number;
    unit: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
