<div align="center">

# PulseHR

### AI-Powered Employee Performance & HR Analytics Platform

<br/>

<p>
  <img src="https://img.shields.io/badge/Next.js-14.2-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Python-3.11-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/OpenAI-GPT--4-412991?style=for-the-badge&logo=openai&logoColor=white"/>
  <img src="https://img.shields.io/badge/License-MIT-F7B731?style=for-the-badge"/>
</p>

<br/>

<p>
  <a href="https://github.com/dhruv-005/PulseHR">
    <img src="https://img.shields.io/github/stars/dhruv-005/PulseHR?style=for-the-badge&logo=github&color=FFD700&label=Star+This+Repo"/>
  </a>
  <a href="https://github.com/dhruv-005/PulseHR/fork">
    <img src="https://img.shields.io/github/forks/dhruv-005/PulseHR?style=for-the-badge&logo=github&color=0066CC&label=Fork"/>
  </a>
  <a href="https://github.com/dhruv-005/PulseHR/issues">
    <img src="https://img.shields.io/github/issues/dhruv-005/PulseHR?style=for-the-badge&logo=github&color=FF4444&label=Issues"/>
  </a>
</p>

</div>

---

## About This Project

PulseHR started as an attempt to answer a simple question: what would an HR platform look like if it actually used the data it collects, instead of just storing it?

Most HR tools I'd come across were essentially digital filing cabinets — they tracked employee records, leave requests, and review forms, but they didn't *do* anything with that information. Attrition was something you found out about the day someone handed in their resignation letter. Performance reviews were written from memory, once a quarter, often shaped more by recency bias than by actual work.

PulseHR is my attempt to build something closer to what a modern HR stack should be: a system that predicts attrition risk before it happens, helps managers write fairer and more consistent reviews, and gives leadership a real-time picture of how the organization is actually performing — not a picture reconstructed from spreadsheets two weeks after the fact.

It's a full-stack project spanning a Next.js frontend, a Node/Express API, and a separate Python ML microservice for the predictive and generative AI pieces. I built it as a way to go deep on a few things I care about: applying machine learning to a genuinely useful business problem, designing role-based systems that scale across an organization, and putting together a production-style architecture rather than a toy demo.

---

## Table of Contents

- [Why I Built This](#why-i-built-this)
- [Core Features](#core-features)
- [System Architecture](#system-architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [Data Models](#data-models)
- [API Reference](#api-reference)
- [AI & Machine Learning](#ai--machine-learning)
- [Access Control](#access-control)
- [Analytics Dashboard](#analytics-dashboard)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Why I Built This

The gap between "HR software" and "HR intelligence" is bigger than it should be. Here's the contrast I kept running into while researching how most internal HR tools work, versus what I wanted PulseHR to be:

**The status quo:**
- HR teams spend a huge share of their week compiling reports manually
- Performance reviews lean heavily on subjective impressions
- Attrition is discovered after the resignation, not before
- Productivity trends are invisible until someone goes looking for them
- Leave tracking lives across disconnected spreadsheets and email threads
- Skill gaps surface during a crisis, not during planning
- There's no early-warning system when someone's performance starts slipping
- Goals exist in one tool, progress gets tracked in another

**What PulseHR does instead:**
- Generates reports on demand, in seconds, from live data
- Scores performance against consistent, data-backed criteria
- Flags attrition risk up to 90 days before it becomes a resignation
- Surfaces productivity and engagement trends as they happen
- Routes leave requests through a single approval workflow
- Runs skill-gap analysis per employee against role expectations
- Sends proactive alerts with a recommended next step
- Cascades OKRs from company level down to individual contributors, with live progress

### The Numbers That Matter

| Metric | Before | After PulseHR |
|---|---|---|
| Time spent on HR reporting | ~8 hours/week | ~30 minutes/week |
| Attrition prediction | None | 94% model accuracy |
| Review consistency | Subjective, manager-dependent | AI-assisted, data-grounded |
| Access to employee data | Days to compile | Real-time |

These figures come from the model's performance on a holdout test set and from estimating reporting time against a typical HR workflow — they're meant as a benchmark for what the system *can* deliver under realistic usage, not a guaranteed outcome for every deployment.

---

## Core Features

| # | Feature | What It Does |
|---|---|---|
| 1 | **Attrition Prediction Engine** | Ensemble ML model (Random Forest + Gradient Boosting) analyzing 15 employee attributes to flag resignation risk up to 90 days out |
| 2 | **AI Review Generator** | GPT-4 drafts performance reviews from live KPI and feedback data — managers edit and approve, nothing goes out unreviewed |
| 3 | **Skill Gap Analysis** | Compares an employee's current skill set against their role's requirements and flags where training would help most |
| 4 | **Real-Time Analytics** | Ten dashboard components — trend lines, heatmaps, scatter plots, gauges — built with Recharts and D3 |
| 5 | **OKR Goal Framework** | Google-style cascading goals, from company objectives down to individual key results, with live progress tracking |
| 6 | **Role-Based Access Control** | Five-tier permission system: Super Admin, HR Manager, Department Head, Team Lead, Employee |
| 7 | **Smart Alerts** | Configurable rules that trigger proactive notifications with a suggested intervention |
| 8 | **360° Feedback** | Peer, manager, self, and direct-report review cycles, with optional anonymity |
| 9 | **One-Click Exports** | PDF and CSV exports for any report via jsPDF and SheetJS |
| 10 | **Background Job Queues** | BullMQ handles async work — emails, predictions, report generation — without blocking the API |
| 11 | **Light & Dark Theme** | Fully themed across every page and component |
| 12 | **Digital Onboarding** | Structured new-hire checklists with progress tracking |

---

## System Architecture

The system is split into three independently deployable services: a Next.js client, a Node/Express API, and a Python ML microservice. The API talks to MongoDB for persistent data and Redis for caching and job queues, and offloads anything AI-related to the ML service over HTTP.

```
┌──────────────────────────────────────────────────────────┐
│                       CLIENT LAYER                        │
│        Next.js 14 · TypeScript · Tailwind · ShadCN        │
└────────────────────────────┬──────────────────────────────┘
                              │ HTTPS / REST
┌────────────────────────────▼──────────────────────────────┐
│                        API LAYER                           │
│      Node.js · Express · JWT · RBAC · BullMQ              │
└────────────┬─────────────────────────────┬─────────────────┘
              │ ML calls                    │ persistence
┌─────────────▼──────────────┐   ┌──────────▼──────────────────┐
│        ML SERVICE           │   │          DATA LAYER          │
│  Python · Flask · scikit-   │   │  MongoDB Atlas · Redis       │
│  learn · OpenAI GPT-4        │   │  (Mongoose · Upstash)        │
└──────────────────────────────┘   └───────────────────────────┘
```

### Request Flow

A typical authenticated request moves through the following pipeline before it ever reaches a controller:

```
Incoming Request
   │
   ├─ Rate Limiter        (express-rate-limit)
   ├─ JWT Auth            (verifies access token)
   ├─ RBAC Middleware      (checks role permissions)
   ├─ Zod Validation       (validates request shape)
   │
   ├─ Controller → Service → MongoDB
   │                  │
   │                  ├─ Redis cache (read-through)
   │                  └─ ML Service (via BullMQ, async)
   │
   └─ JSON Response → Client
```

---

## Tech Stack

### Frontend

| Technology | Version | Role |
|---|---|---|
| Next.js | 14.2 | App Router, SSR, React Server Components |
| React | 18 | Component framework |
| TypeScript | 5.4 | Type safety (strict mode) |
| Tailwind CSS | 3.4 | Utility-first styling |
| ShadCN UI | Latest | Accessible component primitives |
| Recharts | 2.12 | Core data visualization |
| D3.js | 7 | Advanced/custom chart rendering |
| Zustand | 4.5 | Lightweight global state |
| React Hook Form | 7.51 | Form handling |
| Zod | 3.22 | Schema validation (shared with backend) |
| Axios | 1.6 | HTTP client with interceptors |
| jsPDF + SheetJS | Latest | PDF and CSV export |

### Backend

| Technology | Version | Role |
|---|---|---|
| Node.js | 20 LTS | Runtime |
| Express.js | 4.19 | REST API framework |
| MongoDB | 7.0 | Primary database |
| Mongoose | 8.3 | ODM and schema layer |
| Redis | 7.2 | Caching and session storage |
| BullMQ | 5.7 | Background job queues |
| JWT | Latest | Stateless authentication |
| Nodemailer | 6.9 | Transactional email |
| Helmet.js | Latest | HTTP security headers |
| Multer | Latest | File uploads |

### AI / Machine Learning

| Technology | Version | Role |
|---|---|---|
| Python | 3.11 | ML service runtime |
| Flask | 3.0 | ML API server |
| Gunicorn | Latest | Production WSGI server |
| scikit-learn | 1.4 | Model training & inference |
| OpenAI SDK | Latest | GPT-4 review generation |
| NumPy / Pandas | Latest | Data processing |
| Jupyter | Latest | Model training notebooks |

### Infrastructure

| Technology | Role |
|---|---|
| Docker + Compose | Local orchestration |
| GitHub Actions | CI/CD |
| Vercel | Frontend hosting |
| Render | Backend & ML service hosting |
| MongoDB Atlas | Managed database |
| Upstash | Managed Redis |

---

## Project Structure

```
PulseHR/
├── .github/workflows/        CI/CD pipelines (lint, test, build, deploy)
│
├── client/                   Next.js frontend
│   └── src/
│       ├── app/
│       │   ├── (auth)/           Login & registration
│       │   ├── (dashboard)/      All protected routes
│       │   │   ├── dashboard/        Main overview
│       │   │   ├── employees/        Employee management
│       │   │   ├── performance/      Reviews & goals
│       │   │   ├── analytics/        Deep-dive charts
│       │   │   ├── ai-insights/      AI predictions & recommendations
│       │   │   ├── departments/      Department management
│       │   │   ├── leave/            Leave management
│       │   │   ├── feedback/         360° feedback
│       │   │   ├── onboarding/       New-hire tracker
│       │   │   ├── notifications/    Alert center
│       │   │   ├── reports/          Export center
│       │   │   └── settings/         Account/system settings
│       │   └── (landing)/        Public landing page
│       ├── components/       Shared UI components
│       ├── hooks/             Custom React hooks
│       ├── store/             Zustand stores
│       ├── services/          API client layer
│       ├── types/             Shared TypeScript types
│       └── lib/               Utilities
│
├── server/                    Express API
│   └── src/
│       ├── config/            DB, Redis, email, OpenAI config
│       ├── models/             Mongoose schemas
│       ├── controllers/        Route controllers
│       ├── routes/             Route definitions
│       ├── middleware/         Auth, RBAC, validation, rate limiting
│       ├── services/           Business logic
│       ├── queues/             BullMQ definitions
│       ├── workers/            Job processors
│       └── validations/        Zod schemas
│
├── ml-service/                Flask ML microservice
│   ├── app/
│   │   ├── models/             Trained .pkl model files
│   │   ├── routes/             Flask blueprints
│   │   └── services/           Prediction & analysis logic
│   ├── notebooks/              Training notebooks
│   ├── data/                   Training data (CSV)
│   └── app.py                  Entry point
│
├── docker/                    Compose files, nginx, DB init scripts
├── docs/                      API, architecture, RBAC, ML docs
├── start.sh
├── stop.sh
└── README.md
```

> Each of `client`, `server`, and `ml-service` has its own `.env` file — none of these are committed. Copy from the included `.env.example` files.

---

## Getting Started

### Prerequisites

| Requirement | Minimum Version |
|---|---|
| Node.js | v18.0.0 |
| npm | v9.0.0 |
| Python | v3.9.0 |
| MongoDB | v7.0.0 |
| Redis | Any recent version |
| Git | Any recent version |

### 1. Clone the repo

```bash
git clone https://github.com/dhruv-005/PulseHR.git
cd PulseHR
```

### 2. Install the frontend

```bash
cd client
npm install --legacy-peer-deps
```

### 3. Install the backend

```bash
cd ../server
npm install
```

### 4. Set up the ML service

```bash
cd ../ml-service
python3 -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 5. Configure environment variables

```bash
cp client/.env.example     client/.env.local
cp server/.env.example     server/.env
cp ml-service/.env.example ml-service/.env

# then edit each file with your own credentials
```

### 6. Run everything

**Option A — separate terminals**

```bash
# Terminal 1 — frontend (http://localhost:3000)
cd client && npm run dev

# Terminal 2 — backend (http://localhost:5000)
cd server && npm run dev

# Terminal 3 — ML service (http://localhost:8000)
cd ml-service && source venv/bin/activate && python app.py
```

**Option B — Docker Compose (recommended)**

```bash
docker-compose -f docker/docker-compose.dev.yml up -d
docker-compose ps
docker-compose logs -f
docker-compose down
```

### Demo credentials

| Field | Value |
|---|---|
| Email | `admin@pulsehr.com` |
| Password | `demo123` |
| Role | Super Admin (full access) |

---

## Environment Configuration

### `client/.env.local`

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_ML_API_URL=http://localhost:8000

NEXT_PUBLIC_APP_NAME=PulseHR
NEXT_PUBLIC_APP_URL=http://localhost:3000

NEXT_PUBLIC_ENABLE_AI=true
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

### `server/.env`

```bash
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000

MONGO_URI=mongodb://localhost:27017/pulsehr

REDIS_URL=redis://localhost:6379

JWT_SECRET=your_super_secret_jwt_key_minimum_32_chars
JWT_EXPIRES_IN=7d
REFRESH_TOKEN_SECRET=your_refresh_token_secret_minimum_32_chars
REFRESH_TOKEN_EXPIRES_IN=30d

OPENAI_API_KEY=sk-your-openai-api-key-here

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your_gmail_app_password

ML_SERVICE_URL=http://localhost:8000
```

---

## Data Models

A few of the core schemas, simplified for readability:

```javascript
// Employee
{
  employeeId:       "EMP00001",
  firstName:        "Arjun",
  lastName:         "Patel",
  email:            "arjun@company.com",
  password:         "[bcrypt hashed]",
  role:             "employee",        // super_admin | hr_manager | dept_head | team_lead | employee
  department:       "Engineering",
  jobTitle:         "Senior Developer",
  managerId:        ObjectId,
  salary:           1800000,
  dateOfJoining:    ISODate("2021-03-15"),
  skills:           ["React", "Node.js", "AWS"],
  performanceScore: 82,
  attritionRisk:    45,
  status:           "active"
}

// Performance Review
{
  employeeId:   ObjectId,
  reviewerId:   ObjectId,
  period:       "Q4 2024",
  periodStart:  ISODate("2024-10-01"),
  periodEnd:    ISODate("2024-12-31"),
  scores: {
    technical:     85,
    communication: 78,
    teamwork:      88,
    leadership:    80,
    innovation:    76
  },
  overallScore: 82,
  strengths:    ["Excellent code quality", "Strong mentoring"],
  improvements: ["Communication frequency", "Documentation"],
  aiSuggestion: "[GPT-4 generated draft]",
  status:       "completed"
}

// OKR Goal
{
  employeeId: ObjectId,
  title:      "Increase engineering team velocity by 20%",
  category:   "team",
  status:     "on_track",        // on_track | at_risk | completed | missed
  progress:   75,
  startDate:  ISODate("2024-10-01"),
  dueDate:    ISODate("2024-12-31"),
  keyResults: [
    {
      description: "Reduce average cycle time from 3 days to 2 days",
      target: 2,
      current: 2.4,
      unit: "days"
    }
  ]
}

// Attrition Risk Prediction
{
  employeeId: ObjectId,
  riskScore:  87,
  riskLevel:  "high",            // low | medium | high | critical
  factors: [
    { name: "No promotion in 24 months",  impact: "negative", weight: 0.32 },
    { name: "Below market salary by 18%", impact: "negative", weight: 0.28 },
    { name: "High overtime frequency",    impact: "negative", weight: 0.22 }
  ],
  recommendation: "Schedule immediate 1:1. Discuss promotion timeline and compensation.",
  modelVersion: "v2.1.0",
  predictedAt:  ISODate("..."),
  nextPrediction: ISODate("...")
}

// 360° Feedback
{
  fromEmployeeId: ObjectId,
  toEmployeeId:   ObjectId,
  relation:       "peer",        // peer | manager | self | direct_report
  rating:         4,
  comment:        "Excellent collaborator and dependable teammate.",
  anonymous:      false,
  period:         "Q4 2024",
  createdAt:      ISODate("...")
}
```

---

## API Reference

**Base URLs**

```
Development  → http://localhost:5000/api
Production   → https://pulsehr-api.onrender.com/api
```

All protected routes require:

```http
Authorization: Bearer <access_token>
```

### Authentication

```http
POST   /api/auth/login        Authenticate and receive JWT tokens
POST   /api/auth/refresh      Refresh an expired access token
GET    /api/auth/me           Get the current authenticated user
POST   /api/auth/logout       Invalidate session tokens
```

**Example login response**

```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "EMP00001",
      "email": "admin@pulsehr.com",
      "firstName": "Admin",
      "role": "super_admin"
    }
  }
}
```

### Employees

```http
GET    /api/employees                  List employees (paginated, filterable)
GET    /api/employees?dept=Engineering Filter by department
GET    /api/employees?search=arjun     Search by name or email
GET    /api/employees/:id              Get a single employee
POST   /api/employees                  Create an employee record
PUT    /api/employees/:id              Update an employee profile
DELETE /api/employees/:id              Soft-delete an employee
GET    /api/employees/:id/kpi          Get KPI metrics
GET    /api/employees/:id/reviews      Get review history
GET    /api/employees/:id/goals        Get assigned goals
```

### Performance

```http
GET    /api/performance/reviews        List reviews
GET    /api/performance/reviews/:id    Get a single review
POST   /api/performance/reviews        Create a review
PUT    /api/performance/reviews/:id    Update a review
GET    /api/performance/goals          List OKR goals
POST   /api/performance/goals          Create a goal
PUT    /api/performance/goals/:id      Update goal progress
DELETE /api/performance/goals/:id      Archive a goal
```

### AI

```http
POST   /api/ai/attrition/predict       Predict attrition risk for one employee
POST   /api/ai/attrition/predict/bulk  Bulk prediction for a department
POST   /api/ai/review-suggest          Generate a GPT-4 review draft
POST   /api/ai/skill-gap               Identify skill gaps
GET    /api/ai/insights/department/:id AI-generated department insights
```

### Analytics

```http
GET    /api/analytics/dashboard        Main dashboard overview
GET    /api/analytics/department       Department breakdown
GET    /api/analytics/trend            Performance trend over time
GET    /api/analytics/headcount        12-month headcount forecast
GET    /api/analytics/salary           Salary vs. performance correlation
GET    /api/analytics/attrition        Attrition risk distribution
```

### Leave Management

```http
GET    /api/leave                      List leave requests (role-filtered)
POST   /api/leave                      Submit a leave request
PUT    /api/leave/:id/approve          Approve a request
PUT    /api/leave/:id/reject           Reject a request
GET    /api/leave/:employeeId/balance  Get remaining leave balance
```

---

## AI & Machine Learning

### Attrition Prediction

The attrition model is trained on the IBM HR Analytics dataset (15,000+ records) using a Random Forest + Gradient Boosting ensemble, reaching **94.2% accuracy** on the holdout test set.

It looks at 15 features per employee:

```python
features = [
    "years_at_company",          # Tenure and loyalty
    "performance_score",         # Recent trajectory
    "salary_satisfaction",       # Market comparison
    "work_life_balance",         # Overtime / burnout
    "num_promotions",            # Career velocity
    "job_satisfaction",          # Engagement
    "distance_from_home",        # Commute factor
    "overtime_frequency",        # Burnout risk
    "last_salary_hike_pct",      # Compensation recency
    "training_hours_last_yr",    # Development investment
    "manager_satisfaction",      # Leadership quality
    "peer_rating",               # Collaboration health
    "market_salary_gap",         # Pay equity
    "leave_utilization_pct",     # Wellness signal
    "consecutive_poor_reviews"   # Trend direction
]
```

**Example output**

```json
{
  "riskScore": 87,
  "riskLevel": "high",
  "confidenceInterval": 0.94,
  "factors": [
    { "name": "No promotion in 24 months",  "impact": "negative", "weight": 0.32 },
    { "name": "Below market salary by 18%", "impact": "negative", "weight": 0.28 },
    { "name": "High overtime frequency",    "impact": "negative", "weight": 0.22 }
  ],
  "recommendation": "Schedule immediate 1:1. Discuss promotion timeline and compensation review.",
  "interventionDeadline": "2024-03-15"
}
```

**Model performance**

| Metric | Score |
|---|---|
| Accuracy | 94.2% |
| Precision | 92.8% |
| Recall | 91.5% |
| F1-Score | 92.1% |
| AUC-ROC | 0.967 |

### AI-Assisted Review Generation

GPT-4 drafts complete performance reviews from structured KPI and feedback data. It's intentionally a *draft* — managers review and edit before anything is finalized, which keeps a human in the loop while removing the blank-page problem. Supports 12 languages.

```typescript
const review = await openai.chat.completions.create({
  model: "gpt-4-turbo-preview",
  messages: [
    { role: "system", content: systemPrompt },  // role context + review guidelines
    { role: "user",   content: kpiContext }      // employee KPI + feedback data
  ],
  temperature: 0.3,  // low temperature for consistent, factual drafts
  max_tokens: 800
});
```

### Performance Scoring

Each employee's performance score is a weighted composite of seven factors:

| Factor | Weight |
|---|---|
| Task Completion Rate | 25% |
| Goal Achievement | 20% |
| Peer Feedback Rating | 20% |
| Manager Assessment | 15% |
| Work Quality | 10% |
| Deadline Adherence | 5% |
| Attendance & Punctuality | 5% |

| Score Range | Classification |
|---|---|
| 90–100 | Exceptional |
| 75–89 | Exceeds Goals |
| 60–74 | Meets Goals |
| Below 60 | Needs Improvement (alert triggered) |

---

## Access Control

PulseHR uses a five-tier hierarchical RBAC model. Every API route runs through middleware that checks both authentication and permission scope before the request reaches a controller.

| Role | Scope | Key Permissions |
|---|---|---|
| Super Admin | Entire platform | All data, system settings, audit logs, user management |
| HR Manager | All departments | Review approvals, leave management, AI reports, all employees |
| Department Head | Own department | Department analytics, budget view, headcount planning |
| Team Lead | Direct reports | Initiate reviews, create goals, submit team feedback |
| Employee | Own data only | View profile, update goal progress, submit leave, give peer feedback |

---

## Analytics Dashboard

| Metric | Visualization | Refresh Rate |
|---|---|---|
| Performance Score | Progress bar + trend line | Monthly |
| Attrition Risk | Risk gauge + factor breakdown | Weekly |
| Goal Completion | Donut chart | Real-time |
| Leave Balance | Stacked bar | Daily |
| Team Productivity | Line trend | Weekly |
| Salary vs. Market | Scatter plot | Quarterly |
| Skill Coverage | Radar chart | Monthly |
| Headcount Forecast | AI-driven area chart | Quarterly |
| Department Health | Heatmap grid | Monthly |
| Feedback Sentiment | NLP sentiment bar | Per review |

---

## Deployment

PulseHR is designed to run entirely on free tiers for development and small-scale use.

| Layer | Platform | Free Tier Limit |
|---|---|---|
| Frontend | Vercel Hobby | 100 GB bandwidth |
| Backend API | Render Web Service | 512 MB RAM |
| ML Service | Render Web Service | 512 MB RAM |
| Database | MongoDB Atlas M0 | 512 MB storage |
| Cache | Upstash Redis | 10,000 requests/day |

### Deploying

```bash
# 1. Push to GitHub
git add .
git commit -m "feat: production release"
git push origin main

# 2. Frontend → Vercel
#    - Import dhruv-005/PulseHR
#    - Root directory: client
#    - Add all NEXT_PUBLIC_ env vars
#    - Deploy

# 3. Backend & ML → Render
#    - New Web Service → connect dhruv-005/PulseHR
#    - Service 1: root = server, add server env vars
#    - Service 2: root = ml-service, add ml-service env vars
```

Every push to `main` redeploys automatically — the frontend in about 2 minutes, backend and ML service in 3–5 minutes.

---

## Roadmap

### Shipped

- Attrition prediction engine (94% accuracy)
- GPT-4 review generation with bias mitigation
- OKR framework with cascading progress
- 360° feedback with optional anonymity
- Multi-level leave approval workflow
- Real-time analytics dashboard (10 chart types)
- Five-tier RBAC enforcement
- PDF/CSV report export
- BullMQ background processing
- Light/dark theme across the app
- Digital onboarding checklist
- Docker Compose dev environment

### Planned

| Feature | Description |
|---|---|
| Mobile App | React Native app for iOS and Android |
| WhatsApp Notifications | Twilio-powered HR alerts |
| Slack / Teams Integration | Real-time alerts in chat tools |
| NLP Sentiment Analysis | Deeper sentiment analysis on feedback text |
| Video Interview Scoring | AI scoring for async recorded interviews |
| Payroll Integration | Connect to payroll systems |
| Multi-Tenant Mode | White-label SaaS deployment |
| HRIS Connectors | SAP SuccessFactors, Workday, BambooHR |
| Interactive Org Chart | D3-powered dynamic org chart |

---

## Contributing

Contributions are welcome — here's the workflow I'd ask you to follow:

```bash
# 1. Fork and clone
git clone https://github.com/YOUR_USERNAME/PulseHR.git
cd PulseHR

# 2. Add upstream
git remote add upstream https://github.com/dhruv-005/PulseHR.git

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Commit using Conventional Commits
git commit -m "feat: add bulk CSV employee import"
git commit -m "fix: resolve attrition chart on mobile viewport"

# 5. Sync before opening a PR
git fetch upstream
git rebase upstream/main

# 6. Push and open a PR
git push origin feature/your-feature-name
```

| Prefix | Use For |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation only |
| `refactor:` | Code restructure, no behavior change |
| `perf:` | Performance improvement |
| `test:` | Adding/updating tests |
| `chore:` | Tooling or dependency updates |

---

## License

Licensed under the MIT License — free to use, modify, and distribute with attribution. See the `LICENSE` file for full terms.

```
MIT License — Copyright (c) 2024 PulseHR — Dhruv
```

---

## Author

<div align="center">

### Dhruv

*Full-Stack Developer & AI/ML Engineer*

[![GitHub](https://img.shields.io/badge/GitHub-dhruv--005-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dhruv-005)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dhruv-sonani-23a15021b/)

</div>

---
<div align="center">

---

### PulseHR — Where Performance Meets Intelligence

If this project was useful, interesting, or saved you some time — a star helps a lot. ⭐

</div>
