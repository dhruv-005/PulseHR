#!/bin/bash

echo "🚀 Creating PulseHR project structure..."

# ─── GITHUB ───────────────────────────────────────────
mkdir -p .github/workflows
touch .github/workflows/ci.yml
touch .github/workflows/deploy.yml

# ─── CLIENT PUBLIC ────────────────────────────────────
mkdir -p client/public/videos
mkdir -p client/public/fonts
touch client/public/favicon.ico
touch client/public/logo.svg
touch client/public/videos/hero-bg.mp4

# ─── AUTH PAGES ───────────────────────────────────────
mkdir -p "client/src/app/(auth)/login"
mkdir -p "client/src/app/(auth)/register"
touch "client/src/app/(auth)/login/page.tsx"
touch "client/src/app/(auth)/register/page.tsx"
touch "client/src/app/(auth)/layout.tsx"

# ─── DASHBOARD PAGES ──────────────────────────────────
mkdir -p "client/src/app/(dashboard)/dashboard"
touch "client/src/app/(dashboard)/dashboard/page.tsx"

mkdir -p "client/src/app/(dashboard)/employees/[id]/edit"
mkdir -p "client/src/app/(dashboard)/employees/new"
touch "client/src/app/(dashboard)/employees/page.tsx"
touch "client/src/app/(dashboard)/employees/[id]/page.tsx"
touch "client/src/app/(dashboard)/employees/[id]/edit/page.tsx"
touch "client/src/app/(dashboard)/employees/new/page.tsx"

mkdir -p "client/src/app/(dashboard)/performance/reviews/[id]"
mkdir -p "client/src/app/(dashboard)/performance/goals/[id]"
touch "client/src/app/(dashboard)/performance/page.tsx"
touch "client/src/app/(dashboard)/performance/reviews/page.tsx"
touch "client/src/app/(dashboard)/performance/reviews/[id]/page.tsx"
touch "client/src/app/(dashboard)/performance/goals/page.tsx"
touch "client/src/app/(dashboard)/performance/goals/[id]/page.tsx"

mkdir -p "client/src/app/(dashboard)/analytics"
touch "client/src/app/(dashboard)/analytics/page.tsx"

mkdir -p "client/src/app/(dashboard)/departments/[id]"
touch "client/src/app/(dashboard)/departments/page.tsx"
touch "client/src/app/(dashboard)/departments/[id]/page.tsx"

mkdir -p "client/src/app/(dashboard)/ai-insights/attrition"
mkdir -p "client/src/app/(dashboard)/ai-insights/skill-gap"
touch "client/src/app/(dashboard)/ai-insights/page.tsx"
touch "client/src/app/(dashboard)/ai-insights/attrition/page.tsx"
touch "client/src/app/(dashboard)/ai-insights/skill-gap/page.tsx"

mkdir -p "client/src/app/(dashboard)/leave/requests"
touch "client/src/app/(dashboard)/leave/page.tsx"
touch "client/src/app/(dashboard)/leave/requests/page.tsx"

mkdir -p "client/src/app/(dashboard)/feedback"
touch "client/src/app/(dashboard)/feedback/page.tsx"

mkdir -p "client/src/app/(dashboard)/onboarding"
touch "client/src/app/(dashboard)/onboarding/page.tsx"

mkdir -p "client/src/app/(dashboard)/notifications"
touch "client/src/app/(dashboard)/notifications/page.tsx"

mkdir -p "client/src/app/(dashboard)/reports"
touch "client/src/app/(dashboard)/reports/page.tsx"

mkdir -p "client/src/app/(dashboard)/settings"
touch "client/src/app/(dashboard)/settings/page.tsx"

touch "client/src/app/(dashboard)/layout.tsx"

# ─── LANDING PAGE ─────────────────────────────────────
mkdir -p "client/src/app/(landing)"
touch "client/src/app/(landing)/page.tsx"
touch "client/src/app/(landing)/layout.tsx"

# ─── ROOT APP FILES ───────────────────────────────────
touch client/src/app/layout.tsx
touch client/src/app/globals.css
touch client/src/app/not-found.tsx
touch client/src/app/error.tsx

# ─── SHADCN UI COMPONENTS ─────────────────────────────
mkdir -p client/src/components/ui
touch client/src/components/ui/button.tsx
touch client/src/components/ui/card.tsx
touch client/src/components/ui/dialog.tsx
touch client/src/components/ui/dropdown-menu.tsx
touch client/src/components/ui/form.tsx
touch client/src/components/ui/input.tsx
touch client/src/components/ui/label.tsx
touch client/src/components/ui/select.tsx
touch client/src/components/ui/sheet.tsx
touch client/src/components/ui/skeleton.tsx
touch client/src/components/ui/table.tsx
touch client/src/components/ui/tabs.tsx
touch client/src/components/ui/toast.tsx
touch client/src/components/ui/toaster.tsx
touch client/src/components/ui/tooltip.tsx
touch client/src/components/ui/badge.tsx
touch client/src/components/ui/avatar.tsx
touch client/src/components/ui/progress.tsx
touch client/src/components/ui/slider.tsx
touch client/src/components/ui/switch.tsx
touch client/src/components/ui/separator.tsx
touch client/src/components/ui/popover.tsx
touch client/src/components/ui/calendar.tsx
touch client/src/components/ui/command.tsx
touch client/src/components/ui/alert.tsx
touch client/src/components/ui/scroll-area.tsx

# ─── LANDING COMPONENTS ───────────────────────────────
mkdir -p client/src/components/landing
touch client/src/components/landing/HeroSection.tsx
touch client/src/components/landing/VideoBackground.tsx
touch client/src/components/landing/GlassNavbar.tsx
touch client/src/components/landing/FeaturesSection.tsx
touch client/src/components/landing/StatsSection.tsx
touch client/src/components/landing/TestimonialsSection.tsx
touch client/src/components/landing/PricingSection.tsx
touch client/src/components/landing/CTASection.tsx
touch client/src/components/landing/LandingFooter.tsx

# ─── LAYOUT COMPONENTS ────────────────────────────────
mkdir -p client/src/components/layout
touch client/src/components/layout/Sidebar.tsx
touch client/src/components/layout/TopNavbar.tsx
touch client/src/components/layout/ThemeToggle.tsx
touch client/src/components/layout/NotificationBell.tsx
touch client/src/components/layout/UserAvatarMenu.tsx
touch client/src/components/layout/MobileSidebar.tsx
touch client/src/components/layout/BreadCrumb.tsx

# ─── DASHBOARD WIDGETS ────────────────────────────────
mkdir -p client/src/components/dashboard
touch client/src/components/dashboard/StatsCard.tsx
touch client/src/components/dashboard/RecentActivity.tsx
touch client/src/components/dashboard/QuickActions.tsx
touch client/src/components/dashboard/PerformanceSummary.tsx
touch client/src/components/dashboard/AttritionRiskWidget.tsx
touch client/src/components/dashboard/UpcomingReviews.tsx

# ─── CHART COMPONENTS ─────────────────────────────────
mkdir -p client/src/components/charts
touch client/src/components/charts/PerformanceHeatmap.tsx
touch client/src/components/charts/ProductivityTrend.tsx
touch client/src/components/charts/SalaryPerformanceGraph.tsx
touch client/src/components/charts/HeadcountForecast.tsx
touch client/src/components/charts/AttritionRiskChart.tsx
touch client/src/components/charts/DepartmentBarChart.tsx
touch client/src/components/charts/GoalProgressChart.tsx
touch client/src/components/charts/SkillRadarChart.tsx
touch client/src/components/charts/LeaveCalendarChart.tsx

# ─── EMPLOYEE COMPONENTS ──────────────────────────────
mkdir -p client/src/components/employees
touch client/src/components/employees/EmployeeTable.tsx
touch client/src/components/employees/EmployeeCard.tsx
touch client/src/components/employees/EmployeeProfile.tsx
touch client/src/components/employees/EmployeeFilters.tsx
touch client/src/components/employees/AddEmployeeForm.tsx
touch client/src/components/employees/EditEmployeeForm.tsx
touch client/src/components/employees/EmployeeKPIPanel.tsx

# ─── PERFORMANCE COMPONENTS ───────────────────────────
mkdir -p client/src/components/performance
touch client/src/components/performance/ReviewForm.tsx
touch client/src/components/performance/ReviewCard.tsx
touch client/src/components/performance/ScoreDisplay.tsx
touch client/src/components/performance/GoalOKRCard.tsx
touch client/src/components/performance/GoalSetForm.tsx
touch client/src/components/performance/KPITracker.tsx
touch client/src/components/performance/ReviewTimeline.tsx

# ─── AI COMPONENTS ────────────────────────────────────
mkdir -p client/src/components/ai
touch client/src/components/ai/AIReviewSuggestion.tsx
touch client/src/components/ai/AttritionRiskCard.tsx
touch client/src/components/ai/SkillGapAnalysis.tsx
touch client/src/components/ai/AIInsightPanel.tsx
touch client/src/components/ai/AILoader.tsx

# ─── FEEDBACK COMPONENTS ──────────────────────────────
mkdir -p client/src/components/feedback
touch client/src/components/feedback/FeedbackForm.tsx
touch client/src/components/feedback/FeedbackCard.tsx
touch client/src/components/feedback/FeedbackSummary.tsx

# ─── LEAVE COMPONENTS ─────────────────────────────────
mkdir -p client/src/components/leave
touch client/src/components/leave/LeaveRequestForm.tsx
touch client/src/components/leave/LeaveRequestTable.tsx
touch client/src/components/leave/LeaveApprovalCard.tsx
touch client/src/components/leave/LeaveBalanceWidget.tsx

# ─── ONBOARDING COMPONENTS ────────────────────────────
mkdir -p client/src/components/onboarding
touch client/src/components/onboarding/ChecklistTracker.tsx
touch client/src/components/onboarding/OnboardingStep.tsx
touch client/src/components/onboarding/OnboardingProgress.tsx

# ─── NOTIFICATION COMPONENTS ──────────────────────────
mkdir -p client/src/components/notifications
touch client/src/components/notifications/NotificationList.tsx
touch client/src/components/notifications/NotificationItem.tsx
touch client/src/components/notifications/AlertBanner.tsx

# ─── SHARED COMPONENTS ────────────────────────────────
mkdir -p client/src/components/shared
touch client/src/components/shared/PageHeader.tsx
touch client/src/components/shared/DataTable.tsx
touch client/src/components/shared/SearchInput.tsx
touch client/src/components/shared/FilterDropdown.tsx
touch client/src/components/shared/ExportButton.tsx
touch client/src/components/shared/ConfirmDialog.tsx
touch client/src/components/shared/EmptyState.tsx
touch client/src/components/shared/LoadingSpinner.tsx
touch client/src/components/shared/ErrorBoundary.tsx
touch client/src/components/shared/LiquidGlassButton.tsx

# ─── HOOKS ────────────────────────────────────────────
mkdir -p client/src/hooks
touch client/src/hooks/useAuth.ts
touch client/src/hooks/useTheme.ts
touch client/src/hooks/useEmployees.ts
touch client/src/hooks/usePerformance.ts
touch client/src/hooks/useAnalytics.ts
touch client/src/hooks/useAttrition.ts
touch client/src/hooks/useLeave.ts
touch client/src/hooks/useFeedback.ts
touch client/src/hooks/useNotifications.ts
touch client/src/hooks/useOnboarding.ts
touch client/src/hooks/useExport.ts
touch client/src/hooks/useDebounce.ts

# ─── STORE ────────────────────────────────────────────
mkdir -p client/src/store
touch client/src/store/authStore.ts
touch client/src/store/themeStore.ts
touch client/src/store/employeeStore.ts
touch client/src/store/notificationStore.ts
touch client/src/store/sidebarStore.ts
touch client/src/store/index.ts

# ─── LIB ──────────────────────────────────────────────
mkdir -p client/src/lib
touch client/src/lib/api.ts
touch client/src/lib/auth.ts
touch client/src/lib/utils.ts
touch client/src/lib/validations.ts
touch client/src/lib/exportPDF.ts
touch client/src/lib/exportExcel.ts
touch client/src/lib/formatters.ts
touch client/src/lib/constants.ts

# ─── TYPES ────────────────────────────────────────────
mkdir -p client/src/types
touch client/src/types/auth.types.ts
touch client/src/types/employee.types.ts
touch client/src/types/performance.types.ts
touch client/src/types/analytics.types.ts
touch client/src/types/leave.types.ts
touch client/src/types/feedback.types.ts
touch client/src/types/notification.types.ts
touch client/src/types/ai.types.ts
touch client/src/types/index.ts

# ─── SERVICES ─────────────────────────────────────────
mkdir -p client/src/services
touch client/src/services/auth.service.ts
touch client/src/services/employee.service.ts
touch client/src/services/performance.service.ts
touch client/src/services/analytics.service.ts
touch client/src/services/ai.service.ts
touch client/src/services/leave.service.ts
touch client/src/services/feedback.service.ts
touch client/src/services/notification.service.ts
touch client/src/services/onboarding.service.ts

# ─── MIDDLEWARE & CONFIG ───────────────────────────────
mkdir -p client/src/middleware
touch client/src/middleware/auth.middleware.ts

mkdir -p client/src/config
touch client/src/config/theme.config.ts
touch client/src/config/navigation.config.ts
touch client/src/config/roles.config.ts

# ─── TESTS ────────────────────────────────────────────
mkdir -p client/__tests__/components
mkdir -p client/__tests__/hooks
touch client/__tests__/components/HeroSection.test.tsx
touch client/__tests__/components/EmployeeTable.test.tsx
touch client/__tests__/hooks/useAuth.test.ts

# ─── CLIENT CONFIG FILES ──────────────────────────────
touch client/components.json
touch client/next.config.js
touch client/tailwind.config.ts
touch client/tsconfig.json
touch client/postcss.config.js
touch client/.env.local
touch client/.env.example
touch client/package.json

# ─── SERVER CONFIG ────────────────────────────────────
mkdir -p server/src/config
touch server/src/config/db.config.ts
touch server/src/config/redis.config.ts
touch server/src/config/email.config.ts
touch server/src/config/openai.config.ts
touch server/src/config/cors.config.ts
touch server/src/config/env.config.ts

# ─── SERVER MODELS ────────────────────────────────────
mkdir -p server/src/models
touch server/src/models/User.model.ts
touch server/src/models/Department.model.ts
touch server/src/models/Goal.model.ts
touch server/src/models/PerformanceReview.model.ts
touch server/src/models/Feedback.model.ts
touch server/src/models/LeaveRequest.model.ts
touch server/src/models/Skill.model.ts
touch server/src/models/AttritionRiskScore.model.ts
touch server/src/models/Notification.model.ts
touch server/src/models/OnboardingChecklist.model.ts

# ─── SERVER CONTROLLERS ───────────────────────────────
mkdir -p server/src/controllers
touch server/src/controllers/auth.controller.ts
touch server/src/controllers/employee.controller.ts
touch server/src/controllers/department.controller.ts
touch server/src/controllers/performance.controller.ts
touch server/src/controllers/goal.controller.ts
touch server/src/controllers/analytics.controller.ts
touch server/src/controllers/ai.controller.ts
touch server/src/controllers/leave.controller.ts
touch server/src/controllers/feedback.controller.ts
touch server/src/controllers/notification.controller.ts
touch server/src/controllers/onboarding.controller.ts
touch server/src/controllers/report.controller.ts
touch server/src/controllers/skill.controller.ts

# ─── SERVER ROUTES ────────────────────────────────────
mkdir -p server/src/routes
touch server/src/routes/auth.routes.ts
touch server/src/routes/employee.routes.ts
touch server/src/routes/department.routes.ts
touch server/src/routes/performance.routes.ts
touch server/src/routes/goal.routes.ts
touch server/src/routes/analytics.routes.ts
touch server/src/routes/ai.routes.ts
touch server/src/routes/leave.routes.ts
touch server/src/routes/feedback.routes.ts
touch server/src/routes/notification.routes.ts
touch server/src/routes/onboarding.routes.ts
touch server/src/routes/report.routes.ts
touch server/src/routes/skill.routes.ts
touch server/src/routes/index.ts

# ─── SERVER MIDDLEWARE ────────────────────────────────
mkdir -p server/src/middleware
touch server/src/middleware/auth.middleware.ts
touch server/src/middleware/rbac.middleware.ts
touch server/src/middleware/validate.middleware.ts
touch server/src/middleware/rateLimit.middleware.ts
touch server/src/middleware/error.middleware.ts
touch server/src/middleware/logger.middleware.ts
touch server/src/middleware/upload.middleware.ts

# ─── SERVER SERVICES ──────────────────────────────────
mkdir -p server/src/services
touch server/src/services/auth.service.ts
touch server/src/services/employee.service.ts
touch server/src/services/department.service.ts
touch server/src/services/performance.service.ts
touch server/src/services/goal.service.ts
touch server/src/services/analytics.service.ts
touch server/src/services/ai.service.ts
touch server/src/services/leave.service.ts
touch server/src/services/feedback.service.ts
touch server/src/services/notification.service.ts
touch server/src/services/email.service.ts
touch server/src/services/onboarding.service.ts
touch server/src/services/report.service.ts
touch server/src/services/skill.service.ts

# ─── QUEUES ───────────────────────────────────────────
mkdir -p server/src/queues
touch server/src/queues/email.queue.ts
touch server/src/queues/notification.queue.ts
touch server/src/queues/aiProcess.queue.ts
touch server/src/queues/report.queue.ts
touch server/src/queues/index.ts

# ─── WORKERS ──────────────────────────────────────────
mkdir -p server/src/workers
touch server/src/workers/email.worker.ts
touch server/src/workers/notification.worker.ts
touch server/src/workers/aiProcess.worker.ts
touch server/src/workers/report.worker.ts

# ─── SERVER UTILS ─────────────────────────────────────
mkdir -p server/src/utils
touch server/src/utils/jwt.utils.ts
touch server/src/utils/hash.utils.ts
touch server/src/utils/response.utils.ts
touch server/src/utils/pagination.utils.ts
touch server/src/utils/date.utils.ts
touch server/src/utils/cache.utils.ts

# ─── SERVER VALIDATIONS ───────────────────────────────
mkdir -p server/src/validations
touch server/src/validations/auth.validation.ts
touch server/src/validations/employee.validation.ts
touch server/src/validations/performance.validation.ts
touch server/src/validations/goal.validation.ts
touch server/src/validations/leave.validation.ts
touch server/src/validations/feedback.validation.ts

# ─── SERVER TYPES & CONSTANTS ─────────────────────────
mkdir -p server/src/types
touch server/src/types/express.d.ts
touch server/src/types/index.ts

mkdir -p server/src/constants
touch server/src/constants/roles.ts
touch server/src/constants/permissions.ts
touch server/src/constants/messages.ts

touch server/src/app.ts

# ─── SERVER TESTS ─────────────────────────────────────
mkdir -p server/__tests__/unit
mkdir -p server/__tests__/integration
touch server/__tests__/unit/auth.test.ts
touch server/__tests__/unit/employee.test.ts
touch server/__tests__/integration/auth.integration.test.ts
touch server/__tests__/integration/employee.integration.test.ts

# ─── SERVER ROOT FILES ────────────────────────────────
touch server/server.ts
touch server/tsconfig.json
touch server/.env
touch server/.env.example
touch server/package.json

# ─── ML SERVICE ───────────────────────────────────────
mkdir -p ml-service/app/models
mkdir -p ml-service/app/routes
mkdir -p ml-service/app/services
mkdir -p ml-service/app/utils
touch ml-service/app/models/attrition_model.pkl
touch ml-service/app/models/performance_model.pkl
touch ml-service/app/models/skill_gap_model.pkl
touch ml-service/app/routes/attrition.py
touch ml-service/app/routes/performance.py
touch ml-service/app/routes/skill_gap.py
touch ml-service/app/services/attrition_predictor.py
touch ml-service/app/services/performance_scorer.py
touch ml-service/app/services/skill_analyzer.py
touch ml-service/app/utils/preprocessor.py
touch ml-service/app/utils/validator.py
touch ml-service/app/__init__.py

mkdir -p ml-service/notebooks
mkdir -p ml-service/data
mkdir -p ml-service/tests
touch ml-service/notebooks/attrition_model_training.ipynb
touch ml-service/notebooks/performance_model_training.ipynb
touch ml-service/notebooks/skill_gap_analysis.ipynb
touch ml-service/data/sample_employees.csv
touch ml-service/data/training_data.csv
touch ml-service/tests/test_attrition.py
touch ml-service/app.py
touch ml-service/requirements.txt
touch ml-service/Dockerfile
touch ml-service/.env
touch ml-service/.env.example

# ─── DOCKER ───────────────────────────────────────────
mkdir -p docker/nginx
mkdir -p docker/mongo
touch docker/docker-compose.yml
touch docker/docker-compose.dev.yml
touch docker/docker-compose.prod.yml
touch docker/nginx/nginx.conf
touch docker/nginx/default.conf
touch docker/mongo/init.js

# ─── INFRASTRUCTURE ───────────────────────────────────
mkdir -p infrastructure/terraform/modules/ec2
mkdir -p infrastructure/terraform/modules/s3
mkdir -p infrastructure/terraform/modules/rds
mkdir -p infrastructure/scripts
touch infrastructure/terraform/main.tf
touch infrastructure/terraform/variables.tf
touch infrastructure/terraform/outputs.tf
touch infrastructure/scripts/deploy.sh
touch infrastructure/scripts/seed.sh

# ─── DOCS ─────────────────────────────────────────────
mkdir -p docs/postman
touch docs/API.md
touch docs/SETUP.md
touch docs/ARCHITECTURE.md
touch docs/RBAC.md
touch docs/ML_MODEL.md
touch docs/postman/PulseHR.postman_collection.json

# ─── ROOT FILES ───────────────────────────────────────
touch .gitignore
touch .prettierrc
touch .eslintrc.json
touch README.md
touch turbo.json

echo ""
echo "✅ PulseHR project structure created successfully!"
echo ""
echo "📊 Stats:"
echo "   Folders: $(find . -type d | wc -l)"
echo "   Files:   $(find . -type f | wc -l)"
echo ""
echo "🚀 Next step: cd ~/Music/pulseHR && ls"
