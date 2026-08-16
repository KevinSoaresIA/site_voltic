import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { logger } from "../utils/logger";
import { errorResponse } from "../utils/response";

// Handler de erro centralizado — deve ser o ÚLTIMO middleware registrado
// no app. Toda rota que chamar next(err) (ou lançar erro dentro de uma
// rota assíncrona, no Express 5) cai aqui.
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  // Erros de validação do Zod (schemas de contact/careers/quote)
  if (err instanceof ZodError) {
    const campos = err.issues.map((issue) => ({
      campo: issue.path.join(".") || "(raiz)",
      problema: issue.message,
    }));

    return res
      .status(400)
      .json(errorResponse("Dados inválidos. Verifique os campos e tente novamente.", campos));
  }

  // Erros de rate limit (express-rate-limit já responde 429 sozinho na
  // maioria dos casos, mas cobrimos aqui também caso algum erro chegue
  // encadeado até este handler).
  const status = (err as { status?: number; statusCode?: number })?.status
    ?? (err as { statusCode?: number })?.statusCode;

  if (status === 429) {
    return res
      .status(429)
      .json(errorResponse("Muitas requisições. Aguarde um pouco antes de tentar novamente."));
  }

  // Erro de CORS (lançado pelo middleware de cors quando a origem é negada)
  if (err instanceof Error && err.message.includes("CORS")) {
    return res.status(403).json(errorResponse("Origem não permitida."));
  }

  // Qualquer outro erro: logamos internamente, mas NUNCA expomos o stack
  // trace ou detalhes internos para o cliente.
  logger.error({ err }, "Erro não tratado na aplicação");

  return res
    .status(500)
    .json(errorResponse("Erro interno do servidor. Tente novamente mais tarde."));
};
