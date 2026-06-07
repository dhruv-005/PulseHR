export interface AttritionRiskScore {
  _id: string;
  employeeId: string;
  riskScore: number;
  riskLevel: "high" | "medium" | "low";
  factors: {
    name: string;
    impact: "positive" | "negative";
    weight: number;
  }[];
  recommendation: string;
  predictedAt: string;
}

export interface SkillGapAnalysis {
  employeeId: string;
  currentSkills: string[];
  requiredSkills: string[];
  gapSkills: string[];
  recommendations: {
    skill: string;
    priority: "high" | "medium" | "low";
    resources: string[];
  }[];
}

export interface AIReviewSuggestion {
  strengths: string[];
  improvements: string[];
  summary: string;
  rating: number;
  generatedAt: string;
}
