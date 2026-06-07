# PulseHR 🚀
### AI-Powered Employee Performance & HR Analytics Platform

> Where performance meets intelligence

## Tech Stack
- **Frontend:** Next.js 14, TypeScript, Tailwind CSS, ShadCN UI
- **Backend:** Node.js, Express.js, MongoDB, Redis
- **AI/ML:** OpenAI API, Python Flask ML microservice
- **DevOps:** Docker, AWS, GitHub Actions

## Quick Start

### Prerequisites
- Node.js 18+
- MongoDB
- Redis
- Python 3.9+
- Docker (optional)

### Installation

# Clone the repository
git clone https://github.com/yourusername/pulseHR.git
cd pulseHR

# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install

# Install ML service dependencies
cd ../ml-service && pip install -r requirements.txt

### Environment Setup
cp client/.env.example client/.env.local
cp server/.env.example server/.env
cp ml-service/.env.example ml-service/.env

### Run Development
# Terminal 1 - Client
cd client && npm run dev

# Terminal 2 - Server
cd server && npm run dev

# Terminal 3 - ML Service
cd ml-service && python app.py

## Features
- AI Attrition Prediction
- Performance Analytics Dashboard
- 360-Degree Feedback System
- OKR Goal Management
- Leave Management
- Smart Alerts & Notifications
- Role-Based Access Control (5 roles)
- PDF & Excel Export
- Light/Dark Theme

## License
MIT
