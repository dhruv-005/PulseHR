import app from "./src/app";
import { config } from "dotenv";

config();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`
  ╔═══════════════════════════════════════╗
  ║        PulseHR API Server             ║
  ║  Port: ${PORT}                          ║
  ║  Env:  ${process.env.NODE_ENV || "development"}              ║
  ╚═══════════════════════════════════════╝
  `);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("Process terminated");
    process.exit(0);
  });
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
  server.close(() => process.exit(1));
});

export default server;
