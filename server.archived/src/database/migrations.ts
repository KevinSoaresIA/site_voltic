import { db } from "./connection";
import { logger } from "../utils/logger";

// Cria as tabelas do banco caso ainda não existam. Seguro para rodar
// múltiplas vezes (idempotente) — usado tanto no start do servidor
// quanto via "npm run migrate".
export function runMigrations(): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL,
      telefone TEXT,
      empresa TEXT,
      assunto TEXT NOT NULL,
      mensagem TEXT NOT NULL,
      consent INTEGER NOT NULL DEFAULT 1,
      ip TEXT,
      user_agent TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      status TEXT NOT NULL DEFAULT 'novo'
    );
  `);

  db.exec(`
    CREATE TABLE IF NOT EXISTS careers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL,
      telefone TEXT,
      cargo_desejado TEXT NOT NULL,
      experiencia TEXT NOT NULL,
      link_linkedin TEXT,
      consent INTEGER NOT NULL DEFAULT 1,
      ip TEXT,
      user_agent TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      status TEXT NOT NULL DEFAULT 'novo'
    );
  `);

  db.exec(`
    CREATE TABLE IF NOT EXISTS quotes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL,
      telefone TEXT,
      empresa TEXT,
      produto TEXT NOT NULL,
      vazao TEXT,
      altura_manometrica TEXT,
      fluido TEXT,
      mensagem TEXT NOT NULL,
      consent INTEGER NOT NULL DEFAULT 1,
      ip TEXT,
      user_agent TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      status TEXT NOT NULL DEFAULT 'novo'
    );
  `);

  logger.info("Migrações executadas com sucesso (contacts, careers, quotes).");
}

// Permite rodar as migrações isoladamente via "npm run migrate".
if (require.main === module) {
  runMigrations();
}
