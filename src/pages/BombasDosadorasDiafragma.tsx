import { motion } from "motion/react";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionNav } from "../components/SectionNav";
import { ArrowRight, ArrowUpRight, WhatsappLogo, Gauge, Drop, Clock, Shield, Lightning, Circuitry, Gear, ShieldCheck, Eye } from "@phosphor-icons/react";

const specs = [
    { icon: <Gauge size={28} />, label: "Vazão", value: "0,15 a 1.440 l/h" },
    { icon: <Drop size={28} />, label: "Pressão", value: "até 17 bar" },
    { icon: <Clock size={28} />, label: "Serviço", value: "Contínuo (24h)" },
    { icon: <Shield size={28} />, label: "Diafragma", value: "PTFE" },
];

const caracteristicas = [
    { icon: <Lightning size={24} />, titulo: "Acionamentos Versáteis", desc: "Motorizados, eletromagnéticos, pneumáticos, solares e eólicos." },
    { icon: <Clock size={24} />, titulo: "Serviço Contínuo (24h)", desc: "Para a bomba e para o acionamento, mesmo em tempo e em condições climáticas adversas." },
    { icon: <Gauge size={24} />, titulo: "Ajuste de Vazão", desc: "Manual ou eletrônico, por sistema de deslocamento positivo do diafragma, ou eletronicamente via alteração de pulsações (frequências por minuto)." },
    { icon: <Circuitry size={24} />, titulo: "Regulagem Automática", desc: "Possibilidade de regulagem automática adicionando controladores eletrônicos opcionais de nossa fabricação." },
    { icon: <Gear size={24} />, titulo: "Cabeçote e Válvulas", desc: "Em PVDF, PP, PVC ou INOX AISI 316." },
    { icon: <ShieldCheck size={24} />, titulo: "Diafragma e Vedações", desc: "Diafragma em elastômero especial revestido em PTFE. Vedações em EPDM, FKM (Viton) ou PTFE. Conexões para mangueira e/ou rosqueadas." },
];

const detalhes = [
    { titulo: "Leitura de Vazão Direta", desc: "Permite leitura de vazão em porcentagem da vazão total, entre 0 e 99%, com resolução de 1%." },
    { titulo: "Vazão Mínima Recomendada", desc: "Com ajuste apenas manual, recomenda-se ajuste mínimo de 10% da vazão máxima. Com controladores eletrônicos, é possível chegar até 0,1% da vazão máxima." },
];

export default function BombasDosadorasDiafragma() {
    return (
        <div className="bg-brand-bg text-brand-text pt-16">
            {/* Hero */}
            <section className="py-16 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-6"
                    >
                        <Breadcrumb current="Bombas Dosadoras de Diafragma" />
                        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20 w-fit">
                            Linha de Produtos // Bombas Dosadoras de Diafragma
                        </div>
                        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter leading-[1.05]">
                            Bombas Dosadoras de Diafragma
                        </h1>
                        <p className="text-base text-brand-muted max-w-[60ch] leading-relaxed">
                            Altamente confiáveis e robustas, ideais para produtos químicos agressivos (ácidos ou alcalinos), projetadas para a dosagem de qualquer tipo de fluido líquido de baixa viscosidade e sem sólidos.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a
                                href="#especificacoes"
                                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-hover active:scale-[0.98] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
                            >
                                Ver Especificações
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="https://wa.me/554733002250"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-card hover:bg-zinc-800 border border-brand-border active:scale-[0.98] text-brand-text font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
                            >
                                Solicitar Dimensionamento
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <SectionNav items={[
                { id: "sobre", label: "Sobre" },
                { id: "caracteristicas", label: "Características" },
                { id: "detalhes", label: "Detalhes Técnicos" },
            ]} />

            {/* Sobre + Especificações */}
            <section id="sobre" className="py-20 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Sobre as Bombas Dosadoras
                        </span>
                        <h2 className="font-heading text-3xl font-extrabold tracking-tighter mt-4 mb-6 [word-spacing:0.2em]">
                            Confiabilidade para produtos químicos agressivos
                        </h2>
                        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                            <p>
                                Nossas bombas dosadoras de diafragma são altamente confiáveis e robustas, ideais para produtos químicos agressivos (ácidos ou alcalinos), projetadas para a dosagem de qualquer tipo de fluido líquido de baixa viscosidade e sem sólidos.
                            </p>
                            <p>
                                Possuímos uma gama ampla de configurações do sistema de bombeio, com materiais nobres em contato com o fluido para prolongar ao máximo a vida útil do sistema de bombeio e da bomba.
                            </p>
                            <p>
                                Modelos de diafragma são ideais para contrapressão que não ultrapasse <strong className="text-black">17 bar</strong>. Possuímos diversos modelos com amplo range de vazão, de <strong className="text-black">0,15 l/h a 1.440 l/h</strong>.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        id="especificacoes"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white border border-gray-200 rounded-lg p-6"
                    >
                        <h3 className="font-heading text-sm font-bold uppercase tracking-wider mb-6 text-brand-blue">
                            Especificações Técnicas
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {specs.map((spec, i) => (
                                <div key={i} className="flex flex-col gap-2 p-4 bg-white border border-gray-200 rounded-lg">
                                    <div className="text-brand-blue">{spec.icon}</div>
                                    <span className="text-[10px] uppercase tracking-wider text-gray-600 font-mono">{spec.label}</span>
                                    <span className="text-sm font-heading font-bold">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Características */}
            <section id="caracteristicas" className="py-20 px-6 bg-white text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Características e Opcionais
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4 [word-spacing:0.2em]">
                            Projetadas para máxima performance
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[60ch] mx-auto leading-relaxed">
                            Diversas opções de acionamento, ajustes e materiais para atender as mais exigentes aplicações industriais.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {caracteristicas.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-blue/30 transition-colors"
                            >
                                <div className="text-brand-blue mb-3">{item.icon}</div>
                                <h3 className="font-heading text-sm font-bold mb-2 leading-tight">{item.titulo}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detalhes Técnicos */}
            <section id="detalhes" className="py-20 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Detalhes Técnicos
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4 [word-spacing:0.2em]">
                            Controle preciso de dosagem
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {detalhes.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-blue/30 transition-colors"
                            >
                                <Eye size={24} className="text-brand-blue mb-3" />
                                <h3 className="font-heading text-sm font-bold mb-2 leading-tight">{item.titulo}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 px-6 bg-white border-t border-gray-200 text-black">
                <div className="max-w-[800px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter [word-spacing:0.2em]">
                            Precisa de uma solução sob medida?
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[50ch] leading-relaxed">
                            Entre em contato com nossa equipe técnica para dimensionar a bomba ideal para sua aplicação.
                        </p>
                        <a
                            href="https://wa.me/554733002250"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-hover active:scale-[0.98] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
                        >
                            <WhatsappLogo size={16} />
                            Fale Conosco
                            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
