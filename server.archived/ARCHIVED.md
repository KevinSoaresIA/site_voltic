# Este backend está arquivado

**Decisão (16 ago 2026):** o site usa apenas o WhatsApp como canal de envio dos
formulários (Contato e Trabalhe Conosco). Este backend Node.js/Express — que
já estava pronto (validação, rate limiting, SQLite, LGPD consent) — nunca chegou
a ser conectado ao frontend e foi arquivado em vez de mantido sem uso.

Contexto completo da decisão: ver a auditoria "Raio-X Backend Voltic"
(publicada como artifact na conversa que resultou neste arquivamento).

## O que mudou

- A pasta foi renomeada de `server/` para `server.archived/` (com histórico do
  Git preservado — é um "rename", não um delete+add).
- Nada foi apagado: código-fonte, `.env`, banco SQLite (`data/voltic.db`) e
  `node_modules` continuam todos aqui.
- O `.gitignore` da raiz do projeto foi atualizado para apontar para
  `server.archived/` em vez de `server/`.

## Se um dia quiserem reativar

1. Renomeie de volta: `git mv server.archived server` (ou o nome que preferir).
2. Reverta a entrada correspondente no `.gitignore` da raiz.
3. Conecte os formulários do frontend (`src/pages/Contato.tsx` e
   `src/pages/TrabalheConosco.tsx`) às rotas `POST /api/contact` e
   `POST /api/careers` — hoje eles só abrem um link do WhatsApp, não chamam
   esta API.
4. Antes de subir para produção de verdade, aplicar os itens de "Segurança
   obrigatória" da auditoria: hospedagem com HTTPS, CAPTCHA/honeypot nos
   formulários, backup automatizado do SQLite, e trocar a autenticação de
   `/api/submissions` de query string para header.

O `README.md` nesta mesma pasta continua com a documentação técnica completa
(rotas, variáveis de ambiente, como rodar localmente).
