import { Router } from "express";
import { db } from "../database/connection";
import { validate } from "../middleware/validate";
import { sanitizeInput, formLimiter } from "../middleware/security";
import { quoteSchema, type QuoteInput } from "../schemas/quoteSchema";
import { successResponse } from "../utils/response";
import { logger } from "../utils/logger";

export const quoteRouter = Router();

// POST /api/quote
quoteRouter.post(
  "/",
  formLimiter,
  sanitizeInput,
  validate(quoteSchema),
  (req, res) => {
    const data = req.body as QuoteInput;

    // prepare() dentro do handler: veja o comentário equivalente em contact.ts.
    const insertQuote = db.prepare(`
      INSERT INTO quotes (nome, email, telefone, empresa, produto, vazao, altura_manometrica, fluido, mensagem, consent, ip, user_agent)
      VALUES (@nome, @email, @telefone, @empresa, @produto, @vazao, @alturaManometrica, @fluido, @mensagem, @consent, @ip, @userAgent)
    `);

    insertQuote.run({
      nome: data.nome,
      email: data.email,
      telefone: data.telefone ?? null,
      empresa: data.empresa ?? null,
      produto: data.produto,
      vazao: data.vazao ?? null,
      alturaManometrica: data.alturaManometrica ?? null,
      fluido: data.fluido ?? null,
      mensagem: data.mensagem,
      consent: data.consent ? 1 : 0,
      ip: req.ip ?? null,
      userAgent: req.get("user-agent") ?? null,
    });

    logger.info({ email: data.email, produto: data.produto }, "Novo pedido de orçamento recebido");

    return res
      .status(201)
      .json(
        successResponse(
          "Pedido de orçamento recebido! Nossa equipe comercial entrará em contato."
        )
      );
  }
);
