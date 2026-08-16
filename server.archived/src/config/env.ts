import { z } from "zod";

// Carrega o arquivo .env (nativo do Node, sem dependencia extra).
// Em produção, normalmente as variáveis já vêm do ambiente da hospedagem,
// então a ausência do arquivo .env não deve ser um erro fatal.
try {
  process.loadEnvFile();
} catch {
  // Sem arquivo .env — segue usando apenas process.env (ex.: hospedagem em produção).
}

const envSchema = z.object({
  PORT: z.coerce.number().int().positive().default(3001),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  CORS_ORIGIN: z.string().default("http://localhost:5173"),
  API_KEY: z
    .string()
    .min(8, "API_KEY deve ter pelo menos 8 caracteres. Defina uma chave forte no arquivo .env."),
  DATABASE_PATH: z.string().default("./data/voltic.db"),
  RATE_LIMIT_GLOBAL: z.coerce.number().int().positive().default(100),
  RATE_LIMIT_FORM: z.coerce.number().int().positive().default(5),
  LOG_LEVEL: z
    .enum(["fatal", "error", "warn", "info", "debug", "trace"])
    .default("info"),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  // eslint-disable-next-line no-console
  console.error("Erro na validação das variáveis de ambiente:");
  // eslint-disable-next-line no-console
  console.error(parsed.error.issues);
  process.exit(1);
}

const data = parsed.data;

export const env = {
  ...data,
  // CORS_ORIGIN vem como string separada por vírgula; aqui já convertemos
  // para uma lista pronta para uso no middleware de CORS.
  CORS_ORIGINS: data.CORS_ORIGIN.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
  isProduction: data.NODE_ENV === "production",
};
