import { Router } from "express";
import { db } from "../database/connection";

export const healthRouter = Router();

// GET /api/health — usado por monitoramento/uptime checks.
healthRouter.get("/", (_req, res) => {
  try {
    db.prepare("SELECT 1").get();
    return res.json({
      status: "ok",
      database: "connected",
      timestamp: new Date().toISOString(),
    });
  } catch {
    return res.status(503).json({
      status: "error",
      database: "disconnected",
      timestamp: new Date().toISOString(),
    });
  }
});
