import { z } from "zod";

const optionalString = (max: number) =>
  z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.string().max(max).optional()
  );

export const careersSchema = z
  .object({
    nome: z.string().min(2, "Nome deve ter no mínimo 2 caracteres.").max(100),
    email: z.string().email("E-mail inválido.").max(150),
    telefone: optionalString(20),
    cargoDesejado: z
      .string()
      .min(2, "Cargo desejado deve ter no mínimo 2 caracteres.")
      .max(100),
    experiencia: z
      .string()
      .min(10, "Descreva sua experiência com no mínimo 10 caracteres.")
      .max(2000),
    linkLinkedin: z.preprocess(
      (val) => (val === "" ? undefined : val),
      z.string().url("Link do LinkedIn inválido.").max(200).optional()
    ),
    consent: z.literal(true, {
      message: "É necessário aceitar os termos de privacidade (LGPD) para enviar.",
    }),
  })
  .strict();

export type CareersInput = z.infer<typeof careersSchema>;
