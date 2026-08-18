import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Factory,
  Wrench,
  Gear,
  GraduationCap,
  ShieldCheck,
  Clock,
  ClipboardText,
  CheckCircle,
  Toolbox,
  Lightning,
} from "@phosphor-icons/react";

const servicos = [
  {
    titulo: "Fabricação de Bombas",
    desc: "Produção de bombas helicoidais sob medida, com materiais selecionados conforme o fluido, temperatura e pressão da aplicação do cliente.",
    icon: <Factory size={24} />,
    features: [
      "Rotor usinado a partir de barra maciça de aço liga",
      "Estator em NBR, EPDM, Poliuretano ou Viton",
      "Carcaça em ferro fundido, aço SAE ou inox 304/316",
      "Vedação mecânica de alta performance",
    ],
  },
  {
    titulo: "Manutenção Preventiva e Corretiva",
    desc: "Equipe de campo pronta para atendimentos programados e de emergência em todo o território nacional, com peças de reposição originais. Avaliamos bombas helicoidais Voltic e de outras marcas, conforme modelo, condição e disponibilidade de peças.",
    icon: <Wrench size={24} />,
    features: [
      "Inspeção técnica e diagnóstico de desgaste",
      "Troca de rotor, estator e vedação mecânica",
      "Plano de manutenção preventiva personalizado",
      "Atendimento de urgência para paradas críticas",
    ],
  },
  {
    titulo: "Assistência Técnica Especializada",
    desc: "Suporte técnico direto da fábrica, com engenheiros que conhecem cada componente do equipamento e o processo industrial do cliente.",
    icon: <Gear size={24} />,
    features: [
      "Consultoria de engenharia para otimização",
      "Análise de falhas e recomendações técnicas",
      "Acompanhamento de performance pós-instalação",
      "Suporte remoto e on-site",
    ],
  },
  {
    titulo: "Start Up e Treinamentos",
    desc: "Comissionamento completo do equipamento na planta do cliente e capacitação da equipe operacional para operação e manutenção.",
    icon: <GraduationCap size={24} />,
    features: [
      "Instalação e comissionamento no local",
      "Treinamento de operação e segurança",
      "Capacitação para manutenção predial",
      "Documentação técnica completa entregue",
    ],
  },
];

const processo = [
  {
    passo: "01",
    titulo: "Diagnóstico Técnico",
    desc: "Nossa engenharia analisa o fluido, vazão, pressão, temperatura e condições de operação para especificar o equipamento ideal.",
    icon: <ClipboardText size={20} />,
  },
  {
    passo: "02",
    titulo: "Fabricação",
    desc: "Produção na nossa planta com controle de qualidade em cada etapa, desde a matéria-prima até os testes finais.",
    icon: <Factory size={20} />,
  },
  {
    passo: "03",
    titulo: "Instalação e Start Up",
    desc: "Comissionamento no local, integração com o sistema existente e validação de performance hidráulica.",
    icon: <Lightning size={20} />,
  },
  {
    passo: "04",
    titulo: "Suporte Contínuo",
    desc: "Plano de manutenção preventiva, peças de reposição e suporte técnico durante toda a vida útil do equipamento.",
    icon: <ShieldCheck size={20} />,
  },
];

const garantias = [
  { titulo: "Garantia de Fábrica", desc: "Garantia conforme as condições comerciais e de operação especificadas na proposta técnica.", icon: <ShieldCheck size={20} /> },
  { titulo: "Peças Originais", desc: "Reposição com componentes fabricados pela Voltic, garantindo compatibilidade e desempenho conforme especificação original.", icon: <Toolbox size={20} /> },
  { titulo: "Resposta Rápida", desc: "Atendimento técnico em até 24h para emergências em plantas críticas.", icon: <Clock size={20} /> },
  { titulo: "Equipe Especializada", desc: "Engenheiros e técnicos com experiência comprovada em bombeamento industrial.", icon: <Gear size={20} /> },
];

export default function Servicos() {
  return (
    <div className="bg-brand-bg min-h-screen text-brand-text">
      {/* 1. HERO */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden pt-12 md:pt-16 pb-20 px-6 border-b border-brand-border">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-blue/5 rounded-full filter blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20"
            >
              Serviços // Suporte Completo
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-gradient"
            >
              Do projeto ao pós-venda.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-brand-muted leading-relaxed max-w-[55ch]"
            >
              Não vendemos apenas equipamentos — entregamos soluções completas de bombeamento industrial.
              Da fabricação sob medida à manutenção preventiva, nossa equipe acompanha cada etapa para garantir
              que sua operação nunca pare.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <Link
                to="/contato"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-hover active:scale-[0.98] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
              >
                Solicitar avaliação técnica
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/bombahelicoidal"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-card hover:bg-zinc-800 border border-brand-border active:scale-[0.98] text-brand-text font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
              >
                Ver Produtos
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[400px] aspect-square rounded-lg border border-brand-border bg-brand-card/50 flex flex-col items-center justify-center p-8 overflow-hidden group hover:border-brand-blue-bright/30 transition-colors duration-300"
            >
              {/* ASSET: servicos-hero.jpg */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-transparent opacity-50"></div>
              <div className="absolute top-4 left-4 font-mono text-[9px] text-brand-muted/40 uppercase tracking-widest">
                VOLTIC.SERVICE // FULL-CYCLE
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-[9px] text-brand-muted/40 uppercase tracking-widest">
                Retorno inicial em até 24 horas úteis
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded border border-brand-muted/20 group-hover:border-brand-blue-bright/30 transition-colors duration-300">
                  <Factory size={20} className="text-brand-muted/50 group-hover:text-brand-blue-bright transition-colors" />
                </div>
                <div className="p-3 rounded border border-brand-muted/20 group-hover:border-brand-blue-bright/30 transition-colors duration-300">
                  <Wrench size={20} className="text-brand-muted/50 group-hover:text-brand-blue-bright transition-colors" />
                </div>
                <div className="p-3 rounded border border-brand-muted/20 group-hover:border-brand-blue-bright/30 transition-colors duration-300">
                  <Gear size={20} className="text-brand-muted/50 group-hover:text-brand-blue-bright transition-colors" />
                </div>
                <div className="p-3 rounded border border-brand-muted/20 group-hover:border-brand-blue-bright/30 transition-colors duration-300">
                  <GraduationCap size={20} className="text-brand-muted/50 group-hover:text-brand-blue-bright transition-colors" />
                </div>
              </div>
              <span className="font-heading text-xs font-bold tracking-wider text-brand-text uppercase text-center block">
                [ 4 Serviços Integrados ]
              </span>
              <span className="font-mono text-[10px] text-brand-muted mt-2 text-center block max-w-[250px]">
                Ciclo completo de suporte: fabricação, manutenção, assistência e treinamento.
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. GRID DE SERVIÇOS */}
      <section className="py-24 px-6 relative overflow-hidden border-b border-gray-200 bg-white text-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue"
            >
              Nossos Serviços
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-black"
            >
              Suporte em cada etapa.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicos.map((servico, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group p-8 bg-white border border-gray-200 rounded-lg hover:border-brand-blue/30 transition-all duration-300 flex flex-col gap-5"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded border border-gray-200 text-brand-blue group-hover:bg-brand-blue/10 group-hover:border-brand-blue/30 transition-all duration-300 shrink-0">
                    {servico.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-black group-hover:text-brand-blue transition-colors">
                    {servico.titulo}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{servico.desc}</p>
                <ul className="flex flex-col gap-2.5 mt-auto">
                  {servico.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-black">
                      <CheckCircle size={16} className="text-brand-blue shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESSO DE ATENDIMENTO */}
      <section className="py-24 px-6 relative overflow-hidden border-b border-gray-200 bg-white text-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue"
            >
              Como Trabalhamos
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-black"
            >
              Processo em 4 etapas.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-blue/30 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 font-mono text-3xl font-extrabold text-gray-600/10 group-hover:text-brand-blue/20 transition-colors">
                  {item.passo}
                </div>
                <div className="p-3 bg-brand-blue/10 rounded border border-brand-blue/20 text-brand-blue w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="font-heading text-base font-bold tracking-tight text-black mb-2 group-hover:text-brand-blue transition-colors">
                  {item.titulo}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to="/contato"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-hover active:scale-[0.98] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
              >
                Quero iniciar um diagnóstico técnico
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. GARANTIAS */}
      <section className="py-24 px-6 relative overflow-hidden bg-white border-b border-gray-200 text-black">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-blue/3 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter leading-[1.05] text-black mb-4"
              >
                O que você pode cobrar da gente.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm text-gray-600 leading-relaxed"
              >
                Quando o equipamento para, a produção para. Por isso nosso suporte é estruturado para responder
                rápido e resolver de vez — com peças originais, equipe especializada e garantia de fábrica.
              </motion.p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {garantias.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex gap-5 p-5 bg-white border border-gray-200 rounded-lg hover:border-brand-blue/30 transition-all duration-300"
                >
                  <div className="p-3 bg-white rounded border border-gray-200 text-brand-blue group-hover:bg-brand-blue/10 group-hover:border-brand-blue/30 transition-all duration-300 shrink-0 h-fit">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading text-base font-bold tracking-tight text-black group-hover:text-brand-blue transition-colors">
                      {item.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-24 px-6 relative overflow-hidden bg-white text-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/3 rounded-full filter blur-[150px] pointer-events-none"></div>

        <div className="max-w-[800px] mx-auto relative z-10 flex flex-col items-center text-center gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter leading-[1.05] text-black"
          >
            Seu equipamento precisa de suporte?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base text-gray-600 leading-relaxed max-w-[55ch]"
          >
            Entre em contato com nossa equipe técnica. Atendimento de emergência para paradas críticas
            e consultoria de engenharia para novos projetos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <Link
              to="/contato"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-hover active:scale-[0.98] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
            >
              Falar com a engenharia
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/trabalheconosco"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-gray-100 border border-gray-200 active:scale-[0.98] text-black font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
            >
              Trabalhe Conosco
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}