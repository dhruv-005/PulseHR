export const APP_NAME = "PulseHR";
export const APP_VERSION = "1.0.0";

export const ROLES = {
  SUPER_ADMIN: "super_admin",
  HR_MANAGER: "hr_manager",
  DEPT_HEAD: "dept_head",
  TEAM_LEAD: "team_lead",
  EMPLOYEE: "employee",
} as const;

export const PERFORMANCE_GRADES = {
  EXCELLENT: { min: 90, label: "Excellent", color: "green" },
  GOOD: { min: 75, label: "Good", color: "blue" },
  AVERAGE: { min: 60, label: "Average", color: "yellow" },
  POOR: { min: 0, label: "Poor", color: "red" },
} as const;

export const ATTRITION_RISK = {
  HIGH: { min: 75, label: "High Risk", color: "red" },
  MEDIUM: { min: 50, label: "Medium Risk", color: "yellow" },
  LOW: { min: 0, label: "Low Risk", color: "green" },
} as const;

export const LEAVE_TYPES = [
  "Annual Leave",
  "Sick Leave",
  "Casual Leave",
  "Maternity Leave",
  "Paternity Leave",
  "Unpaid Leave",
] as const;

export const DEPARTMENTS = [
  "Engineering",
  "Product",
  "Design",
  "Sales",
  "Marketing",
  "HR",
  "Finance",
  "Operations",
  "Legal",
  "DevOps",
] as const;

export const OKR_STATUS = {
  ON_TRACK: "on_track",
  AT_RISK: "at_risk",
  BEHIND: "behind",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
} as const;

export const REVIEW_STATUS = {
  PENDING: "pending",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  APPROVED: "approved",
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
    ME: "/auth/me",
  },
  EMPLOYEES: {
    BASE: "/employees",
    BY_ID: (id: string) => `/employees/${id}`,
    KPI: (id: string) => `/employees/${id}/kpi`,
  },
  PERFORMANCE: {
    REVIEWS: "/performance/reviews",
    GOALS: "/performance/goals",
    SCORES: "/performance/scores",
  },
  ANALYTICS: {
    DASHBOARD: "/analytics/dashboard",
    DEPARTMENT: "/analytics/department",
    TREND: "/analytics/trend",
  },
  AI: {
    ATTRITION: "/ai/attrition",
    REVIEW_SUGGEST: "/ai/review-suggest",
    SKILL_GAP: "/ai/skill-gap",
  },
} as const;

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  LIMITS: [10, 25, 50, 100],
} as const;
