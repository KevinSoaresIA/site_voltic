import { z } from "zod";

// Transforma string vazia ("") em undefined, para que campos opcionais
// enviados vazios pelo formulário não sejam rejeitados pela validação.
const optionalString = (max: number) =>
  z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.string().max(max).optional()
  );

export const contactSchema = z
  .object({
    nome: z.string().min(2, "Nome deve ter no mínimo 2 caracteres.").max(100),
    email: z.string().email("E-mail inválido.").max(150),
    telefone: optionalString(20),
    empresa: optionalString(100),
    assunto: z.string().min(3, "Assunto deve ter no mínimo 3 caracteres.").max(200),
    mensagem: z.string().min(10, "Mensagem deve ter no mínimo 10 caracteres.").max(2000),
    consent: z.literal(true, {
      message: "É necessário aceitar os termos de privacidade (LGPD) para enviar.",
    }),
  })
  .strict();

export type ContactInput = z.infer<typeof contactSchema>;
