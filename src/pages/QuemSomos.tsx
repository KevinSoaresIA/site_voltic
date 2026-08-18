import { Link } from "react-router-dom";
import { motion } from "motion/react";
import volticEmpresaLocal from "../assets/images/voltic_empresa_local.webp";
import apertoDeMaoNegociacao from "../assets/images/aperto_de_mão_negociacao.avif";
import {
  ArrowRight,
  Target,
  Eye,
  Heartbeat,
  ShieldCheck,
  Gear,
  Wrench,
  Medal,
  Truck,
  ArrowUpRight,
} from "@phosphor-icons/react";

const valores = [
  {
    titulo: "Qualidade Certificada",
    desc: "Certificação 3-A (padrão 02-11, certificado nº 1004) para linhas sanitárias. Materiais e elastômeros em conformidade com requisitos FDA. Relatórios de teste de matéria-prima disponíveis sob demanda.",
    icon: <ShieldCheck size={24} />,
  },
  {
    titulo: "Engenharia Aplicada",
    desc: "Equipe técnica com décadas de experiência em bombeamento industrial, capaz de desenvolver soluções para os cenários mais complexos.",
    icon: <Gear size={24} />,
  },
  {
    titulo: "Compromisso Total",
    desc: "Acompanhamento completo do projeto, desde a especificação técnica até o pós-venda, com suporte ágil e manutenção preventiva.",
    icon: <Heartbeat size={24} />,
  },
];

const diferenciais = [
  {
    titulo: "Fabricação Nacional",
    desc: "Produção própria no Brasil com controle total de qualidade e prazo de entrega.",
    icon: <Medal size={20} />,
  },
  {
    titulo: "Projetos Customizados",
    desc: "Desenvolvimento de bombas sob medida para aplicações específicas de cada cliente.",
    icon: <Gear size={20} />,
  },
  {
    titulo: "Manutenção Especializada",
    desc: "Manutenção preventiva e corretiva com equipe técnica especializada, conforme disponibilidade e localização da planta.",
    icon: <Wrench size={20} />,
  },
  {
    titulo: "Logística de Peças e Componentes",
    desc: "Envio de peças de reposição com acompanhamento da equipe Voltic, utilizando transportadoras parceiras para garantir prazos confiáveis.",
    icon: <Truck size={20} />,
  },
];

export default function QuemSomos() {
  return (
    <div className="bg-brand-bg min-h-screen text-brand-text">
      {/* 1. HERO */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden pt-12 md:pt-16 pb-20 px-6 border-b border-brand-border">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-blue/5 rounded-full filter blur-[80px] pointer-events-none"></div>

        <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20"
            >
              Institucional // Quem Somos
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-gradient"
            >
              Engenharia de bombeamento com DNA brasileiro.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-brand-muted leading-relaxed max-w-[55ch]"
            >
              A Voltic é uma empresa nacional especializada no desenvolvimento e fabricação de bombas helicoidais
              industriais. Unimos engenharia de precisão, materiais de alta resistência e conhecimento profundo
              dos processos industriais para entregar soluções de bombeamento que funcionam.
            </motion.p>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[400px] aspect-[4/3] rounded-lg border border-brand-border bg-brand-card/50 flex flex-col items-center justify-center p-8 overflow-hidden group hover:border-brand-blue-bright/30 transition-colors duration-300"
            >
              <img src={volticEmpresaLocal} alt="Sede Industrial Voltic - Rio dos Cedros, SC" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-transparent opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. HISTÓRIA */}
      <section className="py-24 px-6 relative overflow-hidden bg-white border-b border-gray-200 text-black">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/3] rounded-lg border border-gray-200 bg-white flex flex-col items-center justify-center p-8 overflow-hidden group hover:border-brand-blue/30 transition-colors duration-300"
            >
              <img src={apertoDeMaoNegociacao} alt="Voltic - relacionamento e negociação com clientes" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-transparent opacity-50"></div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter leading-[1.05] text-black"
            >
              Engenharia aplicada às necessidades da indústria brasileira.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-gray-600 leading-relaxed"
            >
              Fundada em 2024 com o propósito de suprir a demanda nacional por bombas helicoidais de alta
              confiabilidade, a Voltic reúne uma equipe técnica com experiência acumulada em engenharia de
              bombeamento industrial. Nossos equipamentos são desenvolvidos para operar em refinarias, fábricas
              de papel, estações de tratamento, usinas de açúcar e álcool e plantas químicas em todo o país.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-gray-600 leading-relaxed"
            >
              Nosso diferencial é a engenharia aplicada: não vendemos catálogo, vendemos soluções.
              Cada bomba que sai da nossa fábrica é projetada ou adaptada para a realidade do cliente — o fluido,
              a temperatura, a pressão, o ambiente. É assim que trabalhamos e é assim que continuaremos.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 3. MISSÃO, VISÃO E VALORES */}
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
              Pilares da Empresa
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-black"
            >
              O que nos move.
            </motion.h2>
          </div>

          {/* Missão e Visão */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 bg-white border border-gray-200 rounded-lg hover:border-brand-blue/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-brand-blue/10 rounded border border-brand-blue/20 text-brand-blue">
                  <Target size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold tracking-tight text-black">Missão</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Fornecer soluções de bombeamento industrial de alta performance, desenvolvidas com engenharia
                nacional e materiais de qualidade superior, garantindo eficiência, durabilidade e suporte técnico
                contínuo para indústrias em todo o Brasil.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 bg-white border border-gray-200 rounded-lg hover:border-brand-blue/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-brand-blue/10 rounded border border-brand-blue/20 text-brand-blue">
                  <Eye size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold tracking-tight text-black">Visão</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ser referência nacional em bombas helicoidais industriais, reconhecida pela inovação em projetos
                customizados, excelência em manufatura e capacidade de resolver os desafios de bombeamento mais
                complexos do setor industrial brasileiro.
              </p>
            </motion.div>
          </div>

          {/* Valores */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {valores.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-blue/30 transition-all duration-300"
              >
                <div className="p-3 bg-white rounded border border-gray-200 text-brand-blue group-hover:bg-brand-blue/10 group-hover:border-brand-blue/30 transition-all duration-300 w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="font-heading text-base font-bold tracking-tight text-black mb-2 group-hover:text-brand-blue transition-colors">
                  {item.titulo}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DIFERENCIAIS */}
      <section className="py-24 px-6 relative overflow-hidden bg-white border-b border-gray-200 text-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter leading-[1.05] text-black mb-4"
              >
                Por que a indústria escolhe Voltic.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm text-gray-600 leading-relaxed"
              >
                Não somos revendedores. Somos fabricantes. Isso significa controle total de qualidade,
                capacidade de customização e suporte direto de quem projetou o equipamento.
              </motion.p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-4">
              {diferenciais.map((item, index) => (
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

      {/* 6. CTA FINAL */}
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
            Vamos resolver seu desafio de bombeamento?
          </motion.h2>
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
              Falar com um especialista
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/bombahelicoidal"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-gray-100 border border-gray-200 active:scale-[0.98] text-black font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
            >
              Conhecer Produtos
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}