import { Router } from "express";
import { db } from "../database/connection";
import { validate } from "../middleware/validate";
import { sanitizeInput, formLimiter } from "../middleware/security";
import { careersSchema, type CareersInput } from "../schemas/careersSchema";
import { successResponse } from "../utils/response";
import { logger } from "../utils/logger";

export const careersRouter = Router();

// POST /api/careers
careersRouter.post(
  "/",
  formLimiter,
  sanitizeInput,
  validate(careersSchema),
  (req, res) => {
    const data = req.body as CareersInput;

    // prepare() dentro do handler: veja o comentário equivalente em contact.ts.
    const insertCareer = db.prepare(`
      INSERT INTO careers (nome, email, telefone, cargo_desejado, experiencia, link_linkedin, consent, ip, user_agent)
      VALUES (@nome, @email, @telefone, @cargoDesejado, @experiencia, @linkLinkedin, @consent, @ip, @userAgent)
    `);

    insertCareer.run({
      nome: data.nome,
      email: data.email,
      telefone: data.telefone ?? null,
      cargoDesejado: data.cargoDesejado,
      experiencia: data.experiencia,
      linkLinkedin: data.linkLinkedin ?? null,
      consent: data.consent ? 1 : 0,
      ip: req.ip ?? null,
      userAgent: req.get("user-agent") ?? null,
    });

    logger.info({ email: data.email, cargo: data.cargoDesejado }, "Novo currículo recebido");

    return res
      .status(201)
      .json(
        successResponse(
          "Currículo recebido! Entraremos em contato se houver vaga compatível."
        )
      );
  }
);
