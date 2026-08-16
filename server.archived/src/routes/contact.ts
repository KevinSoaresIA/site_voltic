import { Router } from "express";
import { db } from "../database/connection";
import { validate } from "../middleware/validate";
import { sanitizeInput, formLimiter } from "../middleware/security";
import { contactSchema, type ContactInput } from "../schemas/contactSchema";
import { successResponse } from "../utils/response";
import { logger } from "../utils/logger";

export const contactRouter = Router();

// POST /api/contact
contactRouter.post(
  "/",
  formLimiter,
  sanitizeInput,
  validate(contactSchema),
  (req, res) => {
    const data = req.body as ContactInput;

    // O prepare() é feito aqui dentro (e não no topo do arquivo) de propósito:
    // no topo, o require() deste módulo roda antes de runMigrations() no
    // index.ts, e a tabela ainda não existiria nesse momento.
    const insertContact = db.prepare(`
      INSERT INTO contacts (nome, email, telefone, empresa, assunto, mensagem, consent, ip, user_agent)
      VALUES (@nome, @email, @telefone, @empresa, @assunto, @mensagem, @consent, @ip, @userAgent)
    `);

    insertContact.run({
      nome: data.nome,
      email: data.email,
      telefone: data.telefone ?? null,
      empresa: data.empresa ?? null,
      assunto: data.assunto,
      mensagem: data.mensagem,
      consent: data.consent ? 1 : 0,
      ip: req.ip ?? null,
      userAgent: req.get("user-agent") ?? null,
    });

    logger.info({ email: data.email, assunto: data.assunto }, "Novo contato recebido");

    return res
      .status(201)
      .json(successResponse("Recebemos seu contato! Em breve nossa equipe responderá."));
  }
);
