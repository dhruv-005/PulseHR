export type Role =
  | "super_admin"
  | "hr_manager"
  | "dept_head"
  | "team_lead"
  | "employee";

export type EmploymentStatus = "active" | "inactive" | "on_leave" | "resigned";

export interface Employee {
  _id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  role: Role;
  jobTitle: string;
  department: string;
  managerId?: string;
  dateOfJoining: string;
  dateOfBirth?: string;
  salary: number;
  status: EmploymentStatus;
  avatar?: string;
  skills: string[];
  location?: string;
  performanceScore?: number;
  attritionRisk?: number;
  createdAt: string;
  updatedAt: string;
}

export interface EmployeeFilters {
  department?: string;
  status?: EmploymentStatus;
  role?: Role;
  search?: string;
  page?: number;
  limit?: number;
}

export interface CreateEmployeeInput {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  role: Role;
  jobTitle: string;
  department: string;
  managerId?: string;
  dateOfJoining: string;
  salary: number;
  skills?: string[];
}

export interface EmployeeKPI {
  employeeId: string;
  period: string;
  metrics: {
    name: string;
    target: number;
    achieved: number;
    unit: string;
  }[];
  overallScore: number;
}
