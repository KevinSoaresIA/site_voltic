import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Gear,
  Package,
  Recycle,
  Gauge,
  Wrench,
  Ruler,
  Drop,
  Flask,
  Cube,
  ShieldCheck,
  CheckCircle,
} from "@phosphor-icons/react";

const produtos = [
  {
    nome: "Bomba Helicoidal",
    desc: "Design inovador e materiais de alta qualidade para desempenho excepcional em diversas indústrias.",
    icon: <Gear size={24} />,
    rota: "/produtos/bomba-helicoidal",
  },
  {
    nome: "Peças de Reposição",
    desc: "Rotores, estatores, selos mecânicos, cardans e demais componentes com a mesma precisão de origem.",
    icon: <Package size={24} />,
    rota: "/produtos/pecas-reposicao",
  },
  {
    nome: "Série VBC — Bombas Centrífugas",
    desc: "Opção versátil e econômica. Rotor aberto, fluxo radial e carcaça em voluta com sucção no centro.",
    icon: <Recycle size={24} />,
    rota: "/produtos/serie-vbc",
  },
  {
    nome: "Série VBF — Bombas de Fuso",
    desc: "Bombeamento suave graças ao fluxo constante e sem pulsações.",
    icon: <Gauge size={24} />,
    rota: "/produtos/serie-vbf",
  },
  {
    nome: "Série VBL — Bombas de Lóbulos",
    desc: "Fácil manutenção e operação simples, ideal para fluidos pastosos e de alta viscosidade.",
    icon: <Wrench size={24} />,
    rota: "/produtos/serie-vbl",
  },
  {
    nome: "Série VBP — Bombas de Pistão Circunferencial",
    desc: "Fácil manutenção e baixo ruído, ideal para fluidos de baixa e alta viscosidade.",
    icon: <Ruler size={24} />,
    rota: "/produtos/serie-vbp",
  },
  {
    nome: "Série VET — Esvaziador de Tambor",
    desc: "Esvaziamento de tambores com produtos de alta ou baixa viscosidade, com ou sem sólidos.",
    icon: <Drop size={24} />,
    rota: "/produtos/serie-vet",
  },
  {
    nome: "Série VSM — Sistemas Misturadores",
    desc: "Mistura em linha com três modelos especializados para diferentes aplicações e viscosidades.",
    icon: <Flask size={24} />,
    rota: "/produtos/serie-vsm",
  },
  {
    nome: "Skids de Dosagem",
    desc: "Sistema completo PLUG & PLAY, com bomba, painel elétrico, tubulações, válvulas e filtros.",
    icon: <Cube size={24} />,
    rota: "/produtos/skids-dosagem",
  },
  {
    nome: "Bombas Peristálticas",
    desc: "Transferem fluidos por compressão da mangueira, garantindo pureza e evitando contaminações.",
    icon: <ShieldCheck size={24} />,
    rota: "/produtos/bombas-peristalticas",
  },
  {
    nome: "Bombas Dosadoras de Pistão",
    desc: "Extremamente robustas e confiáveis, ideais para aditivos químicos compatíveis com INOX AISI 316L.",
    icon: <CheckCircle size={24} />,
    rota: "/produtos/bombas-dosadoras-pistao",
  },
  {
    nome: "Bombas Dosadoras de Diafragma",
    desc: "Robustas para produtos químicos agressivos, dosando fluidos de baixa viscosidade e sem sólidos.",
    icon: <Gear size={24} />,
    rota: "/produtos/bombas-dosadoras-diafragma",
  },
];

export default function Produtos() {
  return (
    <div className="bg-brand-bg min-h-screen text-brand-text pt-16">
      {/* Hero */}
      <section className="py-16 px-6 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20 w-fit mb-6"
          >
            Catálogo // Linha Completa
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter leading-[1.05] max-w-[18ch]"
          >
            Produtos Voltic
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base text-brand-muted max-w-[60ch] leading-relaxed mt-4"
          >
            Da bomba helicoidal de fabricação própria aos sistemas completos de dosagem — conheça toda a linha
            de equipamentos e peças fabricados pela Voltic para aplicações industriais.
          </motion.p>
        </div>
      </section>

      {/* Grid de produtos */}
      <section className="py-16 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {produtos.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={item.rota}
                className="group flex flex-col h-full p-6 bg-brand-card/40 border border-brand-border rounded-lg hover:border-brand-blue/30 hover:bg-brand-card/70 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 bg-brand-card rounded border border-brand-border text-brand-blue group-hover:bg-brand-blue/10 group-hover:border-brand-blue/30 transition-all duration-300">
                    {item.icon}
                  </div>
                  <ArrowUpRight size={18} className="text-brand-muted/40 group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="font-heading text-base font-bold tracking-tight mb-2 leading-snug">
                  {item.nome}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-white border-t border-gray-200 text-black">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter">
            Não sabe qual equipamento escolher?
          </h2>
          <p className="text-sm text-gray-600 max-w-[50ch] leading-relaxed">
            Fale com nossa equipe de engenharia e receba uma recomendação técnica com base no seu fluido, vazão e aplicação.
          </p>
          <Link
            to="/contato"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-hover active:scale-[0.98] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
          >
            Falar com Engenharia
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
