# Voltic Server

Backend Node.js/Express **portátil** para o site da Voltic Bombas — não depende de
nenhuma plataforma específica (sem Vercel, sem funções serverless). Roda em
qualquer hospedagem que suporte Node.js (VPS, Railway, Render, EC2, um servidor
próprio, etc.).

## Stack

- **Express** — servidor HTTP
- **TypeScript** — tipagem estática
- **Zod** — validação de schemas
- **better-sqlite3** — banco de dados SQLite (arquivo local, sem servidor de banco separado)
- **Helmet** — cabeçalhos de segurança HTTP
- **express-rate-limit** — limite de requisições por IP
- **pino** / **pino-pretty** — logging

## Como rodar localmente

```bash
cd server
npm install
cp .env.example .env   # ajuste os valores se necessário (já existe um .env de exemplo pronto pra dev)
npm run dev
```

O servidor sobe em `http://localhost:3001` (ou na porta definida em `PORT` no `.env`).

## Scripts disponíveis

| Script          | O que faz                                              |
|------------------|---------------------------------------------------------|
| `npm run dev`    | Inicia o servidor em modo desenvolvimento (`tsx watch`, reinicia automaticamente a cada alteração) |
| `npm run build`  | Compila o TypeScript para `dist/` (usado em produção)   |
| `npm start`      | Roda a versão compilada (`node dist/index.js`) — usar em produção após `npm run build` |
| `npm run migrate`| Cria as tabelas do banco manualmente (idempotente — seguro rodar de novo) |

## Deploy em produção

```bash
cd server
npm install --omit=dev
npm run build
npm start
```

Configure as variáveis de ambiente do `.env.example` diretamente no painel da
sua hospedagem (a maioria delas — Railway, Render, VPS com PM2, etc. — permite
definir variáveis de ambiente sem precisar de um arquivo `.env` no servidor).

## Variáveis de ambiente

Veja `.env.example` para a lista completa e comentada. As mais importantes:

- `PORT` — porta em que o servidor escuta (padrão `3001`)
- `CORS_ORIGIN` — lista de origens permitidas, separadas por vírgula
- `API_KEY` — chave usada para proteger a rota `GET /api/submissions`
- `DATABASE_PATH` — caminho do arquivo SQLite

## Estrutura de pastas

```
server/
├── src/
│   ├── config/env.ts          # validação das variáveis de ambiente (Zod)
│   ├── middleware/
│   │   ├── security.ts        # helmet, cors, rate limit, sanitização de input
│   │   ├── validate.ts        # middleware genérico de validação com Zod
│   │   └── errorHandler.ts    # tratamento centralizado de erros
│   ├── routes/                # contact, careers, quote, health, submissions
│   ├── schemas/                # schemas Zod de cada formulário
│   ├── utils/                  # logger (pino) e padronização de respostas JSON
│   ├── database/
│   │   ├── connection.ts       # conexão SQLite (WAL, foreign keys)
│   │   └── migrations.ts       # criação das tabelas
│   └── index.ts                # entry point
├── data/                        # arquivo voltic.db (SQLite) — não versionado
├── .env.example
└── .env                         # não versionado
```

## Rotas da API

Todas as respostas seguem o formato:

```json
{ "success": true, "message": "...", "data": { } }
```
ou, em caso de erro:
```json
{ "success": false, "message": "...", "errors": [ ] }
```

### `POST /api/contact`
Formulário de contato geral. Campos: `nome`, `email`, `telefone?`, `empresa?`,
`assunto`, `mensagem`, `consent` (deve ser `true`).

### `POST /api/careers`
Envio de currículo. Campos: `nome`, `email`, `telefone?`, `cargoDesejado`,
`experiencia`, `linkLinkedin?`, `consent` (deve ser `true`).

### `POST /api/quote`
Pedido de orçamento. Campos: `nome`, `email`, `telefone?`, `empresa?`, `produto`,
`vazao?`, `alturaManometrica?`, `fluido?`, `mensagem`, `consent` (deve ser `true`).

### `GET /api/health`
Verifica se o servidor e o banco estão respondendo. Sem autenticação.

### `GET /api/submissions?key=SUA_API_KEY`
Lista contagem e últimos 10 registros de cada tabela (`contacts`, `careers`,
`quotes`). Protegida pela `API_KEY` definida no `.env`. Retorna `401` sem a
chave correta.

## Segurança implementada

- **Helmet**: CSP restritiva, HSTS, `X-Frame-Options: SAMEORIGIN`,
  `X-Content-Type-Options: nosniff`, `Referrer-Policy`, DNS prefetch
  desabilitado, cross-domain policies bloqueadas.
- **CORS**: só aceita as origens listadas em `CORS_ORIGIN`.
- **Rate limiting**: 100 req/15min globalmente por IP; 5 req/10min por IP nos
  formulários (contact/careers/quote).
- **Sanitização**: remove `< > " ' &` de todo input de texto, aplica `trim()`,
  corta o tamanho de campos conhecidos (nome/email/mensagem) e rejeita
  qualquer corpo de requisição com objetos ou arrays aninhados.
- **Validação**: todo input passa por um schema Zod antes de tocar o banco.
- **LGPD**: os 3 formulários exigem `consent: true` para serem aceitos.

## O que este backend **não** faz (de propósito, por agora)

- Não envia e-mail (nem para o formulário de contato, nem para RH). Os dados
  ficam salvos no SQLite e podem ser consultados via `/api/submissions`.
- Não tem autenticação de usuário/login — a rota `/api/submissions` usa uma
  chave estática simples, suficiente para uma trava básica, mas não deve ser
  tratada como painel administrativo seguro para produção sem reforço.
