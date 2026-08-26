# Contexto do Projeto — Site Voltic Bombas

> Arquivo de continuidade para próximas sessões. Última atualização: 25/08/2026.

## O que é o projeto

Site institucional/marketing da **Voltic Bombas** (fabricante nacional de bombas helicoidais industriais, sediada em Rio dos Cedros/SC). React 19 + Vite + Tailwind CSS v4, SPA com `react-router-dom` v7, sem backend (formulários enviam via deep link `wa.me` do WhatsApp, sem servidor próprio — há um `server.archived/` no repo que foi descontinuado).

- Repo local: `e:\site_voltic`, branch `main`, deploy provável via Vercel (`vercel.json` presente) com fallback preparado para hospedagem Apache (`public/.htaccess`, ver commit `e8edb1a`).
- `npm run dev` (Vite), `npm run build` (`tsc -b && vite build`), `npm run lint` (oxlint). Sem suíte de testes automatizados.

## Stack e convenções de design

- **Tailwind v4** via `@import "tailwindcss"` em [src/index.css](../src/index.css) — **não há `tailwind.config.js`**, os tokens de tema vivem no bloco `@theme` desse arquivo.
- Tokens de marca: `--color-brand-bg: #0A0A0A` (fundo escuro), `--color-brand-card: #1A1A1A`, `--color-brand-text`, `--color-brand-muted`, `--color-brand-blue: #102E45` (navy escuro), `--color-brand-blue-bright: #3B82F6` (azul de destaque/CTA), `--color-brand-border`.
- Fontes: Cabinet Grotesk (`font-heading`), Inter (`font-sans`, corpo), JetBrains Mono (`font-mono`, labels/eyebrows), League Spartan + Archivo Black (só no hero da Home).
- `motion/react` (sucessor do Framer Motion) para animações `whileInView`/`initial`/`animate` — padrão consistente em todas as seções.
- `@phosphor-icons/react` para ícones.
- **Assinatura visual do site**: alternância de seções fundo-escuro/fundo-branco em sequência vertical — é proposital, não é para "corrigir".
- Paleta foi migrada de laranja para azul recentemente (ver commits `1a3b20a`, `f6a3edf`, `967b619` no histórico) — se algo parecer usar laranja/orange, é resíduo a corrigir, não o padrão atual.

## Estrutura de páginas

- [src/App.tsx](../src/App.tsx) define as rotas. [src/components/Layout.tsx](../src/components/Layout.tsx) envolve toda página com Navbar fixa + `<main>` + Footer + WhatsAppButton flutuante.
- **Um template dominante se repete em 12 páginas de produto** (`SerieVBC/VBF/VBL/VBP/VET/VSM`, `BombaHelicoidal`, `PecasReposicao`, `BombasPeristalticas`, `BombasDosadorasPistao`, `BombasDosadorasDiafragma`, `SkidsDosagem`, todas em `src/pages/`): Breadcrumb → eyebrow → H1 → intro → CTA duplo → `<SectionNav>` (sub-nav sticky com pills) → seções alternadas claro/escuro com grid de cards → CTA final. Ao alterar uma, o mesmo ajuste normalmente vale para as outras 11.
- Páginas institucionais/marketing com padrões próprios: `Home`, `QuemSomos`, `Servicos`, `Contato` (tem formulário lead-gen via WhatsApp), `TrabalheConosco` (idem, candidaturas), `Produtos` (catálogo/índice), `FAQ` (accordion), `Privacidade` (texto legal simples, a página mais simples do site).
- Componentes globais: `Navbar`, `Footer`, `SectionNav`, `Breadcrumb`, `WhatsAppButton` (botão flutuante fixo `bottom-6 right-6`).

## Trabalho feito nesta sessão: remodelação mobile completa

**Pedido do usuário**: não só ajustar, mas remodelar o UI/UX/design da versão mobile do zero, já que a maioria do tráfego é mobile.

**Processo**: explorei o código, rodei um agente de planejamento (Plan) para desenhar a proposta em detalhe, apresentei ao usuário 3 decisões via pergunta direta (todas aceitas com a opção recomendada) e executei o plano completo. Plano salvo em `C:\Users\user.MACHINE-1\.claude\plans\soft-weaving-cascade.md` (fora do repo, pasta de plans do Claude Code local).

### Decisões validadas com o usuário
1. **Footer**: só compactar espaçamento no mobile — **sem** accordion/retrátil. Todos os 5 blocos (Marca, Navegação, Produtos, Fale Conosco, Localização) continuam sempre visíveis.
2. **Hero da Home no mobile**: manter o conceito de texto sobre a foto full-bleed (não trocar para "foto em cima, texto embaixo em fundo sólido").
3. **Execução**: tudo em uma leva só, sem pausar para revisão entre blocos.

### O que foi alterado (25 arquivos, tudo já commitado — ver `git log`, commit `e8edb1a`)

1. **Hero da Home** ([src/pages/Home.tsx](../src/pages/Home.tsx)) — o item principal. Problema original: blocos com posicionamento `absolute` e offsets fixos em px sobre a foto (`top-24`, `bottom-52 right-8`), título em `whitespace-nowrap` num tamanho pequeno — risco real de sobreposição em telas estreitas/baixas. Solução: duas árvores de markup (`hidden md:block` para desktop, mantendo 100% o layout original; `md:hidden` para mobile) — no mobile o conteúdo passou a fluxo normal (`flex flex-col justify-end`), título quebra naturalmente sem `whitespace-nowrap`, botões empilham em largura total (`w-full`) logo abaixo do texto. **Desktop (`md:` e acima) permanece visualmente idêntico ao original.**
2. **Componentes globais**:
   - `Navbar.tsx` — padding lateral mobile simetrizado (`pl-8` assimétrico → `px-5 sm:px-6`), alvos de toque do menu mobile ampliados para ≥44px (`py-2.5`→`py-3`, submenu Produtos `py-2`→`py-2.5`).
   - `Footer.tsx` — só compactação de espaçamento (`gap-10`→`gap-8`, `pt-16 pb-8`→`pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8`, etc.) — nenhum link removido.
   - `SectionNav.tsx`, `Breadcrumb.tsx` — ajustes finos de padding/toque.
3. **Template das 12 páginas de produto** — padrão mecânico aplicado em todas: `py-16 px-6`→`py-10 sm:py-12 md:py-16 px-6` (hero), `py-20 px-6`→`py-12 sm:py-16 md:py-20 px-6` (seções), `mb-12`→`mb-8 md:mb-12`, `gap-12 items-start`→`gap-8 md:gap-12 items-start` (bloco Sobre+Especificações), e nos botões duplos do hero um truque de Tailwind arbitrary variant para full-width no mobile sem tocar cada botão: `flex flex-col sm:flex-row gap-4 mt-2 [&>a]:w-full sm:[&>a]:w-auto`.
   - **Exceção/bug real corrigido**: [src/pages/BombaHelicoidal.tsx](../src/pages/BombaHelicoidal.tsx) tinha uma imagem de tabela (`bomba-helicoidal-tabela.png`) que encolhia com `w-full` até ficar ilegível no mobile. Trocado `overflow-hidden` por `overflow-x-auto` e a imagem ganhou `min-w-[640px]` — agora dá para ler com scroll horizontal em vez de texto minúsculo.
4. **Páginas institucionais** (`Produtos`, `QuemSomos`, `Servicos`, `Contato`, `TrabalheConosco`, `FAQ`, `Privacidade`) — mesma passada de espaçamento/tipografia (`py-24`→`py-14 sm:py-16 md:py-24`, `gap-16`→`gap-8 md:gap-12 lg:gap-16`, etc.). Formulários de `Contato` e `TrabalheConosco` já estavam bem construídos para mobile (grid responsivo, campos ≥44px) — não foram redesenhados, só receberam a passada de espaçamento.

### Verificação feita
- `npm run build` passou limpo (typecheck + build).
- **Não existe skill de "run" configurada neste projeto** (nem `chromium-cli` disponível no ambiente) — para conferir visualmente, foi necessário instalar o Playwright via `npx` num diretório temporário e escrever um script Node ad-hoc para navegar e tirar screenshots. Funcionou, mas se verificações visuais forem recorrentes, vale rodar `/run-skill-generator` uma vez para automatizar isso como skill do projeto.
- Screenshots conferidos em 375×667, 390×844 e paisagem 690×412: hero sem sobreposição, menu mobile abrindo corretamente, footer compacto e legível, tabela do BombaHelicoidal com scroll horizontal legível.

## Pendências / coisas a saber para a próxima sessão

- **`src/assets/images/image_base_home.png` está untracked no git** (não foi commitado, não está referenciado em nenhum lugar do código). Provavelmente um asset que o usuário adicionou manualmente e ainda não integrou — vale perguntar a ele o que fazer com esse arquivo antes de descartar ou usar.
- O commit que consolidou a remodelação mobile (`e8edb1a`) tem uma mensagem que descreve o trabalho como "pequenos refinos" de responsividade — na prática foi uma remodelação completa das 19 páginas + 5 componentes para mobile. Vale considerar isso ao ler o histórico de commits (a mensagem subestima o escopo real da mudança).
- Não foi feita nenhuma alteração de conteúdo/copy, apenas layout/espaçamento/tipografia responsiva — nenhum texto, link ou dado de contato foi alterado.
- Regras que vieram do plano e continuam valendo se for preciso mexer em mais páginas/componentes no futuro: nunca forçar grid de cards a menos de 1 coluna no mobile; manter alvos de toque ≥44px; não desmontar a alternância de seções escuro/claro; preferir classes responsivas Tailwind (`sm:`/`md:`/`lg:`) a JS de breakpoint — a única exceção aceita foi o hero da Home, por mudar o próprio paradigma de posicionamento (absoluto → fluxo).
