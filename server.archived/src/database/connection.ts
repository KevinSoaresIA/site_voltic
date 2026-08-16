import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";
import { env } from "../config/env";
import { logger } from "../utils/logger";

// Resolve o caminho do banco relativo à raiz do servidor (process.cwd()
// quando executado via "npm run dev"/"npm start" dentro da pasta server/).
const dbPath = path.resolve(process.cwd(), env.DATABASE_PATH);
const dbDir = path.dirname(dbPath);

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

export const db = new Database(dbPath);

// WAL melhora a performance de escrita/leitura concorrente.
db.pragma("journal_mode = WAL");
// Garante integridade referencial (não usamos FKs entre as 3 tabelas hoje,
// mas fica habilitado para evoluções futuras do schema).
db.pragma("foreign_keys = ON");

logger.info(`Banco de dados SQLite conectado em: ${dbPath}`);
