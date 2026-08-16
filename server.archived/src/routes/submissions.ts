import { Router } from "express";
import { db } from "../database/connection";
import { env } from "../config/env";
import { errorResponse } from "../utils/response";

export const submissionsRouter = Router();

const TABLES = ["contacts", "careers", "quotes"] as const;

// GET /api/submissions?key=API_KEY
// Rota simples de administração: mostra contagem e últimos registros de
// cada tabela. Protegida por uma chave estática (API_KEY do .env) — não é
// autenticação robusta, é só uma trava mínima para não deixar os dados
// dos formulários totalmente públicos.
submissionsRouter.get("/", (req, res) => {
  const { key } = req.query;

  if (!key || key !== env.API_KEY) {
    return res.status(401).json(errorResponse("Não autorizado. Chave de API inválida ou ausente."));
  }

  const resultado: Record<string, { total: number; ultimos: unknown[] }> = {};

  for (const tabela of TABLES) {
    const { count } = db
      .prepare(`SELECT COUNT(*) as count FROM ${tabela}`)
      .get() as { count: number };

    const ultimos = db
      .prepare(`SELECT * FROM ${tabela} ORDER BY id DESC LIMIT 10`)
      .all();

    resultado[tabela] = { total: count, ultimos };
  }

  return res.json({ success: true, data: resultado });
});
