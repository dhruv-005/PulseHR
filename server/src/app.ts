import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { connectDB } from "./config/db.config";
import { connectRedis } from "./config/redis.config";
import routes from "./routes/index";
import { errorMiddleware } from "./middleware/error.middleware";
import { rateLimitMiddleware } from "./middleware/rateLimit.middleware";

const app = express();

// ─── MIDDLEWARE ───────────────────────────────────────
app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(rateLimitMiddleware);

// ─── HEALTH CHECK ─────────────────────────────────────
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "PulseHR API",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

// ─── ROUTES ───────────────────────────────────────────
app.use("/api", routes);

// ─── ERROR HANDLER ────────────────────────────────────
app.use(errorMiddleware);

// ─── DATABASE CONNECTIONS ─────────────────────────────
const startServer = async () => {
  await connectDB();
  await connectRedis();
};

startServer().catch(console.error);

export default app;
