import { z } from "zod";

const optionalString = (max: number) =>
  z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.string().max(max).optional()
  );

export const quoteSchema = z
  .object({
    nome: z.string().min(2, "Nome deve ter no mínimo 2 caracteres.").max(100),
    email: z.string().email("E-mail inválido.").max(150),
    telefone: optionalString(20),
    empresa: optionalString(100),
    produto: z
      .string()
      .min(2, "Produto deve ter no mínimo 2 caracteres.")
      .max(100),
    vazao: optionalString(50),
    alturaManometrica: optionalString(50),
    fluido: optionalString(100),
    mensagem: z.string().min(10, "Mensagem deve ter no mínimo 10 caracteres.").max(2000),
    consent: z.literal(true, {
      message: "É necessário aceitar os termos de privacidade (LGPD) para enviar.",
    }),
  })
  .strict();

export type QuoteInput = z.infer<typeof quoteSchema>;
