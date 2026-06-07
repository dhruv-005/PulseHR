import { Router } from "express";
import authRoutes from "./auth.routes";
import employeeRoutes from "./employee.routes";
import departmentRoutes from "./department.routes";
import performanceRoutes from "./performance.routes";
import goalRoutes from "./goal.routes";
import analyticsRoutes from "./analytics.routes";
import aiRoutes from "./ai.routes";
import leaveRoutes from "./leave.routes";
import feedbackRoutes from "./feedback.routes";
import notificationRoutes from "./notification.routes";
import onboardingRoutes from "./onboarding.routes";
import reportRoutes from "./report.routes";
import skillRoutes from "./skill.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/employees", employeeRoutes);
router.use("/departments", departmentRoutes);
router.use("/performance", performanceRoutes);
router.use("/goals", goalRoutes);
router.use("/analytics", analyticsRoutes);
router.use("/ai", aiRoutes);
router.use("/leave", leaveRoutes);
router.use("/feedback", feedbackRoutes);
router.use("/notifications", notificationRoutes);
router.use("/onboarding", onboardingRoutes);
router.use("/reports", reportRoutes);
router.use("/skills", skillRoutes);

export default router;
