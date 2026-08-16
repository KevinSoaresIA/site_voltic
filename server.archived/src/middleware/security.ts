import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import type { Request, Response, NextFunction } from "express";
import { env } from "../config/env";

// ---------------------------------------------------------------------------
// Helmet — cabeçalhos de segurança HTTP
// ---------------------------------------------------------------------------
// Observação: os nomes de opção usados aqui são os nomes reais aceitos pelo
// pacote "helmet" (contentSecurityPolicy, hsts, frameguard, noSniff,
// referrerPolicy, dnsPrefetchControl, permittedCrossDomainPolicies).
export const helmetMiddleware = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      frameAncestors: ["'self'"],
      baseUri: ["'self'"],
      formAction: ["'self'"],
    },
  },
  // strictTransportSecurity (HSTS)
  hsts: {
    maxAge: 31536000, // 1 ano, em segundos
    includeSubDomains: true,
  },
  // xFrameOptions
  frameguard: {
    action: "sameorigin",
  },
  // xContentTypeOptions
  noSniff: true,
  // referrerPolicy
  referrerPolicy: {
    policy: "no-referrer-when-downgrade",
  },
  // xDnsPrefetchControl
  dnsPrefetchControl: {
    allow: false,
  },
  // permittedCrossDomainPolicies
  permittedCrossDomainPolicies: {
    permittedPolicies: "none",
  },
});

// ---------------------------------------------------------------------------
// CORS
// ---------------------------------------------------------------------------
export const corsMiddleware = cors({
  origin(origin, callback) {
    // Requisições sem "origin" (ex.: curl, health checks, apps mobile) são
    // permitidas — não há como validar origem nesses casos.
    if (!origin || env.CORS_ORIGINS.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Não permitido pela política de CORS."));
  },
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  maxAge: 86400,
});

// ---------------------------------------------------------------------------
// Rate limiting
// ---------------------------------------------------------------------------
const rateLimitMessage = {
  success: false as const,
  message: "Muitas requisições. Aguarde um pouco antes de tentar novamente.",
};

export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: env.RATE_LIMIT_GLOBAL,
  standardHeaders: true,
  legacyHeaders: false,
  message: rateLimitMessage,
  statusCode: 429,
});

export const formLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutos
  max: env.RATE_LIMIT_FORM,
  standardHeaders: true,
  legacyHeaders: false,
  message: rateLimitMessage,
  statusCode: 429,
});

// ---------------------------------------------------------------------------
// Sanitização de input
// ---------------------------------------------------------------------------
// Limites de segurança "defesa em profundidade" — aplicados antes mesmo da
// validação com Zod, cortando qualquer string muito grande de campos
// conhecidos entre os 3 formulários (nome, email, mensagem se repetem).
const KNOWN_MAX_LENGTHS: Record<string, number> = {
  nome: 100,
  email: 150,
  mensagem: 2000,
};
const FALLBACK_MAX_LENGTH = 2000;

// Remove caracteres potencialmente perigosos para HTML/SQL injection básico.
function stripDangerousChars(value: string): string {
  return value.replace(/[<>"'&]/g, "");
}

export function sanitizeInput(req: Request, res: Response, next: NextFunction) {
  const body = req.body;

  // Só aceitamos objetos "planos" (sem array na raiz, sem valor nulo).
  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return res.status(400).json({
      success: false,
      message: "Formato de dados inválido. Envie um objeto JSON simples.",
    });
  }

  const sanitized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(body)) {
    // Rejeita campos aninhados (objetos ou arrays) — só aceitamos valores
    // primitivos (string, number, boolean) em cada campo do formulário.
    if (value !== null && typeof value === "object") {
      return res.status(400).json({
        success: false,
        message: `O campo "${key}" não pode conter dados aninhados (objeto ou lista).`,
      });
    }

    if (typeof value === "string") {
      let clean = stripDangerousChars(value).trim();
      const maxLength = KNOWN_MAX_LENGTHS[key] ?? FALLBACK_MAX_LENGTH;
      if (clean.length > maxLength) {
        clean = clean.slice(0, maxLength);
      }
      sanitized[key] = clean;
    } else {
      sanitized[key] = value;
    }
  }

  req.body = sanitized;
  return next();
}
