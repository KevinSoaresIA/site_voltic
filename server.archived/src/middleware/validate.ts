import type { NextFunction, Request, RequestHandler, Response } from "express";
import type { ZodType } from "zod";

// Middleware genérico de validação: recebe um schema Zod e valida req.body.
// Em caso de erro, encaminha o ZodError para o errorHandler central
// (via next(error)) — assim toda a formatação de erro fica em um só lugar.
export function validate(schema: ZodType): RequestHandler {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return next(result.error);
    }

    req.body = result.data;
    next();
  };
}
