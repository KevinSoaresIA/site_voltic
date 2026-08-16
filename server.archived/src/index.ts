import express from "express";
import { env } from "./config/env";
import { logger } from "./utils/logger";
import { runMigrations } from "./database/migrations";
import { db } from "./database/connection";
import { helmetMiddleware, corsMiddleware, globalLimiter } from "./middleware/security";
import { errorHandler } from "./middleware/errorHandler";
import { healthRouter } from "./routes/health";
import { contactRouter } from "./routes/contact";
import { careersRouter } from "./routes/careers";
import { quoteRouter } from "./routes/quote";
import { submissionsRouter } from "./routes/submissions";

// Garante que as tabelas existem antes de aceitar qualquer requisição.
runMigrations();

const app = express();

// Necessário para req.ip funcionar corretamente atrás de proxies/load
// balancers (comum em qualquer hospedagem Node.js: Railway, Render, etc.).
app.set("trust proxy", 1);

app.use(helmetMiddleware);
app.use(corsMiddleware);
app.use(express.json({ limit: "100kb" }));

// Rate limit global aplicado a toda a API.
app.use("/api", globalLimiter);

app.use("/api/health", healthRouter);
app.use("/api/contact", contactRouter);
app.use("/api/careers", careersRouter);
app.use("/api/quote", quoteRouter);
app.use("/api/submissions", submissionsRouter);

// Deve ser o último middleware registrado.
app.use(errorHandler);

const server = app.listen(env.PORT, () => {
  logger.info(`Servidor Voltic rodando na porta ${env.PORT}`);
});

// Graceful shutdown — fecha o servidor HTTP e a conexão com o banco antes
// de finalizar o processo, evitando corrupção de dados ou requisições
// perdidas no meio de um deploy/restart.
function shutdown(signal: string) {
  logger.info(`Recebido ${signal}, encerrando servidor...`);
  server.close(() => {
    db.close();
    logger.info("Conexão com o banco encerrada. Até logo!");
    process.exit(0);
  });
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
