import numpy as np
from typing import Dict, List, Any
import random

class AttritionPredictor:
    """
    Attrition Risk Prediction Service
    In production: loads trained ML model from .pkl file
    Demo: uses rule-based scoring
    """

    def __init__(self):
        self.model = None
        self._load_model()

    def _load_model(self):
        """Load trained model - falls back to rule-based if not found"""
        try:
            import pickle
            with open("app/models/attrition_model.pkl", "rb") as f:
                self.model = pickle.load(f)
            print("✅ Attrition model loaded successfully")
        except FileNotFoundError:
            print("⚠️  Attrition model not found, using rule-based predictor")
            self.model = None

    def _rule_based_predict(self, employee_data: Dict) -> Dict[str, Any]:
        """Rule-based attrition prediction for demo"""
        score = 0
        factors = []

        # Years at company
        years = employee_data.get("yearsAtCompany", 3)
        if years < 1:
            score += 25
            factors.append({"name": "New Employee", "impact": "negative", "weight": 0.25})
        elif years < 2:
            score += 15
            factors.append({"name": "Short Tenure", "impact": "negative", "weight": 0.15})

        # Performance score
        perf = employee_data.get("performanceScore", 75)
        if perf < 60:
            score += 30
            factors.append({"name": "Low Performance", "impact": "negative", "weight": 0.30})
        elif perf > 85:
            score -= 10
            factors.append({"name": "High Performer", "impact": "positive", "weight": 0.10})

        # Salary satisfaction
        salary_satisfaction = employee_data.get("salarySatisfaction", 3)
        if salary_satisfaction < 2:
            score += 20
            factors.append({"name": "Low Salary Satisfaction", "impact": "negative", "weight": 0.20})

        # Work-life balance
        wlb = employee_data.get("workLifeBalance", 3)
        if wlb < 2:
            score += 15
            factors.append({"name": "Poor Work-Life Balance", "impact": "negative", "weight": 0.15})

        # Overtime
        overtime = employee_data.get("overtime", False)
        if overtime:
            score += 10
            factors.append({"name": "Frequent Overtime", "impact": "negative", "weight": 0.10})

        # Promotions
        promotions = employee_data.get("numPromotions", 1)
        if promotions == 0:
            score += 15
            factors.append({"name": "No Promotions", "impact": "negative", "weight": 0.15})

        # Add some variance
        score = min(100, max(0, score + random.randint(-5, 5)))

        # Determine risk level
        if score >= 75:
            risk_level = "high"
            recommendation = "Immediate intervention required. Schedule 1:1 meeting, discuss career path and compensation review."
        elif score >= 50:
            risk_level = "medium"
            recommendation = "Monitor closely. Consider mentorship program and skill development opportunities."
        else:
            risk_level = "low"
            recommendation = "Employee is stable. Continue regular engagement and recognition."

        return {
            "riskScore": score,
            "riskLevel": risk_level,
            "factors": factors,
            "recommendation": recommendation
        }

    def predict(self, employee_data: Dict) -> Dict[str, Any]:
        """Predict attrition for single employee"""
        if self.model:
            # Use trained ML model
            features = self._extract_features(employee_data)
            prob = self.model.predict_proba([features])[0][1]
            score = int(prob * 100)
        else:
            result = self._rule_based_predict(employee_data)
            return result

        risk_level = "high" if score >= 75 else "medium" if score >= 50 else "low"
        return {
            "riskScore": score,
            "riskLevel": risk_level,
            "factors": [],
            "recommendation": "See HR dashboard for detailed recommendations."
        }

    def predict_bulk(self, employees: List[Dict]) -> List[Dict[str, Any]]:
        """Predict attrition for multiple employees"""
        return [
            {"employeeId": emp.get("employeeId"), **self.predict(emp)}
            for emp in employees
        ]

    def _extract_features(self, data: Dict) -> List[float]:
        """Extract ML features from employee data"""
        return [
            float(data.get("age", 30)),
            float(data.get("yearsAtCompany", 3)),
            float(data.get("performanceScore", 75)),
            float(data.get("salary", 50000)),
            float(data.get("salarySatisfaction", 3)),
            float(data.get("workLifeBalance", 3)),
            float(data.get("jobSatisfaction", 3)),
            float(data.get("numPromotions", 1)),
            1.0 if data.get("overtime") else 0.0,
            float(data.get("distanceFromHome", 10)),
        ]
