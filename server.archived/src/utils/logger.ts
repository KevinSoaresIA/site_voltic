import pino from "pino";
import { env } from "../config/env";

// Em desenvolvimento usamos o pino-pretty para logs legíveis no terminal.
// Em produção, mantemos o log em JSON puro (mais leve e fácil de agregar).
export const logger = pino({
  level: env.LOG_LEVEL,
  transport: env.isProduction
    ? undefined
    : {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:dd/mm/yyyy HH:MM:ss",
          ignore: "pid,hostname",
        },
      },
});
